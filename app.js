const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use( express.static(path.resolve(__dirname, './public')));

app.get('/', (req,res) => {
    res.sendFile('home.html', {root: './views'});
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


app.listen(port);
