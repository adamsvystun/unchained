webpackHotUpdate(0,{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [];

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

/***/ })

})
//# sourceMappingURL=0.0c70f036c23cbb8863e6.hot-update.js.map