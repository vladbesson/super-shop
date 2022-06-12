class Popup {
  static container = document.querySelector('body');

  constructor() {
    this._popup = null;
  }

  _getTemplate = () => {
    const template = `<div class="popup">
      <div class="popup__box">
        <button class="popup__close" type="button">x</button>
        <div class="popup__body">
          <h4 class="popup_product-name"></h4>
          <p class="popup_product-text"></p>
          <p class="popup_product-cost"></p>
        </div>
      </div>
    </div>`;

    const element = document.createElement('div');
    element.innerHTML = template;

    return element.firstChild;
  }

  _close = () => {
    this._popup.remove();
  }

  render(product) {
    const { name = 'Product name', cost = '200', text = 'Lorem ipsum dolor sit amet.'} = product || {};

    this._popup = this._getTemplate();

    this._popup.querySelector('.popup_product-name').textContent = name;
    this._popup.querySelector('.popup_product-text').textContent = text;
    this._popup.querySelector('.popup_product-cost').textContent = `$${cost}`;

    const closeBtn = this._popup.querySelector('.popup__close');
    closeBtn.addEventListener('click', this._close);

    Popup.container.appendChild(this._popup);
  } 
}

export default Popup;

