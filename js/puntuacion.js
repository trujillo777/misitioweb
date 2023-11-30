function generarGrafica() {
    const datos = document.querySelectorAll('.input');

    let total = 0;
    for (let i = 0; i < datos.length; i++) {

        if (isNaN(datos[i].value)) datos[i].value = 0;
        total += Number(datos[i].value);
    }

    let porcentajes = [];
    for (let i = 0; i < datos.length; i++) {
        if (isNaN(datos[i].value)) datos[i].value = 0;
        porcentajes[i] = (datos[i].value / total) * 100;
    }

    let barContainer = document.getElementById("chartContainer");
    barContainer.innerHTML = "";

    for (let i = 0; i < porcentajes.length; i++) {
        crearBarra("", porcentajes[i], { backgroundColor: "#FFCE56" });
    }
}

function crearBarra(label, porcentaje, estilos) {
    let barContainer = document.getElementById("chartContainer");

    let bar = document.createElement("div");
    bar.style.display = "flex";
    bar.style.alignItems = "center";
    bar.style.marginBottom = "10px";
    bar.style.border = "1px solid #ddd";
    bar.style.maxWidth = "400px";

    let innerBar = document.createElement("div");
    innerBar.style.height = "20px";
    innerBar.style.marginRight = "5px";
    innerBar.style.width = porcentaje + "%";
    innerBar.style.transition = 'all 1s';
    innerBar.innerText = Math.floor(porcentaje) + "%";


    for (let estilo in estilos) {
        innerBar.style[estilo] = estilos[estilo];
    }

    let labelElement = document.createElement("div");
    labelElement.textContent = label;

    bar.appendChild(innerBar);
    bar.appendChild(labelElement);

    barContainer.appendChild(bar);
}

window.generarGrafica = generarGrafica;

