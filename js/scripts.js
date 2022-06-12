import { products } from './data.js';
import Product from './Product.js';
import Cart from './Cart.js';
import Popup from './Popup.js';

const productContainer = document.querySelector('.products-list');
const cartContainer = document.querySelector('.cart-container');

const cart = new Cart({ container: cartContainer });
cart.render();

const popup = new Popup();

products.forEach(item => {
  const product = new Product({ product:item, container: productContainer, cart, popup });
  product.render();
})