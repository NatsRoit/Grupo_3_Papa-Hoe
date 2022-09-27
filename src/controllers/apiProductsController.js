const { restart } = require('nodemon');
const db = require('../database/models');
const Op = db.Sequelize.Op;

const apiProductsController = {
    list: (req, res) =>{
        db.Product.findAll()
            .then(products => {
                let response = {
                    info: {
                        status: 200,
                        total: products.length,
                        url: 'api/products/list'
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
                        url: 'api/products/list',
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
                        url: 'api/products/detail' + req.params.id
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
                if (data !== null){
                res.json(response)
            }
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/products/detail' + req.params.id,
                        error: e
                    },
                }
                res.json(response)
            })
        
    },

    categories: (req, res) =>{
        db.Category.findAll()
            .then(categories => {
                let response = {
                    info: {
                        status: 200,
                        total: categories.length,
                        url: 'api/products/categories'
                    },
                    data: categories

                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/products/categories',
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
    
    
    index: (req, res) =>{
        db.Product.findAll({
            include: [
                { association: "marca" },
                { association: "categoria", include: [{association: 'subcategorias'}],
                raw: true},
                { association: "subcategoria" },
                { association: "fin" },
                { association: "dimensiones" },
                { association: "colores" },
            ], 
        })
            .then(products => {
                const reducer = (map, val) => {
                    if(map[val] == null) {
                        map[val] = 1;
                    } else {
                        ++map[val];
                    }
                    return map
                    };
                let response = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/products/index'
                    },
                    data: {
                        count: products.length,
                        countByCategory: products.map(el => el.categoria.name).reduce(reducer, {}),
                        products,
                    }
                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    meta: {
                        status: 404,
                        url: 'api/products/index',
                        error: e
                    },
                }
                res.json(response)
            })
    },

}

module.exports = apiProductsController;