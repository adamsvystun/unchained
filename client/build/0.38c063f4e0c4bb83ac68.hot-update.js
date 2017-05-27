webpackHotUpdate(0,{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_HomePage__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_AreaPage__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_ChannelPage__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_area__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_area__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__api_area___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__api_area__);
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
                lineNumber: 17
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_HomePage__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
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
                lineNumber: 21
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_AreaPage__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 23
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
                lineNumber: 25
            },
            __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
            },
            __self: _this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_ChannelPage__["a" /* default */], { match: match, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
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

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__api_area__["getUserAreas"])().then(function (res) {
                res.data.forEach(function (o) {
                    _this3.props.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__actions_area__["a" /* addAreaAsync */])(area));
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
                        lineNumber: 39
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'router-wrap', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, strict: true, path: '/', component: Home, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/area/:area', component: Area, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Route */], { exact: true, path: '/area/:area/channel/:channel', component: Channel, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
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

/***/ 140:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: `getUserAreas` has already been exported. Exported identifiers must be unique. (14:0)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m}\n \u001b[90m 13 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m getUserAreas({ area }) {\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m    \u001b[36mreturn\u001b[39m axios\u001b[33m.\u001b[39mpost(\u001b[32m'/addUserArea/'\u001b[39m\u001b[33m,\u001b[39m {\n \u001b[90m 16 | \u001b[39m        area\u001b[33m:\u001b[39m area\n \u001b[90m 17 | \u001b[39m    })\u001b[0m\n");

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AreaList__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_OpenAreaList__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_area__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_area___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__api_area__);
var _jsxFileName = '/home/adam/workspace/unchained/client/src/containers/HomePage/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage(props) {
        _classCallCheck(this, HomePage);

        var _this = _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call(this, props));

        _this.state = {
            areas: [],
            locations: null
        };
        _this.getLocation();
        return _this;
    }

    _createClass(HomePage, [{
        key: 'handleAreas',
        value: function handleAreas(areas) {
            this.setState({ areas: areas });
        }
    }, {
        key: 'consumeLocation',
        value: function consumeLocation(o) {
            var _this2 = this;

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__api_area__["findArea"])({
                lat: o.coords.latitude,
                long: o.coords.longitude
            }).then(function (res) {
                _this2.handleAreas(res.data);
            });
            this.setState({ loc: o });
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.consumeLocation.bind(this));
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var areas = this.state.areas.filter(function (o) {
                for (var i = 0; i < _this3.props.areas.length; i++) {
                    if (_this3.props.areas[i].id == o.id) {
                        return false;
                    }
                }
                return true;
            });
            var location = "";
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'wrap', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        },
                        __self: this
                    },
                    'Your areas'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_AreaList__["a" /* default */], { areas: this.props.areas, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                        },
                        __self: this
                    },
                    'Open areas'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_OpenAreaList__["a" /* default */], { dispatch: this.props.dispatch, areas: areas, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                    },
                    __self: this
                })
            );
        }
    }]);

    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state) {
    return { areas: state.areas };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(mapStateToProps)(HomePage));

/***/ })

})
//# sourceMappingURL=0.38c063f4e0c4bb83ac68.hot-update.js.map