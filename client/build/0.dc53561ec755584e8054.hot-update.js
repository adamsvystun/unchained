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
                console.log('aa');
                var new_message = {
                    text: action.payload.text,
                    user: action.payload.user || "Annonymous",
                    pub_date: action.payload.pub_date,
                    channel: action.payload.channel
                };
                return [].concat(_toConsumableArray(state), [new_message]);
            }
    }
    return state;
}

/***/ })

})
//# sourceMappingURL=0.dc53561ec755584e8054.hot-update.js.map