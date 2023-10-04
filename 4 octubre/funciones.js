/*Una compañia telefonica cobra 10 centimos por establecer llamada y 5€ por minuto*/
function llamada(){
    let duracion_horas = parseInt(prompt("Ingresa las horas de llamada"));
    let duracion_minutos = parseInt(prompt("Ingresa los minutos de la llamada"));
    let duracion_segundos = parseInt(prompt("Ingresa las segundos de la llamada"));



    let a = calculos(duracion_horas, duracion_minutos, duracion_segundos).toFixed(2);

    console.log(`La tarifa calculada es: ${a}€`)


}


function calculos (duracion_horas, duracion_minutos, duracion_segundos){

    let horas_convertir_a_segundos = (duracion_horas  * 60)*60;
    let minutos_convertir_a_segundos = duracion_minutos *60;

    let total =( horas_convertir_a_segundos + minutos_convertir_a_segundos + duracion_segundos) * (0.05);
    return total +  0.10;
}


//hacer después ignorar ahora
function validaciones (duracion_horas){

    
    if(duracion_horas < 0 && duracion_minutos < 0 && duracion_segundos <0) {
        console.log("NO");
    }
    

   let v = duracion_horas  + "";

   console.log(v.charCodeAt(0))
}