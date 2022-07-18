const path = require('path');
const fs = require('fs');

let admin = {
    index: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        res.render(path.resolve(__dirname, '../views/admin/admin'), {productos});
    },
    create: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        res.render(path.resolve(__dirname, '../views/admin/create'));
    },
    save: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        let ultimoProducto = productos.pop();
        productos.push(ultimoProducto);
        console.log();
        let nuevoProducto = {
            id: ultimoProducto.id +1,
            titulo : req.body.titulo,
            category: req.body.category,
            brand: req.body.brand,
            model: req.body.model,
            features: req.body.features,
            hability: req.body.hability,
            dimensions: req.body.dimensions,
            finally: req.body.finSystem,
            description: req.body.description,
            precio: req.body.precio,
            descuento: req.body.descuento,
            imagen: req.file.filename
        }

        productos.push(nuevoProducto);
        let nuevoProductoGuardar = JSON.stringify(productos,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/productos.json'), nuevoProductoGuardar);
        res.redirect('/admin');
    },
    show: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        let miMoto;
        productos.forEach(moto => {
            if(moto.id == req.params.id){
                miMoto = moto;
            }
        });
        res.render(path.resolve(__dirname, '../views/admin/detail'), {miMoto})

    },
    edit: (req,res)=>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        const modoId = req.params.id;
        let motoEditar = productos.find(moto=> moto.id == modoId);
        res.render(path.resolve(__dirname,'../views/admin/edit'), {motoEditar});
    },
    update: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        req.body.id = req.params.id;
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let motosUpdate = productos.map(moto =>{
            if(moto.id == req.body.id){
                return moto = req.body;
            }
            return moto;
        })
        let motoActualizar = JSON.stringify(motosUpdate,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../database/productos.json'),motoActualizar)
        res.redirect('/admin');
    },
    destroy: (req,res) =>{
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
        const motoDeleteId = req.params.id;
        const motosFinal = productos.filter(moto => moto.id != motoDeleteId);
        let motosGuardar = JSON.stringify(motosFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../database/productos.json'),motosGuardar);
        res.redirect('/admin');
    }

}

module.exports = admin;