comprobar ()
function comprobar(){

    let numero1 = Math.abs(parseInt ( prompt("Escribe un numero")))
    let numero2 = Math.abs(parseInt ( prompt("Escribe un numero")))

    
    if(numero1 > numero2){
        console.log(`El número 1 es cercano a 100 = ${numero1}`)
    }else {
        console.log(`El número 2 es cercano a 100 = ${numero2}`)
    }


}