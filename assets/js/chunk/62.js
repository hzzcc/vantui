;(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    578: function (e, n, c) {
      'use strict'
      ;(function (e) {
        c.d(n, 'a', function () {
          return Page
        })
        c(590)
        var t = c(574),
          r = c(568),
          a = c(90),
          s = c(737),
          o = c(77),
          i = c(64),
          l = (c(581), c(115))
        function Page(n) {
          var c = n.title,
            d = n.className,
            j = void 0 === d ? '' : d,
            b = n.children,
            u = a.a.useRouter().path
          return (
            Object(i.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(s.a)({ scrollTop: 0 })
              },
              [u],
            ),
            a.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: u }
            }),
            Object(l.jsxs)(r.n, {
              className: 'demo-page '.concat(j),
              children: [
                Object(l.jsxs)(r.n, {
                  className: 'demo-nav',
                  children: [
                    Object(l.jsx)(t.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(o.d)()
                      },
                    }),
                    Object(l.jsxs)(r.n, {
                      className: 'demo-nav__title',
                      children: [c, ' '],
                    }),
                  ],
                }),
                b,
              ],
            })
          )
        }
      }.call(this, c(236)))
    },
    579: function (e, n, c) {
      'use strict'
      c.d(n, 'a', function () {
        return d
      })
      var t = c(39),
        r = c(40),
        a = c(66),
        s = c(65),
        o = c(568),
        i = c(64),
        l = (c(582), c(115)),
        d = (function (e) {
          Object(a.a)(Index, e)
          var n = Object(s.a)(Index)
          function Index() {
            return Object(t.a)(this, Index), n.call(this)
          }
          return (
            Object(r.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    c = e.title,
                    t = e.card
                  return Object(l.jsxs)(o.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      c &&
                        Object(l.jsx)(o.n, {
                          className: 'demo-block__title',
                          children: c,
                        }),
                      t
                        ? Object(l.jsx)(o.n, {
                            className: 'demo-block__card',
                            children: this.props.children,
                          })
                        : this.props.children,
                    ],
                  })
                },
              },
            ]),
            Index
          )
        })(i.Component)
    },
    581: function (e, n, c) {},
    582: function (e, n, c) {},
    647: function (e, n, c) {
      'use strict'
      c.d(n, 'a', function () {
        return Tag
      })
      var t = c(116),
        r = c.n(t),
        a = c(55),
        s = c.n(a),
        o = c(24),
        i = c.n(o),
        l = c(571),
        d = c.n(l),
        j = c(32),
        b = c.n(j),
        u = c(570),
        m = c.n(u),
        p = c(27),
        O = c.n(p),
        x = c(173),
        h = c.n(x),
        f = c(572),
        y = c.n(f),
        g = c(573),
        v = c.n(g),
        _ = c(568),
        k = c(569),
        C = c(574),
        N = c(583)
      var w = c(115),
        D = [
          'type',
          'size',
          'mark',
          'plain',
          'round',
          'color',
          'textColor',
          'closeable',
          'children',
          'onClose',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var c = i()(e)
        if (d.a) {
          var t = d()(e)
          n &&
            (t = b()(t).call(t, function (n) {
              return m()(e, n).enumerable
            })),
            c.push.apply(c, t)
        }
        return c
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var c,
            t = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            O()((c = ownKeys(Object(t), !0))).call(c, function (n) {
              y()(e, n, t[n])
            })
          else if (h.a) r()(e, h()(t))
          else {
            var a
            O()((a = ownKeys(Object(t)))).call(a, function (n) {
              s()(e, n, m()(t, n))
            })
          }
        }
        return e
      }
      function Tag(e) {
        var n,
          c = e.type,
          t = void 0 === c ? 'default' : c,
          r = e.size,
          a = e.mark,
          s = e.plain,
          o = e.round,
          i = e.color,
          l = e.textColor,
          d = e.closeable,
          j = e.children,
          b = e.onClose,
          u = e.style,
          m = e.className,
          p = v()(e, D)
        return Object(w.jsxs)(
          _.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  k.b('tag', [t, r, { mark: a, plain: s, round: o }]) +
                  ' '.concat(m || ''),
                style: k.c([
                  ((n = { plain: s, color: i, textColor: l }),
                  Object(N.a)({
                    'background-color': n.plain ? '' : n.color,
                    color: n.textColor || n.plain ? n.textColor || n.color : '',
                  })),
                  u,
                ]),
              },
              p,
            ),
            {},
            {
              children: [
                j,
                d &&
                  Object(w.jsx)(C.a, {
                    name: 'cross',
                    className: 'van-tag__close',
                    onClick: b,
                  }),
              ],
            },
          ),
        )
      }
      n.b = Tag
    },
    664: function (e, n, c) {
      'use strict'
      c(576), c(584), c(585), c(701)
    },
    701: function (e, n, c) {},
    897: function (e, n, c) {
      'use strict'
      c.r(n),
        c.d(n, 'default', function () {
          return h
        })
      var t = c(39),
        r = c(40),
        a = c(175),
        s = c(66),
        o = c(65),
        i = c(91),
        l = c(64),
        d = c.n(l),
        j = c(578),
        b = c(579),
        u = (c(664), c(647)),
        m = c(568),
        p = c(115)
      function Demo() {
        return Object(p.jsxs)(m.n, {
          children: [
            Object(p.jsx)(u.b, { type: 'primary', children: '标签' }),
            Object(p.jsx)(u.b, { type: 'success', children: '标签' }),
            Object(p.jsx)(u.b, { type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, { type: 'warning', children: '标签' }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(p.jsxs)(m.n, {
          children: [
            Object(p.jsx)(u.b, {
              plain: !0,
              type: 'primary',
              children: '标签',
            }),
            Object(p.jsx)(u.b, {
              plain: !0,
              type: 'success',
              children: '标签',
            }),
            Object(p.jsx)(u.b, { plain: !0, type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, {
              plain: !0,
              type: 'warning',
              children: '标签',
            }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(p.jsxs)(m.n, {
          children: [
            Object(p.jsx)(u.b, {
              round: !0,
              type: 'primary',
              children: '标签',
            }),
            Object(p.jsx)(u.b, {
              round: !0,
              type: 'success',
              children: '标签',
            }),
            Object(p.jsx)(u.b, { round: !0, type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, {
              round: !0,
              type: 'warning',
              children: '标签',
            }),
          ],
        })
      }
      function demo4_Demo() {
        return Object(p.jsxs)(m.n, {
          children: [
            Object(p.jsx)(u.b, { mark: !0, type: 'primary', children: '标签' }),
            Object(p.jsx)(u.b, { mark: !0, type: 'success', children: '标签' }),
            Object(p.jsx)(u.b, { mark: !0, type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, { mark: !0, type: 'warning', children: '标签' }),
          ],
        })
      }
      function demo5_Demo() {
        return Object(p.jsxs)(m.n, {
          children: [
            Object(p.jsx)(u.b, { color: '#f2826a', children: '标签' }),
            Object(p.jsx)(u.b, { color: '#7232dd', children: '标签' }),
            Object(p.jsx)(u.b, {
              color: '#7232dd',
              plain: !0,
              children: '标签',
            }),
            Object(p.jsx)(u.b, {
              color: '#ffe1e1',
              textColor: '#ad0000',
              children: '标签',
            }),
          ],
        })
      }
      function demo6_Demo() {
        return Object(p.jsxs)(m.n, {
          children: [
            Object(p.jsx)(u.b, { type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, {
              type: 'danger',
              size: 'medium',
              children: '标签',
            }),
            Object(p.jsx)(u.b, {
              type: 'danger',
              size: 'large',
              children: '标签',
            }),
          ],
        })
      }
      var O = c(612),
        x = c(174)
      function demo7_Demo() {
        var e = d.a.useState({ primary: !0, success: !0 }),
          n = Object(x.a)(e, 2),
          c = n[0],
          t = n[1]
        return Object(p.jsxs)(m.n, {
          children: [
            c.primary &&
              Object(p.jsx)(u.b, {
                className: 'demo-margin-right',
                type: 'primary',
                size: 'medium',
                closeable: !0,
                onClose: function onClose() {
                  return t(Object(O.a)(Object(O.a)({}, c), {}, { primary: !1 }))
                },
                children: '标签',
              }),
            c.success &&
              Object(p.jsx)(u.b, {
                className: 'demo-margin-right',
                type: 'success',
                size: 'medium',
                closeable: !0,
                onClose: function onClose() {
                  return t(Object(O.a)(Object(O.a)({}, c), {}, { success: !1 }))
                },
                children: '标签',
              }),
          ],
        })
      }
      var h = (function (e) {
        Object(s.a)(Index, e)
        var n = Object(o.a)(Index)
        function Index() {
          var e
          return (
            Object(t.a)(this, Index),
            (e = n.call(this)),
            Object(i.a)(Object(a.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(p.jsxs)(j.a, {
                  title: 'Tag 标签',
                  className: 'pages-tag-index',
                  children: [
                    Object(p.jsx)(b.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(p.jsx)(Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '空心样式',
                      padding: !0,
                      children: Object(p.jsx)(demo2_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '圆角样式',
                      padding: !0,
                      children: Object(p.jsx)(demo3_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '标记样式',
                      padding: !0,
                      children: Object(p.jsx)(demo4_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '自定义颜色',
                      padding: !0,
                      children: Object(p.jsx)(demo5_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '标签大小',
                      padding: !0,
                      children: Object(p.jsx)(demo6_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '可关闭标签',
                      padding: !0,
                      children: Object(p.jsx)(demo7_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(l.Component)
    },
  },
])
