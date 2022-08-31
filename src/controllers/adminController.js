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
            let responseProducto = db.Product.findOne({
                where: { id: {[Op.eq]: nuevoProducto.id} },
            });
            let responseDimensiones = db.Size.findAll({
                    where: { id:{[Op.or]: req.body.size_id} },
                });
            let responseColores = db.Color.findAll({
                    where: { id:{[Op.or]: req.body.color_id} },
                });

            Promise.all([responseProducto, responseDimensiones, responseColores])
            .then(([producto, dimensiones, colores]) => {
                let productsize = [];
                for (let i=0; i<dimensiones.length; i++){
                    let datasize = {
                        product_id: producto.id,
                        size_id: dimensiones[i].id
                    };
                    productsize.push(datasize);
                };
                
                let productcolor = [];
                for (let i=0; i<colores.length; i++){
                    let datacolor = {
                        product_id: producto.id,
                        color_id: colores[i].id
                    };
                    productcolor.push(datacolor);
                };

                let newproductsize =  db.Product_Size.bulkCreate (productsize);
                let newproductcolor =  db.Product_Color.bulkCreate (productcolor);
                Promise.all([newproductsize, newproductcolor])
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



    editView: (req,res)=>{
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
        let brand = db.Brand.findAll();
        let category = db.Category.findAll({include: [{association: 'subcategorias'}]});
        let subcategory = db.Subcategory.findAll();
        let colors = db.Color.findAll()
        let fins = db.Fin.findAll();
        let sizes = db.Size.findAll()
        Promise.all([producto, brand, category, subcategory, colors, fins, sizes])
        .then(function([producto, brand, category, subcategory, colors, fins, sizes]){
            res.render (path.resolve(__dirname,'../views/admin/edit'), {producto, brand, category, subcategory, colors, fins, sizes})
        })
    },

    edit: (req,res) => {
        db.Product.update({
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
            image1: req.files.image1 ? req.files.image1[0].filename : req.body.oldImagen1,
            image2: req.files.image2 ? req.files.image2[0].filename : req.body.oldImagen2,
            image3: req.files.image3 ? req.files.image3[0].filename : req.body.oldImagen3,
            image4: req.files.image4 ? req.files.image4[0].filename : req.body.oldImagen4,
            image5: req.files.image5 ? req.files.image5[0].filename : req.body.oldImagen5,
        },{
            where: {id: req.params.id}
        })
        .then(function (productoEditado) {
            let responseProducto = db.Product.findOne({
                where: { id: {[Op.eq]: req.params.id} },
            });
            let responseDimensiones = db.Size.findAll({
                    where: { id: req.body.size_id? {[Op.or]: req.body.size_id} : '' },
                });
            let responseColores = db.Color.findAll({
                    where: { id: req.body.color_id? {[Op.or]: req.body.color_id} : '' },
                });

            Promise.all([responseProducto, responseDimensiones, responseColores])
            .then(([producto, dimensiones, colores]) => {
                let productsize = [];
                for (let i=0; i<dimensiones.length; i++){
                    let datasize = {
                        product_id: producto.id,
                        size_id: dimensiones[i].id
                    };
                    productsize.push(datasize);
                };
                
                let productcolor = [];
                for (let i=0; i<colores.length; i++){
                    let datacolor = {
                        product_id: producto.id,
                        color_id: colores[i].id
                    };
                    productcolor.push(datacolor);
                };

                let newproductsize =  db.Product_Size.bulkCreate (productsize);
                let newproductcolor =  db.Product_Color.bulkCreate (productcolor);
                Promise.all([newproductsize, newproductcolor])
                .then(response => {
                    if (response && productoEditado ){
                        // let currency = req.body.currency;
                        return res.redirect('/product/detail/' + req.params.id );
                    } else {
                        res.send ("algo salio mal")
                    }
                })
            })
        })
    },

    destroy: (req,res) =>{
        db.Product.destroy ({
            where: { id: req.params.id }
        });
        res.redirect("/product/category")
        // const productDeleteId = req.params.id;
        // const productsFinal = productos.filter(product => product.id != productDeleteId);
        // let productsGuardar = JSON.stringify(productsFinal,null,2)
        // fs.writeFileSync(path.resolve(__dirname, '../database/productos.json'),productsGuardar);
        // res.redirect('/product');
    },

}

module.exports = adminController;