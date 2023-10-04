comprobar()

function hora (){

    let hora = parseInt( prompt ( "Escribe la hora"));
    let minutos = parseInt( prompt ( "Escribe los minutos"));
    let segundos = parseInt( prompt ( "Escribe los segundos"))
   

    const d = new Date();

    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDay();


    if(hora >= 0 && hora <=24){
        if(minutos >= 0  && minutos <= 60 ){
            if (segundos >= 0  && segundos <= 60){
                segundos++;
                const fecha = new Date(year.toString(), month.toString() , day.toString(), hora.toString() , minutos.toString(), segundos.toString(),0);
  
                console.log(fecha);

            }
        }
    }else{
        console.log("no")
    }



    
}


function comprobar(){


    let year1 = parseInt( prompt ( "Escribe el año"));
    let month1 = prompt ( "Escribe el mes");
    let day1 = parseInt( prompt ( "Escribe el dia"))
   
    var d = new Date();

    if(year1 == d.getFullYear && month1  == d.getMonth && day1 == d.getDay){
                console.log("Correcto")
                
        }
    else {
        console.log("Fecha incorrecta");
        console.log(d)
      
    }





    

}