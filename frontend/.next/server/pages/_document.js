"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_3___default()) {\n    static async getInitialProps(ctx) {\n        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n        const originalRenderPage = ctx.renderPage;\n        try {\n            ctx.renderPage = ()=>originalRenderPage({\n                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 33\n                            }, this))\n                });\n            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_3___default().getInitialProps(ctx);\n            return {\n                ...initialProps,\n                styles: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        initialProps.styles,\n                        sheet.getStyleElement()\n                    ]\n                }, void 0, true)\n            };\n        } finally{\n            sheet.seal();\n        }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_3__.Html, {\n            lang: \"pt\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_3__.Head, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            charSet: \"utf-8\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.googleapis.com\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"preconnect\",\n                            href: \"https://fonts.gstatic.com\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            href: \"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\",\n                            rel: \"stylesheet\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_3__.Main, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_3__.NextScript, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\laura\\\\OneDrive\\\\Documentos\\\\Materiais da Faculdade\\\\6\\xba Semestre\\\\PRS\\\\booknook\\\\booknook-back\\\\frontend\\\\src\\\\pages\\\\_document.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzJCO0FBUTlCO0FBRVIsTUFBTU8sbUJBQW1CTCxzREFBUUE7SUFDOUMsYUFBYU0sZ0JBQ1hDLEdBQW9CLEVBQ1c7UUFDL0IsTUFBTUMsUUFBUSxJQUFJVCwrREFBZ0JBO1FBQ2xDLE1BQU1VLHFCQUFxQkYsSUFBSUcsVUFBVTtRQUV6QyxJQUFJO1lBQ0ZILElBQUlHLFVBQVUsR0FBRyxJQUNmRCxtQkFBbUI7b0JBQ2pCRSxZQUFZLENBQUNDLE1BQVEsQ0FBQ0MsUUFDcEJMLE1BQU1NLGFBQWEsZUFBQyw4REFBQ0Y7Z0NBQUssR0FBR0MsS0FBSzs7Ozs7O2dCQUN0QztZQUVGLE1BQU1FLGVBQWUsTUFBTWYsb0VBQXdCLENBQUNPO1lBQ3BELE9BQU87Z0JBQ0wsR0FBR1EsWUFBWTtnQkFDZkMsc0JBQ0U7O3dCQUNHRCxhQUFhQyxNQUFNO3dCQUNuQlIsTUFBTVMsZUFBZTs7O1lBRzVCO1FBQ0YsU0FBVTtZQUNSVCxNQUFNVSxJQUFJO1FBQ1o7SUFDRjtJQUVBQyxTQUFzQjtRQUNwQixxQkFDRSw4REFBQ2pCLCtDQUFJQTtZQUFDa0IsTUFBSzs7OEJBQ1QsOERBQUNuQiwrQ0FBSUE7O3NDQUNILDhEQUFDb0I7NEJBQUtDLFNBQVE7Ozs7OztzQ0FDZCw4REFBQ0M7NEJBQUtDLEtBQUk7NEJBQWFDLE1BQUs7Ozs7OztzQ0FDNUIsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFhQyxNQUFLOzs7Ozs7c0NBQzVCLDhEQUFDRjs0QkFDQ0UsTUFBSzs0QkFDTEQsS0FBSTs7Ozs7Ozs7Ozs7OzhCQUdSLDhEQUFDRTs7c0NBQ0MsOERBQUN2QiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rbm9vay8uL3NyYy9wYWdlcy9fZG9jdW1lbnQudHN4PzE4OGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBEb2N1bWVudCwge1xyXG4gIERvY3VtZW50Q29udGV4dCxcclxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcclxuICBIZWFkLFxyXG4gIEh0bWwsXHJcbiAgTWFpbixcclxuICBOZXh0U2NyaXB0LFxyXG59IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXHJcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxyXG4gICk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+IHtcclxuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cclxuICAgICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xyXG4gICAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gKHByb3BzKSA9PlxyXG4gICAgICAgICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPiksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5pbml0aWFsUHJvcHMsXHJcbiAgICAgICAgc3R5bGVzOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW5pdGlhbFByb3BzLnN0eWxlc31cclxuICAgICAgICAgICAge3NoZWV0LmdldFN0eWxlRWxlbWVudCgpfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNoZWV0LnNlYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPVwicHRcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb21cIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlcnZlclN0eWxlU2hlZXQiLCJEb2N1bWVudCIsIkhlYWQiLCJIdG1sIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2hlZXQiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY29sbGVjdFN0eWxlcyIsImluaXRpYWxQcm9wcyIsInN0eWxlcyIsImdldFN0eWxlRWxlbWVudCIsInNlYWwiLCJyZW5kZXIiLCJsYW5nIiwibWV0YSIsImNoYXJTZXQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();