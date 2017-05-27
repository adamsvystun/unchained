webpackHotUpdate(0,{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = openChannel;
/* harmony export (immutable) */ __webpack_exports__["b"] = closeChannel;
/* harmony export (immutable) */ __webpack_exports__["c"] = sendMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_message__ = __webpack_require__(339);


var wsocket;

function openChannel(id) {
    console.log("[socket] Opening channel " + id);
    wsocket = new WebSocket("ws://" + window.location.host + "/websocket/" + id);
}

function closeChannel() {
    console.log("[socket] Closing channel");
    wsocket.close();
}

function sendMessage(_ref) {
    var text = _ref.text,
        user = _ref.user,
        pub_date = _ref.pub_date,
        channel = _ref.channel;

    wsocket.send(JSON.stringify({
        type: "addMessage",
        message: {
            text: text,
            user: user,
            pub_date: pub_date,
            channel: channel
        }
    }));
}

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addMessage */
function addMessage(msg) {
    return {
        type: "ADD_MESSAGE",
        payload: msg
    };
}

/***/ })

})
//# sourceMappingURL=0.97d57fdd22b676a60d20.hot-update.js.map