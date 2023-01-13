"use strict";
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 3714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Container)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: ./styles/util/mq.js
var mq = __webpack_require__(3485);
;// CONCATENATED MODULE: ./components/Container.style.ts


const ContainerContainer = (styled_default()).section`
  display: flex;
  flex-flow: column nowrap;
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`;
const Main = (styled_default()).main`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 700px;
  align-items: center;
  z-index: 10;
  ${(0,mq/* default */.Z)()({
    padding: [
        "0 20px",
        "0"
    ]
})}
`;

;// CONCATENATED MODULE: ./components/Footer.style.ts


const FooterContainer = (styled_default()).footer`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 100px;
  padding: 30px;
  border-top: 1px solid var(--bg-sub);
  ${(0,mq/* default */.Z)()({
    width: [
        "calc(100% - 40px)",
        "calc(100% - calc((100% - 700px)))"
    ]
})}
`;
const SocialIconWrap = (styled_default()).div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;
const SocialIcon = (styled_default()).img`
  width: 18px;
  height: auto;
  object-fit: contain;
  margin: 0 5px;
`;
const Copyright = (styled_default()).span`
  font-size: 14px;
  color: var(--tx-sub);
  margin-top: 10px;
`;
const BlogInfo = (styled_default()).a`
  font-size: 12px;
  color: var(--tx-sub-dark);
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

// EXTERNAL MODULE: ./data/metadata.ts
var metadata = __webpack_require__(9180);
;// CONCATENATED MODULE: ./components/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterContainer, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialIconWrap, {
                children: [
                    metadata/* default.social.github */.Z.social.github && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: metadata/* default.social.github */.Z.social.github,
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                            src: "/social/github.svg",
                            alt: "github"
                        })
                    }),
                    metadata/* default.social.linkedin */.Z.social.linkedin && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: metadata/* default.social.linkedin */.Z.social.linkedin,
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                            src: "/social/linkedin.svg",
                            alt: "linkedin"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Copyright, {
                children: [
                    "Copyright \xa9 ",
                    new Date().getFullYear(),
                    " ",
                    metadata/* default.author */.Z.author
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/script"
var script_ = __webpack_require__(4780);
var script_default = /*#__PURE__*/__webpack_require__.n(script_);
;// CONCATENATED MODULE: ./components/GA.tsx



const GA = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${metadata/* default.analytics.google */.Z.analytics.google}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                id: "ga-script",
                children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${metadata/* default.analytics.google */.Z.analytics.google}');
        `
            })
        ]
    });
};
/* harmony default export */ const components_GA = (GA);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: ./components/Container.tsx






const Header = (0,dynamic["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/Container.tsx -> " + "../components/Header"
        ]
    },
    ssr: false
});
const Container = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    content: "width=device-width, initial-scale=1",
                    name: "viewport"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_GA, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Main, {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Container = (Container);


/***/ }),

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

/***/ 3485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var facepaint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4568);
/* harmony import */ var facepaint__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(facepaint__WEBPACK_IMPORTED_MODULE_0__);

const deviceWidth = {
    m: 750
};
const mq = (breakpoints = deviceWidth)=>{
    const mediaQueries = Object.values(breakpoints).sort((curr, next)=>curr - next
    ).map((breakpoint)=>`@media(min-width: ${breakpoint}px)`
    );
    return facepaint__WEBPACK_IMPORTED_MODULE_0___default()(mediaQueries, {
        overlap: true
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mq);


/***/ })

};
;