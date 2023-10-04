
function convertir(){
    //variables 
   
    let numero = parseInt(prompt(" Ingresa un número: "));
    let years ,months, days;
    //auxiliares
    let resto_dias;
    if (numero % 365 == 0){
      years = numero / 365;
      months = numero / 30;
      days = numero;

      console.log(`Son = ${years} años ,o ${months} meses ,o ${days} días`)
    }else{
       years = Math.trunc(numero / 365);
       months = Math.trunc(numero / 30)
       resto_dias = numero - (years * 365)

       console.log(` Son ${years} años o ${months} meses`);
    }
}



//convertir a grados farenheit
function grados(){
   
    let grados = prompt("Ingresa F para convertir a farenheit o C para convertir a Celsius")

    if(grados == "F" ||grados ==  "f"){
        let celsi = parseInt(prompt("Ingrese los grados farenheit a conventir"))
            let faren = (celsi - 32)  * (5/9);
            console.log(` EL resultado es: ${faren}`)
    }else{

        if(grados == "C" ||grados ==  "c"){
            let farenheit = parseInt(prompt("Ingrese los grados celsius a conventir"))
            let cel = (farenheit * 9/5)   + 32 ;
            console.log(` EL resultado es: ${cel}`)
              
        }
    } 
      


    document.getElementById("cambiar").innerText = ":D";
    
}
