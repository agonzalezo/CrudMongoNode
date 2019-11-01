const express = require("express"),
    router = express.Router(),
    config_json = require('../externalconfig.js')();//metodo externo
//Data
let cars = [
    { id: 0, brand: "bmw", model: "320", year: "2019", color: "red" },
    { id: 1, brand: "audi", model: "a3", year: "2020", color: "white" },
    { id: 2, brand: "volkswawen", model: "polo", year: "2022", color: "green" },
    { id: 3, brand: "ferrari", model: "a1", year: "2023", color: "yellow" },
    { id: 4, brand: "ford", model: "fiesta", year: "2024", color: "yellow" }
]
//Methods
router.get("/list", (req, res) => {
    // res.send(cars);
    res.json(cars);
})
router.get("/search/:color", (req, res) => {
    let found = cars.find(cars => cars.color == req.params.color);
    if (!found) res.status(400).send("Color invalido");
    res.send(found);
})
router.post("/add", (req, res) => {
    console.log(config_json.banner1);
    let carid = cars.length;
    let newcar =
        { id: carid, brand: req.body.brand, model: req.body.model, year: req.body.year, color: req.body.color }
    let newlength = cars.push(newcar);
    console.log("El color mandado es" + req.body.color)
    res.status(201).send(`Tamaño viejo =${carid} y tamaño nuevo=${newlength}`);
    console.log(config_json.banner2);
})
//export middleware
module.exports = router;
