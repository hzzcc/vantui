(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"297":function(n,t,e){"use strict";e.d(t,"e",(function(){return isPlainObject})),e.d(t,"f",(function(){return isPromise})),e.d(t,"b",(function(){return isDef})),e.d(t,"d",(function(){return isObj})),e.d(t,"a",(function(){return isBoolean})),e.d(t,"c",(function(){return isImageUrl})),e.d(t,"g",(function(){return isVideoUrl}));var r=e(377),c=e.n(r);function isFunction(n){return"function"==typeof n}function isPlainObject(n){return null!==n&&"object"===c()(n)&&!Array.isArray(n)}function isPromise(n){return isPlainObject(n)&&isFunction(n.then)&&isFunction(n.catch)}function isDef(n){return null!=n}function isObj(n){var t=c()(n);return null!==n&&("object"===t||"function"===t)}function isBoolean(n){return"boolean"==typeof n}var o=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,i=/\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;function isImageUrl(n){return o.test(n)}function isVideoUrl(n){return i.test(n)}},"301":function(n,t,e){"use strict";e.d(t,"a",(function(){return p}));var r=e(3),c=e.n(r),o=e(6),i=e.n(o),a=e(16),u=e.n(a),l=e(17),s=e.n(l),f=e(281),d=e(27),b=(e(303),e(44)),p=function(n){u()(Index,n);var t=s()(Index);function Index(){return c()(this,Index),t.call(this)}return i()(Index,[{"key":"render","value":function render(){var n=this.props,t=n.padding,e=n.title,r=n.card;return Object(b.jsxs)(f.o,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[e&&Object(b.jsx)(f.o,{"className":"demo-block__title","children":e}),r?Object(b.jsx)(f.o,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(d.Component)},"303":function(n,t,e){},"315":function(n,t){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"323":function(n,t,e){"use strict";e.d(t,"g",(function(){return range})),e.d(t,"d",(function(){return getSystemInfoSync})),e.d(t,"a",(function(){return addUnit})),e.d(t,"h",(function(){return requestAnimationFrame})),e.d(t,"f",(function(){return pickExclude})),e.d(t,"c",(function(){return getRect})),e.d(t,"b",(function(){return getAllRect})),e.d(t,"i",(function(){return toPromise}));e(76);var r,c=e(325),o=e.n(c),i=e(283),a=e.n(i),u=e(331),l=e.n(u),s=e(320),f=e.n(s),d=e(31),b=e(297);e(332);function range(n,t,e){return Math.min(Math.max(n,t),e)}function getSystemInfoSync(){return null==r&&(r=Object(d.getSystemInfoSync)()),r}function addUnit(n){if(Object(b.b)(n))return/^-?\d+(\.\d+)?$/.test(""+n)?d.default.pxTransform(n):n}function requestAnimationFrame(n){return"devtools"===getSystemInfoSync().platform?setTimeout((function(){n()}),33.333333333333336):Object(d.createSelectorQuery)().selectViewport().boundingClientRect().exec((function(){n()}))}function pickExclude(n,t){var e;return Object(b.e)(n)?o()(e=a()(n)).call(e,(function(e,r){return l()(t).call(t,r)||(e[r]=n[r]),e}),{}):{}}function getRect(n,t){return new f.a((function(e){var r=Object(d.createSelectorQuery)();n&&(r=r.in(n)),r.select(t).boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e(n[0])}))}))}function getAllRect(n,t){return new f.a((function(e){var r=Object(d.createSelectorQuery)();n&&(r=r.in(n)),r.selectAll(t).boundingClientRect().exec((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e(n[0])}))}))}function toPromise(n){return Object(b.f)(n)?n:f.a.resolve(n)}e.d(t,"e",(function(){return b.b}))},"325":function(n,t,e){n.exports=e(348)},"329":function(n,t,e){n.exports=e(353)},"331":function(n,t,e){n.exports=e(334)},"332":function(n,t,e){"use strict";e.d(t,"a",(function(){return canIUseModel})),e.d(t,"b",(function(){return canIUseNextTick}));e(76),e(405);var r,c=e(329),o=e.n(c),i=e(31);function gte(n){return function compareVersion(n,t){n=n.split("."),t=t.split(".");for(var e=Math.max(n.length,t.length);n.length<e;)n.push("0");for(;t.length<e;)t.push("0");for(var r=0;r<e;r++){var c=o()(n[r],10),i=o()(t[r],10);if(c>i)return 1;if(c<i)return-1}return 0}(function getSystemInfoSync(){return null==r&&(r=Object(i.getSystemInfoSync)()),r}().SDKVersion,n)>=0}function canIUseModel(){return gte("2.9.3")}function canIUseNextTick(){return Object(i.canIUse)("nextTick")}},"334":function(n,t,e){var r=e(335);n.exports=r},"335":function(n,t,e){var r=e(298),c=e(336),o=e(338),i=Array.prototype,a=String.prototype;n.exports=function(n){var t=n.includes;return n===i||r(i,n)&&t===i.includes?c:"string"==typeof n||n===a||r(a,n)&&t===a.includes?o:t}},"336":function(n,t,e){e(337);var r=e(294);n.exports=r("Array").includes},"337":function(n,t,e){"use strict";var r=e(286),c=e(423).includes,o=e(413);r({"target":"Array","proto":!0},{"includes":function includes(n){return c(this,n,arguments.length>1?arguments[1]:void 0)}}),o("includes")},"338":function(n,t,e){e(339);var r=e(294);n.exports=r("String").includes},"339":function(n,t,e){"use strict";var r=e(286),c=e(299),o=e(340),i=e(328),a=e(308),u=e(342),l=c("".indexOf);r({"target":"String","proto":!0,"forced":!u("includes")},{"includes":function includes(n){return!!~l(a(i(this)),a(o(n)),arguments.length>1?arguments[1]:void 0)}})},"340":function(n,t,e){var r=e(292),c=e(341),o=r.TypeError;n.exports=function(n){if(c(n))throw o("The method doesn't accept regular expressions");return n}},"341":function(n,t,e){var r=e(324),c=e(417),o=e(296)("match");n.exports=function(n){var t;return r(n)&&(void 0!==(t=n[o])?!!t:"RegExp"==c(n))}},"342":function(n,t,e){var r=e(296)("match");n.exports=function(n){var t=/./;try{"/./"[n](t)}catch(e){try{return t[r]=!1,"/./"[n](t)}catch(n){}}return!1}},"343":function(n,t,e){var r=e(299),c=e(328),o=e(308),i=e(315),a=r("".replace),u="["+i+"]",l=RegExp("^"+u+u+"*"),s=RegExp(u+u+"*$"),createMethod=function(n){return function(t){var e=o(c(t));return 1&n&&(e=a(e,l,"")),2&n&&(e=a(e,s,"")),e}};n.exports={"start":createMethod(1),"end":createMethod(2),"trim":createMethod(3)}},"348":function(n,t,e){var r=e(349);n.exports=r},"349":function(n,t,e){var r=e(298),c=e(350),o=Array.prototype;n.exports=function(n){var t=n.reduce;return n===o||r(o,n)&&t===o.reduce?c:t}},"350":function(n,t,e){e(351);var r=e(294);n.exports=r("Array").reduce},"351":function(n,t,e){"use strict";var r=e(286),c=e(352).left,o=e(408),i=e(410),a=e(426);r({"target":"Array","proto":!0,"forced":!o("reduce")||!a&&i>79&&i<83},{"reduce":function reduce(n){var t=arguments.length;return c(this,n,t,t>1?arguments[1]:void 0)}})},"352":function(n,t,e){var r=e(292),c=e(326),o=e(311),i=e(359),a=e(312),u=r.TypeError,createMethod=function(n){return function(t,e,r,l){c(e);var s=o(t),f=i(s),d=a(s),b=n?d-1:0,p=n?-1:1;if(r<2)for(;;){if(b in f){l=f[b],b+=p;break}if(b+=p,n?b<0:d<=b)throw u("Reduce of empty array with no initial value")}for(;n?b>=0:d>b;b+=p)b in f&&(l=e(l,f[b],b,s));return l}};n.exports={"left":createMethod(!1),"right":createMethod(!0)}},"353":function(n,t,e){var r=e(354);n.exports=r},"354":function(n,t,e){e(355);var r=e(300);n.exports=r.parseInt},"355":function(n,t,e){var r=e(286),c=e(356);r({"global":!0,"forced":parseInt!=c},{"parseInt":c})},"356":function(n,t,e){var r=e(292),c=e(318),o=e(299),i=e(308),a=e(343).trim,u=e(315),l=r.parseInt,s=r.Symbol,f=s&&s.iterator,d=/^[+-]?0x/i,b=o(d.exec),p=8!==l(u+"08")||22!==l(u+"0x16")||f&&!c((function(){l(Object(f))}));n.exports=p?function parseInt(n,t){var e=a(i(n));return l(e,t>>>0||(b(d,e)?16:10))}:l},"805":function(n,t,e){},"806":function(n,t,e){},"942":function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return $}));e(293),e(304),e(307),e(805);var r=e(283),c=e.n(r),o=e(287),i=e.n(o),a=e(285),u=e.n(a),l=e(288),s=e.n(l),f=e(284),d=e.n(f),b=e(289),p=e.n(b),m=e(290),v=e.n(m),j=e(291),x=e.n(j),h=e(295),g=e.n(h),O=e(320),y=e.n(O),w=e(31),_=e(27),I=e(281),k=e(282),S=e(323),T=e(302),A=e(309);var C=e(44),N=["text","mode","url","openType","delay","speed","scrollable","leftIcon","color","backgroundColor","background","wrapable","renderLeftIcon","renderRightIcon","onClick","onClose","style","className","children"];function ownKeys(n,t){var e=c()(n);if(i.a){var r=i()(n);t&&(r=u()(r).call(r,(function(t){return s()(n,t).enumerable}))),e.push.apply(e,r)}return e}function _objectSpread(n){for(var t=1;t<arguments.length;t++){var e,r=null!=arguments[t]?arguments[t]:{};if(t%2)d()(e=ownKeys(Object(r),!0)).call(e,(function(t){v()(n,t,r[t])}));else if(p.a)Object.defineProperties(n,p()(r));else{var c;d()(c=ownKeys(Object(r))).call(c,(function(t){Object.defineProperty(n,t,s()(r,t))}))}}return n}var R=0;var U=function NoticeBar(n){var t=Object(_.useState)({"ready":!1,"show":!0,"animationData":{"actions":[]},"unitag":0}),e=g()(t,2),r=e[0],c=e[1],o={"animation":null,"resetAnimation":null,"timer":null,"wrapWidth":void 0,"contentWidth":void 0,"duration":void 0},i=Object(_.useRef)(o),a=n.text,u=void 0===a?"":a,l=n.mode,s=void 0===l?"":l,f=n.url,d=void 0===f?"":f,b=n.openType,p=void 0===b?"navigate":b,m=n.delay,v=void 0===m?1:m,j=n.speed,h=void 0===j?60:j,O=n.scrollable,U=void 0===O?null:O,E=n.leftIcon,P=void 0===E?"":E,F=n.color,D=void 0===F?"#ed6a0c":F,W=n.backgroundColor,M=void 0===W?"#fffbe8":W,V=n.background,B=n.wrapable,K=n.renderLeftIcon,Q=n.renderRightIcon,q=n.onClick,J=n.onClose,L=n.style,X=n.className,$=n.children,z=x()(n,N);Object(_.useEffect)((function(){c((function(n){return _objectSpread(_objectSpread({},n),{},{"unitag":R++})}))}),[]),w.default.useReady((function(){0})),Object(_.useEffect)((function(){i.current.resetAnimation=Object(w.createAnimation)({"duration":0,"timingFunction":"linear"}),c((function(n){return _objectSpread(_objectSpread({},n),{},{"ready":!0})}))}),[]),Object(_.useEffect)((function(){return u&&r.ready&&Y(),function(){i.current.timer&&clearTimeout(i.current.timer)}}),[u,h,r.ready]);var G,H=Object(_.useCallback)((function(){i.current.timer&&clearTimeout(i.current.timer),i.current.timer=null,c((function(n){return _objectSpread(_objectSpread({},n),{},{"animationData":i.current.resetAnimation.translateX(i.current.wrapWidth).step().export()})})),setTimeout((function(){Object(S.h)((function(){c((function(n){return _objectSpread(_objectSpread({},n),{},{"animationData":i.current.animation.translateX(-i.current.contentWidth).step().export()})}))}))}),10),i.current.timer=setTimeout((function(){H()}),i.current.duration)}),[]),Y=Object(_.useCallback)((function(){Object(S.h)((function(){y.a.all([Object(S.c)(null,".van-notice-bar__content_".concat(r.unitag)),Object(S.c)(null,".van-notice-bar__wrap_".concat(r.unitag))]).then((function(n){var t=n[0],e=n[1];null!=t&&null!=e&&t.width&&e.width&&!1!==U&&w.default.nextTick((function(){(U||e.width<=t.width)&&(i.current.wrapWidth=e.width,i.current.contentWidth=t.width,i.current.duration=(e.width+t.width)/h*1e3,i.current.animation=Object(w.createAnimation)({"duration":i.current.duration,"timingFunction":"linear","delay":v}),H())}))}))}))}),[r.unitag,U,h,v,H]),Z=Object(_.useCallback)((function(n){"closeable"===s&&(i.current.timer&&clearTimeout(i.current.timer),i.current.timer=null,c((function(n){return _objectSpread(_objectSpread({},n),{},{"show":!1})})),null==J||J(n))}),[s,J]);return r.show&&Object(C.jsxs)(I.o,_objectSpread(_objectSpread({"className":k.b("notice-bar",{"withicon":s,"wrapable":B})+" ".concat(X||""),"style":k.c([(G={"color":D,"backgroundColor":M,"background":V},Object(A.a)({"color":G.color,"background-color":G.backgroundColor,"background":G.background})),L])},z),{},{"onClick":q,"children":[P?Object(C.jsx)(T.b,{"size":32,"name":P,"className":"van-notice-bar__left-icon"}):K,Object(C.jsx)(I.o,{"className":"van-notice-bar__wrap van-notice-bar__wrap_".concat(r.unitag),"children":Object(C.jsxs)(I.o,{"className":"van-notice-bar__content van-notice-bar__content_".concat(r.unitag," ")+(!1!==U||B?"":"van-ellipsis"),"animation":r.animationData,"children":[u,!u&&$]})}),"closeable"===s?Object(C.jsx)(T.b,{"className":"van-notice-bar__right-icon","name":"cross","onClick":Z}):"link"===s?Object(C.jsx)(I.i,{"url":d,"openType":p,"children":Object(C.jsx)(T.b,{"className":"van-notice-bar__right-icon","name":"arrow"})}):Q]}))},E=e(3),P=e.n(E),F=e(6),D=e.n(F),W=e(24),M=e.n(W),V=e(16),B=e.n(V),K=e(17),Q=e.n(K),q=e(9),J=e.n(q),L=e(327),X=e(301),$=(e(806),function(n){B()(Index,n);var t=Q()(Index);function Index(){var n;return P()(this,Index),n=t.call(this),J()(M()(n),"state",{"text":"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。","shortText":"技术是开发它的人的共同灵魂。"}),n}return D()(Index,[{"key":"render","value":function render(){var n=this.state,t=n.text,e=n.shortText;return Object(C.jsx)(L.a,{"title":"NoticeBar 通知栏","children":Object(C.jsxs)(C.Fragment,{"children":[Object(C.jsx)(X.a,{"title":"基础用法","children":Object(C.jsx)(U,{"text":t,"leftIcon":"volume-o"})}),Object(C.jsxs)(X.a,{"title":"滚动模式","children":[Object(C.jsx)(U,{"className":"margin-top","scrollable":!0,"text":e}),Object(C.jsx)(U,{"className":"margin-top","scrollable":!1,"text":t})]}),Object(C.jsx)(X.a,{"title":"多行展示","children":Object(C.jsx)(U,{"wrapable":!0,"scrollable":!1,"text":t})}),Object(C.jsxs)(X.a,{"title":"通知栏模式","children":[Object(C.jsx)(U,{"mode":"closeable","text":e}),Object(C.jsx)(U,{"className":"margin-top","mode":"link","text":e})]}),Object(C.jsx)(X.a,{"title":"自定义样式","children":Object(C.jsx)(U,{"text":e,"color":"#1989fa","background":"#ecf9ff","leftIcon":"info-o"})})]})})}}]),Index}(_.Component))}}]);