const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Op = db.Sequelize.Op;

// let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));


const productController = {
    test: function(req,res){
        let producto =
        db.Product.findByPk(1, {
            include: [
                { association: "marca" },
                { association: "categoria", include: [{association: 'subcategorias'}],
                raw: true},
                { association: "subcategoria" },
                { association: "fin" },
                { association: "dimensiones" },
                { association: "colores" },
            ]
        });
        let sizes = db.Size.findAll()
        Promise.all([producto, sizes])
        .then(function([producto, sizes]){
            return res.send(producto);        
        });
    },

    index: function(req, res, next){
        let productos = db.Product.findAll({
            include: [ { association: "marca" }, { association: "categoria"}],
            // where : {category_id : req.params.cat !== "all"? req.params.cat : req.params.cat !== null}
        });
        let categorias = db.Category.findAll()
        Promise.all([productos, categorias])
        .then(function([productos, categorias]){
            let cat = req.params.cat;
            if (cat == "all"){
                prodList = productos;
                cat = "Todos los productos"
                return res.render(path.resolve(__dirname, '../views/product/shop'),{productos:prodList, categoria:cat});
            } else if (cat !== "all" && categorias.map(c => c.id).includes(Number(cat))){ 
                prodList = productos.filter(prod => {return prod.category_id == req.params.cat})  
                cat = categorias.find(c => c.id == cat);
                return res.render(path.resolve(__dirname, '../views/product/shop'),{productos:prodList, categoria:cat.name});
            } else {
                next();
            }
        })
        .catch(error => {
            res.send(error);
        })
    },
    
    detail: function(req,res,next){
        let producto = 
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
        let prodAll = db.Product.findAll();
        let size = db.Size.findAll();
        let fins = db.Fin.findAll();
        let colors = db.Color.findAll()
        Promise.all([producto, prodAll, size, fins, colors])
        .then(function([producto, prodAll, size, fins, colors ]){
            // Creo una función para seleccionar en modo aleatorio 4 productos del total de productos (prodAll).
            let randomArr = [];
            while(randomArr.length < 4)
            { var r = Math.floor(Math.random() * prodAll.length);
                if(randomArr.indexOf(r) === -1) { 
                    randomArr.push(r);
            }};
            // Pusheo esos 4 productos en un nuevo array (relatedProds) para pasarlo a la vista
            let relatedProds = [];
            for (let i = 0; i < randomArr.length; i++) {
                relatedProds.push(prodAll[randomArr[i]])
            }
            if (producto !== null){
                return res.render(path.resolve(__dirname, '../views/product/detail'),{producto, relatedProds, size, fins, colors });
            } else {
                next();
            }
        })
        .catch(error => res.send(error));
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