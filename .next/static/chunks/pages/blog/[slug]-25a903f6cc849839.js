(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{5929:function(n,t,e){"use strict";e.d(t,{z:function(){return a}});var r=e(7294),i=e(3935),o=e(1220);const a=(n,t={})=>r.useMemo((()=>((n,t={})=>{const e={React:r,ReactDOM:i,_jsx_runtime:o.i,...t};return new Function(...Object.keys(e),n)(...Object.values(e)).default})(n,t)),[n,t])},3214:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return e(6065)}])},3714:function(n,t,e){"use strict";e.d(t,{Z:function(){return S}});var r=e(5893),i=e(9008),o=e(746),a=e(3485);function c(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function l(){var n=c(["\n  display: flex;\n  flex-flow: column nowrap;\n  padding-top: 100px;\n  width: 100%;\n  height: 100vh;\n  align-items: center;\n  justify-content: space-between;\n"]);return l=function(){return n},n}function u(){var n=c(["\n  display: flex;\n  flex-flow: column nowrap;\n  width: 100%;\n  max-width: 700px;\n  align-items: center;\n  z-index: 10;\n  ","\n"]);return u=function(){return n},n}var s=o.Z.section(l()),f=o.Z.main(u(),(0,a.Z)()({padding:["0 20px","0"]}));function d(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function p(){var n=d(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  margin-top: 100px;\n  padding: 30px;\n  border-top: 1px solid var(--bg-sub);\n  ","\n"]);return p=function(){return n},n}function g(){var n=d(["\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n"]);return g=function(){return n},n}function x(){var n=d(["\n  width: 18px;\n  height: auto;\n  object-fit: contain;\n  margin: 0 5px;\n"]);return x=function(){return n},n}function h(){var n=d(["\n  font-size: 14px;\n  color: var(--tx-sub);\n  margin-top: 10px;\n"]);return h=function(){return n},n}function b(){var n=d(["\n  font-size: 12px;\n  color: var(--tx-sub-dark);\n  text-decoration: none;\n  margin-top: 10px;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return b=function(){return n},n}var m=o.Z.footer(p(),(0,a.Z)()({width:["calc(100% - 40px)","calc(100% - calc((100% - 700px)))"]})),w=o.Z.div(g()),v=o.Z.img(x()),j=o.Z.span(h()),y=(o.Z.a(b()),e(9180)),Z=function(){return(0,r.jsxs)(m,{children:[(0,r.jsxs)(w,{children:[y.Z.social.github&&(0,r.jsx)("a",{href:y.Z.social.github,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(v,{src:"/social/github.svg",alt:"github"})}),y.Z.social.linkedin&&(0,r.jsx)("a",{href:y.Z.social.linkedin,target:"_blank",rel:"noreferrer",children:(0,r.jsx)(v,{src:"/social/linkedin.svg",alt:"linkedin"})})]}),(0,r.jsxs)(j,{children:["Copyright \xa9 ",(new Date).getFullYear()," ",y.Z.author]})]})},O=e(4298),z=e.n(O),k=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z(),{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=".concat(y.Z.analytics.google)}),(0,r.jsx)(z(),{strategy:"lazyOnload",id:"ga-script",children:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(y.Z.analytics.google,"');\n        ")})]})},_=(0,e(5152).default)((function(){return Promise.all([e.e(878),e.e(270)]).then(e.bind(e,5270))}),{loadableGenerated:{webpack:function(){return[5270]}},ssr:!1}),S=function(n){var t=n.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,r.jsx)(k,{}),(0,r.jsxs)(s,{children:[(0,r.jsx)(_,{}),(0,r.jsx)(f,{children:t}),(0,r.jsx)(Z,{})]})]})}},8086:function(n,t,e){"use strict";e.d(t,{Z:function(){return p}});var r=e(5893),i=e(746);function o(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function a(){var n=o(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.8;\n  font-weight: 400;\n  font-size: 17px;\n\n  * {\n    color: var(--tx-sub);\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: var(--tx-main);\n  }\n\n  a {\n    color: var(--tx-accent);\n    text-decoration: underline;\n    transition: all 0.2s;\n\n    &:hover {\n      color: var(--tx-accent-light);\n    }\n  }\n\n  h1 {\n    font-size: 29px;\n    font-weight: 800;\n    margin: 30px 0 0;\n  }\n\n  h2 {\n    font-size: 25px !important;\n    font-weight: 800;\n    margin: 30px 0 0;\n  }\n\n  h3 {\n    font-size: 21px;\n    font-weight: 800;\n    margin: 30px 0 0;\n  }\n\n  h4 {\n    font-size: 18px;\n    font-weight: 800;\n    margin: 30px 0 0;\n  }\n\n  h5 {\n    font-size: 17px;\n    font-weight: 800;\n    margin: 30px 0 0;\n  }\n\n  h6 {\n    font-size: 16px;\n    font-weight: 800;\n    margin: 30px 0 0;\n  }\n\n  strong {\n    font-weight: 700;\n  }\n\n  blockquote {\n    border-left: var(--tx-accent-light) 5px solid;\n    margin: 10px 0;\n    padding: 0 10px;\n\n    & p {\n      display: inline;\n      color: var(--tx-sub);\n    }\n  }\n\n  code {\n    border: solid 1px var(--tx-accent);\n    border-radius: 5px;\n    padding: 2px 5px;\n    font-size: 14px;\n    font-weight: 500;\n  }\n\n  .code-highlight {\n    padding: 1em;\n    border: 1px solid var(--tx-accent-light);\n  }\n\n  ul {\n    margin: 0;\n    padding-left: 20px;\n  }\n\n  ol {\n    margin: 0;\n    padding-left: 20px;\n  }\n\n  li {\n    padding: 3px 0;\n  }\n\n  table {\n    border-collapse: collapse;\n  }\n\n  thead {\n    border-bottom: 2px solid #333;\n  }\n\n  tbody tr {\n    border-bottom: 1px solid #333;\n  }\n\n  td {\n    padding: 5px 0;\n  }\n\n  th {\n    font-weight: 500;\n  }\n\n  sup a {\n    font-size: 12px;\n  }\n\n  img {\n    max-width: 100%;\n    border-radius: 5px;\n  }\n"]);return a=function(){return n},n}function c(){var n=o(["\n  font-size: 30px;\n  font-weight: 800;\n  word-break: keep-all;\n"]);return c=function(){return n},n}function l(){var n=o(["\n  font-size: 14px;\n  font-weight: 300;\n  color: var(--tx-sub-dark);\n  word-break: keep-all;\n  margin-bottom: 20px;\n"]);return l=function(){return n},n}var u=i.Z.div(a()),s=i.Z.h1(c()),f=i.Z.span(l()),d=e(3408),p=function(n){var t=n.title,e=n.date,i=n.children;return(0,r.jsxs)(u,{children:[(0,r.jsx)(s,{children:t}),e&&(0,r.jsx)(f,{children:(0,d.Z)(e)}),i]})}},3408:function(n,t){"use strict";t.Z=function(n){return new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},6065:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return g},default:function(){return x}});var r=e(5893),i=e(8086),o=e(5929),a=e(9180),c=e(3714),l=e(2962);function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function f(n){return function(n){if(Array.isArray(n))return u(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=function(n){return(0,r.jsx)("a",function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){s(n,t,e[t])}))}return n}({target:"_blank",rel:"noopener noreferrer"},n))};var p=function(n){var t=n.post,e=(0,o.z)(t.body.code);return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(l.PB,{title:t.title,description:t.description,canonical:"".concat(a.Z.meta.url,"/blog/").concat(t.slug),openGraph:{type:"article",url:"".concat(a.Z.meta.url,"/blog/").concat(t.slug),article:{publishedTime:new Date(t.date).toISOString(),tags:f(t.tags).concat(["Frontend","Develop"])},images:[{url:"".concat(a.Z.meta.url).concat(t.thumbnailUrl),width:850,height:650,alt:t.title}]}}),(0,r.jsx)(i.Z,{title:t.title,date:t.date,children:(0,r.jsx)(e,{components:{a:d}})})]})},g=!0,x=function(n){var t=n.post;return(0,r.jsx)(p,{post:t})}},3485:function(n,t,e){"use strict";var r=e(9401),i={m:750};t.Z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=Object.values(n).sort((function(n,t){return n-t})).map((function(n){return"@media(min-width: ".concat(n,"px)")}));return(0,r.Z)(t,{overlap:!0})}},1220:function(n,t,e){const r=e(5893);n.exports.i=r}},function(n){n.O(0,[303,774,888,179],(function(){return t=3214,n(n.s=t);var t}));var t=n.O();_N_E=t}]);