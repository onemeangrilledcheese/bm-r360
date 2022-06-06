self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/elements/navbar.js":
/*!***************************************!*\
  !*** ./components/elements/navbar.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/button */ "./utils/button.js");
/* harmony import */ var utils_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/types */ "./utils/types.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _mobile_nav_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-nav-menu */ "./components/elements/mobile-nav-menu.js");
/* harmony import */ var _button_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./button-link */ "./components/elements/button-link.js");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image */ "./components/elements/image.js");
/* harmony import */ var _custom_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-link */ "./components/elements/custom-link.js");
/* harmony import */ var _locale_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../locale-switch */ "./components/locale-switch.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "/home/chrisblackmon/projects_wsl/revolve360/frontend/components/elements/navbar.js",
    _this = undefined,
    _s = $RefreshSig$();














var Navbar = function Navbar(_ref) {
  _s();

  var navbar = _ref.navbar,
      pageContext = _ref.pageContext;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      mobileMenuIsShown = _useState[0],
      setMobileMenuIsShown = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "border-gray-200 border-b-2 py-6 sm:py-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container flex flex-row items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-row items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "h-8 w-32",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_9__.default, {
                width: "120",
                height: "33",
                media: navbar.logo
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "hidden list-none md:flex flex-row gap-4 items-baseline ml-10",
            children: navbar.links.map(function (navLink) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_custom_link__WEBPACK_IMPORTED_MODULE_10__.default, {
                  link: navLink,
                  locale: router.locale,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "hover:text-gray-900 px-2 py-1",
                    children: navLink.text
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 19
                }, _this)
              }, navLink.id, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            onClick: function onClick() {
              return setMobileMenuIsShown(true);
            },
            className: "p-1 block md:hidden",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_12__.MdMenu, {
              className: "h-8 w-auto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), navbar.button && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_link__WEBPACK_IMPORTED_MODULE_8__.default, {
              button: navbar.button,
              appearance: (0,utils_button__WEBPACK_IMPORTED_MODULE_5__.getButtonAppearance)(navbar.button.type, "light"),
              compact: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), mobileMenuIsShown && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobile_nav_menu__WEBPACK_IMPORTED_MODULE_7__.default, {
      navbar: navbar,
      closeSelf: function closeSelf() {
        return setMobileMenuIsShown(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Navbar, "reZzhEX6Jdti9hiorT+9mENKgDQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Navbar;
Navbar.propTypes = {
  navbar: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    logo: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
      image: utils_types__WEBPACK_IMPORTED_MODULE_6__.mediaPropTypes,
      url: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
    }),
    links: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(utils_types__WEBPACK_IMPORTED_MODULE_6__.linkPropTypes),
    button: utils_types__WEBPACK_IMPORTED_MODULE_6__.buttonLinkPropTypes
  }),
  initialLocale: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9uYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwibmF2YmFyIiwicGFnZUNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIm1vYmlsZU1lbnVJc1Nob3duIiwic2V0TW9iaWxlTWVudUlzU2hvd24iLCJsb2dvIiwibGlua3MiLCJtYXAiLCJuYXZMaW5rIiwibG9jYWxlIiwidGV4dCIsImlkIiwiYnV0dG9uIiwiZ2V0QnV0dG9uQXBwZWFyYW5jZSIsInR5cGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpbWFnZSIsIm1lZGlhUHJvcFR5cGVzIiwidXJsIiwic3RyaW5nIiwibGlua1Byb3BUeXBlcyIsImJ1dHRvbkxpbmtQcm9wVHlwZXMiLCJpbml0aWFsTG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBNkI7QUFBQTs7QUFBQSxNQUExQkMsTUFBMEIsUUFBMUJBLE1BQTBCO0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUMxQyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUQwQyxrQkFFUUMsK0NBQVEsQ0FBQyxLQUFELENBRmhCO0FBQUEsTUFFbkNDLGlCQUZtQztBQUFBLE1BRWhCQyxvQkFGZ0I7O0FBSTFDLHNCQUNFO0FBQUEsNEJBRUU7QUFBSyxlQUFTLEVBQUMseUNBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsc0RBQWY7QUFBQSxnQ0FFRTtBQUFLLG1CQUFTLEVBQUMsNEJBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyxVQUFiO0FBQUEscUNBQ0UsOERBQUMsMkNBQUQ7QUFBVyxxQkFBSyxFQUFDLEtBQWpCO0FBQXVCLHNCQUFNLEVBQUMsSUFBOUI7QUFBbUMscUJBQUssRUFBRU4sTUFBTSxDQUFDTztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRTtBQUFJLHFCQUFTLEVBQUMsOERBQWQ7QUFBQSxzQkFDR1AsTUFBTSxDQUFDUSxLQUFQLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ0MsT0FBRDtBQUFBLGtDQUNoQjtBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQVksc0JBQUksRUFBRUEsT0FBbEI7QUFBMkIsd0JBQU0sRUFBRVIsTUFBTSxDQUFDUyxNQUExQztBQUFBLHlDQUNFO0FBQUssNkJBQVMsRUFBQywrQkFBZjtBQUFBLDhCQUNHRCxPQUFPLENBQUNFO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU0YsT0FBTyxDQUFDRyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURnQjtBQUFBLGFBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFxQkU7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQSxrQ0FFRTtBQUNFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTVAsb0JBQW9CLENBQUMsSUFBRCxDQUExQjtBQUFBLGFBRFg7QUFFRSxxQkFBUyxFQUFDLHFCQUZaO0FBQUEsbUNBSUUsOERBQUMsbURBQUQ7QUFBUSx1QkFBUyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBU0dOLE1BQU0sQ0FBQ2MsTUFBUCxpQkFDQztBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxtQ0FDRSw4REFBQyxpREFBRDtBQUNFLG9CQUFNLEVBQUVkLE1BQU0sQ0FBQ2MsTUFEakI7QUFFRSx3QkFBVSxFQUFFQyxpRUFBbUIsQ0FBQ2YsTUFBTSxDQUFDYyxNQUFQLENBQWNFLElBQWYsRUFBcUIsT0FBckIsQ0FGakM7QUFHRSxxQkFBTztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBK0NHWCxpQkFBaUIsaUJBQ2hCLDhEQUFDLHFEQUFEO0FBQ0UsWUFBTSxFQUFFTCxNQURWO0FBRUUsZUFBUyxFQUFFO0FBQUEsZUFBTU0sb0JBQW9CLENBQUMsS0FBRCxDQUExQjtBQUFBO0FBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhESjtBQUFBLGtCQURGO0FBd0RELENBNUREOztHQUFNUCxNO1VBQ1dJLGtEOzs7S0FEWEosTTtBQThETkEsTUFBTSxDQUFDa0IsU0FBUCxHQUFtQjtBQUNqQmpCLFFBQU0sRUFBRWtCLHVEQUFBLENBQWdCO0FBQ3RCWCxRQUFJLEVBQUVXLHVEQUFBLENBQWdCO0FBQ3BCQyxXQUFLLEVBQUVDLHVEQURhO0FBRXBCQyxTQUFHLEVBQUVILDBEQUFnQkk7QUFGRCxLQUFoQixDQURnQjtBQUt0QmQsU0FBSyxFQUFFVSx5REFBQSxDQUFrQkssc0RBQWxCLENBTGU7QUFNdEJULFVBQU0sRUFBRVUsNERBQW1CQTtBQU5MLEdBQWhCLENBRFM7QUFTakJDLGVBQWEsRUFBRVAsMERBQWdCSTtBQVRkLENBQW5CO0FBWUEsK0RBQWV2QixNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLmQ1ZjVlMjZhN2RmNjBjN2Q4ZWZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcblxuaW1wb3J0IHsgZ2V0QnV0dG9uQXBwZWFyYW5jZSB9IGZyb20gXCJ1dGlscy9idXR0b25cIlxuaW1wb3J0IHsgbWVkaWFQcm9wVHlwZXMsIGxpbmtQcm9wVHlwZXMsIGJ1dHRvbkxpbmtQcm9wVHlwZXMgfSBmcm9tIFwidXRpbHMvdHlwZXNcIlxuaW1wb3J0IHsgTWRNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCBNb2JpbGVOYXZNZW51IGZyb20gXCIuL21vYmlsZS1uYXYtbWVudVwiXG5pbXBvcnQgQnV0dG9uTGluayBmcm9tIFwiLi9idXR0b24tbGlua1wiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCIuL2N1c3RvbS1saW5rXCJcbmltcG9ydCBMb2NhbGVTd2l0Y2ggZnJvbSBcIi4uL2xvY2FsZS1zd2l0Y2hcIlxuXG5jb25zdCBOYXZiYXIgPSAoeyBuYXZiYXIsIHBhZ2VDb250ZXh0IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW21vYmlsZU1lbnVJc1Nob3duLCBzZXRNb2JpbGVNZW51SXNTaG93bl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogVGhlIGFjdHVhbCBuYXZiYXIgKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJvcmRlci1ncmF5LTIwMCBib3JkZXItYi0yIHB5LTYgc206cHktMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICB7LyogQ29udGVudCBhbGlnbmVkIHRvIHRoZSBsZWZ0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImgtOCB3LTMyXCI+XG4gICAgICAgICAgICAgICAgPE5leHRJbWFnZSB3aWR0aD1cIjEyMFwiIGhlaWdodD1cIjMzXCIgbWVkaWE9e25hdmJhci5sb2dvfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7LyogTGlzdCBvZiBsaW5rcyBvbiBkZXNrdG9wICovfVxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBsaXN0LW5vbmUgbWQ6ZmxleCBmbGV4LXJvdyBnYXAtNCBpdGVtcy1iYXNlbGluZSBtbC0xMFwiPlxuICAgICAgICAgICAgICB7bmF2YmFyLmxpbmtzLm1hcCgobmF2TGluaykgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e25hdkxpbmsuaWR9PlxuICAgICAgICAgICAgICAgICAgPEN1c3RvbUxpbmsgbGluaz17bmF2TGlua30gbG9jYWxlPXtyb3V0ZXIubG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWdyYXktOTAwIHB4LTIgcHktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtuYXZMaW5rLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DdXN0b21MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgIHsvKiBIYW1idXJnZXIgbWVudSBvbiBtb2JpbGUgKi99XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVJc1Nob3duKHRydWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgYmxvY2sgbWQ6aGlkZGVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE1kTWVudSBjbGFzc05hbWU9XCJoLTggdy1hdXRvXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIENUQSBidXR0b24gb24gZGVza3RvcCAqL31cbiAgICAgICAgICAgIHtuYXZiYXIuYnV0dG9uICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uTGlua1xuICAgICAgICAgICAgICAgICAgYnV0dG9uPXtuYXZiYXIuYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT17Z2V0QnV0dG9uQXBwZWFyYW5jZShuYXZiYXIuYnV0dG9uLnR5cGUsIFwibGlnaHRcIil9XG4gICAgICAgICAgICAgICAgICBjb21wYWN0XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG4gICAgICB7LyogTW9iaWxlIG5hdmlnYXRpb24gbWVudSBwYW5lbCAqL31cbiAgICAgIHttb2JpbGVNZW51SXNTaG93biAmJiAoXG4gICAgICAgIDxNb2JpbGVOYXZNZW51XG4gICAgICAgICAgbmF2YmFyPXtuYXZiYXJ9XG4gICAgICAgICAgY2xvc2VTZWxmPXsoKSA9PiBzZXRNb2JpbGVNZW51SXNTaG93bihmYWxzZSl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5cbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIG5hdmJhcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsb2dvOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaW1hZ2U6IG1lZGlhUHJvcFR5cGVzLFxuICAgICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIGxpbmtzOiBQcm9wVHlwZXMuYXJyYXlPZihsaW5rUHJvcFR5cGVzKSxcbiAgICBidXR0b246IGJ1dHRvbkxpbmtQcm9wVHlwZXMsXG4gIH0pLFxuICBpbml0aWFsTG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdLCJzb3VyY2VSb290IjoiIn0=