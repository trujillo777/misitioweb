class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,Kilometros,imagen){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
        this.anyo=anyo;
        this.ciudad=ciudad;
        this.Kilometros=Kilometros;
        this.imagen=imagen;
    }
}

let auto1 = new Automovil("Toyota","Prado", 250000000, 2019, "Pitalito - Huila", 1300,"img/toyota1.png");
let auto2 = new Automovil("Lexus", "GX 460", 750000000, 2022, "Bogotá - City", 25000,"img/lexus.png");
let auto3 = new Automovil("Land Rover", "Evoque", 378000000, 2020, "Medellín - Antioquia", 4000,"img/rover.png");
let auto4 = new Automovil("Cadillac ", "Escalade", 1130000000, 2017, "Cali - Valle del Cauca", 10000,"img/cadillac.png");


var carArrays = [auto1, auto2, auto3,auto4];
//let marcaAutomovil = auto1.modelo;

let inputBusqueda = document.getElementById("busqueda");

inputBusqueda.addEventListener("keydown", function(event){
    
    if (event.key == "Enter") {
        carArrays.forEach(function(auto, indice) {
            console.log("Auto " + (indice + 1) + ":");
            console.log(auto.marca);
            
        let mainContent = document.getElementById("mainContent");
        let boxAuto = document.createElement("div");
        mainContent.appendChild(boxAuto);
        boxAuto.setAttribute("class","box-auto")

        let boxImg= document.createElement("div");

        //Crear contenedor para el corazon

        let boxCorazon = document.createElement("div");
        boxImg.appendChild(boxCorazon);
        boxCorazon.setAttribute("class","box-corazon");
        let corazon =document.createElement("div");
        boxCorazon.appendChild(corazon);
        corazon.setAttribute("class","corazon");

        //Crear contenedor para la imagen

        let iconHearth = document.createElement("i");
        corazon.appendChild(iconHearth);
        iconHearth.setAttribute("class","icon-style-hearth fa-regular fa-heart");

        boxAuto.appendChild(boxImg);
        let imgAuto = document.createElement("img");
        boxImg.appendChild(imgAuto);
        boxImg.setAttribute("class","box-img");
        imgAuto.setAttribute("src",auto.imagen);
        imgAuto.setAttribute("class","img-auto")
        //Crear contenedor para e la informacion

        let boxInfo = document.createElement("div");
        boxAuto.appendChild(boxInfo);

        



        //Crear información para el texto
        let txtMarca = document.createElement("label");
        boxInfo.appendChild(txtMarca);
        boxInfo.setAttribute("class","box-info")

        //Crear información para el texto

        txtMarca.innerHTML = auto.marca


        //-------------------------------------
        let txtModelo = document.createElement("label");
        boxInfo.appendChild(txtModelo);
        txtModelo.innerHTML = " " +auto.modelo;
        
        //Precio
        let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio)
        let txtPrecio = document.createElement("label")
        boxInfo.appendChild(txtPrecio);
        txtPrecio.innerHTML = " "+ precioFormat;

        /*kilometraje y procedencia*/
        let boxProcedencia = document.createElement("div");
        boxInfo.appendChild(boxProcedencia);
        boxProcedencia.setAttribute("class", "box-procedencia");

        let txtanyo = document.createElement("label");
        boxProcedencia.appendChild(txtanyo);
        txtanyo.innerHTML = auto.anyo + " · ";

        let txtKilometros = document.createElement("label");
        boxProcedencia.appendChild(txtKilometros);
        let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto.Kilometros);
        txtKilometros.innerHTML = txtKilometrosFormat + " km  · ";

        let txtciudad = document.createElement("label");
        boxProcedencia.appendChild(txtciudad);
        txtciudad.innerHTML = auto.ciudad;

        let boxLineaDiv = document.createElement("div");
        mainContent.appendChild(boxLineaDiv);
        boxLineaDiv.setAttribute("class", "box-linea-div");
        }
        )
}})