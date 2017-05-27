webpackHotUpdate(0,{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findArea;
/* unused harmony export getUserAreas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


function findArea(_ref) {
    var lat = _ref.lat,
        long = _ref.long;

    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/findArea/', {
        lat: lat,
        long: long
    });
}

function getUserAreas() {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/getUserAreas/');
}

/***/ })

})
//# sourceMappingURL=0.267ce3dc16ab49fc9ad9.hot-update.js.map