
//convertir a hexa, octal y binario

function convertir_numeros (){

   
    //variables de la función
    var control = false;
    let original = parseInt(prompt("Ingresa un numero en base 10"));
   
    let mensaje_pantalla_hex = document.getElementById("hexadecimal");
    let mensaje_pantalla_bin = document.getElementById("binario");
    let mensaje_pantalla_octal = document.getElementById("octal");
    
    while(control == false){// primero ciclo que controla la salida del programa

        while ( original % 10 !=0 ){// ciclo que controla si el numero es de base 10
            original = parseInt(prompt("Ingresa de nuevo"));
            //mensaje_pantalla_aceptar.innerText = "Si se pudo";
        }

        if(original == 0){
            console.log(`El resultado es 0`)
            control = true;
        }
         /*
        //ya aplicado los validadores se procede a calcular
        let hexa_conv = hexadecimal_convertir (original).reverse().toString().replaceAll(`,`, "");
        mensaje_pantalla_hex.innerText = "El número hexadecimal es: " + hexa_conv;

        //calculo a binario
        let bin_con = binario(original).reverse().toString().replaceAll(`,`, "");
        mensaje_pantalla_bin.innerText = "El número binario es: " + bin_con;

        //calculo a octal
        let oct_conv = octal(original).reverse().toString().replaceAll(`,`, "");
        mensaje_pantalla_octal.innerText = "El número octal es: " + oct_conv;

        */
        //variable que cambia para la salida

        console.log(hexadecimal_convertir(original))

        console.log(binario(original))

        console.log(octal(original))

        control = true;
        console.log("ADIOS");
    }
     
}


function hexadecimal_convertir(original){
  
    var hex = ""
    const numeros_extra = {10: "A", 11: "B", 12: "C", 13:"D", 14: "E" , 15: "F"};


   //bucle para salida del calculo
   while (original >= 1){
    //compara si es un numero definido entre 10 y 15 para numeros especiales
    if(original % 16 <= 15 && original % 16 >=10){ 
        //ciclo para saber que numero hay que insertar
        for(let a = 10 ; a<16 ; a++){
            if (a == original % 16){
                hex = numeros_extra[a] + hex
                original = Math.trunc(original / 16);
            }
           }
    }else{
        hex =  (original % 16) + hex;
        original = Math.trunc(original / 16);
    }
  
   }



    
   // while (original % 16 !=0){  este bucle genera errores
  
    return hex;

}


function binario (original){
    var bin = ""

    while (original >= 1){
        bin =  (original % 2) + bin
        original = Math.trunc(original / 2);
       }

       return bin;
}


function octal (original){
    var octal = "";   
    

    while (original >= 1){
        octal =  (original % 8) + octal
        original = Math.trunc(original / 8);
       }

       return octal;
}



function pruebas (original){

    var octal = "";   

 while (original >= 1){
        octal =  (original % 8) + octal
       original = Math.trunc(original / 8);
       }



return octal;
}
