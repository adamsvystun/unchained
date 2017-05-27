webpackHotUpdate(0,{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export send */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_message__ = __webpack_require__(339);



var wsocket = new WebSocket("ws://" + window.location.host + "/websocket1");
console.log(wsocket);
wsocket.onopen = onOpen;
wsocket.onerror = onError;

__WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch({
    type: "ADD_MESSAGE",
    payload: {
        channel: 1
    }
});
function onOpen(e) {
    console.log(e);
}
function onError(e) {
    console.log(e);
}
function send(msg) {
    wsocket.send(msg);
}

wsocket.onmessage = function (e) {
    var data = JSON.parse(e.data);
    switch (data.type) {
        case "addMessage":
            {
                __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions_message__["addMessage"])(data.message));
                break;
            }
        case "fetchMessages":
            {
                data.messages.forEach(function (o) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions_message__["addMessage"])(o);
                });
                break;
            }
    }
};

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addChannel */
function addChannel(channel) {
    return {
        type: "ADD_CHANNEl",
        payload: channel
    };
}

/***/ })

})
//# sourceMappingURL=0.0c6f3ea3df532b483af6.hot-update.js.map