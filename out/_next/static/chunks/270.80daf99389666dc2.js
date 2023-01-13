(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{5270:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return D}});var r=t(5893),i=t(746),o=t(3485);function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function c(){var n=a(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: var(--bg-main);\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 20;\n  ","\n"]);return c=function(){return n},n}function s(){var n=a(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n"]);return s=function(){return n},n}function l(){var n=a(["\n  height: 30px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  margin-right: 15px;\n  transition: all ease 5s;\n  &:hover {\n    transform: rotateY(720deg);\n  }\n"]);return l=function(){return n},n}function u(){var n=a(["\n  height: 45px;\n  width: auto;\n  object-fit: contain;\n  cursor: pointer;\n  border-radius: 100%;\n"]);return u=function(){return n},n}var d=i.Z.header(c(),(0,o.Z)()({height:["60px","70px"],padding:["0 20px","0 calc((100% - 700px)/2)"]})),f=i.Z.div(s()),p=i.Z.img(l()),h=i.Z.img(u()),x=t(917);function v(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function g(){var n=v(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  a {\n    text-decoration: none;\n    color: var(--tx-sub-dark);\n    padding-right: 20px;\n    transition: 0.3s;\n    font-size: 18px;\n    ","\n    &:hover {\n      color: var(--tx-accent);\n    }\n  }\n  a[data-selected='true'] {\n    color: var(--tx-accent);\n  }\n  svg {\n    fill: var(--tx-sub);\n    cursor: pointer;\n    ","\n  }\n"]);return g=function(){return n},n}function j(){var n=v(["\n      display: flex;\n    "]);return j=function(){return n},n}function w(){var n=v(["\n      display: none;\n    "]);return w=function(){return n},n}function b(){var n=v(["\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 80px;\n  left: 0;\n  flex-flow: column nowrap;\n  background: var(--bg-main);\n  a {\n    font-size: 20px;\n    text-decoration: none;\n    color: var(--tx-main);\n    padding: 15px 30px;\n    transition: 0.3s;\n    &:hover {\n      color: var(--tx-accent);\n    }\n  }\n  ","\n"]);return b=function(){return n},n}var m=i.Z.div(g(),(0,o.Z)()({display:["none","block"]}),(0,o.Z)()({display:["block","none"]})),k=i.Z.div(b(),(function(n){return n.visible?(0,x.iv)(j()):(0,x.iv)(w())})),y=[{title:"Blog",path:"/blog",link:"/blog"},{title:"Projects",path:"/projects",link:"/projects"},{title:"Note",path:"/note",link:"/note/nextjs/component"}],z=t(1664),O=t.n(z),Z=t(7294),H=t(1163),C=function(n){var e=n.setIsDropMenuOpen,t=(0,H.useRouter)();return(0,r.jsx)(r.Fragment,{children:y.map((function(n){return(0,r.jsx)(O(),{href:n.link,passHref:!0,children:(0,r.jsx)("a",{"data-selected":t.pathname.includes(n.path)?"true":"false",onClick:function(){return e(!1)},children:n.title})},n.title)}))})},M=function(){var n=(0,Z.useState)(!1),e=n[0],t=n[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(C,{setIsDropMenuOpen:t}),(0,r.jsxs)("svg",{onClick:function(){return t(!e)},xmlns:"http://www.w3.org/2000/svg",height:"38px",viewBox:"0 0 24 24",width:"38px",children:[(0,r.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,r.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})]}),(0,r.jsx)(k,{visible:e,children:(0,r.jsx)(C,{setIsDropMenuOpen:t})})]})},D=function(){var n=(0,Z.useState)(document.body.dataset.theme),e=n[0],t=n[1];(0,Z.useEffect)((function(){document.body.dataset.theme=e,window.localStorage.setItem("theme",e)}),[e]);return(0,r.jsxs)(d,{children:[(0,r.jsx)(O(),{href:"/",passHref:!0,children:"dark"===e?(0,r.jsx)(h,{src:"/static/logo-dark.png",alt:"dark logo"}):(0,r.jsx)(h,{src:"/static/logo-dark.png",alt:"white logo"})}),(0,r.jsx)(M,{}),(0,r.jsx)(f,{children:(0,r.jsx)("div",{onClick:function(n){n.preventDefault(),t("dark"===e?"light":"dark")},children:"dark"===e?(0,r.jsx)(p,{alt:"white mode",src:"/static/dark.png"}):(0,r.jsx)(p,{alt:"dark mode",src:"/static/white.png"})})})]})}},1163:function(n,e,t){n.exports=t(880)}}]);