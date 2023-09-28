class Automovil{
    constructor(marca,modelo){
        this.marca= marca;
        this.modelo=modelo;
    }
}

let auto1 = new Automovil("Toyota","TXL");

let inputBusqueda = document.getElementById("inputBusqueda");

inputBusqueda.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
    let mainContent = document.getElementById("mainContent");
    let boxAuto = document.createElement("div");
    mainContent.appendChild(boxAuto);
    boxAuto.setAttribute("class", "box-auto")
}
});


