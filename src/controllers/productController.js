const path = require('path');
const fs = require('fs');

let productos =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));


const product = {
    index: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/shop'),{productos});
    },

    detail: function(req,res){
        let idProducto = req.params.id;  //1
        let showProduct = productos.find(item => item.id == idProducto);
        res.render(path.resolve(__dirname, '../views/product/detail'),{producto: showProduct});
    },
    newproduct: function(req,res){
        let idProducto = req.params.id;  
        let showProduct = productos.find(item => item.id == idProducto);
        res.render(path.resolve(__dirname, '../views/product/detail'),{producto: showProduct});
    },
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