webpackHotUpdate(0,{

/***/ 121:
false,

/***/ 122:
false,

/***/ 123:
false,

/***/ 124:
false,

/***/ 125:
false,

/***/ 126:
false,

/***/ 127:
false,

/***/ 128:
false,

/***/ 129:
false,

/***/ 130:
false,

/***/ 131:
false,

/***/ 132:
false,

/***/ 133:
false,

/***/ 134:
false,

/***/ 135:
false,

/***/ 136:
false,

/***/ 137:
false,

/***/ 138:
false,

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_HomePage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_HomePage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__containers_HomePage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_AreaPage__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_ChannelPage__ = __webpack_require__(148);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/home/adam/workspace/unchained/client/src/App.js',
    _this = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Home = function Home(_ref) {
    var match = _ref.match;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app-wrap', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_HomePage__["default"], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 15
            },
            __self: _this
        })
    );
};
var Area = function Area(_ref2) {
    var match = _ref2.match;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app-wrap', __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_AreaPage__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
            },
            __self: _this
        })
    );
};
var Channel = function Channel(_ref3) {
    var match = _ref3.match;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app-wrap', __source: {
                fileName: _jsxFileName,
                lineNumber: 21
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_ChannelPage__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            },
            __self: _this
        })
    );
};

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'router-wrap', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, strict: true, path: '/', component: Home, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/area/:area', component: Area, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/area/:area/channel/:channel', component: Channel, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 140:
false,

/***/ 142:
false,

/***/ 149:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Duplicate declaration \"AreaList\"\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mimport\u001b[39m { connect } from \u001b[32m'react-redux'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mAreaList\u001b[39m from \u001b[32m'../../components/AreaList'\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mAreaList\u001b[39m from \u001b[32m'../../components/OpenAreaList'\u001b[39m\n \u001b[90m   | \u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[32m'./styles.css'\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 6 | \u001b[39m\u001b[36mimport\u001b[39m { findArea } from \u001b[32m'../../api/area'\u001b[39m\n \u001b[90m 7 | \u001b[39m\u001b[0m\n");

/***/ }),

/***/ 155:
false,

/***/ 156:
false,

/***/ 157:
false,

/***/ 164:
false,

/***/ 183:
false,

/***/ 184:
false,

/***/ 42:
false,

/***/ 68:
false,

/***/ 69:
false,

/***/ 70:
false,

/***/ 71:
false,

/***/ 72:
false,

/***/ 9:
false

})
//# sourceMappingURL=0.af0af73488d8757643bf.hot-update.js.map