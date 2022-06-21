let mainController = {
    home: function(req,res) {
        res.render('home')
    },

    about: function(req,res) {
        res.render('about')
    },
    register: function(req,res) {
        res.render('register')
    },
    login: function(req,res) {
        res.render('login')
    },
    productCart: function(req,res) {
        res.render('productCart')
    },
    productDetail: function(req,res) {
        res.render('productDetail')
    },
    boardBuilder: function(req,res) {
        res.render('boardBuilder')
    },
    volumeCalculator: function(req,res) {
        res.render('volumeCalculator')
    },
    shop: function(req,res) {
        res.render('shop')
    }

}

module.exports = mainController;