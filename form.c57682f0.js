parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={body:document.body,menuBtn:document.querySelector("#menu-btn-js"),mobileMenu:document.querySelector("#mobile-menu-js"),closeMobileMenuBtn:document.querySelector("#close-menu-btn-js"),backdropEl:document.querySelector(".backdrop"),formCloseBtn:null,form:document.querySelector(".registration-form"),mobileLoginEl:document.querySelector(".mobile-menu__login-btn-js"),loginEl:document.querySelector(".login-btn-js")},o=e;exports.default=o;
},{}],"oVPx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.opensBackdrop=d,exports.formSubmitHandler=f;var e=t(require("./refs"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return i(e)||a(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(){e.default.formCloseBtn=document.querySelector(".backdrop__close-btn"),e.default.backdropEl.classList.remove("is-hidden"),window.addEventListener("keydown",l),e.default.backdropEl.addEventListener("click",s),e.default.formCloseBtn.addEventListener("click",u)}function u(){e.default.formCloseBtn.removeEventListener("click",u),e.default.backdropEl.removeEventListener("click",s),window.removeEventListener("keydown",l),e.default.backdropEl.classList.add("is-hidden")}function l(e){"Escape"===e.key&&u()}function s(e){r(e.target.classList).includes("backdrop")&&u()}function f(e){return e.preventDefault(),new FormData(e.currentTarget)}
},{"./refs":"VyiV"}]},{},["oVPx"], null)
//# sourceMappingURL=/wild-souls/form.c57682f0.js.map