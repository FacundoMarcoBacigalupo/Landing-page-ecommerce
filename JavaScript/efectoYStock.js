//Cuando el usuario salga del Sitio Web se cambia el TAG "title" del head
    let tituloAnterior = document.title

window.addEventListener("blur", () => {
    tituloAnterior = document.title
    document.title = "¡Zapatillas super BARATAS!"
})


window.addEventListener("focus", () => {
    document.title = tituloAnterior
})












//Traigo el JSON y lo utilizo
const containerCartas = document.querySelector('.container-cartas');
let stock = []




class Stock{
    constructor(id, img, name, price){
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price
    }
}



fetch("https://facundomarcobacigalupo.github.io/ProyectoFinal-MarcoBacigalupo/stock.json")
.then(response => response.json())
.then(data =>{
    data.forEach(s =>{
        stock.push(new Stock(s.id, s.img, s.name, s.price))
    })

    stock.forEach(stock =>{


        containerCartas.innerHTML+=`
        <article class="carta alerts">

            <figure>
                <img src="${stock.img}" alt="${stock.name}"/>
            </figure>

            <div class="info-product">
                <h2 class="marca">${stock.name}</h2>
                <p class="price precio">$${stock.price}</p>
                <button id="${stock.id}" class="btn-add-cart">Añadir al carrito</button>
            </div>

        </article>
        `
    })

})