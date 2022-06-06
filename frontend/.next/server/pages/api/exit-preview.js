(function() {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 1952:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ exit; }
});

;// CONCATENATED MODULE: external "next/dist/next-server/server/api-utils"
var api_utils_namespaceObject = require("next/dist/next-server/server/api-utils");;
;// CONCATENATED MODULE: ./pages/api/exit-preview.js

async function exit(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData(); // Redirect the user back to a provided redirect path or the index page

  res.writeHead(307, {
    Location: "/"
  });
  res.end();
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(1952));
module.exports = __webpack_exports__;

})();