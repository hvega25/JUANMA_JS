


function con_POW (){
console.time();
numero1= prompt("Escribe un numero que sea la base");
numero2= prompt("Escribe un numero que sea la exponente");

let resultado = Math.pow(numero1,numero2)

console.log(`EL RESULTADO CON FUNCIÓN POW = ${resultado} `)

console.timeEnd();
}


function con_bucle (){
    console.time();
    let a = parseInt ( prompt("Escribe la base"))
    let b = parseInt ( prompt("Escribe el exponente"))
    
    let resultado;

  for (let c =0; c<b ; c++)
  {
    resultado *= a;

  }
   
    console.log(`EL RESULTADO CON BUCLE = ${resultado} `)
    console.timeEnd();
}


function calculos_numeros (){

    let a = parseInt ( prompt("Escribe el numero 1"))
    let b = parseInt ( prompt("Escribe el numero 1"))
    let c = parseInt ( prompt("Escribe el numero 1"))

    let media = (a + b + c ) /2 ;

    console.log(media)
}


//media, mediana,mayor, menor






