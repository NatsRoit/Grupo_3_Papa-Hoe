const { restart } = require('nodemon');
const db = require('../database/models');
const Op = db.Sequelize.Op;

const productApiController = {
    list: (req, res) =>{
        db.Product.findAll()
            .then(products => {
                let response = {
                    info: {
                        status: 200,
                        total: products.length,
                        url: 'api/product/list'
                    },
                    data: products,
                    include: [
                        { association: "marca" },
                        { association: "categoria", include: [{association: 'subcategorias'}],
                        raw: true},
                        { association: "subcategoria" },
                        { association: "fin" },
                        { association: "dimensiones" },
                        { association: "colores" },
                    ]

                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/product/list',
                        error: e
                    },
                }
                res.json(response)
            })
    },
     
    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let response = {
                    info: {
                        status: 200,
                        url: 'api/product/detail' + req.params.id
                    },
                    data: product,
                    include: [
                        { association: "marca" },
                        { association: "categoria", include: [{association: 'subcategorias'}],
                        raw: true},
                        { association: "subcategoria" },
                        { association: "fin" },
                        { association: "dimensiones" },
                        { association: "colores" },
                    ]

                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/product/detail' + req.params.id,
                        error: e
                    },
                }
                res.json(response)
            })
        
    },

    search: (req, res) => {
        db.Product.findAll({
            where: {
                name: { [Op.like]: "%" + req.query.keyword + "%"},
            },
            include: [
                { association: "marca" },
                { association: "categoria", include: [{association: 'subcategorias'}],
                raw: true},
                { association: "subcategoria" },
                { association: "fin" },
                { association: "dimensiones" },
                { association: "colores" },
            ]

        })
        .then (products => {
            return res.json(products);
        })

    },
    categories: (req, res) =>{
        db.Category.findAll()
            .then(categories => {
                let response = {
                    info: {
                        status: 200,
                        total: categories.length,
                        url: 'api/product/categories'
                    },
                    data: categories

                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/product/categories',
                        error: e
                    },
                }
                res.json(response)
            })
    }

}

module.exports = productApiController;