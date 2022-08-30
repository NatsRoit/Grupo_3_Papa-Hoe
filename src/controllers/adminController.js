const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const Op = db.Sequelize.Op;


let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/productos.json')));

let adminController = {
    test: function(req,res){
        console.log(JSON.parse(5,6,7))
        db.Size.findAll({
            where: { id: 
                {[Op.or]: [5,6,7]} },
        })
    .then(function(prod){
            return res.send(prod);
        })
        .catch(err => { res.send(err);
        })
    },

    // index: (req,res) =>{
    //     let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/productos.json')));
    //     res.render(path.resolve(__dirname, '../views/admin/admin'), {productos});
    // },

        
    createView: function(req, res) {
        let brand = db.Brand.findAll();
        let category = db.Category.findAll({include: [{association: 'subcategorias'}]});
        let subcategory = db.Subcategory.findAll();
        let colors = db.Color.findAll()
        let fins = db.Fin.findAll();
        let size = db.Size.findAll()
        Promise.all([brand, category, subcategory, colors, fins, size])
        .then(function([brand, category, subcategory, colors, fins, size ]){
            console.log(JSON.stringify(category))
            return res.render(path.resolve(__dirname, '../views/admin/create'),{brand, category, subcategory, colors, fins, size});
        })
        .catch(err => { res.send(err);
        })
    },

    create: (req,res) => {
        console.log('ATENCIOOOONNNNNNN: productController > req.body.size_id ' + req.body.size_id);
        console.log('ATENCIOOOONNNNNNN: productController > req.body.size_id ' + JSON.stringify(req.body.size_id));
        db.Product.create({
            name: req.body.name,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            features: req.body.features,
            stock: req.body.stock,
            fin_id: req.body.fin_id,
            brand_id: req.body.brand_id,
            subcategory_id: req.body.subcategory_id,
            category_id: req.body.category_id,
            image1: req.files[0] ? req.files[0].filename : "_default-product.png",
            image2: req.files[1] ? req.files[1].filename : null,
            image3: req.files[2] ? req.files[2].filename : null,
            image4: req.files[3] ? req.files[3].filename : null,
            image5: req.files[4] ? req.files[4].filename : null,
        })
        .then(function (nuevoProducto) {
            console.log('ATENCIOOOONNNNNNN: productController > nuevoprod ' + JSON.stringify(nuevoProducto));
            let responseProducto = db.Product.findOne({
                where: { id: {[Op.eq]: nuevoProducto.id} },
            });
            let responseDimensiones = db.Size.findAll({
                    where: { id:{[Op.or]: req.body.size_id} },
                });

            Promise.all([responseProducto, responseDimensiones])
            .then(([producto, dimensiones]) => {
                console.log('ATENCIOOOONNNNNNNNNNNNNNN!!!!!!! dimensiones:' + JSON.stringify(dimensiones))
                let productsize = [];
                for (let i=0; i<dimensiones.length; i++){
                    let data = {
                        product_id: producto.id,
                        size_id: dimensiones[i].id
                    };
                    productsize.push(data);
                    console.log('ATENCIOOOONNNNNNNNNNNNNNN!!!!!!! forrrrrr dimensiones let data:' + JSON.stringify(productsize))
                }
                db.Product_Size.bulkCreate (productsize)
                .then(response => {
                    if (response && nuevoProducto ){
                        // let currency = req.body.currency;
                        return res.redirect('/product/detail/' + nuevoProducto.id );
                    } else {
                        res.send ("algo salio mal")
                    }
                    })
                })
            })
        },

    // NO BORRAR!!!!!!
        // let ultimoProducto = productos.pop();
        // productos.push(ultimoProducto);

        // let nuevoProducto = {
        //     id: ultimoProducto.id +1,
        //     categoria: req.body.categoria,
        //     subcategoria: req.body.subCategoria,
        //     titulo : req.body.titulo,
        //     marca: req.body.brand,
        //     modelo: req.body.model,
        //     caracteristicas: req.body.features,
        //     ability: req.body.hability,
        //     dimensions: req.body.dimensions,
        //     finSystem: req.body.finSystem,
        //     description: req.body.description,
        //     precio: req.body.precio,
        //     descuento: req.body.descuento,
        //     imagen: req.file.filename,
        // };

        // productos.push(nuevoProducto);
        // let nuevoProductoGuardar = JSON.stringify(productos);
        // fs.writeFileSync(path.resolve(__dirname,'../database/productos.json'), nuevoProductoGuardar);
        // res.redirect('/product/detail/' + nuevoProducto.id );


    editView: (req,res)=>{
        const productID = req.params.id;
        let productEditar = productos.find(item=> item.id == productID);
        res.render(path.resolve(__dirname,'../views/admin/edit'), {productEditar});

/* Con base de datos - Pero sin funcionar :( 

    editView: function (req,res) {
    let producto = db.Product.findByPk (req,params.id)

    let size = db.Size.findAll();
    let fins = db.Fin.findAll();
    let colors = db.Color.findAll();
    let brands = db.Brand.findAll();
    let categories = db.Category.findAll();
    let subcategories = db.Subcategory.findAll();
    
    Promise.all([producto, size, fins, colors, brands, categories, subcategories])
        .then(function([producto, size, fins, colors, brands, categories, subcategories]){
            res.render ("edit", [producto, size, fins, colors, brands, categories, subcategories]  )
    },
*/

    },
    edit: (req,res) => {
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

/* Con base de datos - Pero sin funcionar :( 
 edit: function (req, res) {
        db.Product.update ({
            name : req.body.name,
            category: req.body.category_id,
            subcategory: req.body.subcategory_id,
            brand: req.body.brand,
            price: req.body.precio,
            moneda: req.body.moneda,
            stock: req.body.stock,
            discount: req.body.discount,
            description: req.body.description,
            features: req.body.features,
            image1: req.file.image1,
            image2: req.file.image2,
            image3: req.file.image3,
            image4: req.file.image4,
            image5: req.file.image5,
            dimensions: req.body.dimensions,
            fin: req.body.fins,
        }, {
            where: {
                id: req.params.id
            }
        }) 
        res.redirect ("/productos/" + req.params.id")

        },
*/
    },


    destroy: (req,res) =>{
        const productDeleteId = req.params.id;
        const productsFinal = productos.filter(product => product.id != productDeleteId);
        let productsGuardar = JSON.stringify(productsFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../database/productos.json'),productsGuardar);
        res.redirect('/product');

/* Con base de datos - Pero sin funcionar :( 
    destroy: (req,res) =>{
        db.Product.destroy {
            where: {
                id: req.params.id
            }
        }
        res.redirect("/shop")
*/
    },

}

module.exports = adminController;