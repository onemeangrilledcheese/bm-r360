(function() {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 2637:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ api_preview; }
});

// EXTERNAL MODULE: ./utils/api.js
var api = __webpack_require__(3023);
;// CONCATENATED MODULE: external "cookie"
var external_cookie_namespaceObject = require("cookie");;
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_namespaceObject);
;// CONCATENATED MODULE: ./utils/parse-cookies.js

function parseCookies(req) {
  return external_cookie_default().parse(req ? req.headers.cookie || '' : document.cookie);
}
;// CONCATENATED MODULE: ./pages/api/preview.js



const preview = async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== (process.env.PREVIEW_SECRET || "secret-token")) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }

  const cookies = parseCookies(req);
  const slugArray = req.query.slug.split("/"); // Fetch the headless CMS to check if the provided `slug` exists

  const pageData = await (0,api/* getPageData */.um)({
    locale,
    slug: slugArray.join("/"),
    preview: true
  }); // If the slug doesn't exist prevent preview mode from being enabled

  if (!pageData) {
    return res.status(401).json({
      message: "Invalid slug"
    });
  } // Enable Preview Mode by setting the cookies


  res.setPreviewData({}); // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  // Prefix with locale so previews are available in all languages

  res.writeHead(307, {
    Location: `/${pageData.locale}/${pageData.slug}`
  });
  res.end();
};

/* harmony default export */ var api_preview = (preview); // You can view Preview pages with URLs like this:
// http://localhost:3000/api/preview?secret=<preview-secret>&slug=<slug>
// where <preview-secret> is the secret token defined in your .env config
// and where <slug> is the slug you entered in Strapi for your page
// The slug must match the current locale

/***/ }),

/***/ 6850:
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [23], function() { return __webpack_exec__(2637); });
module.exports = __webpack_exports__;

})();