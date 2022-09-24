const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');

//Requerir el middleware que controla si el usuario está o no Logueado
const acceso = require('./middlewares/acceso');
// REQUIERO LOS ROUTERS
const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

//API ROUTES
const usersApiRoutes = require('./routes/apiUsers.js');
const productApiRoutes = require('./routes/productApi');


// TEMPLATE ENGINE SETUP
app.set('view engine','ejs');
app.set("views", path.join(__dirname, "./views"));


// URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Uso el methodOverride para usar PUT y DELETE en nuestros formularios
app.use(methodOverride('_method'));
// Indico la carpeta donde se encuentran los archivos estáticos
app.use( express.static(path.resolve(__dirname, '../public')));
app.use(session({
    secret : 'whatever',
    resave: true,
    saveUninitialized: true,
}));
app.use(cookieParser());

// MIDDLEWARE GLOBALES SIMEPRE ANTES DE LOS ROUTERS!!!
// Uso el Middleware de aplicación: Logueado.
app.use(acceso);


// USO LAS RUTAS
app.use('/', mainRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

//USO LAS RUTAS DE APIS 
app.use('/api/users', usersApiRoutes);
app.use('/api/product', productApiRoutes);


app.use((req, res, next) => {
    res.status(404).render(path.resolve(__dirname, './views/not-found'));
    next();
});

// Levanto el servidor


app.listen(process.env.PORT || 3001, function () {
    console.log('Servidor corriendo en el puerto 3001');
});
