(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"282":function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return Page}));var i=t(281),c=t(280),o=t(31),l=t(27),s=(t(283),t(44));function Page(n){var t=n.title,r=n.children,a=o.default.useRouter();return Object(l.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(o.pageScrollTo)({"scrollTop":0})}),[a.path]),Object(s.jsxs)(c.View,{"className":"demo-page","children":[Object(s.jsxs)(c.View,{"className":"demo-nav","children":[Object(s.jsx)(i.Icon,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return o.default.navigateBack()}}),Object(s.jsxs)(c.View,{"className":"demo-nav__title","children":[t," "]})]}),r]})}}).call(this,t(121))},"283":function(e,n,t){},"284":function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var i=t(3),c=t.n(i),o=t(6),l=t.n(o),s=t(16),r=t.n(s),a=t(17),d=t.n(a),u=t(280),f=t(27),h=(t(285),t(44)),m=function(e){r()(Index,e);var n=d()(Index);function Index(){return c()(this,Index),n.call(this)}return l()(Index,[{"key":"render","value":function render(){var e=this.props,n=e.padding,t=e.title,i=e.card;return Object(h.jsxs)(u.View,{"className":"custom-class demo-block van-clearfix "+(n?"demo-block--padding":""),"children":[t&&Object(h.jsx)(u.View,{"className":"demo-block__title","children":t}),i?Object(h.jsx)(u.View,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(f.Component)},"285":function(e,n,t){},"697":function(e,n,t){},"749":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p}));var i=t(3),c=t.n(i),o=t(6),l=t.n(o),s=t(24),r=t.n(s),a=t(16),d=t.n(a),u=t(17),f=t.n(u),h=t(9),m=t.n(h),j=(t(123),t(126),t(27)),C=t(281),b=t(282),g=t(284),k=(t(697),t(44)),x="代码是写出来给人看的，附带能在机器上运行",p=function(e){d()(Index,e);var n=f()(Index);function Index(){var e;return c()(this,Index),e=n.call(this),m()(r()(e),"state",{"show":!1}),m()(r()(e),"showCustomDialog",(function(){e.setState({"show":!0})})),m()(r()(e),"getUserInfo",(function(e){console.log(e.detail)})),m()(r()(e),"onClickThemeAlert",(function(){C.dialog.alert({"title":"标题","theme":"round-button","message":x})})),m()(r()(e),"onClickThemeAlert2",(function(){C.dialog.alert({"theme":"round-button","message":x})})),m()(r()(e),"onClickAlert",(function(){C.dialog.alert({"title":"标题","message":x})})),m()(r()(e),"onClickAlert2",(function(){C.dialog.alert({"message":x})})),m()(r()(e),"onClickConfirm",(function(){C.dialog.confirm({"title":"标题","message":x})})),m()(r()(e),"onClickAsyncClose",(function(){C.dialog.confirm({"title":"标题","message":x,"beforeClose":function beforeClose(e){return new Promise((function(n){setTimeout((function(){n("confirm"===e)}),1e3)}))}}).catch((function(e){console.log(e)}))})),m()(r()(e),"onClose",(function(){e.setState({"show":!1})})),e}return l()(Index,[{"key":"render","value":function render(){var e=this.state.show;return Object(k.jsx)(b.a,{"title":"Dialog 弹出框","children":Object(k.jsxs)(k.Fragment,{"children":[Object(k.jsxs)(g.a,{"card":!0,"title":"提示弹窗","padding":!0,"children":[Object(k.jsx)(C.Cell,{"title":"提示弹窗","onClick":this.onClickAlert,"isLink":!0}),Object(k.jsx)(C.Cell,{"title":"提示弹窗（无标题）","onClick":this.onClickAlert2,"isLink":!0}),Object(k.jsx)(C.Cell,{"title":"确认弹窗","onClick":this.onClickConfirm,"isLink":!0})]}),Object(k.jsxs)(g.a,{"card":!0,"title":"圆角按钮样式","padding":!0,"children":[Object(k.jsx)(C.Cell,{"title":"提示弹窗","onClick":this.onClickThemeAlert,"isLink":!0}),Object(k.jsx)(C.Cell,{"title":"提示弹窗（无标题）","onClick":this.onClickThemeAlert2,"isLink":!0})]}),Object(k.jsx)(g.a,{"card":!0,"title":"异步关闭","padding":!0,"children":Object(k.jsx)(C.Cell,{"title":"异步关闭","onClick":this.onClickAsyncClose})}),Object(k.jsx)(g.a,{"card":!0,"title":"组件调用","padding":!0,"children":Object(k.jsx)(C.Cell,{"title":"组件调用","onClick":this.showCustomDialog})}),Object(k.jsx)(C.Dialog,{"title":"标题","show":e,"showCancelButton":!0,"onClose":this.onClose,"confirmButtonOpenType":"getUserInfo","onGetuserinfo":this.getUserInfo,"children":Object(k.jsx)(C.Image,{"className":"demo-image","src":"https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg"})}),Object(k.jsx)(C.Dialog,{"id":"van-dialog"})]})})}}]),Index}(j.Component)}}]);