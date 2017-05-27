webpackHotUpdate(0,{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "ADD_AREA":
            {
                var new_area = {
                    id: action.payload.id,
                    name: action.payload.name
                };
                return [].concat(_toConsumableArray(state), [new_area]);
            }
    }
    return state;
}

/***/ })

})
//# sourceMappingURL=0.9feeda4ff42848dfa7a5.hot-update.js.map