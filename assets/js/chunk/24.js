(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"282":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return Page}));var c=n(281),a=n(280),i=n(31),l=n(27),r=(n(283),n(44));function Page(t){var n=t.title,o=t.children,s=i.default.useRouter();return Object(l.useEffect)((function(){"react"===e.env.LIBRARY_ENV?document.body.scrollTop=document.documentElement.scrollTop=0:Object(i.pageScrollTo)({"scrollTop":0})}),[s.path]),Object(r.jsxs)(a.m,{"className":"demo-page","children":[Object(r.jsxs)(a.m,{"className":"demo-nav","children":[Object(r.jsx)(c.B,{"name":"arrow-left","className":"demo-nav__back","onClick":function onClick(){return i.default.navigateBack()}}),Object(r.jsxs)(a.m,{"className":"demo-nav__title","children":[n," "]})]}),o]})}}).call(this,n(121))},"283":function(e,t,n){},"284":function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(3),a=n.n(c),i=n(6),l=n.n(i),r=n(16),o=n.n(r),s=n(17),d=n.n(s),u=n(280),j=n(27),h=(n(285),n(44)),b=function(e){o()(Index,e);var t=d()(Index);function Index(){return a()(this,Index),t.call(this)}return l()(Index,[{"key":"render","value":function render(){var e=this.props,t=e.padding,n=e.title,c=e.card;return Object(h.jsxs)(u.m,{"className":"custom-class demo-block van-clearfix "+(t?"demo-block--padding":""),"children":[n&&Object(h.jsx)(u.m,{"className":"demo-block__title","children":n}),c?Object(h.jsx)(u.m,{"className":"demo-block__card","children":this.props.children}):this.props.children]})}}]),Index}(j.Component)},"285":function(e,t,n){},"713":function(e,t,n){},"765":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var c=n(3),a=n.n(c),i=n(6),l=n.n(i),r=n(24),o=n.n(r),s=n(16),d=n.n(s),u=n(17),j=n.n(u),h=n(9),b=n.n(h),m=n(27),v=n(280),x=n(281),O=n(282),f=n(284),g=(n(713),n(44)),p=function(e){d()(Index,e);var t=j()(Index);function Index(){var e;return a()(this,Index),e=t.call(this),b()(o()(e),"state",{"active1":[0],"active2":0,"active3":[],"active4":[],"title1":"有赞微商城","title2":"有赞零售","title3":"有赞美业","content1":"提供多样店铺模板，快速搭建网上商城","content2":"网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失","content3":"线上拓客，随时预约，贴心顺手的开单收银"}),b()(o()(e),"onChange",(function(t){var n=t.currentTarget.dataset.key;e.setState(b()({},n,t.detail))})),b()(o()(e),"onOpen",(function(e){Object(x.ob)("展开: ".concat(e.detail))})),b()(o()(e),"onClose",(function(e){Object(x.ob)("关闭: ".concat(e.detail))})),e}return l()(Index,[{"key":"render","value":function render(){var e=this,t=this.state,n=t.active1,c=t.title1,a=t.content1,i=t.title2,l=t.content2,r=t.title3,o=t.content3,s=t.active2,d=t.active3,u=t.active4;return Object(g.jsx)(O.a,{"title":"Collapse 折叠面板","children":Object(g.jsxs)(g.Fragment,{"children":[Object(g.jsx)(f.a,{"title":"基础用法","children":Object(g.jsxs)(x.l,{"value":n,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active1"}},"target":{"dataset":{"key":"active1"}}})},"children":[Object(g.jsx)(x.m,{"title":c,"children":a}),Object(g.jsx)(x.m,{"title":i,"children":l}),Object(g.jsx)(x.m,{"title":r,"disabled":!0,"children":o})]})}),Object(g.jsx)(f.a,{"title":"手风琴","children":Object(g.jsxs)(x.l,{"value":s,"accordion":!0,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active2"}},"target":{"dataset":{"key":"active2"}}})},"children":[Object(g.jsx)(x.m,{"title":c,"children":a}),Object(g.jsx)(x.m,{"title":i,"children":l}),Object(g.jsx)(x.m,{"title":r,"children":o})]})}),Object(g.jsx)(f.a,{"title":"事件监听","children":Object(g.jsxs)(x.l,{"value":d,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active3"}},"target":{"dataset":{"key":"active3"}}})},"onOpen":function onOpen(t){e.onOpen({"detail":t.detail,"currentTarget":{"dataset":{"key":"active3"}},"target":{"dataset":{"key":"active3"}}})},"onClose":function onClose(t){e.onClose({"detail":t.detail,"currentTarget":{"dataset":{"key":"active3"}},"target":{"dataset":{"key":"active3"}}})},"children":[Object(g.jsx)(x.m,{"title":c,"children":a}),Object(g.jsx)(x.m,{"title":i,"children":l}),Object(g.jsx)(x.m,{"title":r,"children":o})]})}),Object(g.jsx)(f.a,{"title":"自定义标题内容","children":Object(g.jsxs)(x.l,{"value":u,"onChange":function onChange(t){e.onChange({"detail":t.detail,"currentTarget":{"dataset":{"key":"active4"}},"target":{"dataset":{"key":"active4"}}})},"children":[Object(g.jsx)(x.m,{"renderTitle":Object(g.jsx)(g.Fragment,{"children":Object(g.jsxs)(v.m,{"children":[c,Object(g.jsx)(x.B,{"name":"question-o","className":"van-icon-question"})]})}),"children":a}),Object(g.jsx)(x.m,{"title":i,"value":"内容","icon":"shop-o","children":l})]})}),Object(g.jsx)(x.ib,{"id":"van-toast"})]})})}}]),Index}(m.Component)}}]);