const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');


//Aquí requiero a la función que trae los errores desde la ruta, de llegar a existir
const { validationResult } = require('express-validator');

let archivoUsers =  fs.readFileSync(path.resolve(__dirname,'../database/usuarios.json'), {encoding: 'utf-8'});
let users;
  if (archivoUsers == "") {
    users = [];
  } else {
    users = JSON.parse(archivoUsers);
  };



const userController = {

    profile: function(req,res){
        let idUsuario = req.params.id;  //7
        let showUser = users.find(item => item.id == idUsuario);
        res.render(path.resolve(__dirname, '../views/user/profile'),{user: showUser});
    },

    loginView: function(req,res){
        res.render(path.resolve(__dirname, '../views/user/login'),{users});
    },

    login: (req,res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
          let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')));
          let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email)
            //Como podemos modificar nuestros req.body
            delete usuarioLogueado.password;
            req.session.usuario = usuarioLogueado;

// SAVE COOKIES (del lado del servidor) del usuario que se loguea
        if(req.body.keepSession){
          res.cookie('keepSession', usuarioLogueado.email, {maxAge: 1000 * 60 * 60 * 24})
        }
        return res.redirect('/');
    } else {
        //Devolver a la vista los errores
        console.log(errors.array())
        return res.render(path.resolve(__dirname, '../views/user/login'),{errors : errors.mapped(), old : req.body});        
      }
    },


    registerView: function(req,res){
        res.render(path.resolve(__dirname, '../views/user/register'));
    },

    register: function (req, res) {
        let ultimoUsuario = users.pop();
        users.push(ultimoUsuario);

        let errors = validationResult(req);
        if (errors.isEmpty()) {
          let nuevoUsuario = {
            id: ultimoUsuario.id +1,
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

        let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json'), {
          encoding: 'utf-8'});
        let users;
        if (archivoUsers == "") { users = [];
        } else {
          users = JSON.parse(archivoUsers);
        };
        users.push(nuevoUsuario);

        let usersJSON = JSON.stringify(users);
        fs.writeFileSync(path.resolve(__dirname,'../database/usuarios.json'), usersJSON);
        res.redirect('/user/profile/' + nuevoUsuario.id)

    } else {
      return res.render(path.resolve(__dirname, '../views/user/register'), {
        errors: errors.array(),  old: req.body
      });
    }
  },
  
  
  editView: function(req,res) {
    let idUser = req.params.id;
    let showUser = users.find(item => item.id == idUser);
    res.render(path.resolve(__dirname, '../views/user/edit'),{user: showUser});
  },

  edit: (req,res) => {
    req.body.id = req.params.id;
    req.body.avatar = req.file ? req.file.filename : req.body.oldImagen;
    console.log(req.file)
    let userUpdate = users.map(item =>{
        if(item.id == req.body.id){
            return item = {
            id: req.params.id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.oldPassword ,
            usuario: req.body.usuario,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            departamento: req.body.departamento,
            localidad: req.body.localidad,
            codigoPostal: req.body.codigoPostal,
            };
        }
        return item;
    })
    let userUpdated = JSON.stringify(userUpdate,null,2);
    fs.writeFileSync(path.resolve(__dirname,'../database/usuarios.json'),userUpdated)
    res.redirect('/user/profile/' + req.body.id);
},



  
  logout: (req,res) => {
    req.session.destroy();
    res.cookie('email',null,{maxAge: -1});
    res.redirect('/')
  }
};

module.exports = userController;