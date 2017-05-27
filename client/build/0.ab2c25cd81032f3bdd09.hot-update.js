webpackHotUpdate(0,{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addArea;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_channel__ = __webpack_require__(337);


function addArea(area) {
    return {
        type: "ADD_AREA",
        payload: area
    };
}

function addAreaAsync(area) {
    return function (dispatch) {
        dispatch(addArea(area));
        setTimeout(function () {
            dispatch(addArea());
        }, 1000);
    };
}

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getChannels */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


function getChannels(_ref) {
    var area = _ref.area;

    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/channels/', {
        area: area
    });
}

/***/ })

})
//# sourceMappingURL=0.ab2c25cd81032f3bdd09.hot-update.js.map