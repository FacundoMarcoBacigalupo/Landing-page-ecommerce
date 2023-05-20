//Utilizo el Sweet Alert 2, poniendoselo a el boton de agreagar al carrito

const elementoBoton1 = document.getElementById("1");

const elementoBoton2 = document.getElementById("2");

const elementoBoton3 = document.getElementById("3");

const elementoBoton4 = document.getElementById("4");

const elementoBoton5 = document.getElementById("5");

const elementoBoton6 = document.getElementById("6");






const action = ()=>{
    Swal.fire({
        icon: 'success',
        title: '¡Se agrego al carrito!',
        text: 'Atrévete a arriesgarte, no sea que dejes tus talentos enterrados en el suelo...',
        width: '60%',
        backdrop: 'true',
        timer: '2000',
        timerProgressBar: 'true',
        position: 'center'
        })
};





elementoBoton1.addEventListener("click", action);

elementoBoton2.addEventListener("click", action);

elementoBoton3.addEventListener("click", action);

elementoBoton4.addEventListener("click", action);

elementoBoton5.addEventListener("click", action);

elementoBoton6.addEventListener("click", action);