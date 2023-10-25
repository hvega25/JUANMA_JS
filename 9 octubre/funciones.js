
function rombo() {
    var body = document.getElementsByTagName("body")[0];
  
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var espacios = 2;
  
    //Crea las celdas.
    for (var i = 1; i <= 5; i++) {
      //Crea las hileras de la tabla.
      var hilera = document.createElement("tr");
  
      for (var j = 1; j <= 5; j++) {
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(" ");
  
        celda.style.width = "20px";
        celda.style.height = "20px";
  
        for (let a = 1; a <= i; a++) {
        
            if (j == 3 || i == 3 ) {
              celda.style.backgroundColor = "red";
              celda.appendChild(textoCelda);
              hilera.appendChild(celda);
            } else  if ((i >= 2 && i<=4) &&(j >= 2 && j<=4) ){
              celda.style.backgroundColor = "red";
              celda.appendChild(textoCelda);
              hilera.appendChild(celda);
            }else{
              celda.style.backgroundColor = "white";
              celda.appendChild(textoCelda);
              hilera.appendChild(celda);
            }
          
          }
         
      }
      //Agrega la hilera al final de la tabla (al final del elemento tblbody).
      tblBody.appendChild(hilera);
    }
  
    //Posiciona el <tbody> debajo del elemento <table>.
    tabla.appendChild(tblBody);
    //appends <table> into <body>.
    body.appendChild(tabla);
    //Modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }
  