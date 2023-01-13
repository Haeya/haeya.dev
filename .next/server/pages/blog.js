"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 3674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PostCards)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./styles/util/mq.js
var mq = __webpack_require__(3485);
;// CONCATENATED MODULE: ./components/PostCard.style.ts


const PostContainer = (styled_default()).div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  margin: 15px 0;
  padding: 5px;
  cursor: pointer;
  transition: transform 500ms;
  &:hover {
    transform: translateX(-10px);
  }
  & .round-image {
    border-radius: 8px;
  }
`;
const PostText = (styled_default()).div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  flex: 1;
`;
const PostTitle = (styled_default()).h2`
  font-size: 22px;
  font-weight: 700;
  color: var(--tx-main);
  margin: 5px 0;
  ${(0,mq/* default */.Z)()({
    fontSize: [
        "20px",
        "22px"
    ]
})}
`;
const PostDescription = (styled_default()).span`
  font-weight: 300;
  color: var(--tx-sub);
  word-break: keep-all;
  ${(0,mq/* default */.Z)()({
    fontSize: [
        "16px",
        "18px"
    ]
})}
`;
const PostDate = (styled_default()).span`
  font-size: 12px;
  font-weight: 400;
  color: var(--tx-sub-dark);
  margin-top: 5px;
`;

// EXTERNAL MODULE: ./lib/usDateString.ts
var usDateString = __webpack_require__(3408);
;// CONCATENATED MODULE: ./components/PostCards.tsx





const PostCards = ({ post , slug  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/blog/${slug}`,
        passHref: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PostText, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(PostTitle, {
                            children: post.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PostDescription, {
                            children: post.description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(PostDate, {
                            children: (0,usDateString/* default */.Z)(post.date)
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: post.thumbnailUrl,
                    className: "round-image",
                    alt: "thumbnail",
                    width: 100,
                    height: 100,
                    objectFit: "cover"
                })
            ]
        })
    });
};
/* harmony default export */ const components_PostCards = (PostCards);


/***/ }),

/***/ 3885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Search)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/Search.style.ts

const SearchContainer = (styled_default()).div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid var(--bg-main);
  background: var(--bg-sub);
  margin-bottom: 30px;
  &:hover {
    border-color: var(--tx-accent-light);
  }
`;
const Input = (styled_default()).input`
  width: calc(100% - 30px);
  background: none;
  outline: none;
  border: none;
`;

;// CONCATENATED MODULE: ./components/Search.tsx


const Search = ({ changeHandler  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SearchContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                type: "text",
                onChange: changeHandler,
                placeholder: "Search..."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "24px",
                viewBox: "0 0 24 24",
                width: "24px",
                fill: "#B7BAB6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Search = (Search);


/***/ }),

/***/ 3408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const usDateString = (date)=>{
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    return new Date(date).toLocaleDateString("en-US", options);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usDateString);


/***/ }),

/***/ 6531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2735);
/* harmony import */ var _components_PostCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3674);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3885);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4427);
/* harmony import */ var _data_metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9180);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3714);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Blog({ posts  }) {
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const filteredBlogPosts = posts.filter((post)=>post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_8__.NextSeo, {
                title: "Blog",
                description: "\uACF5\uC720\uD558\uACE0 \uC2F6\uAC70\uB098 \uB2E4\uC2DC \uBCF4\uACE0 \uC2F6\uC740 \uAE30\uC220\uB4E4\uC744 \uC815\uB9AC\uD569\uB2C8\uB2E4.",
                canonical: `${_data_metadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"].meta.url */ .Z.meta.url}/blog`,
                openGraph: {
                    url: `${_data_metadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"].meta.url */ .Z.meta.url}/blog`
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Title__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: "Blog",
                des: ``
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                changeHandler: (e)=>setSearchValue(e.target.value)
            }),
            filteredBlogPosts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostCards__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    post: post,
                    slug: post.slug
                }, index)
            )
        ]
    });
}
const getStaticProps = async ()=>{
    const posts = contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__/* .allBlogs.sort */ .R6.sort((a, b)=>Number(new Date(b.date)) - Number(new Date(a.date))
    );
    return {
        props: {
            posts
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 4568:
/***/ ((module) => {

module.exports = require("facepaint");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

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

/***/ 4780:
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7008:
/***/ ((module) => {

module.exports = import("contentlayer/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,686,397,676,664,675,714,427,735], () => (__webpack_exec__(6531)));
module.exports = __webpack_exports__;

})();