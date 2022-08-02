/* aquí irán los middlewares */

const fs = require("fs");
const path = require("path");
let archivoUser = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/usuarios.json"))
);

let acceso = (req, res, next) => {
  //Variable locals (super global - vive en las vistas )
  res.locals.usuario = false;  
  
  if (req.session.usuario) {
    res.locals.usuario = req.session.usuario;
    next();
  } else if (req.cookies.email) {
    let usuario = archivoUser.find((usuario) => usuario.email == req.cookies.email);
    //return res.send(user);
    //delete user.password;
    req.session.usuario = usuario;
    res.locals.usuario = usuario;
    next();
  } else {
    next();
  }
}

module.exports = acceso;
