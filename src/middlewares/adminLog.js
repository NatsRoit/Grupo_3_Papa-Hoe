
const fs = require("fs");
const path = require("path");

res.session.admin = (role)
let logueado = (function(req, res, next) {
    if (req.session.usuario){
// if user is not logged-in redirect back to login page //
         next();
    }   else{
      
        res.redirect('/user/login');
    }
});

module.exports = logueado;

