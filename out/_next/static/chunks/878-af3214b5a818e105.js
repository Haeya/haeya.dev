(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{917:function(e,t,r){"use strict";r.d(t,{iv:function(){return o}});r(7294),r(7058),r(8679);var n=r(3772);function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.O)(t)}},8679:function(e,t,r){"use strict";var n=r(9864),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function f(e){return n.isMemo(e)?u:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=u;var l=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(d){var o=y(r);o&&o!==d&&e(t,o,n)}var u=i(r);s&&(u=u.concat(s(r)));for(var c=f(t),m=f(r),b=0;b<u.length;++b){var v=u[b];if(!a[v]&&(!n||!n[v])&&(!m||!m[v])&&(!c||!c[v])){var g=p(r,v);try{l(t,v,g)}catch(h){}}}}return t}},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(f){c=!0,o=f}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(7294))&&a.__esModule?a:{default:a},c=r(1003),f=r(880),l=r(9246);var i={};function s(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=f.useRouter(),a=u.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),p=a.href,y=a.as,d=u.default.useRef(p),m=u.default.useRef(y),b=e.children,v=e.replace,g=e.shallow,h=e.scroll,S=e.locale;"string"===typeof b&&(b=u.default.createElement("a",null,b));var $=(t=u.default.Children.only(b))&&"object"===typeof t&&t.ref,w=o(l.useIntersection({rootMargin:"200px"}),3),M=w[0],j=w[1],C=w[2],O=u.default.useCallback((function(e){m.current===y&&d.current===p||(C(),m.current=y,d.current=p),M(e),$&&("function"===typeof $?$(e):"object"===typeof $&&($.current=e))}),[y,$,p,C,M]);u.default.useEffect((function(){var e=j&&r&&c.isLocalURL(p),t="undefined"!==typeof S?S:n&&n.locale,o=i[p+"%"+y+(t?"%"+t:"")];e&&!o&&s(n,p,y,{locale:t})}),[y,p,j,S,r,n]);var P={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,f){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:f,scroll:u}))}(e,n,p,y,v,g,h,S)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(p)&&s(n,p,y,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof S?S:n&&n.locale,x=n&&n.isLocaleDomain&&c.getDomainLocale(y,E,n&&n.locales,n&&n.domainLocales);P.href=x||c.addBasePath(c.addLocale(y,E,n&&n.defaultLocale))}return u.default.cloneElement(t,P)};t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(f){c=!0,o=f}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,i=a.useRef(),s=o(a.useState(!1),2),p=s[0],y=s[1],d=o(a.useState(t?t.current:null),2),m=d[0],b=d[1],v=a.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||p||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=f.get(n):(t=f.get(r),l.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return f.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),f.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&y(e)}),{root:m,rootMargin:r}))}),[n,m,r,p]),g=a.useCallback((function(){y(!1)}),[]);return a.useEffect((function(){if(!c&&!p){var e=u.requestIdleCallback((function(){return y(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&b(t.current)}),[t]),[v,p,g]};var a=r(7294),u=r(4686),c="undefined"!==typeof IntersectionObserver;var f=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(1551)},9921:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.async_mode"):60111,s=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function $(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case i:case s:case a:case c:case u:case y:return e;default:switch(e=e&&e.$$typeof){case l:case p:case b:case m:case f:return e;default:return t}}case o:return t}}}function w(e){return $(e)===s}t.AsyncMode=i,t.ConcurrentMode=s,t.ContextConsumer=l,t.ContextProvider=f,t.Element=n,t.ForwardRef=p,t.Fragment=a,t.Lazy=b,t.Memo=m,t.Portal=o,t.Profiler=c,t.StrictMode=u,t.Suspense=y,t.isAsyncMode=function(e){return w(e)||$(e)===i},t.isConcurrentMode=w,t.isContextConsumer=function(e){return $(e)===l},t.isContextProvider=function(e){return $(e)===f},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return $(e)===p},t.isFragment=function(e){return $(e)===a},t.isLazy=function(e){return $(e)===b},t.isMemo=function(e){return $(e)===m},t.isPortal=function(e){return $(e)===o},t.isProfiler=function(e){return $(e)===c},t.isStrictMode=function(e){return $(e)===u},t.isSuspense=function(e){return $(e)===y},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===s||e===c||e===u||e===y||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===f||e.$$typeof===l||e.$$typeof===p||e.$$typeof===g||e.$$typeof===h||e.$$typeof===S||e.$$typeof===v)},t.typeOf=$},9864:function(e,t,r){"use strict";e.exports=r(9921)}}]);