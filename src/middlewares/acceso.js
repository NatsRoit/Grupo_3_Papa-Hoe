const db = require('../database/models');
const Op = db.Sequelize.Op;
const fs = require('fs');
const path = require('path');
let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')));
        
module.exports = (req,res,next) =>{
    // Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        console.log(req.session + " MIDDLEWARE ACCESO");
        return next();
    // Cookies: Se guardan en el navegador, del lado del cliente
    } else if(req.cookies.email){
        //let usuario = archivoUsuarios.find(usuario => usuario.email == req.cookies.email)
        db.User.findOne({where: {email: req.cookies.email}})
        .then(user =>{
            req.session.usuario = user; 
            res.locals.usuario = user;
        })
        //return res.send(usuario);
        //delete usuario.password;
        
       
        return next();
    }else{
        return next();
    }
}
