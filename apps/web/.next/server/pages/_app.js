"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ../../node_modules/@blitzjs/next/dist/index-server.cjs
var index_server = __webpack_require__(6859);
// EXTERNAL MODULE: external "blitz"
var external_blitz_ = __webpack_require__(4405);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@blitzjs/auth"
var auth_ = __webpack_require__(7897);
// EXTERNAL MODULE: external "@blitzjs/rpc"
var rpc_ = __webpack_require__(5481);
;// CONCATENATED MODULE: ./app/blitz-client.ts



const authConfig = {
    cookiePrefix: "game-of-blocks"
};
const { withBlitz  } = (0,index_server/* setupBlitzClient */.qd)({
    plugins: [
        (0,auth_.AuthClientPlugin)(authConfig),
        (0,rpc_.BlitzRpcPlugin)({})
    ]
});

// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: ./pages/_app.tsx






function RootErrorFallback({ error  }) {
    if (error instanceof external_blitz_.AuthenticationError) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Error: You are not authenticated"
        });
    } else if (error instanceof external_blitz_.AuthorizationError) {
        return /*#__PURE__*/ jsx_runtime_.jsx(index_server/* ErrorComponent */.qz, {
            statusCode: error.statusCode,
            title: "Sorry, you are not authorized to access this"
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(index_server/* ErrorComponent */.qz, {
            statusCode: error?.statusCode || 400,
            title: error.message || error.name
        });
    }
}
function MyApp({ Component , pageProps  }) {
    const getLayout = Component.getLayout || ((page)=>page);
    return /*#__PURE__*/ jsx_runtime_.jsx(index_server/* ErrorBoundary */.SV, {
        FallbackComponent: RootErrorFallback,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
            children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }))
        })
    });
}
/* harmony default export */ const _app = (withBlitz(MyApp));


/***/ }),

/***/ 7897:
/***/ ((module) => {

module.exports = require("@blitzjs/auth");

/***/ }),

/***/ 5481:
/***/ ((module) => {

module.exports = require("@blitzjs/rpc");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 8910:
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 4405:
/***/ ((module) => {

module.exports = require("blitz");

/***/ }),

/***/ 3031:
/***/ ((module) => {

module.exports = require("has-flag");

/***/ }),

/***/ 7318:
/***/ ((module) => {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ 3231:
/***/ ((module) => {

module.exports = require("ms");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 6464:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 6224:
/***/ ((module) => {

module.exports = require("tty");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [88,859], () => (__webpack_exec__(35)));
module.exports = __webpack_exports__;

})();