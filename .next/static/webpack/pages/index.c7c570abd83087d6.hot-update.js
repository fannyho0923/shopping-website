"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/constant/menu.js":
/*!*************************************!*\
  !*** ./components/constant/menu.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MENUITEMS\": function() { return /* binding */ MENUITEMS; }\n/* harmony export */ });\nvar MENUITEMS = [\n    {\n        title: \"Home\",\n        type: \"link\"\n    },\n    {\n        title: \"Menu\",\n        type: \"link\",\n        path: \"/layouts/Vegetables\"\n    },\n    {\n        title: \"Products\",\n        type: \"link\",\n        path: \"/product-details/no-sidebar\"\n    },\n    {\n        title: \"About Us\",\n        children: [\n            {\n                path: \"/product-details/thumbnail_left\",\n                title: \"Left Image\",\n                type: \"link\"\n            },\n            {\n                path: \"/product-details/thumbnail_right\",\n                title: \"Right Image\",\n                type: \"link\"\n            },\n            {\n                path: \"/product-details/thumbnail_outside\",\n                title: \"Image Outside\",\n                type: \"link\"\n            }, \n        ]\n    },\n    {\n        title: \"3-Column\",\n        type: \"sub\",\n        children: [\n            {\n                path: \"/product-details/3_col_left\",\n                title: \"Thumbnail Left\",\n                type: \"link\"\n            },\n            {\n                path: \"/product-details/3_col_right\",\n                title: \"Thumbnail Right\",\n                type: \"link\"\n            },\n            {\n                path: \"/product-details/3_col_bottom\",\n                title: \"Thumbnail Bottom\",\n                type: \"link\"\n            }, \n        ]\n    },\n    {\n        path: \"/product-details/4_image\",\n        title: \"4 Image\",\n        type: \"link\",\n        tag: \"New\"\n    },\n    {\n        path: \"/product-details/bundle_product\",\n        title: \"Bundle Product\",\n        type: \"link\",\n        tag: \"New\"\n    },\n    {\n        path: \"/product-details/sticky\",\n        title: \"Sticky\",\n        type: \"link\"\n    },\n    {\n        path: \"/product-details/accordian\",\n        title: \"Accordian\",\n        type: \"link\"\n    },\n    {\n        path: \"/product-details/image_swatch\",\n        title: \"Image Swatch\",\n        type: \"link\",\n        tag: \"New\"\n    },\n    {\n        path: \"/product-details/vertical_tab\",\n        title: \"Vertical Tab\",\n        type: \"link\"\n    },\n    {\n        title: \"About Us\",\n        type: \"link\",\n        path: \"/page/about-us\"\n    },\n    {\n        title: \"Contact\",\n        type: \"sub\",\n        children: [\n            {\n                path: \"/blogs/blog_left_sidebar\",\n                title: \"blog left sidebar\",\n                type: \"link\"\n            },\n            {\n                path: \"/blogs/blog_right_sidebar\",\n                title: \"blog right sidebar\",\n                type: \"link\"\n            },\n            {\n                path: \"/blogs/no_sidebar\",\n                title: \"no sidebar\",\n                type: \"link\"\n            },\n            {\n                path: \"/blogs/blog_detail\",\n                title: \"blog detail\",\n                type: \"link\"\n            }, \n        ]\n    }, \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBRSxNQUFNO2FBQUU7WUFDaEU7Z0JBQUVDLElBQUksRUFBRSxvQkFBb0I7Z0JBQUVGLEtBQUssRUFBRSxhQUFhO2dCQUFFQyxJQUFJLEVBQUUsTUFBTTthQUFFO1NBQ25FO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29uc3RhbnQvbWVudS5qcz81NWMwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBNRU5VSVRFTVMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJIb21lXCIsXG4gICAgdHlwZTogXCJsaW5rXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNZW51XCIsXG4gICAgdHlwZTogXCJsaW5rXCIsXG4gICAgcGF0aDogXCIvbGF5b3V0cy9WZWdldGFibGVzXCIsXG4gICAgLy8gIGNoaWxkcmVuOiBbXG4gICAgLy8gICAgeyBwYXRoOiBcIi9sYXlvdXRzL0Z1cm5pdHVyZVwiLCB0aXRsZTogXCJNZW51XCIsIHR5cGU6IFwibGlua1wiIH0sXG4gICAgLy8gICAgeyBwYXRoOiBcIi9sYXlvdXRzL0Z1cm5pdHVyZVwiLCB0aXRsZTogXCJGdXJuaXR1cmVcIiwgdHlwZTogXCJsaW5rXCIgfSxcbiAgICAvLyAgICB7IHBhdGg6IFwiL2xheW91dHMvVmVnZXRhYmxlc1wiLCB0aXRsZTogXCJWZWdldGFibGVzXCIsIHR5cGU6IFwibGlua1wiIH0sXG4gICAgLy8gICAgeyBwYXRoOiBcIi9sYXlvdXRzL1dhdGNoXCIsIHRpdGxlOiBcIldhdGNoXCIsIHR5cGU6IFwibGlua1wiIH0sXG4gICAgLy8gICAgeyBwYXRoOiBcIi9sYXlvdXRzL0xpZ2h0c1wiLCB0aXRsZTogXCJMaWdodHNcIiwgdHlwZTogXCJsaW5rXCIgfSxcbiAgICAvLyAgICB7IHBhdGg6IFwiL2xheW91dHMvR29nZ2xlc1wiLCB0aXRsZTogXCJHb2dnbGVzXCIsIHR5cGU6IFwibGlua1wiIH0sXG4gICAgLy8gICAgeyBwYXRoOiBcIi9sYXlvdXRzL1Nob2VzXCIsIHRpdGxlOiBcIlNob2VzXCIsIHR5cGU6IFwibGlua1wiIH0sXG4gICAgLy8gICAgeyBwYXRoOiBcIi9sYXlvdXRzL0JhZ3NcIiwgdGl0bGU6IFwiQmFnc1wiLCB0eXBlOiBcImxpbmtcIiB9LFxuICAgIC8vICAgIHsgcGF0aDogXCIvbGF5b3V0cy9GbG93ZXJzXCIsIHRpdGxlOiBcIkZsb3dlcnNcIiwgdHlwZTogXCJsaW5rXCIgfSxcbiAgICAvLyAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlByb2R1Y3RzXCIsXG4gICAgdHlwZTogXCJsaW5rXCIsXG4gICAgcGF0aDogXCIvcHJvZHVjdC1kZXRhaWxzL25vLXNpZGViYXJcIixcbiAgICAvLyAgY2hpbGRyZW46IFtcbiAgICAvLyAgICB7XG4gICAgLy8gICAgICB0aXRsZTogXCJTaWRlYmFyXCIsXG4gICAgLy8gICAgICB0eXBlOiBcInN1YlwiLFxuICAgIC8vICAgICAgY2hpbGRyZW46IFtcbiAgICAvLyAgICAgICAgeyBwYXRoOiBcIi9wcm9kdWN0LWRldGFpbHMvMVwiLCB0aXRsZTogXCJMZWZ0IFNpZGViYXJcIiwgdHlwZTogXCJsaW5rXCIgfSxcbiAgICAvLyAgICAgICAge1xuICAgIC8vICAgICAgICAgIHBhdGg6IFwiL3Byb2R1Y3QtZGV0YWlscy9yaWdodF9zaWRlYmFyXCIsXG4gICAgLy8gICAgICAgICAgdGl0bGU6IFwiUmlnaHQgU2lkZWJhclwiLFxuICAgIC8vICAgICAgICAgIHR5cGU6IFwibGlua1wiLFxuICAgIC8vICAgICAgICB9LFxuICAgIC8vICAgICAgICB7XG4gICAgLy8gICAgICAgICAgcGF0aDogXCIvcHJvZHVjdC1kZXRhaWxzL25vLXNpZGViYXJcIixcbiAgICAvLyAgICAgICAgICB0aXRsZTogXCJObyBTaWRlYmFyXCIsXG4gICAgLy8gICAgICAgICAgdHlwZTogXCJsaW5rXCIsXG4gICAgLy8gICAgICAgIH0sXG4gICAgLy8gICAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQWJvdXQgVXNcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9wcm9kdWN0LWRldGFpbHMvdGh1bWJuYWlsX2xlZnRcIixcbiAgICAgICAgdGl0bGU6IFwiTGVmdCBJbWFnZVwiLFxuICAgICAgICB0eXBlOiBcImxpbmtcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3Byb2R1Y3QtZGV0YWlscy90aHVtYm5haWxfcmlnaHRcIixcbiAgICAgICAgdGl0bGU6IFwiUmlnaHQgSW1hZ2VcIixcbiAgICAgICAgdHlwZTogXCJsaW5rXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9wcm9kdWN0LWRldGFpbHMvdGh1bWJuYWlsX291dHNpZGVcIixcbiAgICAgICAgdGl0bGU6IFwiSW1hZ2UgT3V0c2lkZVwiLFxuICAgICAgICB0eXBlOiBcImxpbmtcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIjMtQ29sdW1uXCIsXG4gICAgdHlwZTogXCJzdWJcIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9wcm9kdWN0LWRldGFpbHMvM19jb2xfbGVmdFwiLFxuICAgICAgICB0aXRsZTogXCJUaHVtYm5haWwgTGVmdFwiLFxuICAgICAgICB0eXBlOiBcImxpbmtcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6IFwiL3Byb2R1Y3QtZGV0YWlscy8zX2NvbF9yaWdodFwiLFxuICAgICAgICB0aXRsZTogXCJUaHVtYm5haWwgUmlnaHRcIixcbiAgICAgICAgdHlwZTogXCJsaW5rXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9wcm9kdWN0LWRldGFpbHMvM19jb2xfYm90dG9tXCIsXG4gICAgICAgIHRpdGxlOiBcIlRodW1ibmFpbCBCb3R0b21cIixcbiAgICAgICAgdHlwZTogXCJsaW5rXCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9wcm9kdWN0LWRldGFpbHMvNF9pbWFnZVwiLFxuICAgIHRpdGxlOiBcIjQgSW1hZ2VcIixcbiAgICB0eXBlOiBcImxpbmtcIixcbiAgICB0YWc6IFwiTmV3XCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9wcm9kdWN0LWRldGFpbHMvYnVuZGxlX3Byb2R1Y3RcIixcbiAgICB0aXRsZTogXCJCdW5kbGUgUHJvZHVjdFwiLFxuICAgIHR5cGU6IFwibGlua1wiLFxuICAgIHRhZzogXCJOZXdcIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2R1Y3QtZGV0YWlscy9zdGlja3lcIixcbiAgICB0aXRsZTogXCJTdGlja3lcIixcbiAgICB0eXBlOiBcImxpbmtcIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2R1Y3QtZGV0YWlscy9hY2NvcmRpYW5cIixcbiAgICB0aXRsZTogXCJBY2NvcmRpYW5cIixcbiAgICB0eXBlOiBcImxpbmtcIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL3Byb2R1Y3QtZGV0YWlscy9pbWFnZV9zd2F0Y2hcIixcbiAgICB0aXRsZTogXCJJbWFnZSBTd2F0Y2hcIixcbiAgICB0eXBlOiBcImxpbmtcIixcbiAgICB0YWc6IFwiTmV3XCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9wcm9kdWN0LWRldGFpbHMvdmVydGljYWxfdGFiXCIsXG4gICAgdGl0bGU6IFwiVmVydGljYWwgVGFiXCIsXG4gICAgdHlwZTogXCJsaW5rXCIsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiBcIkFib3V0IFVzXCIsXG4gICAgdHlwZTogXCJsaW5rXCIsXG4gICAgcGF0aDogXCIvcGFnZS9hYm91dC11c1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29udGFjdFwiLFxuICAgIHR5cGU6IFwic3ViXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogXCIvYmxvZ3MvYmxvZ19sZWZ0X3NpZGViYXJcIixcbiAgICAgICAgdGl0bGU6IFwiYmxvZyBsZWZ0IHNpZGViYXJcIixcbiAgICAgICAgdHlwZTogXCJsaW5rXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9ibG9ncy9ibG9nX3JpZ2h0X3NpZGViYXJcIixcbiAgICAgICAgdGl0bGU6IFwiYmxvZyByaWdodCBzaWRlYmFyXCIsXG4gICAgICAgIHR5cGU6IFwibGlua1wiLFxuICAgICAgfSxcbiAgICAgIHsgcGF0aDogXCIvYmxvZ3Mvbm9fc2lkZWJhclwiLCB0aXRsZTogXCJubyBzaWRlYmFyXCIsIHR5cGU6IFwibGlua1wiIH0sXG4gICAgICB7IHBhdGg6IFwiL2Jsb2dzL2Jsb2dfZGV0YWlsXCIsIHRpdGxlOiBcImJsb2cgZGV0YWlsXCIsIHR5cGU6IFwibGlua1wiIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiTUVOVUlURU1TIiwidGl0bGUiLCJ0eXBlIiwicGF0aCIsImNoaWxkcmVuIiwidGFnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/constant/menu.js\n"));

/***/ })

});