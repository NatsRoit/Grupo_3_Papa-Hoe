const path = require('path');
const fs = require('fs');

let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));

let adminController = {
    index: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        res.render(path.resolve(__dirname, '../views/admin/admin'), {productos});
    },

        
    create: (req,res) =>{
        res.render(path.resolve(__dirname, '../views/product/create'));
    },
    processCreate: (req,res) =>{
        let ultimoProducto = productos.pop();
        productos.push(ultimoProducto);

        let nuevoProducto = {
            id: ultimoProducto.id +1,
            categoria: req.body.categoria,
            subcategoria: req.body.subCategoria,
            titulo : req.body.titulo,
            marca: req.body.brand,
            modelo: req.body.model,
            caracteristicas: req.body.features,
            ability: req.body.hability,
            dimensions: req.body.dimensions,
            finSystem: req.body.finSystem,
            description: req.body.description,
            precio: req.body.precio,
            descuento: req.body.descuento,
            imagen: req.file.filename,
        };
        console.log('productController > processCreate:' + req.file);

        productos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(productos);
        fs.writeFileSync(path.resolve(__dirname,'../database/productos.json'), nuevoProductoGuardar);
        res.redirect('/product/detail/' + nuevoProducto.id );
    },


    edit: (req,res)=>{
        const productID = req.params.id;
        let productEditar = productos.find(item=> item.id == productID);
        res.render(path.resolve(__dirname,'../views/product/edit'), {productEditar});
    },
    processEdit: (req,res) => {
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let productUpdate = productos.map(item =>{
            if(item.id == req.body.id){
                return item = req.body;
            }
            return item;
        })
        let productActualizar = JSON.stringify(productUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/productos.json'),productActualizar)
        res.redirect('/product');
    },


    destroy: (req,res) =>{
        const productDeleteId = req.params.id;
        const productsFinal = productos.filter(product => product.id != productDeleteId);
        let productsGuardar = JSON.stringify(productsFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../database/productos.json'),productsGuardar);
        res.redirect('/product');
    },

}

module.exports = adminController;