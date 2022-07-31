const path = require('path');
const fs = require('fs');

let admin = {
    index: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        res.render(path.resolve(__dirname, '../views/admin/admin'), {productos});
    },
    

}

module.exports = admin;