const 
    router = require("express").Router();
//Method Home
router.get("/", (req, res) => {
    // res.sendFile(__dirname + "/public/front.html")
    // console.log(config_json.banner2);
    res.render("home")
})

module.exports = router;