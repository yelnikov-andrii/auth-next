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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authContext */ \"./pages/authContext.tsx\");\n/* harmony import */ var _posts_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts.module.css */ \"./pages/posts.module.css\");\n/* harmony import */ var _posts_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_posts_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Posts = ()=>{\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { isAuthenticated, name } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_authContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const sentinelRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const observer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (isAuthenticated === false) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/login\");\n        }\n    }, [\n        isAuthenticated\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPosts();\n    }, [\n        currentPage\n    ]);\n    const fetchPosts = ()=>{\n        setIsLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"https://jsonplaceholder.typicode.com/posts\", {\n            params: {\n                _limit: 10,\n                _page: currentPage\n            }\n        }).then((response)=>{\n            setPosts((prevPosts)=>[\n                    ...prevPosts,\n                    ...response.data\n                ]);\n            setIsLoading(false);\n        }).catch((error)=>console.log(error));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const callback = (entries)=>{\n            if (entries[0].isIntersecting) {\n                setCurrentPage((page)=>page + 1);\n            }\n        };\n        observer.current = new IntersectionObserver(callback);\n        observer.current.observe(lastEl.current);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    \"Welcome, \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                variant: \"h5\",\n                children: \"Posts:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().postList),\n                children: posts.map((post, index)=>{\n                    if (index === posts.length - 1) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().postItem),\n                            ref: sentinelRef,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined)\n                        }, post.id, false, {\n                            fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, undefined);\n                    } else {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().postItem),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_posts_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                                children: post.title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, undefined)\n                        }, post.id, false, {\n                            fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 15\n                        }, undefined);\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n                lineNumber: 81,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\projects\\\\auth-next\\\\pages\\\\posts.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Posts, \"xx1Lt4VOGxC7K5UOz43EUUSLYpg=\");\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVFO0FBQzVCO0FBQ2pCO0FBQ087QUFDVztBQUNKO0FBQ0U7QUFPMUMsTUFBTVcsUUFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBUyxFQUFFO0lBQzdDLE1BQU0sRUFBRVcsZUFBZSxFQUFFQyxJQUFJLEVBQUUsR0FBR2QsaURBQVVBLENBQUNPLHFEQUFXQTtJQUN4RCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNaUIsY0FBY2hCLDZDQUFNQSxDQUFnQjtJQUMxQyxNQUFNaUIsV0FBV2pCLDZDQUFNQTtJQUV2Qkosc0RBQWVFLENBQUM7UUFDZCxJQUFJWSxvQkFBb0IsT0FBTztZQUM3QlAsdURBQVdlLENBQUM7UUFDZDtJQUNGLEdBQUc7UUFBQ1I7S0FBZ0I7SUFFcEJaLGdEQUFTQSxDQUFDO1FBQ1JxQjtJQUNGLEdBQUc7UUFBQ1A7S0FBWTtJQUVoQixNQUFNTyxhQUFhO1FBQ2pCSixhQUFhO1FBRWJiLGlEQUNNa0IsQ0FBQyw4Q0FBOEM7WUFDakRDLFFBQVE7Z0JBQ05DLFFBQVE7Z0JBQ1JDLE9BQU9YO1lBQ1Q7UUFDRixHQUNDWSxLQUFLLENBQUNDO1lBQ0xoQixTQUFTLENBQUNpQixZQUFjO3VCQUFJQTt1QkFBY0QsU0FBU0U7aUJBQUs7WUFDeERaLGFBQWE7UUFDZixHQUNDYSxNQUFNLENBQUNDLFFBQVVDLFFBQVFDLElBQUlGO0lBQ2xDO0lBRUEvQixnREFBU0EsQ0FBQztRQUNSLE1BQU1rQyxXQUFXLENBQUNDO1lBQ2hCLElBQUlBLE9BQU8sQ0FBQyxFQUFFLENBQUNDLGdCQUFnQjtnQkFDN0JyQixlQUFlc0IsQ0FBQUEsT0FBUUEsT0FBTztZQUNoQztRQUNGO1FBQ0FsQixTQUFTbUIsVUFBVSxJQUFJQyxxQkFBcUJMO1FBQzVDZixTQUFTbUIsUUFBUUUsUUFBUUMsT0FBT0g7SUFDbEMsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ2xDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNMLHFEQUFVQTtnQkFBQ3dDLFdBQVdwQyxnRUFBWXFDOztvQkFBRTtvQkFBVS9COzs7Ozs7OzBCQUMvQyw4REFBQ1YscURBQVVBO2dCQUFDMEMsU0FBUTswQkFBSzs7Ozs7OzBCQUN6Qiw4REFBQ0M7Z0JBQUdILFdBQVdwQyxtRUFBZXdDOzBCQUMzQnJDLE1BQU1zQyxJQUFJLENBQUNDLE1BQU1DO29CQUNoQixJQUFJQSxVQUFVeEMsTUFBTXlDLFNBQVMsR0FBRzt3QkFDOUIscUJBQ0UsOERBQUNDOzRCQUFpQlQsV0FBV3BDLG1FQUFlOEM7NEJBQUVDLEtBQUtwQztzQ0FDakQsNEVBQUNxQztnQ0FBS1osV0FBV3BDLGdFQUFZcUM7MENBQUdLLEtBQUtMOzs7Ozs7MkJBRDlCSyxLQUFLTzs7Ozs7b0JBSWxCLE9BQU87d0JBQ0wscUJBQ0UsOERBQUNKOzRCQUFpQlQsV0FBV3BDLG1FQUFlOEM7c0NBQzFDLDRFQUFDRTtnQ0FBS1osV0FBV3BDLGdFQUFZcUM7MENBQUdLLEtBQUtMOzs7Ozs7MkJBRDlCSyxLQUFLTzs7Ozs7b0JBSWxCO2dCQUNGOzs7Ozs7WUFFRHhDLDJCQUFhLDhEQUFDMEI7MEJBQUk7Ozs7Ozs7Ozs7OztBQUd6QjtHQXRFTWpDO0tBQUFBO0FBd0VOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzLnRzeD8yYTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9hdXRoQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0cy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XHJcblxyXG50eXBlIFBvc3QgPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgUG9zdHM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdFtdPihbXSk7XHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIG5hbWUgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzZW50aW5lbFJlZiA9IHVzZVJlZjxIVE1MTElFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBvYnNlcnZlciA9IHVzZVJlZigpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzQXV0aGVudGljYXRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gIH0sIFtpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUG9zdHMoKTtcclxuICB9LCBbY3VycmVudFBhZ2VdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQb3N0cyA9ICgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnLCB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBfbGltaXQ6IDEwLFxyXG4gICAgICAgICAgX3BhZ2U6IGN1cnJlbnRQYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFBvc3RzKChwcmV2UG9zdHMpID0+IFsuLi5wcmV2UG9zdHMsIC4uLnJlc3BvbnNlLmRhdGFdKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjYWxsYmFjayA9IChlbnRyaWVzKSA9PiB7XHJcbiAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UocGFnZSA9PiBwYWdlICsgMSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb2JzZXJ2ZXIuY3VycmVudCA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjayk7XHJcbiAgICBvYnNlcnZlci5jdXJyZW50Lm9ic2VydmUobGFzdEVsLmN1cnJlbnQpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PldlbGNvbWUsIHtuYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+UG9zdHM6PC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucG9zdExpc3R9PlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHBvc3RzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0SXRlbX0gcmVmPXtzZW50aW5lbFJlZn0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Bvc3QudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RJdGVtfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cG9zdC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlR5cG9ncmFwaHkiLCJheGlvcyIsInJvdXRlciIsIkF1dGhDb250ZXh0Iiwic3R5bGVzIiwiSGVhZGVyIiwiUG9zdHMiLCJwb3N0cyIsInNldFBvc3RzIiwiaXNBdXRoZW50aWNhdGVkIiwibmFtZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZW50aW5lbFJlZiIsIm9ic2VydmVyIiwicHVzaCIsImZldGNoUG9zdHMiLCJnZXQiLCJwYXJhbXMiLCJfbGltaXQiLCJfcGFnZSIsInRoZW4iLCJyZXNwb25zZSIsInByZXZQb3N0cyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwicGFnZSIsImN1cnJlbnQiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIm9ic2VydmUiLCJsYXN0RWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInZhcmlhbnQiLCJ1bCIsInBvc3RMaXN0IiwibWFwIiwicG9zdCIsImluZGV4IiwibGVuZ3RoIiwibGkiLCJwb3N0SXRlbSIsInJlZiIsInNwYW4iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts.tsx\n"));

/***/ })

});