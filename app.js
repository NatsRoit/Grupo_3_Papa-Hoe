const express = require('express');
const path = require('path');

const app = express();

app.set ('view engine', 'ejs');

app.use( express.static(path.resolve(__dirname, './public')));


app.get('/', (req,res) => {
    res.render('home')
});
app.get('/register', (req,res) => {
    res.render(path.resolve(__dirname, './views/register.ejs'))
});
app.get('/login', (req,res) => {
    res.render(path.resolve(__dirname, './views/login.ejs'))
});
app.get('/cart', (req,res) => {
    res.render(path.resolve(__dirname, './views/cart.ejs'))
});
app.get('/productCart1', (req,res) => {
    res.render(path.resolve(__dirname, './views/productCart1.ejs'))
});
app.get('/productCart2', (req,res) => {
    res.render(path.resolve(__dirname, './views/productCart2.ejs'))
});
app.get('/productCart3', (req,res) => {
    res.render(path.resolve(__dirname, './views/productCart3.ejs'))
});

app.get('/productDetail', (req,res) => {
    res.render(path.resolve(__dirname, './views/productDetail.ejs'))
});

app.get('/boardBuilder', (req,res) => {
    res.render(path.resolve(__dirname, './views/boardBuilder.ejs'))
});
app.get('/volumeCalculator', (req,res) => {
    res.render(path.resolve(__dirname, './views/volumeCalculator.ejs'))
});
app.get('/shop', (req,res) => {
    res.render(path.resolve(__dirname, './views/shop.ejs'))
});

app.get('/about', (req,res) => {
    res.render(path.resolve(__dirname, './views/about.ejs'))
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo');
});


