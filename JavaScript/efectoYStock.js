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
let stocks = []
let elements = []



class Stock {
    constructor(id, img, name, price) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.price = price
    }

    action() {
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
    }
}

fetch("../stock.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(s => {
            stocks.push(new Stock(s.id, s.img, s.name, s.price))
        })

        stocks.forEach(stock => {
            containerCartas.innerHTML += `
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

        stocks.forEach(stock => {
        document.getElementById(stock.id).addEventListener("click", stock.action);
    })
})