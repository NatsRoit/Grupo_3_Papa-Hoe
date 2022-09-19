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
                    data: products
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
                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    info: {
                        status: 404,
                        url: 'api/product/detail',
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
            }
        })
        .then (products => {
            return res.json(products);
        })

    },




}

module.exports = productApiController;