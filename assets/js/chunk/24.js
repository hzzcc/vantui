;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    568: function (e, t, r) {
      'use strict'
      r.d(t, 'n', function () {
        return $
      }),
        r.d(t, 'i', function () {
          return G
        }),
        r.d(t, 'k', function () {
          return Q
        }),
        r.d(t, 'b', function () {
          return X
        }),
        r.d(t, 'e', function () {
          return ee
        }),
        r.d(t, 'g', function () {
          return te
        }),
        r.d(t, 'l', function () {
          return re
        }),
        r.d(t, 'd', function () {
          return oe
        }),
        r.d(t, 'j', function () {
          return ne
        }),
        r.d(t, 'h', function () {
          return ce
        }),
        r.d(t, 'f', function () {
          return ae
        }),
        r.d(t, 'm', function () {
          return ie
        }),
        r.d(t, 'c', function () {
          return se
        }),
        r.d(t, 'a', function () {
          return ue
        })
      var o = r(64),
        n = r.n(o),
        c = r(24),
        a = r.n(c),
        i = r(571),
        s = r.n(i),
        u = r(32),
        l = r.n(u),
        p = r(570),
        f = r.n(p),
        d = r(27),
        v = r.n(d),
        x = r(173),
        m = r.n(x),
        b = r(116),
        y = r.n(b),
        h = r(55),
        j = r.n(h),
        _ = r(177),
        O = r.n(_),
        g = r(595),
        w = r.n(g),
        P = r(28),
        S = r.n(P),
        I = r(6),
        k = r.n(I),
        T = r(26),
        M = r.n(T),
        E = r(120),
        N = r.n(E),
        D = r(35),
        C = r.n(D),
        R = r(70),
        L = r.n(R),
        A = r(71),
        H = r.n(A),
        B = r(659),
        F = r.n(B),
        K = r(661),
        W = r.n(K),
        q = r(663),
        U = r.n(q),
        V = r(54),
        z = r.n(V)
      function ownKeys(e, t) {
        var r = a()(e)
        if (s.a) {
          var o = s()(e)
          t &&
            (o = l()(o).call(o, function (t) {
              return f()(e, t).enumerable
            })),
            r.push.apply(r, o)
        }
        return r
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            o = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = ownKeys(Object(o), !0))).call(r, function (t) {
              M()(e, t, o[t])
            })
          else if (m.a) y()(e, m()(o))
          else {
            var n
            v()((n = ownKeys(Object(o)))).call(n, function (t) {
              j()(e, t, f()(o, t))
            })
          }
        }
        return e
      }
      function _createSuper(e) {
        var t = (function _isNativeReflectConstruct() {
          if ('undefined' == typeof Reflect || !O.a) return !1
          if (O.a.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(O()(Boolean, [], function () {})),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function _createSuperInternal() {
          var r,
            o = U()(e)
          if (t) {
            var n = U()(this).constructor
            r = O()(o, arguments, n)
          } else r = o.apply(this, arguments)
          return W()(this, r)
        }
      }
      n.a.createElement
      function updateStyle(e, t, r) {
        ;/^--/.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r)
      }
      function updateProp(e, t, r, o, n) {
        var c = e.ref.current,
          a = n[r],
          i = o ? o[r] : void 0
        if ('children' !== r)
          if ('classname' !== r.toLowerCase()) {
            if ('style' !== r) {
              if (
                (/^data-.+/.test(r) && c.setAttribute(r, a),
                'taro-scroll-view-core' === t)
              ) {
                if ('scrollTop' === r) return void (c.mpScrollTop = a)
                if ('scrollLeft' === r) return void (c.mpScrollLeft = a)
                if ('scrollIntoView' === r) return void (c.mpScrollIntoView = a)
              }
              if ('function' == typeof a && r.match(/^on[A-Z]/)) {
                var s = r.substr(2).toLowerCase(),
                  u = a
                return (
                  'taro-scroll-view-core' === t &&
                    'scroll' === s &&
                    (u = function fn(e) {
                      e instanceof CustomEvent && a.apply(null, w()(arguments))
                    }),
                  e.eventHandlers.push([s, u]),
                  c.addEventListener(s, u)
                )
              }
              return 'string' == typeof a || 'number' == typeof a
                ? (c.setAttribute(r, a), void (c[r] = a))
                : 'boolean' == typeof a
                ? a
                  ? ((c[r] = !0), c.setAttribute(r, a))
                  : ((c[r] = !1), c.removeAttribute(r))
                : void (c[r] = a)
            }
            if ('string' == typeof a) return void c.setAttribute(r, a)
            if (!a) return void c.removeAttribute(r)
            if (o)
              if ('string' == typeof i) c.style.cssText = ''
              else for (var p in i) updateStyle(c, p, '')
            for (var f in a) updateStyle(c, f, a[f])
          } else
            c.className = o
              ? (function getClassName(e, t, r) {
                  var o,
                    n = w()(e.classList),
                    c = (t.className || t.class || '').split(' '),
                    a = (r.className || r.class || '').split(' '),
                    i = []
                  return (
                    v()(n).call(n, function (e) {
                      S()(a).call(a, e) > -1
                        ? (i.push(e),
                          (a = l()(a).call(a, function (t) {
                            return t !== e
                          })))
                        : -1 === S()(c).call(c, e) && i.push(e)
                    }),
                    (i = k()((o = [])).call(o, z()(i), z()(a))).join(' ')
                  )
                })(c, o, n)
              : a
      }
      var J = function reactifyWebComponent(e) {
        var t = (function (t) {
          F()(Index, t)
          var r = _createSuper(Index)
          function Index(e) {
            var t
            return (
              L()(this, Index),
              ((t = r.call(this, e)).eventHandlers = []),
              (t.ref = Object(o.createRef)()),
              t
            )
          }
          return (
            H()(Index, [
              {
                key: 'update',
                value: function update(t) {
                  var r,
                    o,
                    n = this
                  this.clearEventHandlers(),
                    this.ref.current &&
                      (v()((r = a()(t || {}))).call(r, function (r) {
                        'children' === r ||
                          'key' === r ||
                          r in n.props ||
                          updateProp(n, e, r, t, n.props)
                      }),
                      v()((o = a()(this.props))).call(o, function (r) {
                        updateProp(n, e, r, t, n.props)
                      }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function componentDidUpdate(e) {
                  this.update(e)
                },
              },
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  var e = this.props.forwardRef
                  'function' == typeof e
                    ? e(this.ref.current)
                    : e && 'object' === C()(e) && e.hasOwnProperty('current')
                    ? (e.current = this.ref.current)
                    : 'string' == typeof e &&
                      console.warn('内置组件不支持字符串 ref'),
                    this.update()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                  this.clearEventHandlers()
                },
              },
              {
                key: 'clearEventHandlers',
                value: function clearEventHandlers() {
                  var e,
                    t = this
                  v()((e = this.eventHandlers)).call(e, function (e) {
                    var r = N()(e, 2),
                      o = r[0],
                      n = r[1]
                    t.ref.current && t.ref.current.removeEventListener(o, n)
                  }),
                    (this.eventHandlers = [])
                },
              },
              {
                key: 'render',
                value: function render() {
                  var t = this.props,
                    r = t.children,
                    n = t.dangerouslySetInnerHTML,
                    c = { ref: this.ref }
                  return (
                    n && (c.dangerouslySetInnerHTML = n),
                    Object(o.createElement)(e, c, r)
                  )
                },
              },
            ]),
            Index
          )
        })(n.a.Component)
        return n.a.forwardRef(function (e, r) {
          return n.a.createElement(
            t,
            _objectSpread(_objectSpread({}, e), {}, { forwardRef: r }),
          )
        })
      }
      function input_ownKeys(e, t) {
        var r = a()(e)
        if (s.a) {
          var o = s()(e)
          t &&
            (o = l()(o).call(o, function (t) {
              return f()(e, t).enumerable
            })),
            r.push.apply(r, o)
        }
        return r
      }
      function input_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r,
            o = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            v()((r = input_ownKeys(Object(o), !0))).call(r, function (t) {
              M()(e, t, o[t])
            })
          else if (m.a) y()(e, m()(o))
          else {
            var n
            v()((n = input_ownKeys(Object(o)))).call(n, function (t) {
              j()(e, t, f()(o, t))
            })
          }
        }
        return e
      }
      var Y = J('taro-input-core'),
        Z =
          (n.a.createElement,
          n.a.forwardRef(function (e, t) {
            var r = input_objectSpread({}, e)
            return (
              r.hasOwnProperty('focus') &&
                ((r.autoFocus = Boolean(r.focus)), delete r.focus),
              n.a.createElement(
                Y,
                input_objectSpread(input_objectSpread({}, r), {}, { ref: t }),
              )
            )
          })),
        $ = J('taro-view-core'),
        G =
          (J('taro-icon-core'),
          J('taro-progress-core'),
          J('taro-rich-text-core')),
        Q = J('taro-text-core'),
        X = J('taro-button-core'),
        ee =
          (J('taro-checkbox-core'),
          J('taro-checkbox-group-core'),
          J('taro-editor-core'),
          J('taro-form-core')),
        te = Z,
        re =
          (J('taro-label-core'),
          J('taro-picker-core'),
          J('taro-picker-view-core'),
          J('taro-picker-view-column-core'),
          J('taro-radio-core'),
          J('taro-radio-group-core'),
          J('taro-slider-core'),
          J('taro-switch-core'),
          J('taro-cover-image-core'),
          J('taro-textarea-core')),
        oe = J('taro-cover-view-core'),
        ne =
          (J('taro-movable-area-core'),
          J('taro-movable-view-core'),
          J('taro-scroll-view-core')),
        ce =
          (J('taro-swiper-core'),
          J('taro-swiper-item-core'),
          J('taro-functional-page-navigator-core'),
          J('taro-navigator-core')),
        ae =
          (J('taro-audio-core'), J('taro-camera-core'), J('taro-image-core')),
        ie = (J('taro-live-player-core'), J('taro-video-core')),
        se = (J('taro-map-core'), J('taro-canvas-core')),
        ue =
          (J('taro-ad-core'),
          J('taro-official-account-core'),
          J('taro-open-data-core'),
          J('taro-web-view-core'),
          J('taro-navigation-bar-core'),
          o.Fragment)
      J('taro-custom-wrapper-core')
    },
    570: function (e, t, r) {
      e.exports = r(607)
    },
    571: function (e, t, r) {
      e.exports = r(613)
    },
    572: function (e, t, r) {
      var o = r(67)
      ;(e.exports = function _defineProperty(e, t, r) {
        return (
          t in e
            ? o(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        )
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    573: function (e, t, r) {
      var o = r(608),
        n = r(609),
        c = r(655)
      ;(e.exports = function _objectWithoutProperties(e, t) {
        if (null == e) return {}
        var r,
          a,
          i = c(e, t)
        if (o) {
          var s = o(e)
          for (a = 0; a < s.length; a++)
            (r = s[a]),
              n(t).call(t, r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]))
        }
        return i
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    578: function (e, t, r) {
      'use strict'
      ;(function (e) {
        r.d(t, 'a', function () {
          return Page
        })
        r(590)
        var o = r(574),
          n = r(568),
          c = r(90),
          a = r(737),
          i = r(77),
          s = r(64),
          u = (r(581), r(115))
        function Page(t) {
          var r = t.title,
            l = t.className,
            p = void 0 === l ? '' : l,
            f = t.children,
            d = c.a.useRouter().path
          return (
            Object(s.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(a.a)({ scrollTop: 0 })
              },
              [d],
            ),
            c.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: d }
            }),
            Object(u.jsxs)(n.n, {
              className: 'demo-page '.concat(p),
              children: [
                Object(u.jsxs)(n.n, {
                  className: 'demo-nav',
                  children: [
                    Object(u.jsx)(o.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(i.d)()
                      },
                    }),
                    Object(u.jsxs)(n.n, {
                      className: 'demo-nav__title',
                      children: [r, ' '],
                    }),
                  ],
                }),
                f,
              ],
            })
          )
        }
      }.call(this, r(236)))
    },
    579: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return l
      })
      var o = r(39),
        n = r(40),
        c = r(66),
        a = r(65),
        i = r(568),
        s = r(64),
        u = (r(582), r(115)),
        l = (function (e) {
          Object(c.a)(Index, e)
          var t = Object(a.a)(Index)
          function Index() {
            return Object(o.a)(this, Index), t.call(this)
          }
          return (
            Object(n.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    t = e.padding,
                    r = e.title,
                    o = e.card
                  return Object(u.jsxs)(i.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (t ? 'demo-block--padding' : ''),
                    children: [
                      r &&
                        Object(u.jsx)(i.n, {
                          className: 'demo-block__title',
                          children: r,
                        }),
                      o
                        ? Object(u.jsx)(i.n, {
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
        })(s.Component)
    },
    581: function (e, t, r) {},
    582: function (e, t, r) {},
    591: function (e, t, r) {
      var o = r(45),
        n = r(176)
      function _typeof(t) {
        return (
          (e.exports = _typeof =
            'function' == typeof o && 'symbol' == typeof n
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof o &&
                    e.constructor === o &&
                    e !== o.prototype
                    ? 'symbol'
                    : typeof e
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _typeof(t)
        )
      }
      ;(e.exports = _typeof),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    595: function (e, t, r) {
      e.exports = r(237)
    },
    607: function (e, t, r) {
      var o = r(622)
      e.exports = o
    },
    608: function (e, t, r) {
      e.exports = r(649)
    },
    609: function (e, t, r) {
      e.exports = r(652)
    },
    610: function (e, t, r) {
      e.exports = r(656)
    },
    613: function (e, t, r) {
      var o = r(648)
      e.exports = o
    },
    622: function (e, t, r) {
      r(623)
      var o = r(11).Object,
        n = (e.exports = function getOwnPropertyDescriptor(e, t) {
          return o.getOwnPropertyDescriptor(e, t)
        })
      o.getOwnPropertyDescriptor.sham && (n.sham = !0)
    },
    623: function (e, t, r) {
      var o = r(3),
        n = r(9),
        c = r(41),
        a = r(68).f,
        i = r(22),
        s = n(function () {
          a(1)
        })
      o(
        { target: 'Object', stat: !0, forced: !i || s, sham: !i },
        {
          getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
            return a(c(e), t)
          },
        },
      )
    },
    648: function (e, t, r) {
      r(241)
      var o = r(11)
      e.exports = o.Object.getOwnPropertySymbols
    },
    649: function (e, t, r) {
      e.exports = r(650)
    },
    650: function (e, t, r) {
      var o = r(651)
      e.exports = o
    },
    651: function (e, t, r) {
      var o = r(613)
      e.exports = o
    },
    652: function (e, t, r) {
      e.exports = r(653)
    },
    653: function (e, t, r) {
      var o = r(654)
      e.exports = o
    },
    654: function (e, t, r) {
      var o = r(242)
      e.exports = o
    },
    655: function (e, t, r) {
      var o = r(610),
        n = r(609)
      ;(e.exports = function _objectWithoutPropertiesLoose(e, t) {
        if (null == e) return {}
        var r,
          c,
          a = {},
          i = o(e)
        for (c = 0; c < i.length; c++)
          (r = i[c]), n(t).call(t, r) >= 0 || (a[r] = e[r])
        return a
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    656: function (e, t, r) {
      e.exports = r(657)
    },
    657: function (e, t, r) {
      var o = r(658)
      e.exports = o
    },
    658: function (e, t, r) {
      var o = r(243)
      e.exports = o
    },
    659: function (e, t, r) {
      var o = r(660)
      ;(e.exports = function _inherits(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && o(e, t)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    660: function (e, t) {
      function _setPrototypeOf(t, r) {
        return (
          (e.exports = _setPrototypeOf =
            Object.setPrototypeOf ||
            function _setPrototypeOf(e, t) {
              return (e.__proto__ = t), e
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _setPrototypeOf(t, r)
        )
      }
      ;(e.exports = _setPrototypeOf),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    661: function (e, t, r) {
      var o = r(35).default,
        n = r(662)
      ;(e.exports = function _possibleConstructorReturn(e, t) {
        if (t && ('object' === o(t) || 'function' == typeof t)) return t
        if (void 0 !== t)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          )
        return n(e)
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    662: function (e, t) {
      ;(e.exports = function _assertThisInitialized(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return e
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    663: function (e, t) {
      function _getPrototypeOf(t) {
        return (
          (e.exports = _getPrototypeOf =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _getPrototypeOf(t)
        )
      }
      ;(e.exports = _getPrototypeOf),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports)
    },
    737: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return u
      })
      var o,
        n = r(5),
        c = r.n(n),
        a = r(4),
        i = r(49),
        s = r(16),
        u = function pageScrollTo(e) {
          var t,
            r = e.scrollTop,
            n = e.selector,
            u = void 0 === n ? '' : n,
            l = e.duration,
            p = void 0 === l ? 300 : l,
            f = e.success,
            d = e.fail,
            v = e.complete,
            x = new i.a({
              name: 'pageScrollTo',
              success: f,
              fail: d,
              complete: v,
            })
          return new c.a(function (e, n) {
            var c, i
            try {
              if (void 0 === r && !u)
                return x.fail(
                  { errMsg: 'scrollTop" 或 "selector" 需要其之一' },
                  n,
                )
              var l =
                  null ===
                    (i =
                      null === (c = a.a.page) || void 0 === c
                        ? void 0
                        : c.path) || void 0 === i
                    ? void 0
                    : i.replace(/([^a-z0-9\u00a0-\uffff_-])/gi, '\\$1'),
                f = l
                  ? document.querySelector('.taro_page#'.concat(l))
                  : document.querySelector('.taro_page') ||
                    document.querySelector('.taro_router')
              t ||
                (t = f
                  ? function scrollFunc(e) {
                      if (void 0 === e) return f.scrollTop
                      f.scrollTop = e
                    }
                  : function scrollFunc(e) {
                      if (void 0 === e) return window.pageYOffset
                      window.scrollTo(0, e)
                    }),
                r &&
                  u &&
                  console.warn(
                    '"scrollTop" 或 "selector" 建议只设一个值，全部设置会忽略selector',
                  )
              var d,
                v = t()
              if ('number' == typeof r) d = r
              else {
                var m = document.querySelector(u)
                d = (null == m ? void 0 : m.offsetTop) || 0
              }
              var b = d - v,
                y = p / 17,
                h = Object(s.d)(s.a, y)
              !(function scroll() {
                var r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  n = v + b * h(r)
                if ((t(n), !(r < y))) return x.success({}, e)
                o && clearTimeout(o),
                  (o = setTimeout(function () {
                    scroll(r + 1)
                  }, 17))
              })()
            } catch (e) {
              return x.fail({ errMsg: e.message }, n)
            }
          })
        }
    },
    930: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'default', function () {
          return v
        })
      var o = r(39),
        n = r(40),
        c = r(175),
        a = r(66),
        i = r(65),
        s = r(91),
        u = r(64),
        l = r(578),
        p = r(579),
        f = r(568),
        d = r(115)
      function Demo() {
        return Object(d.jsxs)(d.Fragment, {
          children: [
            Object(d.jsx)(f.n, {
              class: 'van-ellipsis',
              style: { width: '200px', marginBottom: '20px' },
              children: '这是一段宽度限制 250px 的文字，后面的内容会省略。',
            }),
            Object(d.jsx)(f.n, {
              class: 'van-multi-ellipsis--l2',
              style: { width: '200px', marginBottom: '20px' },
              children:
                '这是一段最多显示两行的文字，后面的内容会省略。 这是一段最多显示两行的文字，后面的内容会省略。',
            }),
            Object(d.jsx)(f.n, {
              class: 'van-multi-ellipsis--l3',
              style: { width: '200px' },
              children:
                '这是一段最多显示三行的文字，后面的内容会省略。 这是一段最多显示两行的文字，后面的内容会省略。 这是一段最多显示两行的文字，后面的内容会省略。',
            }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(d.jsxs)(d.Fragment, {
          children: [
            Object(d.jsx)(f.n, {
              class: 'van-hairline--top',
              style: { width: '200px', marginBottom: '20px' },
            }),
            Object(d.jsx)(f.n, {
              class: 'van-hairline--surround',
              style: { width: '200px', marginBottom: '20px', height: '200px' },
              children: '全边框',
            }),
          ],
        })
      }
      var v = (function (e) {
        Object(a.a)(Index, e)
        var t = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(o.a)(this, Index),
            (e = t.call(this)),
            Object(s.a)(Object(c.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(n.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(d.jsxs)(l.a, {
                  title: 'Style 内置样式',
                  className: 'pages-common-index',
                  children: [
                    Object(d.jsx)(p.a, {
                      title: '文字省略',
                      padding: !0,
                      children: Object(d.jsx)(Demo, {}),
                    }),
                    Object(d.jsx)(p.a, {
                      title: '1px 边框',
                      padding: !0,
                      children: Object(d.jsx)(demo2_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(u.Component)
    },
  },
])
