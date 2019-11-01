function mensaje_listar(req,res,next){
    console.log("\nllamaste al middleware del home\n");
    next();
}
module.exports = mensaje_listar;