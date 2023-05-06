//Cuando el usuario salga del Sitio Web se cambia el TAG "title" del head
    let tituloAnterior = document.title

window.addEventListener("blur", () => {
    tituloAnterior = document.title
    document.title = "¡Zapatillas super BARATAS!"
})


window.addEventListener("focus", () => {
    document.title = tituloAnterior
})