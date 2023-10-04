mensaje = prompt("Escribe un numero");

let acumular =0; 
const fib = [];
let tope = mensaje

for (let conteo =1; conteo < tope ; conteo++){
    console.log(`fib[${conteo}] = ${acumular + acumular }`)
    acumular++;
}
