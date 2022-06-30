const path = require('path');
const fs = require('fs');

let productosJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));


const user = {
    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/user/login'),{productosJSON});
    },
    register: function(req,res){
        res.render(path.resolve(__dirname, '../views/user/register'));
    },
};

module.exports = user;