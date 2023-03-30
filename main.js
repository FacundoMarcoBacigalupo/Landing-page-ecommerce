//Primero se le da la bienvenida al cliente, luego se le pregunta si está interesado en nuestros Servicios, después se le pregunta en cuál de los servicios tiene interés y se termina.


alert("Bienvenido a MFL")

    const servicio1 = " Jupiter"
    const servicio2 = " Saturno"
    const servicio3 = " Urano"

    const serviciosMFl = [servicio1,servicio2,servicio3]





                                            //Funcion constructura
    function Servicio(nombre, contenido, precio){

            this.nombre = nombre
            this.contenido = contenido
            this.precio = precio

            this.info = function(){
                let respuestaCliente = prompt(`Este servicio se llama ${nombre}, tiene un valor de ${precio}, cuenta con ${contenido}, ¿Desea continuar con este servicio? SI-NO`).toUpperCase().trim( )

                if (respuestaCliente === true || respuestaCliente === "SI"){
                    alert ("+54 11 2904439 este es nuestro numero de celular para contactarnos y concreatar una reunion, lo esperamos.")
                }
                else{
                    alert("Esperamos volver a verte")
                } 
            return "Gracias por su tiempo"  
            }
    }






                                            //Servicio JUPITER
    const jupiter = new Servicio("Jupiter", "4 publicaciones", "$9000 ARS")





                                            //Servicio SATURNO
    const saturno = new Servicio("Saturno", "8 publicaciones", "$11000 ARS")





                                            //Servicio URANO                        
    const urano = new Servicio("Urano", "12 publicaciones", "$15000 ARS")





let consulta = confirm("¿Estas interesado en nuestros servicios de Marketing Digital? Contamos con estos 3 servicios:" + serviciosMFl)



if(consulta === true){

    let interesCliente = prompt("¿Que servicio le interesa de los que tenemos?").toLowerCase().trim( )

    while(interesCliente !=" " && interesCliente != null){

        if(interesCliente === "jupiter"){
            alert(jupiter.info())
            break;
        }
        
        else if(interesCliente === "saturno"){
            alert(saturno.info())
            break;
        }
        
        else if(interesCliente === "urano"){
            alert(urano.info())
            break;
        }

        else{
            alert("No contamos con el servicio " + interesCliente + ", intente con uno de estos sercicios: " + serviciosMFl)
            break;
        }
    }


}
else{
    alert("Esperamos volver a verte por acá")
}