//Primero se le da la bienvenida al cliente, luego se le pregunta si está interesado en nuestros Servicios, después se le pregunta en cuál de los servicios tiene interés y se termina.


alert("Bienvenido a MFL")

    const servicio1 = "Jupiter"
    const servicio2 = "Saturno"
    const servicio3 = "Urano"



                                 //Funcion que contiene el nombre de los 3 servicios.
    function serviciosMFl(){
       let servicios = servicio1 + ", " + servicio2 + ", " + servicio3
       return servicios
    }




                                                //Servicio JUPITER.
    function jupiter(){
        let respuestaCliente = prompt("Este servicio se llama " + servicio1 + " y tiene un valor de $9000 ARS, ¿Desea continuar con este servicio? SI-NO").toUpperCase().trim( )

        if (respuestaCliente === true || respuestaCliente === "SI"){
            alert ("+54 11 2904439 este es nuestro numero de celular para contactarnos y concreatar una reunion, lo esperamos.")
        }
        else{
            alert("Esperamos volver a verte")
        }   
    return("Gracias por su tiempo.")
    }




                                                //Servicio SATURNO.
    function saturno(){
        let respuestaCliente = prompt("Este servicio se llama " + servicio2 + " y tiene un valor de $11000 ARS, ¿Desea continuar con este servicio? SI-NO").toUpperCase().trim( )

        if (respuestaCliente === true || respuestaCliente === "SI"){
            alert ("+54 11 2904439 este es nuestro numero de celular para contactarnos y concreatar una reunion, lo esperamos.")
        }
        else{
            alert("Esperamos volver a verte")
        }
    return("Gracias por su tiempo.")
    }




                                                 //Servicio URANO.                         
    function urano(){
         let respuestaCliente = prompt("Este servicio se llama " + servicio3 + " y tiene un valor de $15000 ARS, ¿Desea continuar con este servicio? SI-NO").toUpperCase().trim( )

        if (respuestaCliente === true || respuestaCliente === "SI"){
            alert ("+54 11 2904439 este es nuestro numero de celular para contactarnos y concreatar una reunion, lo esperamos.")
        }
        else{
            alert("Esperamos volver a verte")
        }
    return("Gracias por su tiempo.")
    }





let consulta = confirm("¿Estas interesado en nuestros servicios de Marketing Digital? Contamos con estos 3 " + serviciosMFl())
    



if(consulta === true){

    let interesCliente = prompt("¿Que servicio le interesa de los que tenemos?").toLowerCase().trim( )

    while(interesCliente !=" " && interesCliente != null){

        if(interesCliente === "jupiter"){
            alert(jupiter())
            break;
        }
        
        else if(interesCliente === "saturno"){
            alert(saturno())
            break;
        }
        
        else if(interesCliente === "urano"){
            alert(urano())
            break;
        }

        else{
            alert("No contamos con el servicio " + interesCliente + ", intente con uno de estos sercicios: " + serviciosMFl())
            break;
        }
    }


}
else{
    alert("Esperamos volver a verte por acá")
}