"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 8086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MDXPost)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/MDXPost.style.ts

const MDXPostContainer = (styled_default()).div`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  font-weight: 400;
  font-size: 17px;

  * {
    color: var(--tx-sub);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--tx-main);
  }

  a {
    color: var(--tx-accent);
    text-decoration: underline;
    transition: all 0.2s;

    &:hover {
      color: var(--tx-accent-light);
    }
  }

  h1 {
    font-size: 29px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h2 {
    font-size: 25px !important;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h3 {
    font-size: 21px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h4 {
    font-size: 18px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h5 {
    font-size: 17px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  h6 {
    font-size: 16px;
    font-weight: 800;
    margin: 30px 0 0;
  }

  strong {
    font-weight: 700;
  }

  blockquote {
    border-left: var(--tx-accent-light) 5px solid;
    margin: 10px 0;
    padding: 0 10px;

    & p {
      display: inline;
      color: var(--tx-sub);
    }
  }

  code {
    border: solid 1px var(--tx-accent);
    border-radius: 5px;
    padding: 2px 5px;
    font-size: 14px;
    font-weight: 500;
  }

  .code-highlight {
    padding: 1em;
    border: 1px solid var(--tx-accent-light);
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  ol {
    margin: 0;
    padding-left: 20px;
  }

  li {
    padding: 3px 0;
  }

  table {
    border-collapse: collapse;
  }

  thead {
    border-bottom: 2px solid #333;
  }

  tbody tr {
    border-bottom: 1px solid #333;
  }

  td {
    padding: 5px 0;
  }

  th {
    font-weight: 500;
  }

  sup a {
    font-size: 12px;
  }

  img {
    max-width: 100%;
    border-radius: 5px;
  }
`;
const MDXPostTitle = (styled_default()).h1`
  font-size: 30px;
  font-weight: 800;
  word-break: keep-all;
`;
const MDXPostDate = (styled_default()).span`
  font-size: 14px;
  font-weight: 300;
  color: var(--tx-sub-dark);
  word-break: keep-all;
  margin-bottom: 20px;
`;

// EXTERNAL MODULE: ./lib/usDateString.ts
var usDateString = __webpack_require__(3408);
;// CONCATENATED MODULE: ./components/MDXPost.tsx



const MDXPost = ({ title , date , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MDXPostContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MDXPostTitle, {
                children: title
            }),
            date && /*#__PURE__*/ jsx_runtime_.jsx(MDXPostDate, {
                children: (0,usDateString/* default */.Z)(date)
            }),
            children
        ]
    });
};
/* harmony default export */ const components_MDXPost = (MDXPost);


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


/***/ })

};
;