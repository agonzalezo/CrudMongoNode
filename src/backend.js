//Const's
const express = require('express'),
    app = express(),
    os = require('os'),
    port = process.env.PORT || 80,
    fs = require('fs'),
    morgan = require('morgan'),
    host = '127.0.0.1',
    favicon = require('serve-favicon'),
    cars = require('./routes/cars'),
    motos = require('./routes/motos'),
    root = require("./routes/root");
    config_json = require('./config/externalconfig')(),//metodo externo
    //config_json = require('./properties.json'); llamada directa de json
    middleware1 = require('./controller/Middleware1');

//config
app.set("views",__dirname+"/views");
app.set("view engine", "ejs");

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(express.static(__dirname + '/public'));
app.use('/', middleware1);
app.use("/", root);
app.use('/cars/', cars);
app.use("/motos/", motos);

//Init
app.listen(port);
console.log("Started server in: http://" + host + ":" + port);