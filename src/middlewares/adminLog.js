
const fs = require("fs");
const path = require("path");

let adminLog = (function(req, res, next) {
    session = req.session;
    if (req.session.role ==  "admin"){
        console.log(req.session)
// Si es admin, CREO UNA SESSION 
         next();
    }   else if (req.session.) {
        console.log(req.session)
        res.redirect('/user/login');
    }
});

module.exports = adminLog;

