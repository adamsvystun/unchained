webpackHotUpdate(0,{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_HomePage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_AreaPage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_ChannelPage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_area__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_user__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_area__ = __webpack_require__(43);
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
                lineNumber: 18
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_HomePage__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
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
                lineNumber: 22
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_AreaPage__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 24
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
                lineNumber: 26
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_ChannelPage__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
            },
            __self: _this
        })
    );
};

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this3 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__api_area__["a" /* getUserAreas */])().then(function (res) {
                _this3.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__actions_user__["fetchUser"])({
                    id: res.data.id,
                    name: res.data.name
                }));
                res.data.areas.forEach(function (area) {
                    _this3.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_area__["a" /* addAreaFetchChannels */])(area));
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'router-wrap', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, strict: true, path: '/', component: Home, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/area/:area', component: Area, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/area/:area/channel/:channel', component: Channel, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])()(App));

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addArea */
/* unused harmony export addAreaFetchChannels */
/* unused harmony export addUserAreaAsync */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_channel__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_area__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channel__ = __webpack_require__(143);




function addArea(area) {
    return {
        type: "ADD_AREA",
        payload: area
    };
}

function addAreaFetchChannels(area) {
    return function (dispatch) {
        dispatch(addArea(area));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_channel__["a" /* getChannels */])({ area: area.id }).then(function (res) {
            res.data.forEach(function (val) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__channel__["a" /* addChannel */])(val));
            });
        });
    };
}

function addUserAreaAsync(area) {
    return function (dispatch) {
        dispatch(addArea(area));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_channel__["a" /* getChannels */])({ area: area.id }).then(function (res) {
            res.data.forEach(function (val) {
                dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__channel__["a" /* addChannel */])(val));
            });
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__api_area__["b" /* addUserArea */])({ area: area.id }).then(function (res) {
            console.log(res);
        });
    };
}

/***/ })

})
//# sourceMappingURL=0.316ab04967752fedab01.hot-update.js.map