webpackHotUpdate(0,{

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

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__api_area__["a" /* findArea */])({
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
            var location = "";
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'wrap', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                        },
                        __self: this
                    },
                    'Your areas'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_AreaList__["a" /* default */], { areas: this.props.areas, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41
                    },
                    __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                        },
                        __self: this
                    },
                    'Open areas'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_OpenAreaList__["a" /* default */], { dispatch: this.props.dispatch, areas: this.state.areas, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
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
//# sourceMappingURL=0.afd4a58394dcbda4e9f8.hot-update.js.map