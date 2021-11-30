const refs = {
  body: document.body,
  menuBtn: document.querySelector('#menu-btn-js'),
  mobileMenu: document.querySelector('#mobile-menu-js'),
  closeMobileMenuBtn: document.querySelector('#close-menu-btn-js'),
  mobileLoginEl: document.querySelector('.mobile-menu__login-btn-js'),
  loginEl: document.querySelector('.login-btn-js'),
  mobileCartBtnEl: document.querySelector('.mobile-menu__cart-btn-js'),
  cartBtnEl: document.querySelector('.cart-btn-js'),

  // registration form
  backdropEl: document.querySelector('.backdrop'),
  formCloseBtn: null,
  form: document.querySelector('.registration-form'),

  // cart
  cartSection: document.querySelector('.cart'),
  cartCloseBtnEl: document.querySelector('.cart__close-btn'),
  shoppingListEL: document.querySelector('.shopping-list'),

  //goods
  goodsListEl: document.querySelector('.goods-list-js'),
};

export default refs;
