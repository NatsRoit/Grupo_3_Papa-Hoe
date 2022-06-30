const path = require('path');
const fs = require('fs');

let productosJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));


const main = {
    index: function(req,res){
        res.render(path.resolve(__dirname, '../views/main/home'),{productosJSON});
    },
    about: function(req,res){
        res.render(path.resolve(__dirname, '../views/main/about'));
    },
    devoluciones: function(req,res){
        res.render(path.resolve(__dirname, '../views/main/devoluciones'));
    },
    faqs: function(req,res){
        res.render(path.resolve(__dirname, '../views/main/faqs'));
    },
    politicaCancelacion: function(req,res){
        res.render(path.resolve(__dirname, '../views/main/politica-cancelacion'));
    },
    tracker: function(req,res){
        res.render(path.resolve(__dirname, '../views/main/tracker'));
    },
    volumeCalculator: function(req,res){
        res.render(path.resolve(__dirname, '../views/main/volume-calculator'));
    },
};

module.exports = main;