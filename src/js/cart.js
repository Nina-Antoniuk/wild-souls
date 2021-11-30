import refs from './refs';

refs.goodsListEl.addEventListener('click', createProductItemHandler);
refs.cartBtnEl.addEventListener('click', opensCartHandler);
refs.mobileCartBtnEl.addEventListener('click', opensCartHandler);

const cart = {
  items: [],

  addItem(product) {
    createCartItemMurkup(product);
    this.items.push(product);
  },

  setPrice(product) {
    return Number(product.price) * product.quantity;
  },

  clear() {
    cart.items = [];
  },
};

function createProduct(targetBtnParentEl) {
  const product = {};
  product.title = targetBtnParentEl.children[0].textContent;
  product.price = targetBtnParentEl.children[1].children[0].textContent;
  product.quantity = 1;
  return product;
}

function createCartItemMurkup(product) {
  const markup = `<li>${product.title} 
                    <span id="quantity">${product.quantity}</span>
                    - total price
                    <span id="total-price">${cart.setPrice(product)}</span> &#8364;
                  </li>`;
  refs.shoppingListEL.insertAdjacentHTML('beforeend', markup);
}

function createProductItemHandler(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else {
    const targetBtnParentEl = e.target.parentNode;
    const product = createProduct(targetBtnParentEl);
    cart.addItem(product);
  }
}

function opensCartHandler() {
  refs.cartSection.classList.remove('is-hidden');
  refs.cartCloseBtnEl.addEventListener('click', closesCartHandler);

  const goodsListEl = document.querySelector('.goods-list-js');

  goodsListEl.addEventListener('click', createProductItemHandler);
}

function closesCartHandler() {
  refs.cartSection.classList.add('is-hidden');
  refs.cartCloseBtnEl.removeEventListener('click', closesCartHandler);
}
