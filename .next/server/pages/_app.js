"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const metadata = {
    meta: {
        url: "https://haeya.github.io",
        title: "haeya"
    },
    author: "haeya",
    home: {
        name: "Hae Kang"
    },
    social: {
        github: "https://github.com/haeya",
        linkedin: "https://www.linkedin.com/in/kanghae/"
    },
    analytics: {
        google: ""
    },
    ads: {
        google: ""
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (metadata);


/***/ }),

/***/ 5480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./data/metadata.ts
var metadata = __webpack_require__(9180);
;// CONCATENATED MODULE: ./next-seo.config.js

const SEO = {
    titleTemplate: "%s | haeya.github.io",
    defaultTitle: metadata/* default.meta.title */.Z.meta.title,
    description: metadata/* default.meta.description */.Z.meta.description,
    canonical: metadata/* default.meta.url */.Z.meta.url,
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: metadata/* default.meta.url */.Z.meta.url,
        site_name: metadata/* default.meta.title */.Z.meta.title,
        images: [
            {
                url: `${metadata/* default.meta.url */.Z.meta.url}/home/main.png`,
                width: 1280,
                height: 720,
                alt: `haeya.github.io`
            }, 
        ]
    },
    twitter: {
        cardType: "summary_large_image",
        site: metadata/* default.meta.twitter */.Z.meta.twitter,
        handle: metadata/* default.meta.twitter */.Z.meta.twitter
    }
};
/* harmony default export */ const next_seo_config = (SEO);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
                ...next_seo_config
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5480));
module.exports = __webpack_exports__;

})();