/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nconst renderContactPage = (() => {\n    const contentContainer = document.querySelector('#content');\n    const contact = document.createElement('div');\n    contact.setAttribute('id', 'contact');\n    contact.setAttribute('data-tab-content', '');\n    contact.innerHTML = `\n    <div class='hero'>\n    <h1>Contact us</h1>\n    </div>\n    <div class='contact-container'>\n    <div class='info'>\n    <div class='address'>\n    <p>\n    <i class='fi-xnsuxl-map-marker-solid'></i>641 N Highland Ave<br />Los Angeles, CA 90036\n    </p>\n    </div>\n    <div class='hours'>\n    <p>\n    <i class='fi-cnsuhl-clock-solid'></i>\n    <span>Mon-Thurs:</span>8am-02am<br /><span>Fri-Sun:</span>8am-04am\n    </p>\n    </div>\n    <div class='phone'>\n    <p><i class='fi-xnsrxl-phone-solid'></i>(111)-222 3333</p>\n    </div>\n    <div class='contact-form'>\n    <form onsubmit='return false'>\n    <h3><i class='fi-xwsuxl-envelope-solid'></i>Message us</h3>\n    <div class='input-box'>\n    <input type='text' required />\n    <span>Full Name</span>\n    </div>\n    <div class='input-box'>\n    <input type='text' required />\n    <span>Email</span>\n    </div>\n    <div class='input-box'>\n    <textarea required></textarea>\n    <span>Type your message...</span>\n    </div>\n    <input type='submit' value='Send' />\n    </form>\n    </div>\n    </div>\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.4692730069946!2d-118.3410552843425!3d34.08311688059759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b8d3a0ee6b6d%3A0x7fd7c9cbe4f265c7!2sPizzeria%20Mozza!5e0!3m2!1sen!2sba!4v1656503777890!5m2!1sen!2sba\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>\n    </div>`;\n\n    contentContainer.appendChild(contact);\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomePage\": () => (/* binding */ renderHomePage)\n/* harmony export */ });\nconst renderHomePage = (() => {\n    const contentContainer = document.querySelector('#content');\n\n    const home = document.createElement('div');\n    home.classList.add('tab-content');\n    home.innerHTML = `<div id='home' class='active' data-tab-content>\n    <div class='hero'>\n    <h1>Times flies when you're eating pies!</h1>\n    <p>Fast delivery, fast service!</p>\n    <div class='btn-container'>\n    <a data-tab-target='#menu' class='order-now'>Order Now</a>\n    </div>\n    </div>\n    <div class='info'>\n    <div class='address'>\n    <span><i class='fi-xnsuxl-map-marker-solid'></i></span>\n    <p>641 N Highland Ave<br />Los Angeles, CA 90036</p>\n    </div>\n    <div class='hours'>\n    <span><i class='fi-cnsuhl-clock-solid'></i></span>\n    <p>\n    <span>Mon-Thurs:</span>8am-02am<br /><span>Fri-Sun:</span>8am-04am\n    </p>\n    </div>\n    </div>\n    </div>`;\n\n    contentContainer.appendChild(home);\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageload__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nconst renderMenuPage = (() => {\n    const contentContainer = document.querySelector('#content');\n    const menu = document.createElement('div');\n    menu.setAttribute('id', 'menu');\n    menu.setAttribute('data-tab-content', '');\n    menu.innerHTML = `\n    <div class='hero'>\n    <h1>Menu</h1>\n    <img src='./images/chef.png' alt='' width='50' height='50' />\n    </div>\n    <div class='menu-container'>\n\n    <div class='menu-item'>\n    <img src='./images/pizza1.png' alt='' />\n    <div class='item-content'>\n    <h4>Neapolitan Pizza: <span>$14.99</span></h4>\n    <p>Neapolitan is the original pizza. This delicious pie dates all the way back to 18th century in Naples, Italy.</p>\n    </div>\n    </div>\n    \n    <div class='menu-item'>\n    <img src='./images/pizza2.png' alt='' />\n    <div class='item-content'>\n    <h4>Chicago Pizza: <span>$16.99</span></h4>\n    <p>Chicago pizza, also commonly referred to as deep-dish pizza, gets its name from the city it was invented in. During the early 1900's, Italian immigrants in the windy city were searching for something similar to the Neapolitan pizza that they knew and loved.</p>\n    </div>\n    </div>\n    \n    <div class='menu-item'>\n    <img src='./images/pizza3.png' alt='' />\n    <div class='item-content'>\n    <h4>New York-Style Pizza: <span>$15.99</span></h4>\n    <p>With its characteristic large, foldable slices and crispy outer crust, New York-style pizza is one of America's most famous regional pizza types.</p>\n    </div>\n    </div>\n    \n    <div class='menu-item'>\n    <img src='./images/pizza4.png' alt='' />\n    <div class='item-content'>\n    <h4>Sicilian Pizza: <span>$18.99</span></h4>\n    <p>Sicilian pizza, also known as \"sfincione,\" provides a thick cut of pizza with pillowy dough, a crunchy crust, and robust tomato sauce.</p>\n    </div>\n    </div>\n    \n    <div class='menu-item'>\n    <img src='./images/pizza5.png' alt='' />\n    <div class='item-content'>\n    <h4>Greek Pizza: <span>$17.99</span></h4>\n    <p>Greek pizza was created by Greek immigrants who came to America and were introduced to Italian pizza. Greek-style pizza, especially popular in the New England states, features a thick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom.</p>\n    </div>\n    </div>\n    \n    <div class='menu-item'>\n    <img src='./images/pizza6.png' alt='' />\n    <div class='item-content'>\n    <h4>California Pizza: <span>$21.99</span></h4>\n    <p>California pizza, or gourmet pizza, is known for its unusual ingredients. This pizza got its start back in the late 1970's when Chef Ed LaDou began experimenting with pizza recipes in the classic Italian restaurant, Prego.</p>\n    </div>\n    </div>\n    </div>`;\n\n    contentContainer.appendChild(menu);\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ (() => {

eval("const pageLoad = (() => {\n    const contentContainer = document.querySelector('#content');\n\n    const header = document.createElement('header');\n    header.innerHTML = `\n    <nav>\n    <h2>Pizza Breeze</h2>\n    <a href='#' class='pizza'>\n    <span class='line line1'></span>\n    <span class='line line2'></span>\n    <span class='line line3'></span>\n    </a>\n    <ul class='links'>\n    <li data-tab-target='#home' class='tab red'>Home</li>\n    <li data-tab-target='#menu' class='tab red'>Menu</li>\n    <li data-tab-target='#contact' class='tab red'>Contact</li>\n    </ul>\n    </nav>`;\n\n    contentContainer.appendChild(header);\n})();\n\n//# sourceURL=webpack://restaurant-page/./src/pageload.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;