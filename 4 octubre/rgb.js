function rgb() {
  let R = parseInt(prompt("Ingrese el primer número"));
  let G = parseInt(prompt("Ingrese el segundo número"));
  let B = parseInt(prompt("Ingrese el tercer número"));

  let resultado = calculos(R, G, B);
  console.log(` El color es: ${resultado}`);
}

function calculos(R, G, B) {
  let primero, segundo, tercer;

  primero = hexadecimal_convertir(R);

  segundo = hexadecimal_convertir(G);

  tercer = hexadecimal_convertir(B);

  return "#" + primero + segundo + tercer + "";
}

function hexadecimal_convertir(original) {
  var hex = "";
  const numeros_extra = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  if (original == 0) {
    hex = "00";
    return hex;
  } else {
    if (original % 16 < 10) {
      hex = "0" + (original % 16) + hex;
      original = Math.trunc(original / 16);
    } else {
      while (original >= 1) {
        //compara si es un numero definido entre 10 y 15 para numeros especiales
        if (original % 16 >= 10 && original % 16 <= 15) {
          //ciclo para saber que numero hay que insertar
          for (let a = 10; a < 16; a++) {
            if (a == original % 16) {
              hex = numeros_extra[a] + hex;
              original = Math.trunc(original / 16);
            }
          }
        } else {
          hex = (original % 16) + hex;
          original = Math.trunc(original / 16);
        }
      }
    }
    //bucle para salida del calculo

    return hex;
  }
}


//cuando se ingresa los 3 numeros entre 10 y 15 solucionar error