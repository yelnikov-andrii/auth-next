"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authContext */ \"./pages/authContext.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const { setName, setIsAuthenticated, name, isAuthenticated } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_authContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    console.log(name, isAuthenticated);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isAuthenticated) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/posts\");\n        }\n    }, [\n        isAuthenticated\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\",\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                        variant: \"h4\",\n                        sx: {\n                            marginBottom: \"20px\"\n                        },\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                        label: \"Name\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        sx: {\n                            marginBottom: \"20px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        variant: \"contained\",\n                        color: \"primary\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            setIsAuthenticated(true);\n                        },\n                        sx: {\n                            width: \"120px\"\n                        },\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"9CR/Kt+K0otdww/Qg77NNfdAOz0=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ3BCO0FBRTZCO0FBQ2xCO0FBQ0Y7QUFNMUMsTUFBTVMsUUFBOEI7O0lBQ2xDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxrQkFBa0IsRUFBRUMsSUFBSSxFQUFFQyxlQUFlLEVBQUUsR0FBR1osaURBQVVBLENBQUNNLHFEQUFXQTtJQUVyRk8sUUFBUUMsSUFBSUgsTUFBTUM7SUFFbEJYLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVcsaUJBQWlCO1lBQ25CVix1REFBV2EsQ0FBQztRQUNkO0lBQ0YsR0FBRztRQUFDSDtLQUFnQjtJQUVwQixxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDVCwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDUztnQkFBSUMsSUFBSTtvQkFDUEMsU0FBUztvQkFDVEMsZUFBZTtvQkFDZkMsWUFBWTtvQkFDWkMsU0FBUztnQkFDWDs7a0NBQ0UsOERBQUNoQixxREFBVUE7d0JBQUNpQixTQUFRO3dCQUFLTCxJQUFJOzRCQUFFTSxjQUFjO3dCQUFPO2tDQUFHOzs7Ozs7a0NBR3ZELDhEQUFDbkIsb0RBQVNBO3dCQUNSb0IsT0FBTTt3QkFDTkMsT0FBT2Q7d0JBQ1BlLFVBQVUsQ0FBQ0MsSUFBTWxCLFFBQVFrQixFQUFFQyxPQUFPSDt3QkFDbENSLElBQUk7NEJBQUVNLGNBQWM7d0JBQU87Ozs7OztrQ0FFN0IsOERBQUNwQixpREFBTUE7d0JBQ0xtQixTQUFRO3dCQUNSTyxPQUFNO3dCQUNOQyxTQUFTLENBQUNIOzRCQUNSQSxFQUFFSTs0QkFDRnJCLG1CQUFtQjt3QkFDckI7d0JBQ0FPLElBQUk7NEJBQUVlLE9BQU87d0JBQVE7a0NBQ3RCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQTNDTXhCO0tBQUFBO0FBNkNOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLnRzeD83MjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vYXV0aENvbnRleHQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcclxuXHJcbmludGVyZmFjZSBMb2dpblByb3BzIHtcclxuICBzeD86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luOiBSZWFjdC5GQzxMb2dpblByb3BzPiA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldE5hbWUsIHNldElzQXV0aGVudGljYXRlZCwgbmFtZSwgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuXHJcbiAgY29uc29sZS5sb2cobmFtZSwgaXNBdXRoZW50aWNhdGVkKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL3Bvc3RzJyk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQXV0aGVudGljYXRlZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IHN4PXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICAgICAgfX0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3g9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICBMb2dpblxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgc3g9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTIwcHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9naW5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiQXV0aENvbnRleHQiLCJIZWFkZXIiLCJMb2dpbiIsInNldE5hbWUiLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJuYW1lIiwiaXNBdXRoZW50aWNhdGVkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJkaXYiLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJ2YXJpYW50IiwibWFyZ2luQm90dG9tIiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNvbG9yIiwib25DbGljayIsInByZXZlbnREZWZhdWx0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});