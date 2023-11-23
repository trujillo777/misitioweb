function generarGrafica() {
    let dato1 = parseFloat(document.getElementById("dato1").value);
    let dato2 = parseFloat(document.getElementById("dato2").value);
    let dato3 = parseFloat(document.getElementById("dato3").value);
    let dato4 = parseFloat(document.getElementById("dato4").value);
    let dato5 = parseFloat(document.getElementById("dato5").value);

    let total = dato1 + dato2 + dato3 + dato4 + dato5;

    let porcentajeDato1 = (dato1 / total) * 100;
    let porcentajeDato2 = (dato2 / total) * 100;
    let porcentajeDato3 = (dato3 / total) * 100;
    let porcentajeDato4 = (dato4 / total) * 100;
    let porcentajeDato5 = (dato5 / total) * 100;

    let barContainer = document.getElementById("chartContainer");
    barContainer.innerHTML = ""; 
    
    crearBarra("Dato 1", porcentajeDato1, { backgroundColor: "#FFCE56" });
    crearBarra("Dato 2", porcentajeDato2, { backgroundColor: "#FFCE56" });
    crearBarra("Dato 3", porcentajeDato3, { backgroundColor: "#FFCE56" });
    crearBarra("Dato 4", porcentajeDato4, { backgroundColor: "#FFCE56" });
    crearBarra("Dato 5", porcentajeDato5, { backgroundColor: "#FFCE56" });
}

function crearBarra(label, porcentaje, estilos) {
    let barContainer = document.getElementById("chartContainer");

    let bar = document.createElement("div");
    bar.style.display = "flex";
    bar.style.alignItems = "center";
    bar.style.marginBottom = "10px";
    bar.style.border = "1px solid #ddd"; 
    bar.style.maxWidth = "400px"; 
    bar.style.transition = "background-color 0.3s"; 

    let innerBar = document.createElement("div");
    innerBar.style.height = "20px";
    innerBar.style.marginRight = "5px";
    innerBar.style.width = porcentaje + "%";


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

