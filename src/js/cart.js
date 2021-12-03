import { v4 as uuid } from 'uuid';
import refs from './refs';

refs.goodsListEl.addEventListener('click', createProductItemHandler);
refs.cartBtnEl.addEventListener('click', opensCartHandler);
refs.mobileCartBtnEl.addEventListener('click', opensCartHandler);
refs.cartSection.addEventListener('click', clickHandler);

const cart = {
  items: [],

  add(data) {
    this.items.push(data);
  },

  decrement(e, id) {
    this.items.find(el => {
      if (el.id === id) {
        if (el.quantity > 1) {
          el.quantity -= 1;
          this.chengeQuantityMarkup(e, el);
          el.price = (el.price / (el.quantity + 1)) * el.quantity;
          this.chengePriceMarkup(e, el);
        } else {
          const btn = document.querySelector(`#${el.btn}`);
          btn.removeAttribute('disabled');
          e.target.parentNode.remove();
        }
      }
    });
  },

  increment(e, id) {
    return this.items.find(el => {
      if (el.id === id) {
        el.quantity <= 0 ? el.quantity : (el.quantity += 1);
        this.chengeQuantityMarkup(e, el);
        el.price = (el.price / (el.quantity - 1)) * el.quantity;
        this.chengePriceMarkup(e, el);
      }
    });
  },

  createMarkup({ id, title, quantity, price }) {
    const data = `
      <li id=${id}>
        ${title}
        <button class="decrement" type="button"> - </button>
        <span class="quantity">${quantity}</span>
        <button class="increment" type="button"> + </button>
        total price
        <span class="total-price">${price}</span> &#8364;
      </li>`;

    refs.shoppingListEL.insertAdjacentHTML('beforeend', data);
  },

  chengeQuantityMarkup(e, el) {
    e.target.parentNode.children[1].textContent = el.quantity;
  },

  chengePriceMarkup(e, el) {
    e.target.parentNode.children[3].textContent = el.price.toFixed(2);
  },

  clear() {
    cart.items = [];
    console.log(refs.goodsListEl); // on delete + remove all disabled attr from btn`s on product cards
  },
};

function clickHandler(e) {
  const targetElClassList = [...e.target.classList];
  const itemId = e.target.parentNode.id;
  if (targetElClassList.includes('increment')) {
    cart.increment(e, itemId);
  }

  if (targetElClassList.includes('decrement')) {
    cart.decrement(e, itemId);
  }
}

function createProductItemHandler(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else {
    e.target.setAttribute('disabled', true);
    const targetBtnParentEl = e.target.parentNode;
    const product = createProduct(targetBtnParentEl);
    cart.add(product);
    cart.createMarkup(product);
  }
}

function createProduct(targetBtnParentEl) {
  const product = {};
  product.title = targetBtnParentEl.children[0].textContent;
  product.price = targetBtnParentEl.children[1].children[0].textContent;
  product.quantity = 1;
  product.id = uuid();
  product.btn = targetBtnParentEl.children[2].id;
  return product;
}

function opensCartHandler() {
  refs.cartSection.classList.remove('is-hidden');
  refs.cartCloseBtnEl.addEventListener('click', closesCartHandler);
}

function closesCartHandler() {
  refs.cartSection.classList.add('is-hidden');
  refs.cartCloseBtnEl.removeEventListener('click', closesCartHandler);
}
