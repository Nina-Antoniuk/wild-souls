import refs from './refs';

// const addToCartBtnEl = document.querySelector('.goods__slide-btn');
// const goodsListEl = document.querySelector('.goods-list-js');

// const decremrntEl = document.querySelectorAll('.decrement-js');
// const incremrntEl = document.querySelectorAll('.increment-js');

// goodsListEl.addEventListener('click', createProductItemHandler);

refs.cartBtnEl.addEventListener('click', opensCartHandler);

const cart = {
  items: [],

  addItem(product) {
    for (let item of this.items) {
      if (product.title === item.title) {
        this.increment(item);
        this.setPrice(item).toFixed(2);

        const totalPriceEl = document.querySelectorAll('#total-price');
        totalPriceEl[this.items.indexOf(item)].innerHTML = this.setPrice(item).toFixed(2);
        console.log(totalPriceEl[this.items.indexOf(item)]);
        
        return
      }
    }
    createCartItemMurkup(product);
    this.items.push(product);
  },

  setPrice(product) {
    return Number(product.price) * product.quantity;
  },

  increment(item) {
    return item.quantity += 1;
  },

  decrement(item) {
    return item.quantity -= 1;
  },
  
  clear() {
    cart.items = [];
  }
}


function createProduct(targetBtnParentEl) {
  const product = {}
  product.title = targetBtnParentEl.children[0].textContent;
  product.price = targetBtnParentEl.children[1].children[0].textContent;
  product.quantity = 1;
  return product;
}

function createCartItemMurkup(product) {
  const markup = `<li>${product.title} 
                  <button class="decrement-js" type="button"> - </button>
                  <span id="quantity">${product.quantity}</span>
                  <button class="increment-js" type="button"> + </button>
                  - total price
                  <span id="total-price">${cart.setPrice(product)}</span> &#8364;
                  <button>Delete</button></li >`;
  shoppingListEL.insertAdjacentHTML('beforeend', markup);
}

function createProductItemHandler(e) {
  if (e.target.nodeName !== "BUTTON") {
    return
  } else {
    const targetBtnParentEl = e.target.parentNode;
    const product = createProduct(targetBtnParentEl);
    cart.addItem(product);
  }
}

function opensCartHandler() {
  refs.cartSection.classList.remove('is-hidden');
  refs.cartCloseBtnEl.addEventListener('click', closesCartHandler);

  
const addToCartBtnEl = document.querySelector('.goods__slide-btn');
const goodsListEl = document.querySelector('.goods-list-js');

const decremrntEl = document.querySelectorAll('.decrement-js');
const incremrntEl = document.querySelectorAll('.increment-js');

goodsListEl.addEventListener('click', createProductItemHandler);
}

function closesCartHandler() {
  refs.cartSection.classList.add('is-hidden');
  refs.cartCloseBtnEl.removeEventListener('click', closesCartHandler);

  
// const addToCartBtnEl = document.querySelector('.goods__slide-btn');
// const goodsListEl = document.querySelector('.goods-list-js');

// const decremrntEl = document.querySelectorAll('.decrement-js');
// const incremrntEl = document.querySelectorAll('.increment-js');

// goodsListEl.addEventListener('click', createProductItemHandler);
}


