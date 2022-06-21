const express = require('express');
const path = require('path');
const app = express();

let main = require('./routes/main.js')
let about = require('./routes/about.js')
let boardBuilder = require('./routes/boardBuilder.js')
let login = require('./routes/login.js')
let productDetail = require('./routes/productDetail.js')
let productCart = require('./routes/productCart')
let register = require('./routes/register.js')
let shop = require('./routes/shop.js')
let volumeCalculator = require('./routes/volumeCalculator.js')

app.set ('view engine', 'ejs');

app.use( express.static(path.resolve(__dirname, './public')));
app.use('/',main);
app.use('/',about);
app.use('/',boardBuilder);
app.use('/',productDetail);
app.use('/',productCart);
app.use('/',register);
app.use('/',login);
app.use('/',volumeCalculator);
app.use('/',shop);

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo');
});


