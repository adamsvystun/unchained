webpackHotUpdate(0,{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addArea;


function addAreaAsync() {
  return function (dispatch) {
    setTimeout(function () {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(increment());
    }, 1000);
  };
}

function addArea(area) {
  return {
    type: "ADD_AREA",
    payload: area
  };
}

/***/ })

})
//# sourceMappingURL=0.c00943ae85ddb2aa0936.hot-update.js.map