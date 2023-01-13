"use strict";
(() => {
var exports = {};
exports.id = 655;
exports.ids = [655];
exports.modules = {

/***/ 6124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NoteAside)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./styles/util/mq.js
var mq = __webpack_require__(3485);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./components/NoteAside.style.ts



const dynamicVisible = ({ visible  })=>{
    if (visible) {
        return react_namespaceObject.css`
      display: flex;
      border-left: 5px solid var(--bg-sub);
      border-right: none;
      padding-left: 10px;
      padding-right: 5px;
    `;
    } else {
        return react_namespaceObject.css`
      @media (max-width: 750px) {
        display: none;
        border-left: none;
      }
    `;
    }
};
const NoteAsideContainer = (styled_default()).div`
  flex-flow: column nowrap;
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  border-right: 1px solid var(--bg-sub);
  padding-bottom: 20px;
  padding-right: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(0,mq/* default */.Z)()({
    maxWidth: [
        "100%",
        "170px"
    ],
    marginRight: [
        "0",
        "20px"
    ]
})}
  ${dynamicVisible}
`;
const NoteAsideText = (styled_default()).a`
  color: var(--tx-sub-dark);
  transition: 0.3s;
  cursor: pointer;
  padding: 10px 0;
  word-break: keep-all;
  font-weight: 600;
  &:hover {
    color: var(--tx-accent-light);
  }
`;
const NoteAsideChildText = (styled_default()).a`
  color: var(--tx-sub-dark);
  transition: 0.3s;
  cursor: pointer;
  padding: 10px 0 10px 15px;
  word-break: keep-all;
  font-size: 14px;
  &:hover {
    color: var(--tx-accent);
  }
`;
const NoteAsideMobileIcon = (styled_default()).div`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--tx-accent-light);
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  left: 30px;
  border-radius: 100%;
  transition: 0.5s;
  &:hover {
    background: var(--tx-accent);
  }
  ${(0,mq/* default */.Z)()({
    display: [
        "flex",
        "none"
    ]
})}
`;

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/NoteAsideItem.tsx




const NoteAsideItem = ({ item  })=>{
    const { 0: isItemsOpen , 1: setIsItemsOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: item.urlPath,
                    passHref: true,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NoteAsideText, {
                        onClick: ()=>setIsItemsOpen(!isItemsOpen)
                        ,
                        children: [
                            isItemsOpen ? "\u2396 " : "\u27A4 ",
                            item.title
                        ]
                    })
                }),
                item.children && item.children.length > 0 && isItemsOpen && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: item.children.map((c)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: c.urlPath,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(NoteAsideChildText, {
                                children: c.title
                            })
                        }, c.title)
                    )
                })
            ]
        }, item.title)
    });
};
/* harmony default export */ const components_NoteAsideItem = (NoteAsideItem);

;// CONCATENATED MODULE: ./components/NoteAside.tsx




const NoteAside = ({ tree  })=>{
    const { 0: isMenuOpen , 1: setIsMenuOpen  } = (0,external_react_.useState)(false);
    const mobileMenuHandler = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NoteAsideContainer, {
                visible: isMenuOpen,
                children: tree.map((t)=>/*#__PURE__*/ jsx_runtime_.jsx(components_NoteAsideItem, {
                        item: t
                    }, t.title)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NoteAsideMobileIcon, {
                onClick: mobileMenuHandler,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "24px",
                    viewBox: "0 0 24 24",
                    width: "24px",
                    fill: "#111111",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_NoteAside = (NoteAside);


/***/ }),

/***/ 18:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ NoteContent),
/* harmony export */   "r": () => (/* binding */ NoteContainer)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_util_mq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3485);


const NoteContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  ${(0,_styles_util_mq__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()({
    flexFlow: [
        "column nowrap",
        "row nowrap"
    ]
})}
`;
const NoteContent = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ${(0,_styles_util_mq__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()({
    maxWidth: [
        "100%",
        "calc(100% - 190px)"
    ]
})}
`;


/***/ }),

/***/ 5455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _note_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _components_NoteAside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6124);
/* harmony import */ var _components_MDXPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8086);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8037);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3714);
/* harmony import */ var _data_metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9180);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_4__]);
next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function NoteLayout({ tree , note  }) {
    const MDXComponent = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_4__.useMDXComponent)(note.body.code);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_7__.NextSeo, {
                title: note.title,
                description: `Code Snippets or Code note`,
                canonical: `${_data_metadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"].meta.url */ .Z.meta.url}/${note.url_path}`,
                openGraph: {
                    type: "article",
                    url: `${_data_metadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"].meta.url */ .Z.meta.url}/${note.url_path}`,
                    article: {
                        publishedTime: new Date(note.date).toISOString(),
                        tags: [
                            "Frontend",
                            "Develop"
                        ]
                    },
                    images: [
                        {
                            url: `${_data_metadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"].meta.url */ .Z.meta.url}/note/note.png`,
                            width: 850,
                            height: 650,
                            alt: note.title
                        }, 
                    ]
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_note_style__WEBPACK_IMPORTED_MODULE_1__/* .NoteContainer */ .r, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NoteAside__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        tree: tree
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_note_style__WEBPACK_IMPORTED_MODULE_1__/* .NoteContent */ .X, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MDXPost__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            title: note.title,
                            date: note.date,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXComponent, {})
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6440:
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
/* harmony import */ var _layouts_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__, _layouts_note__WEBPACK_IMPORTED_MODULE_2__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__, _layouts_note__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const NotePostPage = ({ note , tree  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_note__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        note: note,
        tree: tree
    });
};
const getStaticPaths = async ()=>{
    const paths = contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allNotes.map */ .ex.map((note)=>({
            params: {
                slug: note.pathSegments.map((_)=>_.pathName
                )
            }
        })
    );
    return {
        paths,
        fallback: "blocking"
    };
};
const getStaticProps = async ({ params  })=>{
    const pagePath = params.slug.join("/");
    const note = contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allNotes.find */ .ex.find((_1)=>_1.pathSegments.map((_)=>_.pathName
        ).join("/") === pagePath
    );
    const tree = buildTree(contentlayer_generated__WEBPACK_IMPORTED_MODULE_1__/* .allNotes */ .ex);
    return {
        props: {
            note,
            tree
        }
    };
};
const buildTree = (notes, parentPathNames = [])=>{
    const level = parentPathNames.length;
    return notes.filter((_2)=>_2.pathSegments.length === level + 1 && _2.pathSegments.map((_)=>_.pathName
        ).join("/").startsWith(parentPathNames.join("/"))
    ).sort((a, b)=>Number(new Date(b.date)) - Number(new Date(a.date))
    ).map((doc)=>({
            title: doc.title,
            date: doc.date,
            urlPath: "/note/" + doc.pathSegments.map((_)=>_.pathName
            ).join("/"),
            children: buildTree(notes, doc.pathSegments.map((_)=>_.pathName
            ))
        })
    );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotePostPage);

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

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [152,686,397,676,664,714,427,86], () => (__webpack_exec__(6440)));
module.exports = __webpack_exports__;

})();