// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");


// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onClick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	cartList.innerHTML = '';
	sessionStorage.setItem('cart', JSON.stringify(cart));
	cart.forEach((product) => {
	    const li = document.createElement("li");
	    li.innerHTML = `${product.name} - $${product.price}`;
	    cartList.appendChild(li);
	});
}

// Add item to cart
function addToCart(productId) {
	const product = products.find(p => p.id === productId);
  
	if (!product || cart.some(item => item.id === productId)) return;
	
	cart.push(product);
	renderCart();
}

// Remove item from cart
// function removeFromCart(productId) {
// 	const index = cart.findIndex(item => item.id === productId);
// 	if (index !== -1) {
// 		cart.splice(index, 1); // Remove the item
// 	}
// 	renderCart();
// }

// Clear cart
function clearCart() {
	cart = [];
	renderCart();
}


document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

// Initial render
renderProducts();
renderCart();
