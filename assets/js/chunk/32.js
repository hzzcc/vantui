(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),i=t(280),r=t(31),o=t(27),a=(t(283),t(44));function Page(n){var t=n.title,s=n.children,l=r.default.useRouter();return Object(o.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(r.pageScrollTo)({"scrollTop":0})}),[l.path]),Object(a.jsxs)(i.View,{"className":"demo-page","children":[Object(a.jsxs)(i.View,{"className":"demo-nav","children":[Object(a.jsx)(c.Icon,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return r.default.navigateBack()}}),Object(a.jsxs)(i.View,{"className":"demo-nav__title","children":[t," "]})]}),s]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return j}));var c=t(3),i=t.n(c),r=t(6),o=t.n(r),a=t(16),s=t.n(a),l=t(17),d=t.n(l),u=t(280),f=t(27),h=(t(285),t(44)),j=function(e){s()(Index,e);var n=d()(Index);function Index(){return i()(this,Index),n.call(this)}return o()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(h.jsxs)(u.View,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(h.jsx)(u.View,{"className":"demo-block__title","children":t}),c?Object(h.jsx)(u.View,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(f.Component)},"285":function(e,n,t){},"702":function(e,n,t){},"754":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var c=t(3),i=t.n(c),r=t(6),o=t.n(r),a=t(24),s=t.n(a),l=t(16),d=t.n(l),u=t(17),f=t.n(u),h=t(9),j=t.n(h),x=t(27),b=t(31),m=t(281),p=t(282),v=t(284),O=(t(702),t(44)),k=function(e){d()(Index,e);var n=f()(Index);function Index(){var e;return i()(this,Index),e=n.call(this),j()(s()(e),"onClickLeft",(function(){Object(b.showToast)({"title":"点击返回","icon":"none"})})),j()(s()(e),"onClickRight",(function(){Object(b.showToast)({"title":"点击按钮","icon":"none"})})),e}return o()(Index,[{"key":"render","value":function render(){return Object(O.jsx)(p.a,{"title":"NavBar 导航栏","children":Object(O.jsxs)(O.Fragment,{"children":[Object(O.jsx)(v.a,{"title":"基础用法","children":Object(O.jsx)(m.NavBar,{"title":"标题","rightText":"按钮","leftArrow":!0,"onClickLeft":this.onClickLeft,"onClickRight":this.onClickRight})}),Object(O.jsx)(v.a,{"title":"高级用法","children":Object(O.jsx)(m.NavBar,{"title":"标题","leftText":"返回","leftArrow":!0,"renderRight":Object(O.jsx)(O.Fragment,{"children":Object(O.jsx)(m.Icon,{"name":"search","className":"icon","size":"36"})})})})]})})}}]),Index}(x.Component)}}]);