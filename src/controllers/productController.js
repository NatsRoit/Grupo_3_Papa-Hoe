const path = require('path');
const fs = require('fs');

let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));


const productController = {
    indexAll: function(req,res){
        findCategory = "Todos los productos"
        res.render(path.resolve(__dirname, '../views/product/shop'),{productos, categoria:findCategory});
    },

    indexByCategory: function(req,res){
        let findCategory = req.query.cat;  //surfboards
        let productByCategory = productos.filter(item => item.categoria == findCategory);
        if (findCategory){
            res.render(path.resolve(__dirname, '../views/product/shop'),{productos: productByCategory, categoria:findCategory});
        } else {
            findCategory = "Todos los productos";
            res.render(path.resolve(__dirname, '../views/product/shop'),{productos, categoria:findCategory});

        };
    },
    detail: function(req,res){
        let idProducto = req.params.id;  //7
        let showProduct = productos.find(item => item.id == idProducto);
        res.render(path.resolve(__dirname, '../views/product/detail'),{producto: showProduct, productos:productos});
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

module.exports = productController;