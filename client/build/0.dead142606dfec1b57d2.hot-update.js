webpackHotUpdate(0,{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export send */
/* harmony export (immutable) */ __webpack_exports__["a"] = sendMessage;
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
function sendMessage(_ref) {
    var text = _ref.text,
        user = _ref.user,
        pub_date = _ref.pub_date,
        channel = _ref.channel;

    wsocket.send({
        type: "addMessage",
        message: {
            text: text,
            user: user,
            pub_date: pub_date,
            channel: channel
        }
    });
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

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_sockets__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _jsxFileName = '/home/adam/workspace/unchained/client/src/components/ChannelInput/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ChannelInput = function (_Component) {
    _inherits(ChannelInput, _Component);

    function ChannelInput() {
        _classCallCheck(this, ChannelInput);

        return _possibleConstructorReturn(this, (ChannelInput.__proto__ || Object.getPrototypeOf(ChannelInput)).apply(this, arguments));
    }

    _createClass(ChannelInput, [{
        key: 'onSend',
        value: function onSend() {
            var input = document.getElementById("channel-input__input");
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_sockets__["a" /* sendMessage */])({
                text: input.value,
                pub_date: Date.now(),
                user: "Annonymous",
                channel: this.props.channel
            });
            input.value = "";
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'channel-input', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'channel-input__wrap', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', id: 'channel-input__input', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        },
                        __self: this
                    })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { id: 'channel-input__submit', onClick: this.onSend.bind(this), __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        },
                        __self: this
                    },
                    'Send'
                )
            );
        }
    }]);

    return ChannelInput;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ChannelInput);

/***/ })

})
//# sourceMappingURL=0.dead142606dfec1b57d2.hot-update.js.map