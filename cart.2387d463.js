parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={body:document.body,menuBtn:document.querySelector("#menu-btn-js"),mobileMenu:document.querySelector("#mobile-menu-js"),closeMobileMenuBtn:document.querySelector("#close-menu-btn-js"),mobileLoginEl:document.querySelector(".mobile-menu__login-btn-js"),loginEl:document.querySelector(".login-btn-js"),mobileCartBtnEl:document.querySelector(".mobile-menu__cart-btn-js"),cartBtnEl:document.querySelector(".cart-btn-js"),backdropEl:document.querySelector(".backdrop"),formCloseBtn:null,form:document.querySelector(".registration-form"),cartSection:document.querySelector(".cart"),cartCloseBtnEl:document.querySelector(".cart__close-btn"),shoppingListEL:document.querySelector(".shopping-list")},t=e;exports.default=t;
},{}],"zaPY":[function(require,module,exports) {
"use strict";var t=e(require("./refs"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=r(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,c=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw c}}}}function r(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.default.cartBtnEl.addEventListener("click",l);var o={items:[],addItem:function(t){var e,r=n(this.items);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(t.title===i.title){this.increment(i),this.setPrice(i).toFixed(2);var o=document.querySelectorAll("#total-price");return o[this.items.indexOf(i)].innerHTML=this.setPrice(i).toFixed(2),void console.log(o[this.items.indexOf(i)])}}}catch(c){r.e(c)}finally{r.f()}a(t),this.items.push(t)},setPrice:function(t){return Number(t.price)*t.quantity},increment:function(t){return t.quantity+=1},decrement:function(t){return t.quantity-=1},clear:function(){o.items=[]}};function c(t){var e={};return e.title=t.children[0].textContent,e.price=t.children[1].children[0].textContent,e.quantity=1,e}function a(t){var e="<li>".concat(t.title,' \n                  <button class="decrement-js" type="button"> - </button>\n                  <span id="quantity">').concat(t.quantity,'</span>\n                  <button class="increment-js" type="button"> + </button>\n                  - total price\n                  <span id="total-price">').concat(o.setPrice(t),"</span> &#8364;\n                  <button>Delete</button></li >");shoppingListEL.insertAdjacentHTML("beforeend",e)}function u(t){if("BUTTON"===t.target.nodeName){var e=c(t.target.parentNode);o.addItem(e)}}function l(){t.default.cartSection.classList.remove("is-hidden"),t.default.cartCloseBtnEl.addEventListener("click",s);document.querySelector(".goods__slide-btn");var e=document.querySelector(".goods-list-js");document.querySelectorAll(".decrement-js"),document.querySelectorAll(".increment-js");e.addEventListener("click",u)}function s(){t.default.cartSection.classList.add("is-hidden"),t.default.cartCloseBtnEl.removeEventListener("click",s)}
},{"./refs":"VyiV"}]},{},["zaPY"], null)
//# sourceMappingURL=/wild-souls/cart.2387d463.js.map