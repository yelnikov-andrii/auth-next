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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authContext */ \"./pages/authContext.tsx\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst useStyles = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__.makeStyles)({\n    loginContainer: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        padding: \"20px\"\n    },\n    heading: {\n        marginBottom: \"20px\"\n    },\n    textField: {\n        marginBottom: \"20px\"\n    },\n    loginButton: {\n        width: \"120px\"\n    }\n});\nconst Login = ()=>{\n    _s();\n    const { setName, setIsAuthenticated, name, isAuthenticated } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_authContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const classes = useStyles();\n    console.log(name, isAuthenticated);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isAuthenticated) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/posts\");\n        }\n    }, [\n        isAuthenticated\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classes.loginContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                        variant: \"h4\",\n                        className: classes.heading,\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.TextField, {\n                        label: \"Name\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value),\n                        className: classes.textField\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        variant: \"contained\",\n                        color: \"primary\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            setIsAuthenticated(true);\n                        },\n                        className: classes.loginButton,\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\login.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"aL5eTxoZmlfBazKkcyHHQ5Fc2jM=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ3BCO0FBRTZCO0FBQ2xCO0FBQ0Y7QUFDQztBQUUzQyxNQUFNVSxZQUFZRCx5REFBVUEsQ0FBQztJQUMzQkUsZ0JBQWdCO1FBQ2RDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxZQUFZO1FBQ1pDLFNBQVM7SUFDWDtJQUNBQyxTQUFTO1FBQ1BDLGNBQWM7SUFDaEI7SUFDQUMsV0FBVztRQUNURCxjQUFjO0lBQ2hCO0lBQ0FFLGFBQWE7UUFDWEMsT0FBTztJQUNUO0FBQ0Y7QUFHQSxNQUFNQyxRQUFrQjs7SUFDdEIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLGtCQUFrQixFQUFFQyxJQUFJLEVBQUVDLGVBQWUsRUFBRSxHQUFHeEIsaURBQVVBLENBQUNNLHFEQUFXQTtJQUNyRixNQUFNbUIsVUFBVWhCO0lBRWhCaUIsUUFBUUMsSUFBSUosTUFBTUM7SUFFbEJ2QixnREFBU0EsQ0FBQztRQUNSLElBQUl1QixpQkFBaUI7WUFDbkJ0Qix1REFBVzBCLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ0o7S0FBZ0I7SUFDcEIscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ3RCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNzQjtnQkFBSUMsV0FBV0wsUUFBUWY7O2tDQUN4Qiw4REFBQ0wscURBQVVBO3dCQUFDMEIsU0FBUTt3QkFBS0QsV0FBV0wsUUFBUVY7a0NBQVM7Ozs7OztrQ0FHckQsOERBQUNYLG9EQUFTQTt3QkFDUjRCLE9BQU07d0JBQ05DLE9BQU9WO3dCQUNQVyxVQUFVLENBQUNDLElBQU1kLFFBQVFjLEVBQUVDLE9BQU9IO3dCQUNsQ0gsV0FBV0wsUUFBUVI7Ozs7OztrQ0FFckIsOERBQUNkLGlEQUFNQTt3QkFDTDRCLFNBQVE7d0JBQ1JNLE9BQU07d0JBQ05DLFNBQVMsQ0FBQ0g7NEJBQ1JBLEVBQUVJOzRCQUNGakIsbUJBQW1CO3dCQUNyQjt3QkFDQVEsV0FBV0wsUUFBUVA7a0NBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNUDtHQXRDTUU7O1FBRVlYOzs7S0FGWlc7QUF3Q04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4udHN4PzcyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9hdXRoQ29udGV4dCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBsb2dpbkNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6ICcyMHB4JyxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gIH0sXHJcbiAgdGV4dEZpZWxkOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcclxuICB9LFxyXG4gIGxvZ2luQnV0dG9uOiB7XHJcbiAgICB3aWR0aDogJzEyMHB4JyxcclxuICB9LFxyXG59KTtcclxuXHJcblxyXG5jb25zdCBMb2dpbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZXROYW1lLCBzZXRJc0F1dGhlbnRpY2F0ZWQsIG5hbWUsIGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIFxyXG4gIGNvbnNvbGUubG9nKG5hbWUsIGlzQXV0aGVudGljYXRlZClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9wb3N0cycpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0F1dGhlbnRpY2F0ZWRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbkNvbnRhaW5lcn0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkaW5nfT5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRGaWVsZH1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHNldElzQXV0aGVudGljYXRlZCh0cnVlKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dpbkJ1dHRvbn1cclxuICAgICAgPlxyXG4gICAgICAgIExvZ2luXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0Iiwicm91dGVyIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiVHlwb2dyYXBoeSIsIkF1dGhDb250ZXh0IiwiSGVhZGVyIiwibWFrZVN0eWxlcyIsInVzZVN0eWxlcyIsImxvZ2luQ29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImhlYWRpbmciLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0RmllbGQiLCJsb2dpbkJ1dHRvbiIsIndpZHRoIiwiTG9naW4iLCJzZXROYW1lIiwic2V0SXNBdXRoZW50aWNhdGVkIiwibmFtZSIsImlzQXV0aGVudGljYXRlZCIsImNsYXNzZXMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInZhcmlhbnQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY29sb3IiLCJvbkNsaWNrIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.tsx\n"));

/***/ })

});