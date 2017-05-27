webpackHotUpdate(0,{

/***/ 158:
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
                var new_id = action.payload.id;
                if (new_id) {
                    var message = state.find(function (o) {
                        return o.id == new_id;
                    });
                    if (message) {
                        break;
                    }
                }
                var new_message = {
                    text: action.payload.text,
                    user: action.payload.user || "Annonymous",
                    pub_date: action.payload.pub_date,
                    channel: action.payload.channel,
                    id: new_id
                };
                return [].concat(_toConsumableArray(state), [new_message]);
            }
    }
    return state;
}

/***/ })

})
//# sourceMappingURL=0.57e097cff8b4c34dc41b.hot-update.js.map