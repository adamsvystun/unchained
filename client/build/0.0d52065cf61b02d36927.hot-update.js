webpackHotUpdate(0,{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_css__);
var _jsxFileName = '/home/adam/workspace/unchained/client/src/components/Header/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var areaId = this.props.match.params.area;
            var channelId = this.props.match.params.channel;
            var area, channel;
            if (areaId) {
                area = this.props.areas.find(function (o) {
                    return o.id == areaId;
                });
                if (area) {
                    area = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                        { to: "/area/" + areaId, className: 'header__nav-item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 16
                            },
                            __self: this
                        },
                        area.name
                    );
                } else {
                    area = null;
                }
            }
            if (channelId) {
                channel = this.props.channels.find(function (o) {
                    return o.id == channelId;
                });
                if (channel) {
                    channel = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                        { to: "/area/" + areaId + "/channel/" + channelId, className: 'header__nav-item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            },
                            __self: this
                        },
                        channel.name
                    );
                } else {
                    channel = null;
                }
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'header', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'header__nav', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                        { exact: true, to: '/', className: 'header__nav-item', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            },
                            __self: this
                        },
                        'Areas'
                    ),
                    area,
                    channel
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

function mapStateToProps(state) {
    return {
        areas: state.areas,
        channels: state.channels
    };
}

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps)(Header));

/***/ })

})
//# sourceMappingURL=0.0d52065cf61b02d36927.hot-update.js.map