webpackHotUpdate(0,{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addArea */
/* harmony export (immutable) */ __webpack_exports__["a"] = addAreaAsync;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_channel__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_area__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(338);




function addArea(area) {
    return {
        type: "ADD_AREA",
        payload: area
    };
}

function addAreaAsync(area) {
    return function (dispatch) {
        dispatch(addArea(area));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_channel__["a" /* getChannels */])({ area: area.id }).then(function (res) {
            res.data.forEach(function (val) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__channel__["a" /* addChannel */])(val));
            });
        });
        addArea({ area: area.id }).then(function (res) {
            console.log(res);
        });
    };
}

/***/ })

})
//# sourceMappingURL=0.658a4984f13e0271866f.hot-update.js.map