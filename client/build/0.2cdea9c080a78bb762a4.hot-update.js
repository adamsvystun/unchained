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

wsocket.onmessage = function (e) {
    var data = JSON.parse(e.data);
    switch (data.type) {
        case "addMessage":
            {
                __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions_message__["a" /* addMessage */])(data.message));
                break;
            }
        case "fetchMessages":
            {
                data.messages.forEach(function (o) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions_message__["a" /* addMessage */])(o);
                });
                break;
            }
    }
};

/***/ })

})
//# sourceMappingURL=0.2cdea9c080a78bb762a4.hot-update.js.map