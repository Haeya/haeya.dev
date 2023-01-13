"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 1924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MDXPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8086);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8037);
/* harmony import */ var _data_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9180);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3714);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_2__]);
next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const BlankLink = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        ...props
    });
};
function BlogLayout({ post  }) {
    const MDXComponent = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_2__.useMDXComponent)(post.body.code);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_5__.NextSeo, {
                title: post.title,
                description: post.description,
                canonical: `${_data_metadata__WEBPACK_IMPORTED_MODULE_3__/* ["default"].meta.url */ .Z.meta.url}/blog/${post.slug}`,
                openGraph: {
                    type: "article",
                    url: `${_data_metadata__WEBPACK_IMPORTED_MODULE_3__/* ["default"].meta.url */ .Z.meta.url}/blog/${post.slug}`,
                    article: {
                        publishedTime: new Date(post.date).toISOString(),
                        tags: [
                            ...post.tags,
                            "Frontend",
                            "Develop"
                        ]
                    },
                    images: [
                        {
                            url: `${_data_metadata__WEBPACK_IMPORTED_MODULE_3__/* ["default"].meta.url */ .Z.meta.url}${post.thumbnailUrl}`,
                            width: 850,
                            height: 650,
                            alt: post.title
                        }, 
                    ]
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXPost__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: post.title,
                date: post.date,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXComponent, {
                    components: {
                        a: BlankLink
                    }
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4427);
/* harmony import */ var _layouts_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__, _layouts_blog__WEBPACK_IMPORTED_MODULE_2__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__, _layouts_blog__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const PostPage = ({ post  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_blog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        post: post
    });
};
const getStaticPaths = async ()=>{
    return {
        paths: contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allBlogs.map */ .R6.map((p)=>({
                params: {
                    slug: p.slug
                }
            })
        ),
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const post = contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allBlogs.find */ .R6.find((p)=>p.slug === params.slug
    );
    return {
        props: {
            post
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostPage);

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ }),

/***/ 8037:
/***/ ((module) => {

module.exports = import("next-contentlayer/hooks");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,714,427,86], () => (__webpack_exec__(8667)));
module.exports = __webpack_exports__;

})();