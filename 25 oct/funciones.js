function calcular_fecha() {
  let rango_1 = 2000;
  let rango_2 = 2050;
  let mayor, menor;

  let año_1 = parseInt(prompt("Ingresa un un año entre 2000 y 2050"));
  let año_2 = parseInt(prompt("Ingresa un un año entre 2000 y 2050"));

  if (año_1 > año_2) {
    mayor = año_1;
    menor = año_2;
  } else {
    mayor = año_2;
    menor = año_1;
  }

  if (menor >= rango_1 || mayor <= rango_2) {
    for (let o = menor; o <= mayor; o++) {
      var d = new Date(o, 0, 1, 10, 33, 30, 0);
      if (d.getDay() == 3) {
        console.log(d);
      }
    }
  }
}

//vocales
function vocals() {
  let texto = prompt("Ingresa una frase");
  let vocales = [/[aAÀàâäàåÄÅáÁÂÀãÃ]/];

  
    console.log(texto.match(vocales[0]));
  
}
