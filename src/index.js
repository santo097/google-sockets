const express = require('express');
const app = express();
const ejs = require('ejs-mate');
const path = require('path');


// Configuracion de la vistas

app.engine('ejs', ejs);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas

app.use(require('./route/index'));

// Servidor

app.listen(3000, ()=>{
    console.log('Servidor en el puerto 3000');
});