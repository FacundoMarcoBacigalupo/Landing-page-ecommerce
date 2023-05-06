                                                // JavaScript
// Lista de todos los elemntos
const btnCart = document.querySelector('.container-cart-icon');

const containerCartProducts = document.querySelector('.container-cart-products');

const productoLista = document.querySelector('.container-cartas');

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');

const cartTotal = document.querySelector('.cart-total');

const cartInfo = document.querySelector('.cart-product');

const filaProducto = document.querySelector('.fila-product');





btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('esconder-cart');
});




// Variable de arreglo de Productos
let todosLosProductos = [];




productoLista.addEventListener('click', evento => {
	if (evento.target.classList.contains('btn-add-cart')) {
		const product = evento.target.parentElement;

		const infoProduct = {
			cantidad: 1,
			titulo: product.querySelector('h2').textContent,
			precio: product.querySelector('p').textContent,
		};

		const existe = todosLosProductos.some(
			product => product.titulo === infoProduct.titulo
		);


		if (existe) {
			const products = todosLosProductos.map(product => {
				if (product.titulo === infoProduct.titulo) {
					product.cantidad++;
					return product;
				} 
				else {
					return product;
				}
			});
			todosLosProductos = [...products];
		}
		else {
			todosLosProductos = [...todosLosProductos, infoProduct];
		}


		mostrarHTML();
	}
});




filaProducto.addEventListener('click', evento => {
	if (evento.target.classList.contains('icono-cierre')) {
		const product = evento.target.parentElement;
		const titulo = product.querySelector('p').textContent;

		todosLosProductos = todosLosProductos.filter(
			product => product.titulo !== titulo
		);

		mostrarHTML();
	}
});





// Funcion para mostrar  HTML
const mostrarHTML = () => {
	if (!todosLosProductos.length) {
		cartEmpty.classList.remove('hidden');
		filaProducto.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} 
	else {
		cartEmpty.classList.add('hidden');
		filaProducto.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}





// Limpiar HTML
	filaProducto.innerHTML = '';

	let total = 0;
	let totalDeProductos = 0;

	todosLosProductos.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.cantidad}</span>
                <p class="titulo-producto-carrito">${product.titulo}</p>
                <span class="precio-producto-carrito">${product.precio}</span>
            </div>
			<img src="./Imagenes/x.png" alt="Imagen de una X" class="icono-cierre">`;


		filaProducto.append(containerProduct);

		total = total + parseInt(product.cantidad * product.precio.slice(1));
		totalDeProductos = totalDeProductos + product.cantidad
	});



	valorTotal.innerText = `$${total} ARS`;
	countProducts.innerText = totalDeProductos;
}