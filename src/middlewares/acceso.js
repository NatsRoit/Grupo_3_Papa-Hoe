/* aquí irán los middlewares */

const fs = require('fs');
const path = require('path');
let archivoUser =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/usuarios.json')));
        
let acceso = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.user = false;
    if(req.session.user){
        res.locals.user = req.session.user;
        return next();
    }else if(req.cookies.email){
        let user = archivoUser.find(user => user.email == req.cookies.email)
        //return res.send(user);
        //delete user.password;
        req.session.user = user;
        res.locals.user = user;
        return next();
    }else{
        return next();
    }
}

module.exports = acceso;
