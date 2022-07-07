const express = require('express');
const app = express();
const path = require('path');
//const methodOverride = require('method-override');

//Indico la carpeta donde se encuentran los archivos estáticos
app.use( express.static(path.resolve(__dirname, '../public')));

//Indico el motor de plantillas que estamos usando EJS
app.set('view engine','ejs');
app.set("views", path.join(__dirname, "./views"));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Uso el methodOverride para usar PUT y DELETE en nuestros formularios
//app.use(methodOverride('_method'));


//REQUIERO LAS RUTAS
const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');


//USO LAS RUTAS
app.use('/', mainRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);


//Levanto el servidor
app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});


