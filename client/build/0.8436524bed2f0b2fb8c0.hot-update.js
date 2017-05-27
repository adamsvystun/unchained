webpackHotUpdate(0,{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [{
    id: 1,
    text: "Hello",
    user: "adam",
    pub_date: Date.now(),
    channel: 1
}];

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "ADD_MESSAGE":
            {
                var new_channel = {
                    name: action.payload.name,
                    user: action.payload.user,
                    pub_date: action.payload.pub_date,
                    channel: action.payload.channel
                };
                return [].concat(_toConsumableArray(state), [new_channel]);
            }
    }
    return state;
}

/***/ })

})
//# sourceMappingURL=0.8436524bed2f0b2fb8c0.hot-update.js.map