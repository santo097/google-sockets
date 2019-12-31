const express = require('express');
const app = express();
const ejs = require('ejs-mate');
const path = require('path');
const socket = require('socket.io');
const http = require('http');


// Creando servidor para sockets

const server = http.createServer(app);

const io = socket(server);


// Sockets
require('./socket')(io);

// Configuracion de la vistas

app.engine('ejs', ejs);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas

app.use(require('./route/index'));

// Servidor

server.listen(3000, ()=>{
    console.log('Servidor en el puerto 3000');
});