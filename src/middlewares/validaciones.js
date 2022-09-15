const path = require('path');
const { body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Op = db.Sequelize.Op;


module.exports.validar = (method) => {
    switch(method){
        case 'login': {
          return [
            body('email')
            .notEmpty().withMessage('¿Has olvidado tu email?') // el campo email no puede estar vacío
            .isEmail().withMessage('Parece que ese email no es válido')// debe ser un email válido
            .custom( async (value) => {        // debe esxistir en la base de datos
                await db.User.findOne({ where: {email: value }}).then(user => {
                      if (!user)
                      throw new Error('¿Estás seguro de haber usado ese email para registrarte?');
                });
            }),
          
            //Aquí valido si la contraseña colocada es la misma a la que tenemos hasheada
            body('password')
            .notEmpty().withMessage('La contraseña no puede estar vacía')// obligatoria
            .custom( async (value, {req,next}) => {    //debe coincidir con la que está en la base
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
                body('nombre')
                .notEmpty().withMessage('El campo nombre no puede estar vacío')
                .isLength({min: 2}).withMessage('Longitud mínima 2 caracteres'),
                body('apellido')
                .notEmpty().withMessage('El campo apellido no puede estar vacío')
                .isLength({min: 2}).withMessage('Longitud mínima 2 caracteres'),
                body('usuario')
                .notEmpty().withMessage('El campo nombre no puede estar vacío')
                .isLength({min: 2}).withMessage('Longitud mínima 2 caracteres')
                .custom( async (value, {req}) => {  ///Nombre de usuario no puede estar repetido en la base de datos
                  await db.User.findOne({ where: {user_name: req.body.usuario }}).then(user => {
                        if (user)
                        throw new Error('El nombre de usuario ya ha sido registrado, elije otro');
                  });
                }),
                body('email')
                .notEmpty().withMessage('completar dirección de correo electrónico') // el campo email no puede estar vacío
                .isEmail().withMessage('Agregar un email válido')// debe ser un email válido
                .custom( async (value, {req}) => {    //no puede repetirse con los email ya registrados en la base de datos
                  await db.User.findOne({ where: {email: req.body.email }}).then(user => {
                        if (user)
                        throw new Error('El correo ya ha sido registrado, elije otro');
                  });
                }),
                body('password')
                .notEmpty().withMessage('la contraseña no puede estar vacía') // obligatoria
                .isLength({min:8}).withMessage('la contraseña de be tener al menos 8 caracteres'), //mínimo 8 caracteres           
                //Aquí valido la confimación del password dispuesto por el usuario
                body('confirm_password')
                .notEmpty().withMessage('debes confirmar la contraseña')        
                //Aquí valido si las contraseñas son iguales o no
                //El ( value ) viene a ser el valor que viaje en el name del del input del campo 
                //El valor { req } corresponde a lo que viene desde el formulario
                .custom((value, {req}) =>{
                    if(req.body.password == value ){
                        return true    // Si yo retorno un true  no se muestra el error     
                    }else{
                        return false   // Si retorno un false si se muestra el error
                    }    
                }).withMessage('Las contraseñas deben ser iguales'),
            
            
                body('avatar').custom((value, {req}) =>{ // la imágen es opcional, pero si se carga tiene que ser jpg, jpeg, png ó gif
                      let file = req.file;
                      if(file){
                        let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"]
                        let fileExtension = path.extname(file.originalname);
                          if (!acceptedExtensions.includes(fileExtension)){
                            throw new Error("Extensión de imagen no valida")
                          }

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