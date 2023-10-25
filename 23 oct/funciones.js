/*Obtenir un nombre l'atzar entre (1-100)  Es tracta de que l'usuari l'endevind si l'encerta se
li mostrara "Obtingut en n intents "  Si introdueix  un zero es pintara "Game over" es sortira
si talla se le dira "menor o major" Si introdueix algun valor invalidad no passa res (es segueix)
pero es compta un intent més*/

function adivina() {
  var numero_aleatorio = getRandomInt(100);
  var contador = 0;
  let numero = parseInt(prompt("Ingresa un numero"));

  var control_salida = false;

  while (control_salida != true) {
    if (numero == 0) {
      console.clear();
      console.log("Game Over");
      control_salida = true;
    } else {
      while (numero != numero_aleatorio) {
        if (numero > numero_aleatorio) {
          console.clear();
          console.log(`El numero aleatorio es menor`);
        } else {
          console.clear();
          console.log(`El numero aleatorio es mayor`);
        }
        numero = parseInt(prompt("Ingresa un numero"));
        contador++;

        if (numero == 0) {
          break;
        }
      }
      console.clear();
      console.log(`Otenido en ${contador} intentos`);
    }

    control_salida = true;
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
