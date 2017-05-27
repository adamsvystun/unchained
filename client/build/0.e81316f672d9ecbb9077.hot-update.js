webpackHotUpdate(0,{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__(341);







/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* combineReducers */])({
    areas: __WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */],
    channels: __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* default */],
    messages: __WEBPACK_IMPORTED_MODULE_3__message__["a" /* default */],
    user: __WEBPACK_IMPORTED_MODULE_4__user__["a" /* default */]
}));

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
var initialState = {};

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_USER":
            {
                return Object.assign({}, state, action.payload);
            }
    }
    return state;
}

/***/ })

})
//# sourceMappingURL=0.e81316f672d9ecbb9077.hot-update.js.map