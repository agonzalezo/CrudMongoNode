const express = require("express"),
    router = express.Router(),
    config_json = require("../externalconfig")();

let motos = [
    {id:0, cc:100, model:2019},
    {id:1, cc:200, model:2019},
    {id:2, cc:300, model:2019},
    {id:3, cc:400, model:2019},
    {id:4, cc:500, model:2019},
    {id:5, cc:600, model:2019}
]

router.get("/list", (req, res) => {
    res.send(motos)
})
router.get("/search/:cc", (req, res) => {
    let found = motos.find(motos => motos.cc == req.params.cc);
    if (!found) res.status(400).send("CC invalido");
    res.send(found);
})
router.post("/add", (req, res) => {
    console.log(config_json.banner1);
    let motid = motos.length;
    let newmot ={id:motid, cc:req.body.cc, model:req.body.model}
    let newlength = motos.push(newmot);
    console.log("El cc mandado es "+req.body.cc)
    res.status(201).send(`Tamaño viejo =${motid} y tamaño nuevo=${newlength}`);
    console.log(config_json.banner2);
})

//export middleware
module.exports = router;