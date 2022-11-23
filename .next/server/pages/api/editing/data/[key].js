"use strict";
(() => {
var exports = {};
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 5481:
/***/ ((module) => {

module.exports = require("@sitecore-jss/sitecore-jss-nextjs/editing");

/***/ }),

/***/ 3:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs_editing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs_editing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs_editing__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This Next.js API route is used to handle Sitecore editor data storage and retrieval by key
 * on serverless deployment architectures (e.g. Vercel) via the `ServerlessEditingDataService`.
 *
 * The `EditingDataMiddleware` expects this dynamic route name to be '[key]' by default, but can
 * be configured to use something else with the `dynamicRouteKey` option.
 */
// Bump body size limit (1mb by default) and disable response limit for Sitecore editor payloads
// See https://nextjs.org/docs/api-routes/request-helpers#custom-config

const config = {
  api: {
    bodyParser: {
      sizeLimit: '2mb'
    },
    responseLimit: false
  }
}; // Wire up the EditingDataMiddleware handler

const handler = new _sitecore_jss_sitecore_jss_nextjs_editing__WEBPACK_IMPORTED_MODULE_0__.EditingDataMiddleware().getHandler();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3));
module.exports = __webpack_exports__;

})();