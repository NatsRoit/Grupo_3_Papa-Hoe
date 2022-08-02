const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

let users =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/usuarios.json')));


const user = {
    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/user/login'),{users});
    },
    register: function(req,res){
        res.render(path.resolve(__dirname, '../views/user/register'));
    },
    create: function (req, res){
        let nuevoUsuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            role: 1,
            usuario: req.body.usuario,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            departamento: req.body.departamento,
            localidad: req.body.localidad,
            codigoPostal: req.body.codigoPostal,
            avatar:  req.file ? req.file.filename : ''
        }
        users.push(nuevoUsuario);

        let usersJSON = JSON.stringify(users, null, 2);

        fs.writeFileSync(path.resolve(__dirname,'../database/usuarios.json'), usersJSON);

        res.redirect('/user/login')
    },
    ingresar: (req,res) =>{
  
          let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')));
          let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
          //return res.send(usuarioLogueado);
          //Como podemos modificar nuestros req.body
          delete usuarioLogueado.password;
          req.session.usuario = usuarioLogueado;  //Guardar del lado del servidor
          //Aquí voy a guardar las cookies del usuario que se loguea
          if(req.body.keepSession){
            res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
          }
          return res.redirect('/');   //Aquí ustedes mandan al usuario para donde quieran (Perfil- home - a donde deseen)

      },
      logout: (req,res) =>{
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
      }
};

module.exports = user;