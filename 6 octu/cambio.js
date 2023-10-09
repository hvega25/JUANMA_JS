function cambio() {
  let preu_producte = parseInt(prompt("Ingresa un numero"));
  let diners_lliurat = parseInt(prompt("Ingresa un numero"));
  let posicion = 1;
let cambios ="";
  let diferencia = preu_producte - diners_lliurat;
  const numeros_extra = {
    1: 500,
    2: 100,
    3: 50,
    4: 20,
    5: 10,
    6: 5,
    7: 2,
    8: 1,
  };

  for(let a = 1 ; a < 9 ; a++){
    if((diferencia / numeros_extra[a]) >= 1){
        cambios = cambios + (diferencia / numeros_extra[a])+ "  billetes de "+ numeros_extra[a]  + " ----------";       
    }
  }
  
 
  console.log(cambios)
}
