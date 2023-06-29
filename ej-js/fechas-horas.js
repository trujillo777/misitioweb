console.log("Validacion de fechas");
console.log("Obtener fecha y hora del navegadot");

/*Greenwich Mean Time*/
console.log("==Fecha y hora GMT==");
let timeGMT = new Date();
console.log(timeGMT);

console.log("==Fecha y hora en String==");
let timeGMTStr = timeGMT.toString();
console.log(timeGMTStr);



console.log("==Obtener el dia de la semana==");
let timeGMTDay = timeGMT.getDay();
console.log(timeGMTDay);
let diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles",
                 "Jueves", "Viernes", "Sabado"];
console.log("Hoy es: " + diaSemana[timeGMTDay]);




console.log("==Obtener el mes actual==");
let timeGMTMes = timeGMT.getMonth();
console.log(timeGMTMes);
let mesAño = ["Enero", "Febrero", "Marzo", "Abril",
             "Mayo", "Junio", "Julio", "Agosto",
             "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Estamos en el mes de : " + mesAño[timeGMTMes]);



console.log("Fecha y hora desfragmentada");
let currenTime = new Date();
console.log("Dia e la semana: " + currenTime.getDay());
console.log("Mes del año: " + currenTime.getMonth());
console.log("Dia del mes: "+ currenTime.getDate());
console.log("Año: " + currenTime.getFullYear()),
console.log("Hora: " + currenTime.getHours());
console.log("Minutos: " + currenTime.getMinutes());
console.log("Segundos: " + currenTime.getSeconds());
console.log("Milisegundos: " + currenTime.getMilliseconds());



console.log("==Milisegundos transcurridos desde 01/01/1970==");
console.log(currenTime.getTime());

console.log("Estableciendo diferencia en fechas");
let newYear = new Date("January 1, 2024");
let fechaActual = new Date(); 
let newYearMs = newYear.getTime();
let fechaActualMs = fechaActual.getTime();


let miliseDifere = newYearMs - fechaActualMs;
let diasDifere = miliseDifere / (1000 * 60 * 60 * 24);
console.log("Dias faltantes para el año nuevo: " + diasDifere);
console.log(Math.floor(diasDifere));




calcularTiempoVotaciones();

function calcularTiempoVotaciones(){
    console.log("Ingresar fecha y hora");
    let fechaHora = new Date("July 2, 2023 08:00:00");
    let fechaHorams = fechaHora.getTime();
    let fechaDifVot = fechaHorams - fechaActualMs;
    let diasRestantes = Math.floor(fechaDifVot / (1000 * 60 * 60 *24));
    let horasRestantes = Math.floor(fechaDifVot / (1000 * 60 * 60));
    let horasRestantesSinDecim = Math.floor(horasRestantes % 24);
    let minutosRestantes = fechaDifVot / (1000 * 60);
    let minutosRestantesSinDecim = Math.floor(minutosRestantes % 60);
    console.log("El tiempo restante para las votaciones es: " + diasRestantes + " Dias, " + horasRestantesSinDecim + " horas y " + minutosRestantesSinDecim + " minutos");
}