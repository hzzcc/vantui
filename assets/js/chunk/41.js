(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var c=t(281),a=t(280),s=t(31),i=t(27),o=(t(283),t(44));function Page(n){var t=n.title,r=n.children,l=s.default.useRouter();return Object(i.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(s.pageScrollTo)({"scrollTop":0})}),[l.path]),Object(o.jsxs)(a.View,{"className":"demo-page","children":[Object(o.jsxs)(a.View,{"className":"demo-nav","children":[Object(o.jsx)(c.Icon,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return s.default.navigateBack()}}),Object(o.jsxs)(a.View,{"className":"demo-nav__title","children":[t," "]})]}),r]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var c=t(3),a=t.n(c),s=t(6),i=t.n(s),o=t(16),r=t.n(o),l=t(17),d=t.n(l),u=t(280),j=t(27),h=(t(285),t(44)),m=function(e){r()(Index,e);var n=d()(Index);function Index(){return a()(this,Index),n.call(this)}return i()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,c=e.card;return Object(h.jsxs)(u.View,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(h.jsx)(u.View,{"className":"demo-block__title","children":t}),c?Object(h.jsx)(u.View,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.Component)},"285":function(e,n,t){},"736":function(e,n,t){},"787":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var c=t(3),a=t.n(c),s=t(6),i=t.n(s),o=t(24),r=t.n(o),l=t(16),d=t.n(l),u=t(17),j=t.n(u),h=t(9),m=t.n(h),x=t(27),b=t(280),p=t(281),w=t(282),f=t(284),v=(t(736),t(44)),O=function(e){d()(Index,e);var n=j()(Index);function Index(){var e;return a()(this,Index),e=n.call(this),m()(r()(e),"state",{"show":!1}),m()(r()(e),"onChange",(function(n){var t=n.detail;e.setState({"show":t})})),e}return i()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(v.jsx)(w.a,{"title":"Skeleton 骨架屏","children":Object(v.jsxs)(v.Fragment,{"children":[Object(v.jsx)(f.a,{"title":"基础用法","children":Object(v.jsx)(p.Skeleton,{"title":!0,"row":"3","rowWidth":["100%","100%","80%"]})}),Object(v.jsx)(f.a,{"title":"显示头像","children":Object(v.jsx)(p.Skeleton,{"title":!0,"avatar":!0,"row":"3"})}),Object(v.jsxs)(f.a,{"title":"展示子组件","children":[Object(v.jsx)(p.Switch,{"checked":e,"size":"24px","onChange":this.onChange}),Object(v.jsx)(p.Skeleton,{"title":!0,"avatar":!0,"row":"3","loading":!e,"children":Object(v.jsxs)(b.View,{"className":"demo-preview","children":[Object(v.jsx)(p.Image,{"className":"demo-preview-img","src":"https://img.yzcdn.cn/vant/logo.png"}),Object(v.jsxs)(b.View,{"className":"demo-content","children":[Object(v.jsx)(b.View,{"className":"demo-content-h3","children":"关于 @antmjs/vantui"}),Object(v.jsx)(b.View,{"className":"domo-content-p","children":"一套基于 vant-weapp 开发的在 Taro-React / React 框架中使用的多端 UI 组件库，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用。"})]})]})})]})]})})}}]),Index}(x.Component)}}]);