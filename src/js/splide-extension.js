/*!
 * @splidejs/splide-extension-auto-scroll
 * Version  : 0.5.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
(function(S) {
  typeof define == "function" && define.amd ? define(S) : S()
})(function() {
  "use strict";

  function S(n) {
    n.length = 0
  }
  function D(n, t, r) {
    return Array.prototype.slice.call(n, t, r)
  }
  function _(n) {
    return n.bind.apply(n, [null].concat(D(arguments, 1)))
  }
  function q(n) {
    return requestAnimationFrame(n)
  }
  function C(n, t) {
    return typeof t === n
  }
  var z = Array.isArray;
  _(C, "function"), _(C, "string"), _(C, "undefined");

  function B(n) {
    return z(n) ? n : [n]
  }
  function H(n, t) {
    B(n).forEach(t)
  }
  var cn = Object.keys;

  function sn(n, t, r) {
    if (n) {
      var e = cn(n);
      e = r ? e.reverse() : e;
      for (var o = 0; o < e.length; o++) {
        var c = e[o];
        if (c !== "__proto__" && t(n[c], c) === !1) break
      }
    }
    return n
  }
  function dn(n) {
    return D(arguments, 1).forEach(function(t) {
      sn(t, function(r, e) {
        n[e] = t[e]
      })
    }), n
  }
  var ln = Math.min;

  function vn() {
    var n = [];

    function t(u, s, a, d) {
      o(u, s, function(f, v, l) {
        var h = "addEventListener" in f,
            w = h ? f.removeEventListener.bind(f, v, a, d) : f.removeListener.bind(f, a);
        h ? f.addEventListener(v, a, d) : f.addListener(a), n.push([f, v, l, a, w])
      })
    }
    function r(u, s, a) {
      o(u, s, function(d, f, v) {
        n = n.filter(function(l) {
          return l[0] === d && l[1] === f && l[2] === v && (!a || l[3] === a) ? (l[4](), !1) : !0
        })
      })
    }
    function e(u, s, a) {
      var d, f = !0;
      return typeof CustomEvent == "function" ? d = new CustomEvent(s, {
        bubbles: f,
        detail: a
      }) : (d = document.createEvent("CustomEvent"), d.initCustomEvent(s, f, !1, a)), u.dispatchEvent(d), d
    }
    function o(u, s, a) {
      H(u, function(d) {
        d && H(s, function(f) {
          f.split(" ").forEach(function(v) {
            var l = v.split(".");
            a(d, l[0], l[1])
          })
        })
      })
    }
    function c() {
      n.forEach(function(u) {
        u[4]()
      }), S(n)
    }
    return {
      bind: t,
      unbind: r,
      dispatch: e,
      destroy: c
    }
  }
  var K = "move",
      J = "moved",
      En = "updated",
      Q = "drag",
      pn = "dragged",
      U = "scroll",
      W = "scrolled",
      mn = "destroy";

  function hn(n) {
    var t = n ? n.event.bus : document.createDocumentFragment(),
        r = vn();

    function e(c, u) {
      r.bind(t, B(c).join(" "), function(s) {
        u.apply(u, z(s.detail) ? s.detail : [])
      })
    }
    function o(c) {
      r.dispatch(t, c, D(arguments, 1))
    }
    return n && n.event.on(mn, r.destroy), dn(r, {
      bus: t,
      on: e,
      off: _(r.unbind, t),
      emit: o
    })
  }
  function Y(n, t, r, e) {
    var o = Date.now,
        c, u = 0,
        s, a = !0,
        d = 0;

    function f() {
      if (!a) {
        if (u = n ? ln((o() - c) / n, 1) : 1, r && r(u), u >= 1 && (t(), c = o(), e && ++d >= e)) return l();
        q(f)
      }
    }
    function v(E) {
      !E && w(), c = o() - (E ? u * n : 0), a = !1, q(f)
    }
    function l() {
      a = !0
    }
    function h() {
      c = o(), u = 0, r && r(u)
    }
    function w() {
      s && cancelAnimationFrame(s), u = 0, s = 0, a = !0
    }
    function M(E) {
      n = E
    }
    function N() {
      return a
    }
    return {
      start: v,
      rewind: h,
      pause: l,
      cancel: w,
      set: M,
      isPaused: N
    }
  }
  function An(n, t) {
    var r;

    function e() {
      r || (r = Y(t || 0, function() {
        n(), r = null
      }, null, 1), r.start())
    }
    return e
  }
  var gn = "is-active",
      wn = "slide",
      yn = "fade";

  function X(n, t, r) {
    return Array.prototype.slice.call(n, t, r)
  }
  function V(n) {
    return n.bind.apply(n, [null].concat(X(arguments, 1)))
  }
  function L(n, t) {
    return typeof t === n
  }
  function $(n) {
    return !Z(n) && L("object", n)
  }
  var bn = Array.isArray;
  V(L, "function"), V(L, "string");
  var Sn = V(L, "undefined");

  function Z(n) {
    return n === null
  }
  function _n(n) {
    return bn(n) ? n : [n]
  }
  function O(n, t) {
    _n(n).forEach(t)
  }
  function Ln(n, t, r) {
    n && O(t, function(e) {
      e && n.classList[r ? "add" : "remove"](e)
    })
  }
  var On = Object.keys;

  function j(n, t, r) {
    if (n) {
      var e = On(n);
      e = r ? e.reverse() : e;
      for (var o = 0; o < e.length; o++) {
        var c = e[o];
        if (c !== "__proto__" && t(n[c], c) === !1) break
      }
    }
    return n
  }
  function k(n) {
    return X(arguments, 1).forEach(function(t) {
      j(t, function(r, e) {
        n[e] = t[e]
      })
    }), n
  }
  function Tn(n, t) {
    O(n, function(r) {
      O(t, function(e) {
        r && r.removeAttribute(e)
      })
    })
  }
  function nn(n, t, r) {
    $(t) ? j(t, function(e, o) {
      nn(n, o, e)
    }) : O(n, function(e) {
      Z(r) || r === "" ? Tn(e, t) : e.setAttribute(t, String(r))
    })
  }
  var tn = Math.min,
      rn = Math.max,
      qn = Math.floor,
      zn = Math.ceil,
      Bn = Math.abs;

  function Dn(n, t, r) {
    var e = tn(t, r),
        o = rn(t, r);
    return tn(rn(e, n), o)
  }
  var Cn = {
    speed: 1,
    autoStart: !0,
    pauseOnHover: !0,
    pauseOnFocus: !0
  },
      Vn = {
      startScroll: "Start auto scroll",
      pauseScroll: "Pause auto scroll"
      };

  function $n(n, t, r) {
    var e = hn(n),
        o = e.on,
        c = e.off,
        u = e.bind,
        s = e.unbind,
        a = t.Move,
        d = a.translate,
        f = a.getPosition,
        v = a.toIndex,
        l = a.getLimit,
        h = t.Controller,
        w = h.setIndex,
        M = h.getIndex,
        N = t.Direction.orient,
        E = t.Elements.toggle,
        en = t.Live,
        I = n.root,
        Mn = An(t.Arrows.update, 500),
        p = {},
        m, A, x, F, P, T;

    function Nn() {
      var i = r.autoScroll;
      p = k({}, Cn, $(i) ? i : {})
    }
    function on() {
      n.is(yn) || !m && r.autoScroll !== !1 && (m = Y(0, Pn), In(), Fn())
    }
    function un() {
      m && (m.cancel(), m = null, T = void 0, c([K, Q, U, J, W]), s(I, "mouseenter mouseleave focusin focusout"), s(E, "click"))
    }
    function In() {
      p.pauseOnHover && u(I, "mouseenter mouseleave", function(i) {
        x = i.type === "mouseenter", R()
      }), p.pauseOnFocus && u(I, "focusin focusout", function(i) {
        F = i.type === "focusin", R()
      }), p.useToggleButton && u(E, "click", function() {
        A ? y() : b()
      }), o(En, xn), o([K, Q, U], function() {
        P = !0, b(!1)
      }), o([J, pn, W], function() {
        P = !1, R()
      })
    }
    function xn() {
      var i = r.autoScroll;
      i !== !1 ? (p = k({}, p, $(i) ? i : {}), on()) : un(), m && !Sn(T) && d(T)
    }
    function Fn() {
      p.autoStart && (document.readyState === "complete" ? y() : u(window, "load", y))
    }
    function y() {
      G() && (m.start(!0), en.disable(!0), F = x = A = !1, an())
    }
    function b(i) {
      i === void 0 && (i = !0), A || (A = i, an(), G() || (m.pause(), en.disable(!1)))
    }
    function R() {
      A || (x || F || P ? b(!1) : y())
    }
    function Pn() {
      var i = f(),
          g = Rn(i);
      i !== g ? (d(g), Gn(T = f())) : (b(!1), p.rewind && n.go(p.speed > 0 ? 0 : t.Controller.getEnd())), Mn()
    }
    function Rn(i) {
      var g = p.speed || 1;
      return i += N(g), n.is(wn) && (i = Dn(i, l(!1), l(!0))), i
    }
    function Gn(i) {
      var g = n.length,
          fn = (v(i) + g) % g;
      fn !== M() && (w(fn), t.Slides.update(), t.Pagination.update(), r.lazyLoad === "nearby" && t.LazyLoad.check())
    }
    function an() {
      if (E) {
        var i = A ? "startScroll" : "pauseScroll";
        Ln(E, gn, !A), nn(E, "aria-label", r.i18n[i] || Vn[i])
      }
    }
    function G() {
      return !m || m.isPaused()
    }
    return {
      setup: Nn,
      mount: on,
      destroy: un,
      play: y,
      pause: b,
      isPaused: G
    }
  }
  typeof window < "u" && (window.splide = window.splide || {}, window.splide.Extensions = window.splide.Extensions || {}, window.splide.Extensions.AutoScroll = $n)
});