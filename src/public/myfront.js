console.log("Entramos al JS");

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
xhr.open("POST", url, false);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = (e)=> {
    alert(xhr.responseText)
};
let marca = document.getElementById("txtmarca").value;
let modelo = document.getElementById("txtmodel").value;
let ano = document.getElementById("txtano").value;
let color2 = document.getElementById("txtcolor2").value;
var data = JSON.stringify({"brand":marca, "model":modelo, "year":ano, "color":color2});
console.log("Enviando Request "+data);
xhr.send(data);
console.log("Response "+ xhr.responseText);
//window.location="/api/carslist";
}
