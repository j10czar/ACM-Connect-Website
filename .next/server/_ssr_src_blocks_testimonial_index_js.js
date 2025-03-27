"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_blocks_testimonial_index_js";
exports.ids = ["_ssr_src_blocks_testimonial_index_js"];
exports.modules = {

/***/ "(ssr)/./src/blocks/testimonial/Testimonial10.jsx":
/*!**************************************************!*\
  !*** ./src/blocks/testimonial/Testimonial10.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Testimonial10)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"(ssr)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ \"(ssr)/./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js\");\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stack */ \"(ssr)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ \"(ssr)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_lab_Masonry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/lab/Masonry */ \"(ssr)/./node_modules/@mui/lab/Masonry/Masonry.js\");\n/* harmony import */ var _components_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/cards */ \"(ssr)/./src/components/cards/index.js\");\n/* harmony import */ var _components_ContainerWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ContainerWrapper */ \"(ssr)/./src/components/ContainerWrapper.jsx\");\n/* harmony import */ var _components_Rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Rating */ \"(ssr)/./src/components/Rating.jsx\");\n/* harmony import */ var _components_Typeset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Typeset */ \"(ssr)/./src/components/Typeset.jsx\");\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/constant */ \"(ssr)/./src/utils/constant.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n// @mui\n\n\n\n\n// @project\n\n\n\n\n\n// @types\n/***************************  TESTIMONIAL - 10  ***************************/ function Testimonial10({ heading, caption, testimonials }) {\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const gc = theme.palette.background.default;\n    const gradient = `radial-gradient(146.46% 68.12% at 50% 29.86%, ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__.alpha)(gc, 0)} 0%, ${gc} 100%)`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContainerWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            py: _utils_constant__WEBPACK_IMPORTED_MODULE_5__.SECTION_COMMON_PY\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            sx: {\n                gap: {\n                    xs: 3,\n                    sm: 4\n                }\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Typeset__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    heading,\n                    caption,\n                    stackProps: {\n                        sx: {\n                            maxWidth: {\n                                xs: 550,\n                                md: 700\n                            },\n                            textAlign: 'center',\n                            mx: 'auto'\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_lab_Masonry__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    columns: {\n                        xs: 2,\n                        sm: 3\n                    },\n                    spacing: {\n                        xs: 1,\n                        sm: 1.5\n                    },\n                    sx: {\n                        position: 'relative',\n                        '&:before': {\n                            position: 'absolute',\n                            content: `' '`,\n                            left: 0,\n                            bottom: 0,\n                            width: 1,\n                            height: 1,\n                            background: gradient\n                        }\n                    },\n                    children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards__WEBPACK_IMPORTED_MODULE_1__.GraphicsCard, {\n                            sx: {\n                                borderRadius: {\n                                    xs: 4,\n                                    md: 6\n                                }\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                sx: {\n                                    justifyContent: 'space-between',\n                                    height: 1,\n                                    gap: 3,\n                                    p: {\n                                        xs: 1.5,\n                                        md: 2\n                                    }\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Rating__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        rate: testimonial.ratings,\n                                        starSize: 16\n                                    }, void 0, false, {\n                                        fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        sx: {\n                                            gap: 1\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                variant: \"subtitle1\",\n                                                children: testimonial.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                sx: {\n                                                    color: 'text.secondary'\n                                                },\n                                                children: testimonial.review\n                                            }, void 0, false, {\n                                                fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        sx: {\n                                            gap: 0.5\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                variant: \"subtitle1\",\n                                                children: testimonial.profile.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                variant: \"body2\",\n                                                sx: {\n                                                    color: 'text.secondary'\n                                                },\n                                                children: testimonial.profile.role\n                                            }, void 0, false, {\n                                                fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/j10/Projects/acm-connect-web-test/src/blocks/testimonial/Testimonial10.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\nTestimonial10.propTypes = {\n    heading: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().any),\n    caption: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().any),\n    testimonials: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().any)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvYmxvY2tzL3Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsMTAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUM7QUFFbkMsT0FBTztBQUNnRDtBQUNmO0FBQ1U7QUFDWDtBQUV2QyxXQUFXO0FBQ3VDO0FBQ1c7QUFDcEI7QUFDRTtBQUVVO0FBRXJELFNBQVM7QUFFVCwwRUFBMEUsR0FFM0QsU0FBU1csY0FBYyxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFO0lBQ3RFLE1BQU1DLFFBQVFiLGdFQUFRQTtJQUV0QixNQUFNYyxLQUFLRCxNQUFNRSxPQUFPLENBQUNDLFVBQVUsQ0FBQ0MsT0FBTztJQUMzQyxNQUFNQyxXQUFXLENBQUMsOENBQThDLEVBQUVuQiwyREFBS0EsQ0FBQ2UsSUFBSSxHQUFHLEtBQUssRUFBRUEsR0FBRyxNQUFNLENBQUM7SUFFaEcscUJBQ0UsOERBQUNULG9FQUFnQkE7UUFBQ2MsSUFBSTtZQUFFQyxJQUFJWiw4REFBaUJBO1FBQUM7a0JBQzVDLDRFQUFDUCwyREFBS0E7WUFBQ2tCLElBQUk7Z0JBQUVFLEtBQUs7b0JBQUVDLElBQUk7b0JBQUdDLElBQUk7Z0JBQUU7WUFBRTs7OEJBQ2pDLDhEQUFDaEIsMkRBQU9BO29CQUFPRztvQkFBU0M7b0JBQVNhLFlBQVk7d0JBQUVMLElBQUk7NEJBQUVNLFVBQVU7Z0NBQUVILElBQUk7Z0NBQUtJLElBQUk7NEJBQUk7NEJBQUdDLFdBQVc7NEJBQVVDLElBQUk7d0JBQU87b0JBQUU7Ozs7Ozs4QkFDdkgsOERBQUN6Qix3REFBT0E7b0JBQ04wQixTQUFTO3dCQUFFUCxJQUFJO3dCQUFHQyxJQUFJO29CQUFFO29CQUN4Qk8sU0FBUzt3QkFBRVIsSUFBSTt3QkFBR0MsSUFBSTtvQkFBSTtvQkFDMUJKLElBQUk7d0JBQ0ZZLFVBQVU7d0JBQ1YsWUFBWTs0QkFBRUEsVUFBVTs0QkFBWUMsU0FBUyxDQUFDLEdBQUcsQ0FBQzs0QkFBRUMsTUFBTTs0QkFBR0MsUUFBUTs0QkFBR0MsT0FBTzs0QkFBR0MsUUFBUTs0QkFBR3BCLFlBQVlFO3dCQUFTO29CQUNwSDs4QkFFQ04sYUFBYXlCLEdBQUcsQ0FBQyxDQUFDQyxhQUFhQyxzQkFDOUIsOERBQUNuQywyREFBWUE7NEJBQWFlLElBQUk7Z0NBQUVxQixjQUFjO29DQUFFbEIsSUFBSTtvQ0FBR0ksSUFBSTtnQ0FBRTs0QkFBRTtzQ0FDN0QsNEVBQUN6QiwyREFBS0E7Z0NBQUNrQixJQUFJO29DQUFFc0IsZ0JBQWdCO29DQUFpQkwsUUFBUTtvQ0FBR2YsS0FBSztvQ0FBR3FCLEdBQUc7d0NBQUVwQixJQUFJO3dDQUFLSSxJQUFJO29DQUFFO2dDQUFFOztrREFDckYsOERBQUNwQiwwREFBTUE7d0NBQU9xQyxNQUFNTCxZQUFZTSxPQUFPO3dDQUFFQyxVQUFVOzs7Ozs7a0RBQ25ELDhEQUFDNUMsMkRBQUtBO3dDQUFDa0IsSUFBSTs0Q0FBRUUsS0FBSzt3Q0FBRTs7MERBQ2xCLDhEQUFDbkIsaUVBQVVBO2dEQUFDNEMsU0FBUTswREFBYVIsWUFBWVMsS0FBSzs7Ozs7OzBEQUNsRCw4REFBQzdDLGlFQUFVQTtnREFBQ2lCLElBQUk7b0RBQUU2QixPQUFPO2dEQUFpQjswREFBSVYsWUFBWVcsTUFBTTs7Ozs7Ozs7Ozs7O2tEQUVsRSw4REFBQ2hELDJEQUFLQTt3Q0FBQ2tCLElBQUk7NENBQUVFLEtBQUs7d0NBQUk7OzBEQUNwQiw4REFBQ25CLGlFQUFVQTtnREFBQzRDLFNBQVE7MERBQWFSLFlBQVlZLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7OzBEQUN6RCw4REFBQ2pELGlFQUFVQTtnREFBQzRDLFNBQVE7Z0RBQVEzQixJQUFJO29EQUFFNkIsT0FBTztnREFBaUI7MERBQ3ZEVixZQUFZWSxPQUFPLENBQUNFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFWZGI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CL0I7QUFFQTlCLGNBQWM0QyxTQUFTLEdBQUc7SUFBRTNDLFNBQVNaLHdEQUFhO0lBQUVhLFNBQVNiLHdEQUFhO0lBQUVjLGNBQWNkLHdEQUFhO0FBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qMTAvUHJvamVjdHMvYWNtLWNvbm5lY3Qtd2ViLXRlc3Qvc3JjL2Jsb2Nrcy90ZXN0aW1vbmlhbC9UZXN0aW1vbmlhbDEwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vLyBAbXVpXG5pbXBvcnQgeyBhbHBoYSwgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQgU3RhY2sgZnJvbSAnQG11aS9tYXRlcmlhbC9TdGFjayc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuaW1wb3J0IE1hc29ucnkgZnJvbSAnQG11aS9sYWIvTWFzb25yeSc7XG5cbi8vIEBwcm9qZWN0XG5pbXBvcnQgeyBHcmFwaGljc0NhcmQgfSBmcm9tICdAL2NvbXBvbmVudHMvY2FyZHMnO1xuaW1wb3J0IENvbnRhaW5lcldyYXBwZXIgZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcldyYXBwZXInO1xuaW1wb3J0IFJhdGluZyBmcm9tICdAL2NvbXBvbmVudHMvUmF0aW5nJztcbmltcG9ydCBUeXBlc2V0IGZyb20gJ0AvY29tcG9uZW50cy9UeXBlc2V0JztcblxuaW1wb3J0IHsgU0VDVElPTl9DT01NT05fUFkgfSBmcm9tICdAL3V0aWxzL2NvbnN0YW50JztcblxuLy8gQHR5cGVzXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiogIFRFU1RJTU9OSUFMIC0gMTAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWwxMCh7IGhlYWRpbmcsIGNhcHRpb24sIHRlc3RpbW9uaWFscyB9KSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcblxuICBjb25zdCBnYyA9IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0O1xuICBjb25zdCBncmFkaWVudCA9IGByYWRpYWwtZ3JhZGllbnQoMTQ2LjQ2JSA2OC4xMiUgYXQgNTAlIDI5Ljg2JSwgJHthbHBoYShnYywgMCl9IDAlLCAke2djfSAxMDAlKWA7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyV3JhcHBlciBzeD17eyBweTogU0VDVElPTl9DT01NT05fUFkgfX0+XG4gICAgICA8U3RhY2sgc3g9e3sgZ2FwOiB7IHhzOiAzLCBzbTogNCB9IH19PlxuICAgICAgICA8VHlwZXNldCB7Li4ueyBoZWFkaW5nLCBjYXB0aW9uLCBzdGFja1Byb3BzOiB7IHN4OiB7IG1heFdpZHRoOiB7IHhzOiA1NTAsIG1kOiA3MDAgfSwgdGV4dEFsaWduOiAnY2VudGVyJywgbXg6ICdhdXRvJyB9IH0gfX0gLz5cbiAgICAgICAgPE1hc29ucnlcbiAgICAgICAgICBjb2x1bW5zPXt7IHhzOiAyLCBzbTogMyB9fVxuICAgICAgICAgIHNwYWNpbmc9e3sgeHM6IDEsIHNtOiAxLjUgfX1cbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAnJjpiZWZvcmUnOiB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBjb250ZW50OiBgJyAnYCwgbGVmdDogMCwgYm90dG9tOiAwLCB3aWR0aDogMSwgaGVpZ2h0OiAxLCBiYWNrZ3JvdW5kOiBncmFkaWVudCB9XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxHcmFwaGljc0NhcmQga2V5PXtpbmRleH0gc3g9e3sgYm9yZGVyUmFkaXVzOiB7IHhzOiA0LCBtZDogNiB9IH19PlxuICAgICAgICAgICAgICA8U3RhY2sgc3g9e3sganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgaGVpZ2h0OiAxLCBnYXA6IDMsIHA6IHsgeHM6IDEuNSwgbWQ6IDIgfSB9fT5cbiAgICAgICAgICAgICAgICA8UmF0aW5nIHsuLi57IHJhdGU6IHRlc3RpbW9uaWFsLnJhdGluZ3MsIHN0YXJTaXplOiAxNiB9fSAvPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzeD17eyBnYXA6IDEgfX0+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+e3Rlc3RpbW9uaWFsLnRpdGxlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGNvbG9yOiAndGV4dC5zZWNvbmRhcnknIH19Pnt0ZXN0aW1vbmlhbC5yZXZpZXd9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHN4PXt7IGdhcDogMC41IH19PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPnt0ZXN0aW1vbmlhbC5wcm9maWxlLm5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6ICd0ZXh0LnNlY29uZGFyeScgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC5wcm9maWxlLnJvbGV9XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvR3JhcGhpY3NDYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L01hc29ucnk+XG4gICAgICA8L1N0YWNrPlxuICAgIDwvQ29udGFpbmVyV3JhcHBlcj5cbiAgKTtcbn1cblxuVGVzdGltb25pYWwxMC5wcm9wVHlwZXMgPSB7IGhlYWRpbmc6IFByb3BUeXBlcy5hbnksIGNhcHRpb246IFByb3BUeXBlcy5hbnksIHRlc3RpbW9uaWFsczogUHJvcFR5cGVzLmFueSB9O1xuIl0sIm5hbWVzIjpbIlByb3BUeXBlcyIsImFscGhhIiwidXNlVGhlbWUiLCJTdGFjayIsIlR5cG9ncmFwaHkiLCJNYXNvbnJ5IiwiR3JhcGhpY3NDYXJkIiwiQ29udGFpbmVyV3JhcHBlciIsIlJhdGluZyIsIlR5cGVzZXQiLCJTRUNUSU9OX0NPTU1PTl9QWSIsIlRlc3RpbW9uaWFsMTAiLCJoZWFkaW5nIiwiY2FwdGlvbiIsInRlc3RpbW9uaWFscyIsInRoZW1lIiwiZ2MiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJncmFkaWVudCIsInN4IiwicHkiLCJnYXAiLCJ4cyIsInNtIiwic3RhY2tQcm9wcyIsIm1heFdpZHRoIiwibWQiLCJ0ZXh0QWxpZ24iLCJteCIsImNvbHVtbnMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJjb250ZW50IiwibGVmdCIsImJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwibWFwIiwidGVzdGltb25pYWwiLCJpbmRleCIsImJvcmRlclJhZGl1cyIsImp1c3RpZnlDb250ZW50IiwicCIsInJhdGUiLCJyYXRpbmdzIiwic3RhclNpemUiLCJ2YXJpYW50IiwidGl0bGUiLCJjb2xvciIsInJldmlldyIsInByb2ZpbGUiLCJuYW1lIiwicm9sZSIsInByb3BUeXBlcyIsImFueSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/blocks/testimonial/Testimonial10.jsx\n");

/***/ }),

/***/ "(ssr)/./src/blocks/testimonial/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/testimonial/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Testimonial10: () => (/* reexport safe */ _Testimonial10__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Testimonial10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Testimonial10 */ \"(ssr)/./src/blocks/testimonial/Testimonial10.jsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvYmxvY2tzL3Rlc3RpbW9uaWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJEIiwic291cmNlcyI6WyIvVXNlcnMvajEwL1Byb2plY3RzL2FjbS1jb25uZWN0LXdlYi10ZXN0L3NyYy9ibG9ja3MvdGVzdGltb25pYWwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXN0aW1vbmlhbDEwIH0gZnJvbSAnLi9UZXN0aW1vbmlhbDEwJztcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiVGVzdGltb25pYWwxMCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/blocks/testimonial/index.js\n");

/***/ }),

/***/ "(ssr)/./src/components/Rating.jsx":
/*!***********************************!*\
  !*** ./src/components/Rating.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rating)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Stack */ \"(ssr)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgIcon */ \"(ssr)/./src/components/SvgIcon.jsx\");\n/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/enum */ \"(ssr)/./src/enum.js\");\n\n\n// @mui\n\n// @project\n\n\n/***************************  RATING  ***************************/ function Rating({ count = 5, rate, starSize = 20, ...rest }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        direction: \"row\",\n        ...rest,\n        sx: {\n            gap: 0.75,\n            ...rest.sx && {\n                ...rest.sx\n            }\n        },\n        children: Array.from({\n            length: count\n        }, (_, index)=>{\n            const color = rate && index > rate - 1 ? 'primary.lighter' : 'primary.main';\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                name: \"tabler-filled-star\",\n                size: starSize,\n                type: _enum__WEBPACK_IMPORTED_MODULE_2__.IconType.FILL,\n                color: color\n            }, index, false, {\n                fileName: \"/Users/j10/Projects/acm-connect-web-test/src/components/Rating.jsx\",\n                lineNumber: 16,\n                columnNumber: 16\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/j10/Projects/acm-connect-web-test/src/components/Rating.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\nRating.propTypes = {\n    count: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),\n    rate: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),\n    starSize: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number),\n    rest: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvY29tcG9uZW50cy9SYXRpbmcuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtQztBQUNuQyxPQUFPO0FBQ2lDO0FBRXhDLFdBQVc7QUFDcUI7QUFDRTtBQUVsQyxnRUFBZ0UsR0FFakQsU0FBU0ksT0FBTyxFQUFFQyxRQUFRLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxXQUFXLEVBQUUsRUFBRSxHQUFHQyxNQUFNO0lBQ3hFLHFCQUNFLDhEQUFDUCwyREFBS0E7UUFBQ1EsV0FBVTtRQUFPLEdBQUdELElBQUk7UUFBRUUsSUFBSTtZQUFFQyxLQUFLO1lBQU0sR0FBSUgsS0FBS0UsRUFBRSxJQUFJO2dCQUFFLEdBQUdGLEtBQUtFLEVBQUU7WUFBQyxDQUFDO1FBQUU7a0JBQzlFRSxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUVQ7UUFBTSxHQUFHLENBQUNVLEdBQUdDO1lBQ2pDLE1BQU1DLFFBQVFYLFFBQVFVLFFBQVFWLE9BQU8sSUFBSSxvQkFBb0I7WUFDN0QscUJBQU8sOERBQUNKLGdEQUFPQTtnQkFBQ2dCLE1BQUs7Z0JBQXFCQyxNQUFNWjtnQkFBc0JhLE1BQU1qQiwyQ0FBUUEsQ0FBQ2tCLElBQUk7Z0JBQUVKLE9BQU9BO2VBQW5DRDs7Ozs7UUFDakU7Ozs7OztBQUdOO0FBRUFaLE9BQU9rQixTQUFTLEdBQUc7SUFBRWpCLE9BQU9MLDBEQUFnQjtJQUFFTSxNQUFNTiwwREFBZ0I7SUFBRU8sVUFBVVAsMERBQWdCO0lBQUVRLE1BQU1SLHVEQUFhO0FBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9qMTAvUHJvamVjdHMvYWNtLWNvbm5lY3Qtd2ViLXRlc3Qvc3JjL2NvbXBvbmVudHMvUmF0aW5nLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQG11aVxuaW1wb3J0IFN0YWNrIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3RhY2snO1xuXG4vLyBAcHJvamVjdFxuaW1wb3J0IFN2Z0ljb24gZnJvbSAnLi9TdmdJY29uJztcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSAnQC9lbnVtJztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiAgUkFUSU5HICAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhdGluZyh7IGNvdW50ID0gNSwgcmF0ZSwgc3RhclNpemUgPSAyMCwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIHsuLi5yZXN0fSBzeD17eyBnYXA6IDAuNzUsIC4uLihyZXN0LnN4ICYmIHsgLi4ucmVzdC5zeCB9KSB9fT5cbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9LCAoXywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY29sb3IgPSByYXRlICYmIGluZGV4ID4gcmF0ZSAtIDEgPyAncHJpbWFyeS5saWdodGVyJyA6ICdwcmltYXJ5Lm1haW4nO1xuICAgICAgICByZXR1cm4gPFN2Z0ljb24gbmFtZT1cInRhYmxlci1maWxsZWQtc3RhclwiIHNpemU9e3N0YXJTaXplfSBrZXk9e2luZGV4fSB0eXBlPXtJY29uVHlwZS5GSUxMfSBjb2xvcj17Y29sb3J9IC8+O1xuICAgICAgfSl9XG4gICAgPC9TdGFjaz5cbiAgKTtcbn1cblxuUmF0aW5nLnByb3BUeXBlcyA9IHsgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsIHJhdGU6IFByb3BUeXBlcy5udW1iZXIsIHN0YXJTaXplOiBQcm9wVHlwZXMubnVtYmVyLCByZXN0OiBQcm9wVHlwZXMuYW55IH07XG4iXSwibmFtZXMiOlsiUHJvcFR5cGVzIiwiU3RhY2siLCJTdmdJY29uIiwiSWNvblR5cGUiLCJSYXRpbmciLCJjb3VudCIsInJhdGUiLCJzdGFyU2l6ZSIsInJlc3QiLCJkaXJlY3Rpb24iLCJzeCIsImdhcCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsImNvbG9yIiwibmFtZSIsInNpemUiLCJ0eXBlIiwiRklMTCIsInByb3BUeXBlcyIsIm51bWJlciIsImFueSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./src/components/Rating.jsx\n");

/***/ })

};
;