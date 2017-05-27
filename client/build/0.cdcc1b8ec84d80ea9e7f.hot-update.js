webpackHotUpdate(0,{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [{
    id: 1,
    name: "Test channel",
    area: 1
}];

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "ADD_CHANNEl":
            {
                var new_channel = {
                    id: action.payload.id,
                    name: action.payload.name,
                    area: action.payload.area
                };
                return [].concat(_toConsumableArray(state), [new_channel]);
            }
    }
    return state;
}

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message__ = __webpack_require__(153);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* combineReducers */])({
    areas: __WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */],
    channels: __WEBPACK_IMPORTED_MODULE_2__channel__["a" /* default */],
    messages: __WEBPACK_IMPORTED_MODULE_3__message__["a" /* default */]
}));

/***/ })

})
//# sourceMappingURL=0.cdcc1b8ec84d80ea9e7f.hot-update.js.map