const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Op = db.Sequelize.Op;


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

  let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));



const userController = {

    profile: function(req,res){
        db.User.findByPk(req.params.id)
        .then(showUser => {res.render(path.resolve(__dirname, '../views/user/profile'),{user: showUser, productos})})
        .catch(error => res.send(error));

    },

    loginView: function(req,res){
        res.render(path.resolve(__dirname, '../views/user/login'));//,{users});
    },

    login: (req,res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
          db.User.findOne({where: {email: req.body.email}})
          .then(usuarioLogueado => {
            console.log(usuarioLogueado)
            delete usuarioLogueado.password
            req.session.usuario = usuarioLogueado;
            if(req.body.keepSession){
               res.cookie('keepSession', usuarioLogueado.email, {maxAge: 1000 * 60 * 60 * 24})
            }
          return res.redirect('/');
          })    
        
        }else {
          //Devolver a la vista los errores
         console.log(errors.array())
         return res.render(path.resolve(__dirname, '../views/user/login'),{errors : errors.mapped(), old : req.body});        
        } 
    },


    registerView: function(req,res){
        res.render(path.resolve(__dirname, '../views/user/register'));
    },

    register: function (req, res) {
        let errors = validationResult(req);
        console.log("errores: " + errors.array())

          if (errors.isEmpty()) {
            let nuevoUsuario = {
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                user_name: req.body.usuario,      
                address: req.body.direccion, 
                floor_apt: req.body.departamento,    
                city: req.body.localidad, 
                zip_code: req.body.codigoPostal,
                province: req.body.province, 
                country: req.body.country,
                phone_number: req.body.telefono,  
                avatar: req.file ? req.file.filename : 'default-admin.jpg',
                active: 1,
                role_id:2 
            }

            db.User.create(nuevoUsuario)
            .then(db.User.findOne({order: [ [ 'id', 'DESC' ]],}))
            .then(user =>{res.redirect('/user/profile/' + user.id)})
            .catch(error => res.send(error));
          
          } else {

              return res.render(path.resolve(__dirname, '../views/user/register'), {errors: errors.mapped(), old: req.body});
            }
    },
  
  
  editView: function(req,res) {
    db.User.findByPk(req.params.id)
    .then(showUser => {res.render(path.resolve(__dirname, '../views/user/edit'),{user: showUser})})
    /*let idUser = req.params.id;
    let showUser = users.find(item => item.id == idUser);
    res.render(path.resolve(__dirname, '../views/user/edit'),{user: showUser});*/
  },

  edit: (req,res) => {
    req.body.avatar = req.file ? req.file.filename : req.body.oldImagen
    let user = {
      first_name: req.body.nombre,
      last_name: req.body.apellido,
      email: req.body.email,
      //password: bcrypt.hashSync(req.body.password, 10),
      user_name: req.body.usuario,      
      address: req.body.direccion, 
      floor_apt: req.body.departamento,    
      city: req.body.ciudad, 
      zip_code: req.body.codigoPostal,
      province: req.body.province, 
      country: req.body.country,
      phone_number: req.body.telefono,
      avatar: req.body.avatar
    }

    db.User.update(user, {where:{id: req.params.id}})
    .then(user => {
      console.log("ATENCIONNNNNNNNNNN! Acá va mi usuario editado" + JSON.stringify(user))
      res.redirect('/user/profile/' + req.params.id);
    })



   /* let usersToEdit = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')));

    req.body.id = req.params.id;
    req.body.avatar = req.file ? req.file.filename : req.body.oldImagen;
    console.log(req.file)
    console.log(req.body.oldImagen)

    let userEdited = usersToEdit.map(item =>{
      if(item.id == req.body.id){
        req.body.role = item.role

          return item = req.body;
      }
      return item;
    })
      let userUpdated = JSON.stringify(userEdited,null,2);
      fs.writeFileSync(path.resolve(__dirname,'../database/usuarios.json'),userUpdated)*/
  },

  logout: (req,res) => {
    req.session.destroy();
    res.cookie('email',null,{maxAge: -1});
    res.redirect('/')
  }
};

module.exports = userController;