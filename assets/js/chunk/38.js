(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"295":function(e,t,n){var r=n(378),o=n(383),a=n(369),i=n(397);e.exports=function _slicedToArray(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"301":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(3),o=n.n(r),a=n(6),i=n.n(a),c=n(16),s=n.n(c),l=n(17),u=n.n(l),d=n(281),f=n(27),v=(n(303),n(44)),h=function(e){s()(Index,e);var t=u()(Index);function Index(){return o()(this,Index),t.call(this)}return i()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,r=e.card;return Object(v.jsxs)(d.o,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(v.jsx)(d.o,{"className":"demo-block__title","children":n}),r?Object(v.jsx)(d.o,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(f.Component)},"303":function(e,t,n){},"310":function(e,t,n){var r=n(420),o=n(366),a=n(360),i=n(296)("iterator");e.exports=function(e){if(null!=e)return o(e,i)||o(e,"@@iterator")||a[r(e)]}},"316":function(e,t,n){var r=n(393);e.exports=r},"319":function(e,t,n){},"321":function(e,t,n){"use strict";n.d(t,"a",(function(){return Loading}));var r=n(290),o=n.n(r),a=n(295),i=n.n(a),c=n(291),s=n.n(c),l=n(322),u=n.n(l),d=n(313),f=n.n(d),v=n(283),h=n.n(v),p=n(287),j=n.n(p),b=n(285),x=n.n(b),y=n(288),m=n.n(y),g=n(284),O=n.n(g),w=n(289),_=n.n(w),S=n(281),N=n(27),k=n(282),A=n(306);function textStyle(e){return Object(k.c)({"font-size":Object(A.a)(e.textSize)})}var C=n(44),z=["vertical","type","color","size","textSize","className","children","style"];function ownKeys(e,t){var n=h()(e);if(j.a){var r=j()(e);t&&(r=x()(r).call(r,(function(t){return m()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)O()(n=ownKeys(Object(r),!0)).call(n,(function(t){o()(e,t,r[t])}));else if(_.a)Object.defineProperties(e,_()(r));else{var a;O()(a=ownKeys(Object(r))).call(a,(function(t){Object.defineProperty(e,t,m()(r,t))}))}}return e}function Loading(e){var t,n=e.vertical,r=e.type,o=void 0===r?"circular":r,a=e.color,c=e.size,l=e.textSize,d=e.className,v=e.children,h=e.style,p=s()(e,z),j=Object(N.useState)(u()({"length":12})),b=i()(j,1)[0];return Object(C.jsxs)(S.o,_objectSpread(_objectSpread({"className":" "+k.b("loading",{"vertical":n})+" "+d,"style":k.c([h])},p),{},{"children":[Object(C.jsx)(S.o,{"className":"van-loading__spinner van-loading__spinner--"+o,"style":(t={"color":a,"size":c},Object(k.c)({"color":t.color,"width":Object(A.a)(t.size),"height":Object(A.a)(t.size)})),"children":"spinner"===o&&Object(C.jsx)(S.a,{"children":f()(b).call(b,(function(e,t){return Object(C.jsx)(S.o,{"className":"van-loading__dot"},"van-loading__dot_".concat(t))}))})}),Object(C.jsx)(S.o,{"className":"van-loading__text","style":textStyle({"textSize":l}),"children":v})]}))}t.b=Loading},"322":function(e,t,n){e.exports=n(316)},"330":function(e,t,n){var r=n(389);e.exports=r},"367":function(e,t,n){e.exports=n(379)},"368":function(e,t,n){e.exports=n(384)},"369":function(e,t,n){var r=n(387),o=n(370),a=n(371);e.exports=function _unsupportedIterableToArray(e,t){var n;if(e){if("string"==typeof e)return a(e,t);var i=r(n=Object.prototype.toString.call(e)).call(n,8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?o(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"370":function(e,t,n){e.exports=n(392)},"371":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},"373":function(e,t,n){var r=n(305),o=n(317),a=n(366);e.exports=function(e,t,n){var i,c;o(e);try{if(!(i=a(e,"return"))){if("throw"===t)throw n;return n}i=r(i,e)}catch(e){c=!0,i=e}if("throw"===t)throw n;if(c)throw i;return o(i),n}},"374":function(e,t,n){var r=n(296),o=n(360),a=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},"375":function(e,t,n){var r=n(292),o=n(305),a=n(326),i=n(317),c=n(434),s=n(310),l=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?s(e):t;if(a(n))return i(o(n,e));throw l(c(e)+" is not iterable")}},"376":function(e,t,n){var r=n(296)("iterator"),o=!1;try{var a=0,i={"next":function(){return{"done":!!a++}},"return":function(){o=!0}};i[r]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var a={};a[r]=function(){return{"next":function(){return{"done":n=!0}}}},e(a)}catch(e){}return n}},"378":function(e,t,n){var r=n(367);e.exports=function _arrayWithHoles(e){if(r(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},"379":function(e,t,n){var r=n(380);e.exports=r},"380":function(e,t,n){var r=n(381);e.exports=r},"381":function(e,t,n){n(382);var r=n(300);e.exports=r.Array.isArray},"382":function(e,t,n){n(286)({"target":"Array","stat":!0},{"isArray":n(333)})},"383":function(e,t,n){var r=n(435),o=n(368);e.exports=function _iterableToArrayLimit(e,t){var n=null==e?null:void 0!==r&&o(e)||e["@@iterator"];if(null!=n){var a,i,c=[],s=!0,l=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(c.push(a.value),!t||c.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(l)throw i}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},"384":function(e,t,n){var r=n(385);e.exports=r},"385":function(e,t,n){var r=n(386);n(422),e.exports=r},"386":function(e,t,n){n(425),n(364);var r=n(310);e.exports=r},"387":function(e,t,n){e.exports=n(388)},"388":function(e,t,n){var r=n(330);e.exports=r},"389":function(e,t,n){var r=n(298),o=n(390),a=Array.prototype;e.exports=function(e){var t=e.slice;return e===a||r(a,e)&&t===a.slice?o:t}},"390":function(e,t,n){n(391);var r=n(294);e.exports=r("Array").slice},"391":function(e,t,n){"use strict";var r=n(286),o=n(292),a=n(333),i=n(363),c=n(324),s=n(428),l=n(312),u=n(419),d=n(357),f=n(296),v=n(424),h=n(421),p=v("slice"),j=f("species"),b=o.Array,x=Math.max;r({"target":"Array","proto":!0,"forced":!p},{"slice":function slice(e,t){var n,r,o,f=u(this),v=l(f),p=s(e,v),y=s(void 0===t?v:t,v);if(a(f)&&(n=f.constructor,(i(n)&&(n===b||a(n.prototype))||c(n)&&null===(n=n[j]))&&(n=void 0),n===b||void 0===n))return h(f,p,y);for(r=new(void 0===n?b:n)(x(y-p,0)),o=0;p<y;p++,o++)p in f&&d(r,o,f[p]);return r.length=o,r}})},"392":function(e,t,n){var r=n(316);e.exports=r},"393":function(e,t,n){n(364),n(394);var r=n(300);e.exports=r.Array.from},"394":function(e,t,n){var r=n(286),o=n(395);r({"target":"Array","stat":!0,"forced":!n(376)((function(e){Array.from(e)}))},{"from":o})},"395":function(e,t,n){"use strict";var r=n(292),o=n(429),a=n(305),i=n(311),c=n(396),s=n(374),l=n(363),u=n(312),d=n(357),f=n(375),v=n(310),h=r.Array;e.exports=function from(e){var t=i(e),n=l(this),r=arguments.length,p=r>1?arguments[1]:void 0,j=void 0!==p;j&&(p=o(p,r>2?arguments[2]:void 0));var b,x,y,m,g,O,w=v(t),_=0;if(!w||this==h&&s(w))for(b=u(t),x=n?new this(b):h(b);b>_;_++)O=j?p(t[_],_):t[_],d(x,_,O);else for(g=(m=f(t,w)).next,x=n?new this:[];!(y=a(g,m)).done;_++)O=j?c(m,p,[y.value,_],!0):y.value,d(x,_,O);return x.length=_,x}},"396":function(e,t,n){var r=n(317),o=n(373);e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(t){o(e,"throw",t)}}},"397":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"450":function(e,t,n){"use strict";n(293),n(304),n(307),n(451)},"451":function(e,t,n){},"452":function(e,t,n){"use strict";var r=n(283),o=n.n(r),a=n(287),i=n.n(a),c=n(285),s=n.n(c),l=n(288),u=n.n(l),d=n(284),f=n.n(d),v=n(289),h=n.n(v),p=n(290),j=n.n(p),b=n(295),x=n.n(b),y=n(291),m=n.n(y),g=n(27),O=n(281),w=n(282),_=n(302),S=n(306);var N={"none":"scaleToFill","fill":"scaleToFill","cover":"aspectFill","contain":"aspectFit","widthFix":"widthFix","heightFix":"heightFix","scaleDown":"aspectFit"};function mode(e){return N[e]}var k=n(44),A=["src","round","width","height","radius","lazyLoad","showMenuByLongpress","fit","showError","showLoading","className","style","renderError","renderLoading"];function ownKeys(e,t){var n=o()(e);if(i.a){var r=i()(e);t&&(r=s()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)f()(n=ownKeys(Object(r),!0)).call(n,(function(t){j()(e,t,r[t])}));else if(h.a)Object.defineProperties(e,h()(r));else{var o;f()(o=ownKeys(Object(r))).call(o,(function(t){Object.defineProperty(e,t,u()(r,t))}))}}return e}t.a=function Image(e){var t=e.src,n=e.round,r=e.width,o=e.height,a=e.radius,i=e.lazyLoad,c=e.showMenuByLongpress,s=e.fit,l=e.showError,u=void 0===l||l,d=e.showLoading,f=void 0===d||d,v=e.className,h=e.style,p=e.renderError,j=e.renderLoading,b=m()(e,A),y=Object(g.useState)(),N=x()(y,2),C=N[0],z=N[1],I=Object(g.useState)(!1),L=x()(I,2),F=L[0],K=L[1];Object(g.useEffect)((function(){void 0===C&&z(!0),K(!1)}),[C]);var M,E=Object(g.useCallback)((function(){z(!1)}),[]),P=Object(g.useCallback)((function(){K(!0)}),[]),T=Object(g.useMemo)((function(){var e={};return"heightFix"!==s&&"widthFix"!==s||(e={"display":"flex","alignItems":"center","justifyContent":"center"}),e}),[s]);return Object(k.jsxs)(O.o,_objectSpread(_objectSpread({"style":w.c([(M={"width":r,"height":o,"radius":a},Object(w.c)([{"width":Object(S.a)(M.width),"height":Object(S.a)(M.height),"border-radius":Object(S.a)(M.radius)},M.radius?"overflow: hidden":null])),h]),"className":" "+w.b("image",{"round":n})+" "+v,"onClick":b.onClick},b),{},{"children":[!F&&Object(k.jsx)(O.g,{"src":t,"mode":mode(s||"none"),"lazyLoad":i,"className":"image-class van-image__img","showMenuByLongpress":c,"onLoad":E,"onError":P,"style":T}),C&&f&&Object(k.jsx)(O.o,{"className":"loading-class van-image__loading","children":j||Object(k.jsx)(_.b,{"name":"photo","className":"van-image__loading-icon"})}),F&&u&&Object(k.jsx)(O.o,{"className":"error-class van-image__error","children":p||Object(k.jsx)(_.b,{"name":"photo-fail","className":"van-image__error-icon"})})]}))}},"504":function(e,t,n){"use strict";n(293),n(319),n(505)},"505":function(e,t,n){},"529":function(e,t,n){"use strict";var r=n(283),o=n.n(r),a=n(287),i=n.n(a),c=n(285),s=n.n(c),l=n(288),u=n.n(l),d=n(284),f=n.n(d),v=n(289),h=n.n(v),p=n(290),j=n.n(p),b=n(291),x=n.n(b),y=n(27),m=n(281),g=n(282),O=n(321),w=n(309),_=n(306);function loadingColor(e){return e.checked?e.activeColor||"#1989fa":e.inactiveColor||"#969799"}var S=n(44),N=["checked","loading","disabled","activeColor","inactiveColor","size","activeValue","inactiveValue","onChange","style","className"];function ownKeys(e,t){var n=o()(e);if(i.a){var r=i()(e);t&&(r=s()(r).call(r,(function(t){return u()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)f()(n=ownKeys(Object(r),!0)).call(n,(function(t){j()(e,t,r[t])}));else if(h.a)Object.defineProperties(e,h()(r));else{var o;f()(o=ownKeys(Object(r))).call(o,(function(t){Object.defineProperty(e,t,u()(r,t))}))}}return e}t.a=function Switch(e){var t,n,r=e.checked,o=void 0!==r&&r,a=e.loading,i=void 0!==a&&a,c=e.disabled,s=void 0!==c&&c,l=e.activeColor,u=void 0===l?"#1989fa":l,d=e.inactiveColor,f=void 0===d?"#ffffff":d,v=e.size,h=void 0===v?"60":v,p=e.activeValue,j=void 0===p||p,b=e.inactiveValue,k=void 0!==b&&b,A=e.onChange,C=e.style,z=e.className,I=x()(e,N),L=Object(y.useCallback)((function(e){if(!s&&!i){var t=o===j?k:j;Object.defineProperty(e,"detail",{"value":t}),null==A||A(e)}}),[j,o,s,k,i,A]);return Object(S.jsx)(m.o,_objectSpread(_objectSpread({"className":g.b("switch",{"on":o===j,"disabled":s})+"  ".concat(z),"style":g.c([(t={"size":h,"checked":o,"activeColor":u,"inactiveColor":f},n=t.checked?t.activeColor:t.inactiveColor,Object(w.a)({"font-size":Object(_.a)(t.size),"background-color":n})),C])},I),{},{"onClick":L,"children":Object(S.jsx)(m.o,{"className":"van-switch__node node-class","children":i&&Object(S.jsx)(O.b,{"color":loadingColor({"checked":o,"activeColor":u,"inactiveColor":f}),"className":"van-switch__loading"})})}))}},"873":function(e,t,n){},"874":function(e,t,n){},"953":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));n(450);var r=n(452),o=(n(504),n(529)),a=(n(293),n(873),n(283)),i=n.n(a),c=n(287),s=n.n(c),l=n(285),u=n.n(l),d=n(288),f=n.n(d),v=n(284),h=n.n(v),p=n(289),j=n.n(p),b=n(290),x=n.n(b),y=n(291),m=n.n(y),g=n(295),O=n.n(g),w=n(322),_=n.n(w),S=n(313),N=n.n(S),k=n(31),A=n(27),C=n(281),z=n(282),I=n(44),L=["row","animate","avatar","avatarShape","avatarSize","titleWidth","title","rowWidth","loading","children","style","className"];function ownKeys(e,t){var n=i()(e);if(s.a){var r=s()(e);t&&(r=u()(r).call(r,(function(t){return f()(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)h()(n=ownKeys(Object(r),!0)).call(n,(function(t){x()(e,t,r[t])}));else if(j.a)Object.defineProperties(e,j()(r));else{var o;h()(o=ownKeys(Object(r))).call(o,(function(t){Object.defineProperty(e,t,f()(r,t))}))}}return e}var F=function Skeleton(e){var t=Object(A.useState)({"isArray":!1,"rowArray":[]}),n=O()(t,2),r=n[0],o=n[1],a=r.isArray,i=r.rowArray,c=e.row,s=void 0===c?0:c,l=e.animate,u=void 0===l||l,d=e.avatar,f=e.avatarShape,v=void 0===f?"round":f,h=e.avatarSize,p=void 0===h?k.default.pxTransform(64):h,j=e.titleWidth,b=void 0===j?"40%":j,x=e.title,y=e.rowWidth,g=void 0===y?"100%":y,w=e.loading,S=void 0===w||w,F=e.children,K=e.style,M=e.className,E=m()(e,L);return Object(A.useEffect)((function(){o((function(e){return _objectSpread(_objectSpread({},e),{},{"rowArray":_()({"length":s})})}))}),[s]),Object(A.useEffect)((function(){o((function(e){return _objectSpread(_objectSpread({},e),{},{"isArray":g instanceof Array})}))}),[g]),S?Object(I.jsxs)(C.o,_objectSpread(_objectSpread({"className":" "+z.b("skeleton",[{"animate":u}])+" ".concat(M||""),"style":K},E),{},{"children":[d&&Object(I.jsx)(C.o,{"className":"avatar-class "+z.b("skeleton__avatar",[v]),"style":"width:"+p+";height:"+p}),Object(I.jsxs)(C.o,{"className":z.b("skeleton__content"),"children":[x&&Object(I.jsx)(C.o,{"className":"title-class "+z.b("skeleton__title"),"style":"width:"+b}),N()(i).call(i,(function(e,t){return Object(I.jsx)(C.o,{"className":"row-class "+z.b("skeleton__row"),"style":"width:"+(a?g[t]:g)},t)}))]})]})):Object(I.jsx)(C.o,{"className":z.b("skeleton__content"),"children":F})},K=n(3),M=n.n(K),E=n(6),P=n.n(E),T=n(24),W=n.n(T),V=n(16),B=n.n(V),R=n(17),J=n.n(R),U=n(9),D=n.n(U),H=n(327),$=n(301),q=(n(874),function(e){B()(Index,e);var t=J()(Index);function Index(){var e;return M()(this,Index),e=t.call(this),D()(W()(e),"state",{"show":!1}),D()(W()(e),"onChange",(function(t){var n=t.detail;e.setState({"show":n})})),e}return P()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(I.jsx)(H.a,{"title":"Skeleton 骨架屏","children":Object(I.jsxs)(I.Fragment,{"children":[Object(I.jsx)($.a,{"title":"基础用法","children":Object(I.jsx)(F,{"title":!0,"row":"3","rowWidth":["100%","100%","80%"]})}),Object(I.jsx)($.a,{"title":"显示头像","children":Object(I.jsx)(F,{"title":!0,"avatar":!0,"row":"3"})}),Object(I.jsxs)($.a,{"title":"展示子组件","children":[Object(I.jsx)(o.a,{"checked":e,"size":"24px","onChange":this.onChange}),Object(I.jsx)(F,{"title":!0,"avatar":!0,"row":"3","loading":!e,"children":Object(I.jsxs)(C.o,{"className":"demo-preview","children":[Object(I.jsx)(r.a,{"className":"demo-preview-img","src":"https://antm-js.gitee.io/resource/antmjs-vantui.png"}),Object(I.jsxs)(C.o,{"className":"demo-content","children":[Object(I.jsx)(C.o,{"className":"demo-content-h3","children":"关于 @antmjs/vantui"}),Object(I.jsx)(C.o,{"className":"domo-content-p","children":"一套基于 vant-weapp 开发的在 Taro-React / React 框架中使用的多端 UI 组件库，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。"})]})]})})]})]})})}}]),Index}(A.Component))}}]);