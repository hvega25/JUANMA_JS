tabla()
function tabla(){
    mensaje = prompt("Escribe un numero");

    if(mensaje < 0){
        console.warn("No se puede multiplicar")
    }else{
        for( let c =1; c<11 ; c++){
            console.log(`${mensaje} * ${c}  =  ${mensaje * c}`)
        }
    }
    
}