"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/posts.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authContext */ \"./pages/authContext.tsx\");\n/* harmony import */ var _posts_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts.module.css */ \"./pages/posts.module.css\");\n/* harmony import */ var _posts_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_posts_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Posts = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { isAuthenticated, name } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_authContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const lastEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const observer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (isAuthenticated === false) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n        }\n    }, [\n        isAuthenticated\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, [\n        currentPage\n    ]);\n    const fetchPosts = ()=>{\n        setIsLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://jsonplaceholder.typicode.com/posts\", {\n            params: {\n                _limit: 10,\n                _page: currentPage\n            }\n        }).then((response)=>{\n            setPosts([\n                ...posts,\n                ...response.data\n            ]);\n            setIsLoading(false);\n        }).catch((error)=>console.log(error));\n    };\n    console.log(currentPage);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        observer.current = new IntersectionObserver((entries)=>{\n            if (entries[0].isIntersecting) {\n                setCurrentPage((page)=>page + 1);\n            }\n        });\n        observer.current.observe(lastEl.current);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    \"Welcome, \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                variant: \"h5\",\n                children: \"Posts:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().postList),\n                children: posts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().postItem),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, undefined)\n                    }, post.id, false, {\n                        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: lastEl\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 74,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Posts, \"pCp7t8qrdVXwDcI9wowJDIXTsgc=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQzVCO0FBQ2pCO0FBQ087QUFDVztBQUNKO0FBQ0U7QUFPMUMsTUFBTVcsUUFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBUyxFQUFFO0lBQzdDLE1BQU0sRUFBRVcsZUFBZSxFQUFFQyxJQUFJLEVBQUUsR0FBR2QsaURBQVVBLENBQUNPLHFEQUFXQTtJQUN4RCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNaUIsU0FBU2hCLDZDQUFNQSxDQUFNO0lBQzNCLE1BQU1pQixXQUFnQmpCLDZDQUFNQSxDQUFDO0lBRTdCSixzREFBZUUsQ0FBQztRQUNkLElBQUlZLG9CQUFvQixPQUFPO1lBQzdCUCx1REFBV2UsQ0FBQztRQUNkO0lBQ0YsR0FBRztRQUFDUjtLQUFnQjtJQUVwQlosZ0RBQVNBLENBQUM7UUFDUnFCO0lBQ0YsR0FBRztRQUFDUDtLQUFZO0lBRWhCLE1BQU1PLGFBQWE7UUFDakJKLGFBQWE7UUFFYmIsaURBQ01rQixDQUFDLDhDQUE4QztZQUNqREMsUUFBUTtnQkFDTkMsUUFBUTtnQkFDUkMsT0FBT1g7WUFDVDtRQUNGLEdBQ0NZLEtBQUssQ0FBQ0M7WUFDTGhCLFNBQVM7bUJBQUlEO21CQUFVaUIsU0FBU0M7YUFBSztZQUNyQ1gsYUFBYTtRQUNmLEdBQ0NZLE1BQU0sQ0FBQ0MsUUFBVUMsUUFBUUMsSUFBSUY7SUFDbEM7SUFFQUMsUUFBUUMsSUFBSWxCO0lBRVpkLGdEQUFTQSxDQUFDO1FBQ1JtQixTQUFTYyxVQUFVLElBQUlDLHFCQUFxQixDQUFDQztZQUMzQyxJQUFJQSxPQUFPLENBQUMsRUFBRSxDQUFDQyxnQkFBZ0I7Z0JBQzdCckIsZUFBZXNCLENBQUFBLE9BQVFBLE9BQU87WUFDaEM7UUFDRjtRQUNBbEIsU0FBU2MsUUFBUUssUUFBUXBCLE9BQU9lO0lBQ2xDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUMvQiwwREFBTUE7Ozs7OzBCQUNQLDhEQUFDTCxxREFBVUE7Z0JBQUNxQyxXQUFXakMsZ0VBQVlrQzs7b0JBQUU7b0JBQVU1Qjs7Ozs7OzswQkFDL0MsOERBQUNWLHFEQUFVQTtnQkFBQ3VDLFNBQVE7MEJBQUs7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFHSCxXQUFXakMsbUVBQWVxQzswQkFDM0JsQyxNQUFNbUMsSUFBSSxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNDO3dCQUFpQlIsV0FBV2pDLG1FQUFlMEM7a0NBQzFDLDRFQUFDQzs0QkFBS1YsV0FBV2pDLGdFQUFZa0M7c0NBQUdLLEtBQUtMOzs7Ozs7dUJBRDlCSyxLQUFLSzs7Ozs7Ozs7OzswQkFLbEIsOERBQUNaO2dCQUFJYSxLQUFLbEM7Ozs7OztZQUVURiwyQkFBYSw4REFBQ3VCOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHekI7R0EvRE05QjtLQUFBQTtBQWlFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy50c3g/MmE5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vYXV0aENvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5cclxudHlwZSBQb3N0ID0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFBvc3RzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPFBvc3RbXT4oW10pO1xyXG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkLCBuYW1lIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbGFzdEVsID0gdXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3Qgb2JzZXJ2ZXI6IGFueSA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0F1dGhlbnRpY2F0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICB9LCBbaXNBdXRoZW50aWNhdGVkXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFBvc3RzKCk7XHJcbiAgfSwgW2N1cnJlbnRQYWdlXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoUG9zdHMgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgYXhpb3NcclxuICAgICAgLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywge1xyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgX2xpbWl0OiAxMCxcclxuICAgICAgICAgIF9wYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBzZXRQb3N0cyhbLi4ucG9zdHMsIC4uLnJlc3BvbnNlLmRhdGFdKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQYWdlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb2JzZXJ2ZXIuY3VycmVudCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKSA9PiB7XHJcbiAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocGFnZSA9PiBwYWdlICsgMSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBvYnNlcnZlci5jdXJyZW50Lm9ic2VydmUobGFzdEVsLmN1cnJlbnQhKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5XZWxjb21lLCB7bmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiPlBvc3RzOjwvVHlwb2dyYXBoeT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RMaXN0fT5cclxuICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMucG9zdEl0ZW19PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Bvc3QudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiByZWY9e2xhc3RFbH0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiVHlwb2dyYXBoeSIsImF4aW9zIiwicm91dGVyIiwiQXV0aENvbnRleHQiLCJzdHlsZXMiLCJIZWFkZXIiLCJQb3N0cyIsInBvc3RzIiwic2V0UG9zdHMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJuYW1lIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImxhc3RFbCIsIm9ic2VydmVyIiwicHVzaCIsImZldGNoUG9zdHMiLCJnZXQiLCJwYXJhbXMiLCJfbGltaXQiLCJfcGFnZSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsInBhZ2UiLCJvYnNlcnZlIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJ2YXJpYW50IiwidWwiLCJwb3N0TGlzdCIsIm1hcCIsInBvc3QiLCJpbmRleCIsImxpIiwicG9zdEl0ZW0iLCJzcGFuIiwiaWQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts.tsx\n"));

/***/ })

});