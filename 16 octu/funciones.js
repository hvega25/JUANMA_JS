//Demanar un nom darxiu a l'usuari i tornar per consola l'extensió d'arxiu
//demanar un text a l'usuari i dir si té el mateix numero de "a" que de "b"

function extension_archivo() {
  let texto = prompt("Ingresa un texto");

  let dividir = texto.split(".");

  console.log(dividir[1]);
}

function vocal_a_b() {
  let texto = prompt("Ingresa un texto");
  let cantidad_a = 0,
    cantidad_b = 0;

  for (let c = 0; c < texto.length; c++) {
    if (texto[c] == "a") {
      cantidad_a++;
    } else {
      if (texto[c] == "b") {
        cantidad_b++;
      }
    }
  }

  console.log(`La cantidad de letras a es: ${cantidad_a} y la cantidad de b es ${cantidad_b}`);
}
