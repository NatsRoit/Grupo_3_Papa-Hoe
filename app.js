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
app.get('/productDetail', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});
app.get('/boardBuilder', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/boardBuilder.html'))
});
app.get('/productDetail', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
});
app.get('/volumeCalculator', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/volumeCalculator.html'))
});
app.get('/shop', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/shop.html'))
});

app.get('/productDetail1', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail1.html'))
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo');
});


