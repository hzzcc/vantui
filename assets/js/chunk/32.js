(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"597":function(e,n,t){"use strict";t.d(n,"a",(function(){return jumpLink}));var c=t(77);function jumpLink(e,n){var t;if(n=null!==(t=n)&&void 0!==t?t:"navigateTo",e)if("navigateTo"===n&&Object(c.b)().length>9)Object(c.g)({"url":e});else switch(n){case"navigateTo":Object(c.e)({"url":e});break;case"reLaunch":Object(c.f)({"url":e});break;case"redirectTo":Object(c.g)({"url":e})}}},"612":function(e,n,t){"use strict";t.d(n,"a",(function(){return _objectSpread2}));var c=t(610),r=t.n(c),o=t(608),i=t.n(o),a=t(631),u=t.n(a),l=t(635),s=t.n(l),d=t(621),f=t.n(d),b=t(639),j=t.n(b),m=t(643),v=t.n(m),O=t(67),p=t.n(O),x=t(91);function ownKeys(e,n){var t=r()(e);if(i.a){var c=i()(e);n&&(c=u()(c).call(c,(function(n){return s()(e,n).enumerable}))),t.push.apply(t,c)}return t}function _objectSpread2(e){for(var n=1;n<arguments.length;n++){var t,c,r=null!=arguments[n]?arguments[n]:{};n%2?f()(t=ownKeys(Object(r),!0)).call(t,(function(n){Object(x.a)(e,n,r[n])})):j.a?v()(e,j()(r)):f()(c=ownKeys(Object(r))).call(c,(function(n){p()(e,n,s()(r,n))}))}return e}},"621":function(e,n,t){e.exports=t(680)},"631":function(e,n,t){e.exports=t(632)},"632":function(e,n,t){e.exports=t(633)},"633":function(e,n,t){var c=t(634);e.exports=c},"634":function(e,n,t){var c=t(238);e.exports=c},"635":function(e,n,t){e.exports=t(636)},"636":function(e,n,t){e.exports=t(637)},"637":function(e,n,t){var c=t(638);e.exports=c},"638":function(e,n,t){var c=t(607);e.exports=c},"639":function(e,n,t){e.exports=t(640)},"640":function(e,n,t){e.exports=t(641)},"641":function(e,n,t){var c=t(642);e.exports=c},"642":function(e,n,t){var c=t(240);e.exports=c},"643":function(e,n,t){e.exports=t(644)},"644":function(e,n,t){e.exports=t(645)},"645":function(e,n,t){var c=t(646);e.exports=c},"646":function(e,n,t){var c=t(239);e.exports=c},"680":function(e,n,t){e.exports=t(681)},"681":function(e,n,t){var c=t(682);e.exports=c},"682":function(e,n,t){var c=t(244);e.exports=c},"699":function(e,n,t){"use strict";t(577),t(782)},"700":function(e,n,t){"use strict";t(577),t(584),t(585),t(783)},"703":function(e,n,t){"use strict";var c=t(573),r=t.n(c),o=t(178),i=t.n(o),a=t(27),u=t.n(a),l=t(568),s=t(64),d=t(569),f=t(583),b=t(580);var j=t(115),m=["gutter","clickable","columnNum","center","border","direction","iconSize","square","reverse","className","style"];n.a=function Grid(e){var n=e.gutter,t=void 0===n?null:n,c=e.clickable,o=e.columnNum,a=void 0===o?4:o,v=e.center,O=void 0===v||v,p=e.border,x=void 0===p||p,h=e.direction,g=e.iconSize,k=void 0===g?"48":g,S=e.square,y=i()(e),C=void 0!==y&&y,w=e.className,_=void 0===w?"":w,N=e.style,D=void 0===N?{}:N,T=r()(e,m),I=Object(s.useRef)([]),q=Object(s.useCallback)((function(){var e;u()(e=I.current).call(e,(function(e){e.updateStyle()}))}),[]);Object(s.useEffect)((function(){q()}),[q]);var H,M=Object(s.useCallback)((function(e,n){I.current[e]=n}),[]),z=Object(s.useMemo)((function(){var e,n=[];T.children&&Array.isArray(T.children)&&u()(e=T.children).call(e,(function(e,r){n.push(Object(s.cloneElement)(e,{"setChildrenInstance":M,"key":r,"index":r,"parentInstance":{"columnNum":a,"border":x,"square":S,"gutter":t,"clickable":c,"center":O,"direction":h,"reverse":C,"iconSize":k}}))}));return n}),[T.children]);return Object(j.jsx)(l.n,{"className":"van-grid  "+(x&&!t?"van-hairline--top":"")+" "+_,"style":d.c([(H={"gutter":t},Object(f.a)({"padding-left":Object(b.a)(H.gutter)})),D]),"children":z})}},"704":function(e,n,t){"use strict";var c=t(574),r=t.n(c),o=t(573),i=t.n(o),a=t(178),u=t.n(a),l=t(568),s=t(64),d=t(597),f=t(569),b=t(576),j=t(583),m=t(580);function contentStyle(e){return e.square?Object(j.a)({"right":Object(m.a)(e.gutter),"bottom":Object(m.a)(e.gutter),"height":"auto"}):""}var v=t(115),O=["icon","iconColor","iconPrefix","dot","info","badge","text","setChildrenInstance","parentInstance","index","url","linkType","style","className"];n.a=function GridItem(e){var n=e.icon,t=e.iconColor,c=e.iconPrefix,o=void 0===c?"van-icon":c,a=e.dot,p=e.info,x=e.badge,h=e.text,g=e.setChildrenInstance,k=e.parentInstance,S=e.index,y=e.url,C=e.linkType,w=e.style,_=e.className,N=i()(e,O),D=Object(s.useState)({}),T=r()(D,2),I=T[0],q=T[1];Object(s.useEffect)((function(){g(S,{"updateStyle":z})}),[S,g]),Object(s.useEffect)((function(){z()}),[]);var H,M,z=Object(s.useCallback)((function(){var e=k.columnNum,n=k.border,t=k.square,c=k.gutter,r=k.clickable,o=k.center,i=k.direction,a=u()(k),l=k.iconSize;q({"center":o,"border":n,"square":t,"gutter":c,"clickable":r,"direction":i,"reverse":a,"iconSize":l,"index":S,"columnNum":e})}),[k,S]);return Object(v.jsx)(l.n,{"className":" "+f.b("grid-item",{"square":null==I?void 0:I.square})+" "+_,"style":f.c([(H={"square":null==I?void 0:I.square,"gutter":null==I?void 0:I.gutter,"columnNum":null==I?void 0:I.columnNum,"index":null==I?void 0:I.index},M=100/H.columnNum+"%",Object(j.a)({"width":M,"padding-top":H.square?M:null,"padding-right":Object(m.a)(H.gutter),"margin-top":H.index>=H.columnNum&&!H.square?Object(m.a)(H.gutter):null})),w]),"onClick":function onClick(e){var n;y&&Object(d.a)(y,C),null==N||null===(n=N.onClick)||void 0===n||n.call(N,e)},"children":Object(v.jsx)(l.n,{"className":"content-class "+f.b("grid-item__content",[null==I?void 0:I.direction,{"center":null==I?void 0:I.center,"square":null==I?void 0:I.square,"reverse":null==I?void 0:u()(I),"clickable":null==I?void 0:I.clickable,"surround":(null==I?void 0:I.border)&&(null==I?void 0:I.gutter)}])+" "+(null!=I&&I.border?"van-hairline--surround":""),"style":contentStyle({"square":null==I?void 0:I.square,"gutter":null==I?void 0:I.gutter}),"children":N.children||Object(v.jsxs)(v.Fragment,{"children":[Object(v.jsx)(l.n,{"className":"van-grid-item__icon icon-class","children":n?Object(v.jsx)(b.b,{"name":n,"color":t,"classPrefix":o,"dot":a,"info":x||p,"size":null==I?void 0:I.iconSize}):I.renderIcon}),Object(v.jsx)(l.n,{"className":"van-grid-item__text text-class","children":h?Object(v.jsx)(l.k,{"children":h}):I.renderText})]})})})}},"782":function(e,n,t){},"783":function(e,n,t){},"832":function(e,n,t){},"889":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return B}));var c=t(39),r=t(40),o=t(175),i=t(66),a=t(65),u=t(91),l=t(64),s=t.n(l),d=t(578),f=t(579),b=(t(577),t(832),t(116)),j=t.n(b),m=t(55),v=t.n(m),O=t(24),p=t.n(O),x=t(571),h=t.n(x),g=t(32),k=t.n(g),S=t(570),y=t.n(S),C=t(27),w=t.n(C),_=t(173),N=t.n(_),D=t(572),T=t.n(D),I=t(573),q=t.n(I),H=t(574),M=t.n(H),z=t(568),F=t(28),E=t.n(F);function padZero(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=e+"";t.length<n;)t="0"+t;return t}function parseFormat(e,n){var t=n.days,c=n.hours,r=n.minutes,o=n.seconds,i=n.milliseconds;return-1===E()(e).call(e,"DD")?c+=24*t:e=e.replace("DD",padZero(t)),-1===E()(e).call(e,"HH")?r+=60*c:e=e.replace("HH",padZero(c)),-1===E()(e).call(e,"mm")?o+=60*r:e=e.replace("mm",padZero(r)),-1===E()(e).call(e,"ss")?i+=1e3*o:e=e.replace("ss",padZero(o)),e.replace("SSS",padZero(i,3))}var K=t(115),Z=["time","format","autoStart","millisecond","onChange","onFinish","children","style","className"];function ownKeys(e,n){var t=p()(e);if(h.a){var c=h()(e);n&&(c=k()(c).call(c,(function(n){return y()(e,n).enumerable}))),t.push.apply(t,c)}return t}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t,c=null!=arguments[n]?arguments[n]:{};if(n%2)w()(t=ownKeys(Object(c),!0)).call(t,(function(n){T()(e,n,c[n])}));else if(N.a)j()(e,N()(c));else{var r;w()(r=ownKeys(Object(c))).call(r,(function(n){v()(e,n,y()(c,n))}))}}return e}function simpleTick(e){return setTimeout(e,30)}function count_down_Index(e,n){var t=Object(l.useRef)({"tid":null,"counting":!1}),c=Object(l.useState)({"formattedTime":"0"}),r=M()(c,2),o=r[0],i=r[1],a=o.formattedTime,u=e.time,s=e.format,d=void 0===s?"HH:mm:ss":s,f=e.autoStart,b=void 0===f||f,j=e.millisecond,m=e.onChange,v=e.onFinish,O=e.children,p=e.style,x=e.className,h=q()(e,Z),g=Object(l.useCallback)((function(){t.current.counting=!1,clearTimeout(t.current.tid)}),[]),k=Object(l.useCallback)((function(){return Math.max(t.current.endTime-Date.now(),0)}),[]),S=Object(l.useCallback)((function(e){t.current.remain=e;var n=function parseTimeData(e){return{"days":Math.floor(e/864e5),"hours":Math.floor(e%864e5/36e5),"minutes":Math.floor(e%36e5/6e4),"seconds":Math.floor(e%6e4/1e3),"milliseconds":Math.floor(e%1e3)}}(e);O&&(null==m||m({"detail":n})),i((function(e){return _objectSpread(_objectSpread({},e),{},{"formattedTime":parseFormat(d,n)})})),0===e&&(g(),null==v||v())}),[O,d,m,v,g]),y=Object(l.useCallback)((function(){t.current.tid=simpleTick((function(){S(k()),0!==t.current.remain&&y()}))}),[k,S]),C=Object(l.useCallback)((function(){t.current.tid=simpleTick((function(){var e=k();(function isSameSecond(e,n){return Math.floor(e/1e3)===Math.floor(n/1e3)})(e,t.current.remain)&&0!==e||S(e),0!==t.current.remain&&C()}))}),[k,S]),w=Object(l.useCallback)((function(){j?y():C()}),[C,y,j]),_=Object(l.useCallback)((function(){t.current.counting||(t.current.counting=!0,t.current.endTime=Date.now()+t.current.remain,w())}),[w]),N=Object(l.useCallback)((function(){g(),t.current.remain=u,S(t.current.remain),b&&_()}),[b,g,S,_,u]);Object(l.useImperativeHandle)(n,(function(){return{"start":function start(){_()},"pause":function pause(){g()},"reset":function reset(){N()}}})),Object(l.useEffect)((function(){N()}),[u]);var D=t.current.tid;return Object(l.useEffect)((function(){return function(){D&&clearTimeout(D)}}),[]),Object(K.jsx)(z.n,_objectSpread(_objectSpread({"className":"van-count-down ".concat(x),"style":p},h),{},{"children":O||Object(K.jsx)(z.a,{"children":a})}))}var R=Object(l.forwardRef)(count_down_Index),L=t(174);function Demo(){var e=s.a.useState(108e6),n=Object(L.a)(e,2),t=n[0];n[1];return Object(K.jsx)(R,{"time":t})}function demo2_Demo(){var e=s.a.useState(108e6),n=Object(L.a)(e,2),t=n[0];n[1];return Object(K.jsx)(R,{"time":t,"format":"DD 天 HH 时 mm 分 ss 秒"})}function demo3_Demo(){var e=s.a.useState(108e6),n=Object(L.a)(e,2),t=n[0];n[1];return Object(K.jsx)(R,{"millisecond":!0,"time":t,"format":"HH:mm:ss:SSS"})}var P=t(612);function demo4_Demo(){var e=s.a.useState(108e6),n=Object(L.a)(e,2),t=n[0],c=(n[1],s.a.useState({})),r=Object(L.a)(c,2),o=r[0],i=r[1];return Object(K.jsxs)(R,{"time":t,"onChange":function onChange(e){return i(Object(P.a)({},e.detail))},"children":[Object(K.jsx)(z.k,{"style":{"color":"blue"},"children":o.hours}),"时",Object(K.jsx)(z.k,{"style":{"color":"green"},"children":o.minutes}),"分",Object(K.jsx)(z.k,{"style":{"color":"red"},"children":o.seconds}),"秒"]})}t(699);var A=t(703),G=(t(700),t(704)),J=(t(606),t(604));function demo5_Demo(){var e=s.a.useRef();return Object(K.jsxs)(z.n,{"children":[Object(K.jsx)(J.a,{"id":"controlCountDown-mess"}),Object(K.jsx)(R,{"onChange":function onChange(e){return console.info(e)},"ref":function ref(n){return e.current=n},"class":"controlCountDown","millisecond":!0,"time":4e3,"autoStart":!1,"format":"ss:SSS","onFinish":function onFinish(){return J.a.show("end")}}),Object(K.jsxs)(A.a,{"clickable":!0,"columnNum":"3","children":[Object(K.jsx)(G.a,{"text":"开始","icon":"play-circle-o","onClick":function onClick(){return e.current.start()}}),Object(K.jsx)(G.a,{"text":"暂停","icon":"pause-circle-o","onClick":function onClick(){return e.current.pause()}}),Object(K.jsx)(G.a,{"text":"重置","icon":"replay","onClick":function onClick(){console.info(e),e.current.reset()}})]})]})}var B=function(e){Object(i.a)(Index,e);var n=Object(a.a)(Index);function Index(){var e;return Object(c.a)(this,Index),e=n.call(this),Object(u.a)(Object(o.a)(e),"state",{"active":0}),e}return Object(r.a)(Index,[{"key":"render","value":function render(){return Object(K.jsxs)(d.a,{"title":"CountDown 倒计时","className":"pages-count-down-index","children":[Object(K.jsx)(f.a,{"title":"基本用法","padding":!0,"children":Object(K.jsx)(Demo,{})}),Object(K.jsx)(f.a,{"title":"自定义格式","padding":!0,"children":Object(K.jsx)(demo2_Demo,{})}),Object(K.jsx)(f.a,{"title":"毫秒级渲染","padding":!0,"children":Object(K.jsx)(demo3_Demo,{})}),Object(K.jsx)(f.a,{"title":"自定义样式","padding":!0,"children":Object(K.jsx)(demo4_Demo,{})}),Object(K.jsx)(f.a,{"title":"手动控制","padding":!0,"children":Object(K.jsx)(demo5_Demo,{})})]})}}]),Index}(l.Component)}}]);