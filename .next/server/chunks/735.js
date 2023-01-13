"use strict";
exports.id = 735;
exports.ids = [735];
exports.modules = {

/***/ 2735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Title)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./components/Title.style.ts

const TitleContainer = (styled_default()).div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 0 20px;
  width: 100%;
`;
const TitleText = (styled_default()).span`
  font-size: 50px;
  font-weight: 800;
  background: linear-gradient(to right, var(--tx-accent-light), var(--tx-accent), var(--tx-sub));
  background-size: 200% 200%;
  animation: rainbow 2s ease-in-out infinite;
  transition: color 0.2s ease-in-out;
  -webkit-background-clip: text;
  color: rgba(0, 0, 0, 0);
`;
const DesText = (styled_default()).span`
  font-size: 18px;
  font-weight: 300;
  color: var(--tx-sub-dark);
  word-break: keep-all;
  margin-top: 10px;
`;

;// CONCATENATED MODULE: ./components/Title.tsx


const Title = ({ title , des  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleContainer, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleText, {
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DesText, {
                children: des
            })
        ]
    });
};
/* harmony default export */ const components_Title = (Title);


/***/ })

};
;