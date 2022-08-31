const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Op = db.Sequelize.Op;


module.exports.validar = (method) => {
    switch(method){
        case 'login': {
          return [
            body('email').isEmail().withMessage('Agregar un email válido')
            .custom( async (value) => {   
                await db.User.findOne({ where: {email: value }}).then(user => {
                      if (!user)
                      throw new Error('¿Estás seguro de haber usado ese email para registrarte?');
                });
            }),
          
            //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
            body('password').custom( async (value, {req,next}) => { 
                await db.User.findOne({ where: {email: req.body.email }}).then(user => {
                  if(user){
                      if (!bcrypt.compareSync(value, user.password)) 
                      throw new Error('Contraseña inválida. Hacé memoria!')
                  }
                });
            })

          ]
        }

        case 'register': {
            return [
                body('nombre').isLength({min: 1}).withMessage('El campo nombre no puede estar vacío'),
                body('apellido').isLength({min: 1}).withMessage('El campo apellido no puede estar vacío'),
                body('usuario').custom( async (value, {req}) => {   
                  await db.User.findOne({ where: {user_name: req.body.usuario }}).then(user => {
                        if (user)
                        throw new Error('El nombre de usuario ya ha sido registrado, elije otro');
                  });
                }),
                body('email')
                .isEmail().withMessage('Controlá tu email')
                .custom( async (value, {req}) => {   
                  await db.User.findOne({ where: {email: req.body.email }}).then(user => {
                        if (user)
                        throw new Error('El correo ya ha sido registrado, elije otro');
                  });
                }),
                body('password').isLength({min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caractéres'),
            
                //Aquí valido la confimación del password dispuesto por el usuario
                body('confirm_password').isLength({min: 6 }).withMessage('La confirmación de la contraseña debe tener un mínimo de 6 caractéres'),
            
                //Aquí valido si las contraseñas son iguales o no
                //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
                //El valor { req } corresponde a lo que viene desde el formulario
            
                body('confirm_password').custom((value, {req}) =>{
                    if(req.body.password == value ){
                        return true    // Si yo retorno un true  no se muestra el error     
                    }else{
                        return false   // Si retorno un false si se muestra el error
                    }    
                }).withMessage('Las contraseñas deben ser iguales'),
            
            
                body('avatar').custom((value, {req}) =>{
                      console.log(req.file);
                      if(req.file != undefined){
                          return true
                      } else {
                        req.file = { 
                          filename : 'default-admin.jpg'
                        }
                        return true
                    }
                })
              
            ]
        }
    }

}