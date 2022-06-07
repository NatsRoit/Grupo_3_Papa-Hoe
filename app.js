
const express = require('express')
const path = require('path')
const app = express();
const publicPath = path.join(__dirname, './public')
app.use( express.static(publicPath ))


app.listen(process.env.PORT || 3030, function() {
    console.log('Servidor corriendo')
})

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



