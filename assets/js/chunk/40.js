(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"282":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Page}));var o=n(281),c=n(280),i=n(31),s=n(27),a=(n(283),n(44));function Page(t){var n=t.title,l=t.children,r=i.default.useRouter();return Object(s.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(i.pageScrollTo)({"scrollTop":0})}),[r.path]),Object(a.jsxs)(c.View,{"className":"demo-page","children":[Object(a.jsxs)(c.View,{"className":"demo-nav","children":[Object(a.jsx)(o.Icon,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return i.default.navigateBack()}}),Object(a.jsxs)(c.View,{"className":"demo-nav__title","children":[n," "]})]}),l]})}}).call(this,n(121))},"283":function(e,t,n){},"284":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(3),c=n.n(o),i=n(6),s=n.n(i),a=n(16),l=n.n(a),r=n(17),d=n.n(r),h=n(280),u=n(27),m=(n(285),n(44)),p=function(e){l()(Index,e);var t=d()(Index);function Index(){return c()(this,Index),t.call(this)}return s()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,o=e.card;return Object(m.jsxs)(h.View,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(m.jsx)(h.View,{"className":"demo-block__title","children":n}),o?Object(m.jsx)(h.View,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(u.Component)},"285":function(e,t,n){},"741":function(e,t,n){},"791":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var o=n(5),c=n.n(o),i=n(3),s=n.n(i),a=n(6),l=n.n(a),r=n(24),d=n.n(r),h=n(16),u=n.n(h),m=n(17),p=n.n(m),j=n(9),b=n.n(j),w=n(27),S=n(281),x=n(282),f=n(284),O=(n(741),n(44)),k=function(e){u()(Index,e);var t=p()(Index);function Index(){var e;return s()(this,Index),e=t.call(this),b()(d()(e),"state",{"show":{"basic":!1,"withDesc":!1,"multiLine":!1,"customIcon":!1},"options":[{"name":"微信","icon":"wechat","openType":"share"},{"name":"朋友圈","icon":"wechat-moments"},{"name":"QQ","icon":"qq"},{"name":"微博","icon":"weibo"},{"name":"复制链接","icon":"link"},{"name":"分享海报","icon":"poster"},{"name":"二维码","icon":"qrcode"},{"name":"小程序码","icon":"weapp-qrcode"}],"multiLineOptions":[[{"name":"微信","icon":"wechat"},{"name":"微博","icon":"weibo"},{"name":"QQ","icon":"qq"}],[{"name":"复制链接","icon":"link"},{"name":"分享海报","icon":"poster"},{"name":"二维码","icon":"qrcode"}]],"customIconOptions":[{"name":"名称","icon":"https://img.yzcdn.cn/vant/custom-icon-fire.png"},{"name":"名称","icon":"https://img.yzcdn.cn/vant/custom-icon-light.png"},{"name":"名称","icon":"https://img.yzcdn.cn/vant/custom-icon-water.png"}],"optionsWithDesc":[{"name":"微信","icon":"wechat"},{"name":"微博","icon":"weibo"},{"name":"复制链接","icon":"link","description":"描述信息"},{"name":"分享海报","icon":"poster"},{"name":"二维码","icon":"qrcode"}]}),b()(d()(e),"onShowShareSheet",(function(t){e.setState({"show":c()(c()({},e.state.show),{},b()({},t.target.dataset.type,!0))})})),b()(d()(e),"onClose",(function(){e.setState({"show":{"basic":!1,"withDesc":!1,"multiLine":!1,"customIcon":!1}})})),b()(d()(e),"onSelect",(function(t){Object(S.toast)(t.detail.name),e.onClose()})),e}return l()(Index,[{"key":"render","value":function render(){var e=this,t=this.state,n=t.show,o=t.options,c=t.multiLineOptions,i=t.customIconOptions,s=t.optionsWithDesc;return Object(O.jsx)(x.a,{"title":"ShareSheet 分享面板","children":Object(O.jsxs)(O.Fragment,{"children":[Object(O.jsxs)(f.a,{"card":!0,"title":"基础用法","children":[Object(O.jsx)(S.Cell,{"isLink":!0,"title":"显示分享面板","onClick":function onClick(t){e.onShowShareSheet({"detail":t.detail,"currentTarget":{"dataset":{"type":"basic"}},"target":{"dataset":{"type":"basic"}}})}}),Object(O.jsx)(S.ShareSheet,{"show":n.basic,"title":"立即分享给好友","options":o,"onClose":this.onClose,"onSelect":this.onSelect})]}),Object(O.jsxs)(f.a,{"card":!0,"title":"展示多行选项","children":[Object(O.jsx)(S.Cell,{"isLink":!0,"title":"显示分享面板","onClick":function onClick(t){e.onShowShareSheet({"detail":t.detail,"currentTarget":{"dataset":{"type":"multiLine"}},"target":{"dataset":{"type":"multiLine"}}})}}),Object(O.jsx)(S.ShareSheet,{"show":n.multiLine,"title":"立即分享给好友","options":c,"onClose":this.onClose,"onSelect":this.onSelect})]}),Object(O.jsxs)(f.a,{"card":!0,"title":"自定义图标","children":[Object(O.jsx)(S.Cell,{"isLink":!0,"title":"显示分享面板","onClick":function onClick(t){e.onShowShareSheet({"detail":t.detail,"currentTarget":{"dataset":{"type":"customIcon"}},"target":{"dataset":{"type":"customIcon"}}})}}),Object(O.jsx)(S.ShareSheet,{"show":n.customIcon,"options":i,"onClose":this.onClose,"onSelect":this.onSelect})]}),Object(O.jsxs)(f.a,{"card":!0,"title":"展示描述信息","children":[Object(O.jsx)(S.Cell,{"isLink":!0,"title":"显示分享面板","onClick":function onClick(t){e.onShowShareSheet({"detail":t.detail,"currentTarget":{"dataset":{"type":"withDesc"}},"target":{"dataset":{"type":"withDesc"}}})}}),Object(O.jsx)(S.ShareSheet,{"show":n.withDesc,"title":"立即分享给好友","options":s,"description":"描述信息","onClose":this.onClose,"onSelect":this.onSelect})]}),Object(O.jsx)(S.Toast,{"id":"van-toast"})]})})}}]),Index}(w.Component)}}]);