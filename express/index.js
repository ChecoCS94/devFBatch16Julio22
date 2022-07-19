"use strict";

const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.post('/destino', function (req, res) {
    const nuevoPokemon = req.body;
    console.log(nuevoPokemon);
    res.send('HelloWorld');
})

app.listen(3000);