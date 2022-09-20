const { restart } = require('nodemon');
const db = require('../database/models');
const sequelize = db.sequelize;

const usersApiController = {
    'list': (req, res) =>{
        db.User.findAll()
            .then(users => {
                let response = {
                    info: {
                        status: 200,
                        total: users.length,
                        url: 'api/users/list'
                    },
                    data: users,
                    include: [
                        { association: "active" },
                        { association: "role" },
                    ]
    
                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    status: 404,
                    url: 'api/users/list',
                    error: e
                }
                restart.json(response)
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let response = {
                    info: {
                        status: 200,
                        url: 'api/users/detail' + req.params.id
                    },
                    data: user,
                    include: [
                        { association: "active" },
                        { association: "role" },
                    ]
    
                }
                res.json(response)
            })
            .catch(e => {
                let response = {
                    status: 404,
                    url: 'api/users/list',
                    error: e
                }
                res.json(response)
            })

        },
    'create': (req, res) =>{
        db.User.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            role: 1,
            province: req.body.province,
            country: req.body.country,
            direccion: req.body.direccion,
            departamento: req.body.departamento,
            localidad: req.body.localidad,
            codigoPostal: req.body.codigoPostal,
            telefono: req.body.telefono,
            avatar: req.file ? req.file.filename : 'default-admin.jpg'
        })
            .then(confirmacion => {
                let response;
                if(confirmacion){
                    response = {
                        info: {
                            status: 200,
                            total: confirmacion.length,
                            url: 'api/users/create'
                        },
                        data: confirmacion 
                            }
                }else{ response = {
                    info: {
                        status: 200,
                        total: confirmacion.length,
                        url: 'api/users/create'
                    },
                    data: confirmacion 
                }       
                }
                res.json(response)
            })
        },
    'destroy': (req, res) => {
        let userId = req.params.id;
        db.User.destroy({where: {id: userId}})
        .then(confirmacion => {
            let response;
            if(confirmacion){
                response = {
                    info: {
                        status: 200,
                        total: confirmacion.length,
                        url: 'api/users/delete' + userId
                    },
                    data: confirmacion 
                    }
            }else{ response = {
                info: {
                    status: 200,
                    total: confirmacion.length,
                    url: 'api/users/delete' + userId
                },
                data: confirmacion 
                    }       
                }
                res.json(response)
                })    
            }
    }
    





module.exports = usersApiController;