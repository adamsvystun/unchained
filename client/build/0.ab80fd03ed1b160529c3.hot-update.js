webpackHotUpdate(0,{

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_css__);
var _jsxFileName = '/home/adam/workspace/unchained/client/src/components/OpenAreaList/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var OpenAreaList = function (_Component) {
    _inherits(OpenAreaList, _Component);

    function OpenAreaList() {
        _classCallCheck(this, OpenAreaList);

        return _possibleConstructorReturn(this, (OpenAreaList.__proto__ || Object.getPrototypeOf(OpenAreaList)).apply(this, arguments));
    }

    _createClass(OpenAreaList, [{
        key: 'onAreaClick',
        value: function onAreaClick() {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var areas = this.props.areas;
            var areaList = areas.map(function (o) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { onClick: _this2.onAreaClick.bind(_this2), className: 'area-list__item', key: o.id, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 13
                        },
                        __self: _this2
                    },
                    o.name
                );
            });
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'area-list', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    },
                    __self: this
                },
                areaList
            );
        }
    }]);

    return OpenAreaList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (OpenAreaList);

/***/ })

})
//# sourceMappingURL=0.ab80fd03ed1b160529c3.hot-update.js.map