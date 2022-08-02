const fs = require('fs');
const path = require('path');

let archivoUsers =  fs.readFileSync(path.resolve(__dirname,'../database/usuarios.json'), {encoding: 'utf-8'});
let users;
  if (archivoUsers == "") {
    users = [];
  } else {
    users = JSON.parse(archivoUsers);
  };


module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.usuario = false;
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    }else if(req.cookies.email){
        let usuario = users.find(usuario => usuario.email == req.cookies.email)
        //return res.send(usuario);
        //delete usuario.password;
        req.session.usuario = usuario;
        res.locals.usuario = usuario;
        return next();
    }else{
        return next();
    }
}
