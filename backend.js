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
    config_json = require('./externalconfig.js')(),//metodo externo
    //config_json = require('./properties.json'); llamada directa de json
    middleware1 = require('./Middleware1');
//Middleware
app.use(express.json());
app.use(morgan('combined'));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use('/', middleware1);
app.use('/cars/', cars);
app.use("/motos/", motos);
app.use(express.static(__dirname + '/public'));
//Method Home
app.get("/", (req, res) => {
    console.log(config_json.banner1);
    res.sendFile(__dirname + "/public/front.html")
    console.log(config_json.banner2);
})

//Init
app.listen(port);
console.log("Started server in: http://" + host + ":" + port);