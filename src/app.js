"use strict";

const express = require("express");
const bodyParser = require("body-parser"); /*essa lib interpreta o conteudo do body do html e converte para JSON */
const mongoose = require('mongoose'); /** importa a biblioteca do mongoose para uso de banco de dados */
const config = require('./config');

const app = express();
const router = express.Router();

// Connecta ao banco
mongoose.connect(config.connectionString);

// Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app; /* para referencia as aplicações entres os sheets */

/*
Status do Servidor
200 - OK
201 - CREATE
400 - ERROR BAD_REQUEST
401 - NOT_AUTHENTICATE
403 - ACESSO NEGAGO
500 - INTERNAL ERROR

res.body
faz um get do corpo de requisição
*/
