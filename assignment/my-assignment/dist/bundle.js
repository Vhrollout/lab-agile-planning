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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const navLinks = document.querySelectorAll('a');\nnavLinks.forEach(link => {\n  link.addEventListener('click', function (event) {\n    event.preventDefault(); // Prevent default jump behavior\n\n    const targetId = this.getAttribute('href');\n    const targetElement = document.querySelector(targetId);\n    if (targetElement) {\n      targetElement.scrollIntoView({\n        behavior: 'smooth' // Enable smooth scrolling\n      });\n\n      // Optional:  Adjust scroll position for fixed headers, etc.\n      // const headerOffset = 80; // Example offset\n      // const y = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;\n      // window.scrollTo({ top: y, behavior: 'smooth' });\n    }\n  });\n});\nAOS.init({\n  duration: 800,\n  // Animation duration in milliseconds\n  once: false // Whether animation should happen only once\n});\n\n//# sourceURL=webpack://my-assignment/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;