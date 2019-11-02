console.log("Empieza la busqueda");
// alert("LLame al js");

function buscar(){
let color = document.getElementById("txtcolor").value;
console.log("El color a buscar es="+color)
let get_url = ("/cars/search/" + color);
window.location=get_url;    
// window.alert("Termino");
}

function agregar(){
var xhr = new XMLHttpRequest();
var url = "/cars/add";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function (e) {
console.log("Primer log "+xhr.responseText);
};
let marca = document.getElementById("txtmarca").value;
let modelo = document.getElementById("txtmodel").value;
let ano = document.getElementById("txtano").value;
let color2 = document.getElementById("txtcolor2").value;
var data = JSON.stringify({"brand":marca, "model":modelo, "year":ano, "color":color2});
xhr.send(data);
console.log("Respuesta"+ xhr.responseText);
alert(xhr.responseText)
//window.location="/api/carslist";
}
