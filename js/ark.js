let derecha = document.getElementById("derecha");
let izquierda = document.getElementById("izquierda");

let imgArkCamry = document.getElementById("imgArkCamry");
let imgArkTundra = document.getElementById("imgArkTundra");
let imgArkRav4 = document.getElementById("imgArkRav4");

derecha.addEventListener("click", function(){
    if (imgArkCamry.classList.contains("img-ark-camry")){
        imgArkCamry.classList.remove("img-ark-camry");
        imgArkCamry.classList.add("img-ark-camry-hidden");
        imgArkTundra.classList.add("img-ark-tundra");
        imgArkTundra.classList.remove("img-ark-tundra-hidden-right");
    }
    else if (imgArkTundra.classList.contains("img-ark-tundra")){
        imgArkTundra.classList.remove("img-ark-tundra");
        imgArkTundra.classList.add("img-ark-tundra-hidden-left");
        imgArkRav4.classList.add("img-ark-rav4");
        imgArkRav4.classList.remove("img-ark-rav4-hidden-right");
    }})