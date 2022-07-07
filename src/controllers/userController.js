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
            usuario: req.body.usuario
        }
        users.push(nuevoUsuario);

        let usersJSON = JSON.stringify(users, null, 2);

        fs.writeFileSync(path.resolve(__dirname,'../database/usuarios.json'), usersJSON);

        res.redirect('/user/login')

    }
};

module.exports = user;