webpackHotUpdate(0,{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addArea */
/* harmony export (immutable) */ __webpack_exports__["a"] = addAreaAsync;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_channel__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel__ = __webpack_require__(338);



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
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__channel__["a" /* addChannel */])(val);
            });
        });
    };
}

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addChannel;
function addChannel(channel) {
    return {
        type: "ADD_CHANNEl",
        payload: channel
    };
}

/***/ })

})
//# sourceMappingURL=0.b55ad2b9b16b8002871e.hot-update.js.map