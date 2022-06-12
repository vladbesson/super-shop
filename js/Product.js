class Product {
  constructor(props) {
    this._product = props.product;
    this._container = props.container;
    this._cart = props.cart;
    this._popup = props.popup;
    this._productCard = null;
  }

  _getTemplate = () => {
    const template = `<div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card">
        <img height='200' src="https://i.postimg.cc/rp5nPjPM/martin-sanchez-fnys-C6aps-Oc-unsplash.jpg" class="card-img-top" alt="Product name">
        <div class="card-body">
          <h5 class="card-title">Product name</h5>
          <h6 class="card-subtitle mb-2 text-muted">$200</h6>
          <button type="button" class="btn btn-primary read-more">
            Read more
          </button>
          <button type="button" class="btn btn-warning add-to-cart">
            Add to cart
          </button>
        </div>
      </div>
    </div>`;

    const element = document.createElement('div');
    element.innerHTML = template;

    return element.firstChild;
  }

  _addListeners = () => {
    const addToCart = this._productCard.querySelector('.add-to-cart');
    addToCart.addEventListener('click', () => {
      this._cart.add(this._product);
    });

    const readMore = this._productCard.querySelector('.read-more');
    readMore.addEventListener('click', () => {
      this._popup.render(this._product);
    });
  }

  render = () => {
    this._productCard = this._getTemplate();

    this._productCard.querySelector('.card-title').textContent = this._product.name;
    this._productCard.querySelector('.card-subtitle').textContent = `$${this._product.cost}`;
    this._productCard.querySelector('img').src = this._product.cover;

    this._addListeners();

    this._container.appendChild(this._productCard);
  }
}

export default Product;