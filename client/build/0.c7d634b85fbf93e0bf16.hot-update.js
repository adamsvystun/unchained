webpackHotUpdate(0,{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addArea;

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

/***/ })

})
//# sourceMappingURL=0.c7d634b85fbf93e0bf16.hot-update.js.map