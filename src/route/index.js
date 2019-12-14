const express = require('express');
const route = express.Router();

// Renderizando vista principal

route.get('/', (req,res)=>{
    res.render('index');
});

module.exports = route;