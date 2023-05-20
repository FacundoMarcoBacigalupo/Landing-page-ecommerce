//Lista de todos los elementos
const btnCart = document.querySelector('.container-cart-icon');

const containerCartProducts = document.querySelector('.container-cart-products');

const productoLista = document.querySelector('.container-cartas');

const valorTotal = document.querySelector('.total-pagar');

const filaProducto = document.querySelector('.fila-product');

let countProducts = document.querySelector('#contador-productos');

let cartEmpty = document.querySelector('.cart-empty');

let cartTotal = document.querySelector('.cart-total');

let cartInfo = document.querySelector('.cart-product');

//Variable de arreglo de Productos
let todosLosProductos = [];








const containerCarrito = () =>{
    containerCartProducts.classList.toggle('esconder-cart');
};

btnCart.addEventListener('click', containerCarrito)








const cargarCarrito = (e) =>{
	if (e.target.classList.contains("btn-add-cart")) {
		const product = e.target.parentElement;

		const infoProduct = {
			cantidad: 1,
			titulo: product.querySelector('h2').textContent,
			precio: product.querySelector('p').textContent,
		};

		const existe = todosLosProductos.some(
			product => product.titulo === infoProduct.titulo
		);


		if (existe){
			const products = todosLosProductos.map(product =>{

				if (product.titulo === infoProduct.titulo){
					product.cantidad++;
					return product
				} 
				else{
					return product
				}
			});

			todosLosProductos = [...products]
		}
		else{
			todosLosProductos = [...todosLosProductos, infoProduct]
		}


		mostrarHTML();
		renderCarrito()
		}
};

productoLista.addEventListener('click', cargarCarrito)







filaProducto.addEventListener('click', e => {
	if (e.target.classList.contains('icono-cierre')) {
		const product = e.target.parentElement;
		const titulo = product.querySelector('p').textContent;

		todosLosProductos = todosLosProductos.filter(
			product => product.titulo !== titulo
		);

		mostrarHTML();
		renderCarrito()
	}
});






//Funcion para mostrar HTML
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

//Limpiar HTML
	filaProducto.innerHTML = ''
};






//Renderizado
function renderCarrito(){

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


	addLocalStorage()
};











//LocalStorage para almacenar los productos del carrito
function addLocalStorage(){
	localStorage.setItem("container-cart-products", JSON.stringify(todosLosProductos))
};


window.onload = function(){
	let storage = JSON.parse(localStorage.getItem("container-cart-products"));

	if(storage){
		todosLosProductos = storage;
		mostrarHTML()
		renderCarrito()
	}
};