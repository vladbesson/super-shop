class Cart {
  constructor(props) {
    this._container = props.container;
    this._products = [];
    this._total = 0;
    this._cart = null;
  }

  _getTemplate = () => {
    const template = `<div>
      <h3 class="d-flex justify-content-between align-items-center"><span>Cart</span> <span class="badge bg-secondary badge-total">$550</span></h3>
    
      <ul class="list-group list-group-products">
        
      </ul>

      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between">
          <h6>Total (USD)</h6>
          <b class="list-total">$0</b>
        </li>
      </ul>

      <div class="card mt-3">
        <button type="button" class="btn btn-success checkout-btn" disabled>Buy!</button>
      </div>
    </div>`;

    const element = document.createElement('div');
    element.innerHTML = template;

    return element.firstChild;
  }

  _getProductTemplate = () => {
    const template = `<li class="list-group-item d-flex justify-content-between">
      <h6>Product 1</h6>
      <span>$200</span>
    </li>`;

    const element = document.createElement('div');
    element.innerHTML = template;

    return element.firstChild;
  }

  _checkout = () => {
    console.log('Куплено - ', this._products);
    
    this._products = [];
    this._update();
  }

  _addListeners = () => {
    const button = this._cart.querySelector('.checkout-btn');
    button.addEventListener('click', this._checkout);
  }

  _getTotal = () => {
    this._total = this._products.reduce((acc, item) => acc + item.cost, 0);
  }

  render = () => {
    this._cart = this._getTemplate();

    this._cart.querySelector('.badge-total').textContent = `$${this._total}`;
    this._cart.querySelector('.list-total').textContent = `$${this._total}`;

    if (this._total) {
      this._cart.querySelector('.checkout-btn').disabled = false;


      const productsList =  this._cart.querySelector('.list-group-products');

      this._products.forEach(item => {
        const newProduct =this. _getProductTemplate();

        newProduct.querySelector('h6').textContent = item.name;
        newProduct.querySelector('span').textContent = `$${item.cost}`;
        
        productsList.appendChild(newProduct);
      });
    };
    
    this._addListeners();

    this._container.appendChild(this._cart);
  }

  _update = (product) => {
    this._getTotal();
    
    this._cart.remove();

    this.render();
  }

  add = (product) => {
    this._products.push(product);
    this._update();
  }
}

export default Cart;