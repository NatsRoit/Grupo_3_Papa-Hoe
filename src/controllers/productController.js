const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Op = db.Sequelize.Op;

let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));


const productController = {
    test: function(req,res){
        db.Product.findAll({
            include: [
                { association: "marca" },
                { association: "categoria", include: [{association: 'subcategorias'}] },
                { association: "subcategoria" },
                { association: "fin" },
                { association: "dimensiones" },
                { association: "colores" },
            ]
        })
        .then(function(productos){
            return res.send(productos);
        })
        .catch(err => { res.send(err);
        })
    },

    index: function(req,res){
        db.Product.findAll({
            include: [ { association: "marca" }, { association: "categoria"}],
            where : {category_id : req.params.cat || [1,2,3]}
        })
        .then(function(productos){
                if (req.params.cat){
                    categoria = req.params.cat;
                } else {
                 categoria = undefined}
                return res.render(path.resolve(__dirname, '../views/product/shop'),{productos, categoria});
        })
        .catch(err => { res.send(err);
        })
    },
    
    detail: function(req,res){
        let productDetail = 
        db.Product.findByPk(req.params.id, {
            include: [
                { association: "marca" },
                { association: "categoria", include: [{association: 'subcategorias'}] },
                { association: "subcategoria" },
                { association: "fin" },
                { association: "dimensiones" },
                { association: "colores" },
            ],
        });
        let prodRelated =
        db.Product.findAll();
        Promise.all([productDetail, prodRelated])
        .then(function([producto, related]){
            return res.render(path.resolve(__dirname, '../views/product/detail'),{producto, related});
        })
        .catch(err => { res.send(err);
        })
    },

    boardBuilder: function(req, res){
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