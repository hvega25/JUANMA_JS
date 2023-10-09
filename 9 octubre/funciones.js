//t = document.createElement("table");
//document.body.appendChild(t);


function crearTabla (){
    let filas = parseInt(prompt("Ingresa el número de filas"));
    let colunmas = parseInt(prompt("Ingresa el número de columna"));

    var body = document.getElementsByTagName("body")[0];


    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    //Crea las celdas.
    for (var i=1; i<=filas; i++) {
        //Crea las hileras de la tabla.
        var hilera = document.createElement("tr");
        for (var j=1; j<=colunmas; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(i + "," + j);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
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

