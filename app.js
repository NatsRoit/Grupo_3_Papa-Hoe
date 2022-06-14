const express = require('express');
const path = require('path');

const app = express();

app.use( express.static(path.resolve(__dirname, './public')));


app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});
app.get('/register', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
app.get('/productCart', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
});
<<<<<<< HEAD
app.get('/productCart2', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart2.html'))
});
app.get('/productDetail', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});
=======
app.get('/productDetail1', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail1.html'))
});

>>>>>>> 550c2b97acf452cb39faa6076e2dd2c103a72ad8
app.get('/boardBuilder', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/boardBuilder.html'))
});
app.get('/volumeCalculator', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/volumeCalculator.html'))
});
app.get('/shop', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/shop.html'))
});

app.get('/about', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/about.html'))
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo');
});


