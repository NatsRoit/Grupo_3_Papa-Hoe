const path = require('path');
const fs = require('fs');

let surfboards =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/surfboards.json')));
let accesorios =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/accesorios.json')));
let complementos =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/complementos.json')));


const product = {
    index: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/shop'),{surfboards});
    },
    detail: function(req,res){
        let idProducto = req.params.id;
        let showProduct = surfboards.find(item => item.id == idProducto);
        res.render(path.resolve(__dirname, '../views/product/detail'),{surfboards: showProduct});
    },
    // surfboards: function(req,res){
    //     res.render(path.resolve(__dirname, '../views/product/shop'),{surfboards});
    // },
    // accesorios: function(req,res){
    //     res.render(path.resolve(__dirname, '../views/product/shop'),{accesorios});
    // },
    // complementos: function(req,res){
    //     res.render(path.resolve(__dirname, '../views/product/shop'),{complementos});
    // },
    boardBuilder: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/boardBuilder'));
    },
    cart: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/cart'));
    },
    cart1: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/cart1'));
    },
    cart2: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/cart2'));
    },
    cart3: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/cart3'));
    }
};

module.exports = product;