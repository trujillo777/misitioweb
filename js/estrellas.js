function generarEstrellas(calificacion) {
    if (calificacion < 0 || calificacion > 5) {
        console.log("Calificación no válida");
        return;
    }

    const numEstrellasCompletas = Math.floor(calificacion);
    const numEstrellaMedia = calificacion - numEstrellasCompletas > 0.4 ? 1 : 0;

    const estrellas = [];

    for (let i = 0; i < numEstrellasCompletas; i++) {

        estrellas.push(`<img src="estrellas/llena.png" alt="Estrella completa" />`);
    }

    if (numEstrellaMedia === 1) {

        estrellas.push(`<img src="estrellas/media.png" alt="Estrella media" />`);
    }

    return estrellas.join('');
}

function actualizarEstrellas() {
    const calificacionInput = document.getElementById("calificacion");
    const estrellasDiv = document.getElementById("estrellas");

    try {
        const calificacion = parseFloat(calificacionInput.value);
        const estrellasGeneradas = generarEstrellas(calificacion);

        if (estrellasGeneradas) {
            estrellasDiv.innerHTML = estrellasGeneradas;
        }
    } catch (error) {
        console.log("Por favor, ingrese un número válido.");
    }
}
 