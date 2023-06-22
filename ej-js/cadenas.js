console.log("Hola mundo");

let ciudad = "Pitalito";
/* Todas mayusculas */
let ciudadUpper = ciudad.toUpperCase();
console.log(ciudadUpper);
/* Todas minusculas */
let ciudadLow = ciudad.toLowerCase();
console.log(ciudadLow);
/* Primera letra mayuscula */
let ciudadOracion = ciudad[0].toUpperCase() + ciudad.slice(1).toLowerCase();
console.log(ciudadOracion);
/* Extraer partes de una cadena */
let anyo = "2023-06-22";
let anyoStr = anyo.toString();
let anyoCard = anyoStr.slice(2, 4);
console.log("Año " + anyoCard);
let nombres = "Darickson Stiven Mamian Chacon";
let cantNombres = nombres.length;
console.log("Longitud nombre " + cantNombres);