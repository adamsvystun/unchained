webpackHotUpdate(0,{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export send */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(73);


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
                __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].dispatch(addMessage(data.message));
                break;
            }
        case "addComment":
            {
                // store.dispatch();
                break;
            }
    }
};

/***/ })

})
//# sourceMappingURL=0.16ea72efc863e75a5cd8.hot-update.js.map