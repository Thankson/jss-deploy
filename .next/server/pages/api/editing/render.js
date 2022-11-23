"use strict";
(() => {
var exports = {};
exports.id = 76;
exports.ids = [76];
exports.modules = {

/***/ 5481:
/***/ ((module) => {

module.exports = require("@sitecore-jss/sitecore-jss-nextjs/editing");

/***/ }),

/***/ 8981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs_editing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5481);
/* harmony import */ var _sitecore_jss_sitecore_jss_nextjs_editing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sitecore_jss_sitecore_jss_nextjs_editing__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This Next.js API route is used to handle POST requests from Sitecore editors.
 * This route should match the `serverSideRenderingEngineEndpointUrl` in your Sitecore configuration,
 * which is set to "http://localhost:3000/api/editing/render" by default (see \sitecore\config\next-jss-prj.config).
 *
 * The `EditingRenderMiddleware` will
 *  1. Extract editing data from the Sitecore editor POST request
 *  2. Stash this data (for later use in the page render request) via an `EditingDataService`, which returns a key for retrieval
 *  3. Enable Next.js Preview Mode, passing our stashed editing data key as preview data
 *  4. Invoke the actual page render request, passing along the Preview Mode cookies.
 *     This allows retrieval of the editing data in preview context (via an `EditingDataService`) - see `SitecorePagePropsFactory`
 *  5. Return the rendered page HTML to the Sitecore editor
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
}; // Wire up the EditingRenderMiddleware handler

const handler = new _sitecore_jss_sitecore_jss_nextjs_editing__WEBPACK_IMPORTED_MODULE_0__.EditingRenderMiddleware().getHandler();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8981));
module.exports = __webpack_exports__;

})();