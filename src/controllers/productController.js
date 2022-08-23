const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const sequelize = db.sequelize;

let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));


const productController = {
    indexAll: function(req,res){
        db.Product.findAll({
            include: [
                {association: 'categories'},
                {association: 'subcategories'},
                {association: 'fins'},
                {association: 'brands'},
                {association: 'sizes'},
                {association: 'colors'},
                // {association: 'orders'},
            ]
        })
        .then(function(productos){
            findCategory = "Todos los productos"
            console.log(item)
            res.render(path.resolve(__dirname, '../views/product/shop'),{productos : productos, category:findCategory});
        })
    },

    indexByCategory: function(req,res){
        let findCategory = req.query.cat;  //surfboards
        let productByCategory = productos.filter(item => item.categoria == findCategory);
        if (findCategory){
            res.render(path.resolve(__dirname, '../views/product/shop'),{productos: productByCategory, category:findCategory});
        } else {
            findCategory = "Todos los productos";
            res.render(path.resolve(__dirname, '../views/product/shop'),{productos, category:findCategory});

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

    
    checkoutView: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/checkout'));
    },
    checkout: function(req,res){
        res.render(path.resolve(__dirname, '../views/product/checkout'));
    }
};

module.exports = productController;