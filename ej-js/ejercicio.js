/* Activar el modo strict */
"use strict"



/* Ejercicio N1 */
/* El siguiente codigo se ejecuta una vez cargue el documeto html */
alert("Bienvenidos al mundo de JavaScript");



/*Ejercicio N2  use strict no permite utilizar variables que no hayan sido declaradas */
let nombreAprendiz = "Jairo Trujillo";
alert(nombreAprendiz);



/* Ejercicio N3  */
/* Crear dos variables de tipo string (Nombres y apellidos) y los mostramos por consola */
let nombresAprendiz = "Jairo Andres";
let apellidosAprendiz = "Trujillo Rojas";
console.log("Ejercicio N3");
console.log(nombresAprendiz + " " + apellidosAprendiz);



/* Ejercicio N4 */
let num1Int = 10;
let num2Int = 10;
let num3Srt = "12";
let num4Srt = "2";

console.log();
console.log("Ejercico N4");
console.log("Entero + entero (10 + 10)");
console.log(num1Int + num2Int);
console.log("String + string (\"12\" + \"2\")");
console.log(num3Srt + num4Srt);
console.log("Entero + string (10 + \" 12\")");
console.log(num1Int + num3Srt);



/* Ejercicio N5  */
/* De string a entero */
console.log("Conversion explicita de variables");
console.log("Convertir de string a entero");
let num3Int = parseInt(num3Srt);
let resultadoInt = num1Int + num2Int;
console.log(resultadoInt);

/* De entrto a string */
console.log("Convertir de entero a string");
let num1Str = num1Int.toString();
let resultadoStr = num3Srt + num1Str;
console.log(resultadoStr);


/* De entero y string a decimal */
console.log("Conversion de entero a decimal");
let num1Float = parseFloat(num1Int);
let num3Float = parseFloat(num3Srt);
let num5Float = 5.3;
console.log("Valores " + num1Float + " + " + num3Float + " + " + num5Float);
console.log("Resultado " + (num1Float + num3Float));



/* De decimal a entero */
let num6Int = Math.ceil(num5Float);
console.log("Conversion de decimal a entero con ajuste hacia el tercho " + num6Int);



/* Limitaciones para declarar variables */
/* 1  No iniciar variables con numeros */
// let 1nombre = "Vicente";





/* 2  Los nombres de variables no llevan espacios */
// let nombres aprendiz = "Margarita";





/* 3  La declaracion de la variable no lleva comillas o caracteres de tipo -,/*/
// let "apellidos" = "Sanchez";
// let nombres-apellidos = "Jairo Trujillo";
// let primer/nombre = "jairo";





/* No podemos declarar variables con nombres restringidos */
// let for = 5;
// let switch = "Deportes";
// let while = 2.4;