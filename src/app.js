const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override');

const acceso = require('./middlewares/acceso');


// REQUIERO LOS ROUTERS
const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
// const adminRoutes = require('./routes/admin');

const app = express();

// TEMPLATE ENGINE SETUP
app.set('view engine','ejs');
app.set("views", path.join(__dirname, "./views"));


// URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Uso el methodOverride para usar PUT y DELETE en nuestros formularios
app.use(methodOverride('_method'));

// Indico la carpeta donde se encuentran los archivos estáticos
app.use( express.static(path.resolve(__dirname, '../public')));

app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}))

app.use(cookieParser());

app.use(acceso);


// USO LAS RUTAS
app.use('/', mainRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);
// app.use('/admin', adminRoutes);

// Levanto el servidor
app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});


