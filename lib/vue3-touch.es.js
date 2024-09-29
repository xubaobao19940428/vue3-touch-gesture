import { h as qe } from "vue";
function Ge(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var se = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(a) {
  (function(o, c, f, l) {
    var m = ["", "webkit", "Moz", "MS", "ms", "o"], Q = c.createElement("div"), he = "function", Y = Math.round, R = Math.abs, dt = Date.now;
    function Tt(t, e, i) {
      return setTimeout(mt(t, i), e);
    }
    function H(t, e, i) {
      return Array.isArray(t) ? (A(t, i[e], i), !0) : !1;
    }
    function A(t, e, i) {
      var n;
      if (t)
        if (t.forEach)
          t.forEach(e, i);
        else if (t.length !== l)
          for (n = 0; n < t.length; )
            e.call(i, t[n], n, t), n++;
        else
          for (n in t)
            t.hasOwnProperty(n) && e.call(i, t[n], n, t);
    }
    function Rt(t, e, i) {
      var n = "DEPRECATED METHOD: " + e + `
` + i + ` AT 
`;
      return function() {
        var r = new Error("get-stack-trace"), s = r && r.stack ? r.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", h = o.console && (o.console.warn || o.console.log);
        return h && h.call(o.console, n, s), t.apply(this, arguments);
      };
    }
    var O;
    typeof Object.assign != "function" ? O = function(e) {
      if (e === l || e === null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var i = Object(e), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (r !== l && r !== null)
          for (var s in r)
            r.hasOwnProperty(s) && (i[s] = r[s]);
      }
      return i;
    } : O = Object.assign;
    var Ut = Rt(function(e, i, n) {
      for (var r = Object.keys(i), s = 0; s < r.length; )
        (!n || n && e[r[s]] === l) && (e[r[s]] = i[r[s]]), s++;
      return e;
    }, "extend", "Use `assign`."), ce = Rt(function(e, i) {
      return Ut(e, i, !0);
    }, "merge", "Use `assign`.");
    function E(t, e, i) {
      var n = e.prototype, r;
      r = t.prototype = Object.create(n), r.constructor = t, r._super = n, i && O(r, i);
    }
    function mt(t, e) {
      return function() {
        return t.apply(e, arguments);
      };
    }
    function gt(t, e) {
      return typeof t == he ? t.apply(e && e[0] || l, e) : t;
    }
    function wt(t, e) {
      return t === l ? e : t;
    }
    function K(t, e, i) {
      A(tt(e), function(n) {
        t.addEventListener(n, i, !1);
      });
    }
    function $(t, e, i) {
      A(tt(e), function(n) {
        t.removeEventListener(n, i, !1);
      });
    }
    function Lt(t, e) {
      for (; t; ) {
        if (t == e)
          return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function U(t, e) {
      return t.indexOf(e) > -1;
    }
    function tt(t) {
      return t.trim().split(/\s+/g);
    }
    function F(t, e, i) {
      if (t.indexOf && !i)
        return t.indexOf(e);
      for (var n = 0; n < t.length; ) {
        if (i && t[n][i] == e || !i && t[n] === e)
          return n;
        n++;
      }
      return -1;
    }
    function et(t) {
      return Array.prototype.slice.call(t, 0);
    }
    function zt(t, e, i) {
      for (var n = [], r = [], s = 0; s < t.length; ) {
        var h = e ? t[s][e] : t[s];
        F(r, h) < 0 && n.push(t[s]), r[s] = h, s++;
      }
      return i && (e ? n = n.sort(function(v, T) {
        return v[e] > T[e];
      }) : n = n.sort()), n;
    }
    function it(t, e) {
      for (var i, n, r = e[0].toUpperCase() + e.slice(1), s = 0; s < m.length; ) {
        if (i = m[s], n = i ? i + r : e, n in t)
          return n;
        s++;
      }
      return l;
    }
    var le = 1;
    function ue() {
      return le++;
    }
    function xt(t) {
      var e = t.ownerDocument || t;
      return e.defaultView || e.parentWindow || o;
    }
    var fe = /mobile|tablet|ip(ad|hone|od)|android/i, Yt = "ontouchstart" in o, pe = it(o, "PointerEvent") !== l, ve = Yt && fe.test(navigator.userAgent), W = "touch", de = "pen", Et = "mouse", Te = "kinect", me = 25, d = 1, w = 2, u = 4, g = 8, nt = 1, V = 2, k = 4, q = 8, G = 16, P = V | k, L = q | G, Ht = P | L, Ft = ["x", "y"], rt = ["clientX", "clientY"];
    function y(t, e) {
      var i = this;
      this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(n) {
        gt(t.options.enable, [t]) && i.handler(n);
      }, this.init();
    }
    y.prototype = {
      /**
       * should handle the inputEvent data and trigger the callback
       * @virtual
       */
      handler: function() {
      },
      /**
       * bind the events
       */
      init: function() {
        this.evEl && K(this.element, this.evEl, this.domHandler), this.evTarget && K(this.target, this.evTarget, this.domHandler), this.evWin && K(xt(this.element), this.evWin, this.domHandler);
      },
      /**
       * unbind the events
       */
      destroy: function() {
        this.evEl && $(this.element, this.evEl, this.domHandler), this.evTarget && $(this.target, this.evTarget, this.domHandler), this.evWin && $(xt(this.element), this.evWin, this.domHandler);
      }
    };
    function ge(t) {
      var e, i = t.options.inputClass;
      return i ? e = i : pe ? e = _t : ve ? e = at : Yt ? e = It : e = ot, new e(t, Ee);
    }
    function Ee(t, e, i) {
      var n = i.pointers.length, r = i.changedPointers.length, s = e & d && n - r === 0, h = e & (u | g) && n - r === 0;
      i.isFirst = !!s, i.isFinal = !!h, s && (t.session = {}), i.eventType = e, ye(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;
    }
    function ye(t, e) {
      var i = t.session, n = e.pointers, r = n.length;
      i.firstInput || (i.firstInput = Xt(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = Xt(e) : r === 1 && (i.firstMultiple = !1);
      var s = i.firstInput, h = i.firstMultiple, p = h ? h.center : s.center, v = e.center = Wt(n);
      e.timeStamp = dt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = yt(p, v), e.distance = st(p, v), _e(i, e), e.offsetDirection = kt(e.deltaX, e.deltaY);
      var T = Vt(e.deltaTime, e.deltaX, e.deltaY);
      e.overallVelocityX = T.x, e.overallVelocityY = T.y, e.overallVelocity = R(T.x) > R(T.y) ? T.x : T.y, e.scale = h ? Pe(h.pointers, n) : 1, e.rotation = h ? Oe(h.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, Ie(i, e);
      var C = t.element;
      Lt(e.srcEvent.target, C) && (C = e.srcEvent.target), e.target = C;
    }
    function _e(t, e) {
      var i = e.center, n = t.offsetDelta || {}, r = t.prevDelta || {}, s = t.prevInput || {};
      (e.eventType === d || s.eventType === u) && (r = t.prevDelta = {
        x: s.deltaX || 0,
        y: s.deltaY || 0
      }, n = t.offsetDelta = {
        x: i.x,
        y: i.y
      }), e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y);
    }
    function Ie(t, e) {
      var i = t.lastInterval || e, n = e.timeStamp - i.timeStamp, r, s, h, p;
      if (e.eventType != g && (n > me || i.velocity === l)) {
        var v = e.deltaX - i.deltaX, T = e.deltaY - i.deltaY, C = Vt(n, v, T);
        s = C.x, h = C.y, r = R(C.x) > R(C.y) ? C.x : C.y, p = kt(v, T), t.lastInterval = e;
      } else
        r = i.velocity, s = i.velocityX, h = i.velocityY, p = i.direction;
      e.velocity = r, e.velocityX = s, e.velocityY = h, e.direction = p;
    }
    function Xt(t) {
      for (var e = [], i = 0; i < t.pointers.length; )
        e[i] = {
          clientX: Y(t.pointers[i].clientX),
          clientY: Y(t.pointers[i].clientY)
        }, i++;
      return {
        timeStamp: dt(),
        pointers: e,
        center: Wt(e),
        deltaX: t.deltaX,
        deltaY: t.deltaY
      };
    }
    function Wt(t) {
      var e = t.length;
      if (e === 1)
        return {
          x: Y(t[0].clientX),
          y: Y(t[0].clientY)
        };
      for (var i = 0, n = 0, r = 0; r < e; )
        i += t[r].clientX, n += t[r].clientY, r++;
      return {
        x: Y(i / e),
        y: Y(n / e)
      };
    }
    function Vt(t, e, i) {
      return {
        x: e / t || 0,
        y: i / t || 0
      };
    }
    function kt(t, e) {
      return t === e ? nt : R(t) >= R(e) ? t < 0 ? V : k : e < 0 ? q : G;
    }
    function st(t, e, i) {
      i || (i = Ft);
      var n = e[i[0]] - t[i[0]], r = e[i[1]] - t[i[1]];
      return Math.sqrt(n * n + r * r);
    }
    function yt(t, e, i) {
      i || (i = Ft);
      var n = e[i[0]] - t[i[0]], r = e[i[1]] - t[i[1]];
      return Math.atan2(r, n) * 180 / Math.PI;
    }
    function Oe(t, e) {
      return yt(e[1], e[0], rt) + yt(t[1], t[0], rt);
    }
    function Pe(t, e) {
      return st(e[0], e[1], rt) / st(t[0], t[1], rt);
    }
    var Ne = {
      mousedown: d,
      mousemove: w,
      mouseup: u
    }, Ce = "mousedown", Ae = "mousemove mouseup";
    function ot() {
      this.evEl = Ce, this.evWin = Ae, this.pressed = !1, y.apply(this, arguments);
    }
    E(ot, y, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(e) {
        var i = Ne[e.type];
        i & d && e.button === 0 && (this.pressed = !0), i & w && e.which !== 1 && (i = u), this.pressed && (i & u && (this.pressed = !1), this.callback(this.manager, i, {
          pointers: [e],
          changedPointers: [e],
          pointerType: Et,
          srcEvent: e
        }));
      }
    });
    var Se = {
      pointerdown: d,
      pointermove: w,
      pointerup: u,
      pointercancel: g,
      pointerout: g
    }, be = {
      2: W,
      3: de,
      4: Et,
      5: Te
      // see https://twitter.com/jacobrossi/status/480596438489890816
    }, qt = "pointerdown", Gt = "pointermove pointerup pointercancel";
    o.MSPointerEvent && !o.PointerEvent && (qt = "MSPointerDown", Gt = "MSPointerMove MSPointerUp MSPointerCancel");
    function _t() {
      this.evEl = qt, this.evWin = Gt, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    E(_t, y, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(e) {
        var i = this.store, n = !1, r = e.type.toLowerCase().replace("ms", ""), s = Se[r], h = be[e.pointerType] || e.pointerType, p = h == W, v = F(i, e.pointerId, "pointerId");
        s & d && (e.button === 0 || p) ? v < 0 && (i.push(e), v = i.length - 1) : s & (u | g) && (n = !0), !(v < 0) && (i[v] = e, this.callback(this.manager, s, {
          pointers: i,
          changedPointers: [e],
          pointerType: h,
          srcEvent: e
        }), n && i.splice(v, 1));
      }
    });
    var De = {
      touchstart: d,
      touchmove: w,
      touchend: u,
      touchcancel: g
    }, Me = "touchstart", Re = "touchstart touchmove touchend touchcancel";
    function jt() {
      this.evTarget = Me, this.evWin = Re, this.started = !1, y.apply(this, arguments);
    }
    E(jt, y, {
      handler: function(e) {
        var i = De[e.type];
        if (i === d && (this.started = !0), !!this.started) {
          var n = Ue.call(this, e, i);
          i & (u | g) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, i, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: W,
            srcEvent: e
          });
        }
      }
    });
    function Ue(t, e) {
      var i = et(t.touches), n = et(t.changedTouches);
      return e & (u | g) && (i = zt(i.concat(n), "identifier", !0)), [i, n];
    }
    var we = {
      touchstart: d,
      touchmove: w,
      touchend: u,
      touchcancel: g
    }, Le = "touchstart touchmove touchend touchcancel";
    function at() {
      this.evTarget = Le, this.targetIds = {}, y.apply(this, arguments);
    }
    E(at, y, {
      handler: function(e) {
        var i = we[e.type], n = ze.call(this, e, i);
        n && this.callback(this.manager, i, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: W,
          srcEvent: e
        });
      }
    });
    function ze(t, e) {
      var i = et(t.touches), n = this.targetIds;
      if (e & (d | w) && i.length === 1)
        return n[i[0].identifier] = !0, [i, i];
      var r, s, h = et(t.changedTouches), p = [], v = this.target;
      if (s = i.filter(function(T) {
        return Lt(T.target, v);
      }), e === d)
        for (r = 0; r < s.length; )
          n[s[r].identifier] = !0, r++;
      for (r = 0; r < h.length; )
        n[h[r].identifier] && p.push(h[r]), e & (u | g) && delete n[h[r].identifier], r++;
      if (p.length)
        return [
          // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
          zt(s.concat(p), "identifier", !0),
          p
        ];
    }
    var xe = 2500, Bt = 25;
    function It() {
      y.apply(this, arguments);
      var t = mt(this.handler, this);
      this.touch = new at(this.manager, t), this.mouse = new ot(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
    }
    E(It, y, {
      /**
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */
      handler: function(e, i, n) {
        var r = n.pointerType == W, s = n.pointerType == Et;
        if (!(s && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
          if (r)
            Ye.call(this, i, n);
          else if (s && He.call(this, n))
            return;
          this.callback(e, i, n);
        }
      },
      /**
       * remove the event listeners
       */
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    function Ye(t, e) {
      t & d ? (this.primaryTouch = e.changedPointers[0].identifier, Zt.call(this, e)) : t & (u | g) && Zt.call(this, e);
    }
    function Zt(t) {
      var e = t.changedPointers[0];
      if (e.identifier === this.primaryTouch) {
        var i = { x: e.clientX, y: e.clientY };
        this.lastTouches.push(i);
        var n = this.lastTouches, r = function() {
          var s = n.indexOf(i);
          s > -1 && n.splice(s, 1);
        };
        setTimeout(r, xe);
      }
    }
    function He(t) {
      for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
        var r = this.lastTouches[n], s = Math.abs(e - r.x), h = Math.abs(i - r.y);
        if (s <= Bt && h <= Bt)
          return !0;
      }
      return !1;
    }
    var Jt = it(Q.style, "touchAction"), Qt = Jt !== l, Kt = "compute", $t = "auto", Ot = "manipulation", z = "none", j = "pan-x", B = "pan-y", ht = Xe();
    function Pt(t, e) {
      this.manager = t, this.set(e);
    }
    Pt.prototype = {
      /**
       * set the touchAction value on the element or enable the polyfill
       * @param {String} value
       */
      set: function(t) {
        t == Kt && (t = this.compute()), Qt && this.manager.element.style && ht[t] && (this.manager.element.style[Jt] = t), this.actions = t.toLowerCase().trim();
      },
      /**
       * just re-set the touchAction value
       */
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      /**
       * compute the value for the touchAction property based on the recognizer's settings
       * @returns {String} value
       */
      compute: function() {
        var t = [];
        return A(this.manager.recognizers, function(e) {
          gt(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
        }), Fe(t.join(" "));
      },
      /**
       * this method is called on each input cycle and provides the preventing of the browser behavior
       * @param {Object} input
       */
      preventDefaults: function(t) {
        var e = t.srcEvent, i = t.offsetDirection;
        if (this.manager.session.prevented) {
          e.preventDefault();
          return;
        }
        var n = this.actions, r = U(n, z) && !ht[z], s = U(n, B) && !ht[B], h = U(n, j) && !ht[j];
        if (r) {
          var p = t.pointers.length === 1, v = t.distance < 2, T = t.deltaTime < 250;
          if (p && v && T)
            return;
        }
        if (!(h && s) && (r || s && i & P || h && i & L))
          return this.preventSrc(e);
      },
      /**
       * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
       * @param {Object} srcEvent
       */
      preventSrc: function(t) {
        this.manager.session.prevented = !0, t.preventDefault();
      }
    };
    function Fe(t) {
      if (U(t, z))
        return z;
      var e = U(t, j), i = U(t, B);
      return e && i ? z : e || i ? e ? j : B : U(t, Ot) ? Ot : $t;
    }
    function Xe() {
      if (!Qt)
        return !1;
      var t = {}, e = o.CSS && o.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
        t[i] = e ? o.CSS.supports("touch-action", i) : !0;
      }), t;
    }
    var ct = 1, _ = 2, X = 4, M = 8, S = M, Z = 16, N = 32;
    function b(t) {
      this.options = O({}, this.defaults, t || {}), this.id = ue(), this.manager = null, this.options.enable = wt(this.options.enable, !0), this.state = ct, this.simultaneous = {}, this.requireFail = [];
    }
    b.prototype = {
      /**
       * @virtual
       * @type {Object}
       */
      defaults: {},
      /**
       * set options
       * @param {Object} options
       * @return {Recognizer}
       */
      set: function(t) {
        return O(this.options, t), this.manager && this.manager.touchAction.update(), this;
      },
      /**
       * recognize simultaneous with an other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      recognizeWith: function(t) {
        if (H(t, "recognizeWith", this))
          return this;
        var e = this.simultaneous;
        return t = lt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this;
      },
      /**
       * drop the simultaneous link. it doesnt remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRecognizeWith: function(t) {
        return H(t, "dropRecognizeWith", this) ? this : (t = lt(t, this), delete this.simultaneous[t.id], this);
      },
      /**
       * recognizer can only run when an other is failing
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      requireFailure: function(t) {
        if (H(t, "requireFailure", this))
          return this;
        var e = this.requireFail;
        return t = lt(t, this), F(e, t) === -1 && (e.push(t), t.requireFailure(this)), this;
      },
      /**
       * drop the requireFailure link. it does not remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRequireFailure: function(t) {
        if (H(t, "dropRequireFailure", this))
          return this;
        t = lt(t, this);
        var e = F(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this;
      },
      /**
       * has require failures boolean
       * @returns {boolean}
       */
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      /**
       * if the recognizer can recognize simultaneous with an other recognizer
       * @param {Recognizer} otherRecognizer
       * @returns {Boolean}
       */
      canRecognizeWith: function(t) {
        return !!this.simultaneous[t.id];
      },
      /**
       * You should use `tryEmit` instead of `emit` directly to check
       * that all the needed recognizers has failed before emitting.
       * @param {Object} input
       */
      emit: function(t) {
        var e = this, i = this.state;
        function n(r) {
          e.manager.emit(r, t);
        }
        i < M && n(e.options.event + te(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= M && n(e.options.event + te(i));
      },
      /**
       * Check that all the require failure recognizers has failed,
       * if true, it emits a gesture event,
       * otherwise, setup the state to FAILED.
       * @param {Object} input
       */
      tryEmit: function(t) {
        if (this.canEmit())
          return this.emit(t);
        this.state = N;
      },
      /**
       * can we emit?
       * @returns {boolean}
       */
      canEmit: function() {
        for (var t = 0; t < this.requireFail.length; ) {
          if (!(this.requireFail[t].state & (N | ct)))
            return !1;
          t++;
        }
        return !0;
      },
      /**
       * update the recognizer
       * @param {Object} inputData
       */
      recognize: function(t) {
        var e = O({}, t);
        if (!gt(this.options.enable, [this, e])) {
          this.reset(), this.state = N;
          return;
        }
        this.state & (S | Z | N) && (this.state = ct), this.state = this.process(e), this.state & (_ | X | M | Z) && this.tryEmit(e);
      },
      /**
       * return the state of the recognizer
       * the actual recognizing happens in this method
       * @virtual
       * @param {Object} inputData
       * @returns {Const} STATE
       */
      process: function(t) {
      },
      // jshint ignore:line
      /**
       * return the preferred touch-action
       * @virtual
       * @returns {Array}
       */
      getTouchAction: function() {
      },
      /**
       * called when the gesture isn't allowed to recognize
       * like when another is being recognized or it is disabled
       * @virtual
       */
      reset: function() {
      }
    };
    function te(t) {
      return t & Z ? "cancel" : t & M ? "end" : t & X ? "move" : t & _ ? "start" : "";
    }
    function ee(t) {
      return t == G ? "down" : t == q ? "up" : t == V ? "left" : t == k ? "right" : "";
    }
    function lt(t, e) {
      var i = e.manager;
      return i ? i.get(t) : t;
    }
    function I() {
      b.apply(this, arguments);
    }
    E(I, b, {
      /**
       * @namespace
       * @memberof AttrRecognizer
       */
      defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
      },
      /**
       * Used to check if it the recognizer receives valid input, like input.distance > 10.
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {Boolean} recognized
       */
      attrTest: function(t) {
        var e = this.options.pointers;
        return e === 0 || t.pointers.length === e;
      },
      /**
       * Process the input and return the state for the recognizer
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {*} State
       */
      process: function(t) {
        var e = this.state, i = t.eventType, n = e & (_ | X), r = this.attrTest(t);
        return n && (i & g || !r) ? e | Z : n || r ? i & u ? e | M : e & _ ? e | X : _ : N;
      }
    });
    function ut() {
      I.apply(this, arguments), this.pX = null, this.pY = null;
    }
    E(ut, I, {
      /**
       * @namespace
       * @memberof PanRecognizer
       */
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Ht
      },
      getTouchAction: function() {
        var t = this.options.direction, e = [];
        return t & P && e.push(B), t & L && e.push(j), e;
      },
      directionTest: function(t) {
        var e = this.options, i = !0, n = t.distance, r = t.direction, s = t.deltaX, h = t.deltaY;
        return r & e.direction || (e.direction & P ? (r = s === 0 ? nt : s < 0 ? V : k, i = s != this.pX, n = Math.abs(t.deltaX)) : (r = h === 0 ? nt : h < 0 ? q : G, i = h != this.pY, n = Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction;
      },
      attrTest: function(t) {
        return I.prototype.attrTest.call(this, t) && (this.state & _ || !(this.state & _) && this.directionTest(t));
      },
      emit: function(t) {
        this.pX = t.deltaX, this.pY = t.deltaY;
        var e = ee(t.direction);
        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
      }
    });
    function Nt() {
      I.apply(this, arguments);
    }
    E(Nt, I, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [z];
      },
      attrTest: function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & _);
      },
      emit: function(t) {
        if (t.scale !== 1) {
          var e = t.scale < 1 ? "in" : "out";
          t.additionalEvent = this.options.event + e;
        }
        this._super.emit.call(this, t);
      }
    });
    function Ct() {
      b.apply(this, arguments), this._timer = null, this._input = null;
    }
    E(Ct, b, {
      /**
       * @namespace
       * @memberof PressRecognizer
       */
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        // minimal time of the pointer to be pressed
        threshold: 9
        // a minimal movement is ok, but keep it low
      },
      getTouchAction: function() {
        return [$t];
      },
      process: function(t) {
        var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold, r = t.deltaTime > e.time;
        if (this._input = t, !n || !i || t.eventType & (u | g) && !r)
          this.reset();
        else if (t.eventType & d)
          this.reset(), this._timer = Tt(function() {
            this.state = S, this.tryEmit();
          }, e.time, this);
        else if (t.eventType & u)
          return S;
        return N;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(t) {
        this.state === S && (t && t.eventType & u ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = dt(), this.manager.emit(this.options.event, this._input)));
      }
    });
    function At() {
      I.apply(this, arguments);
    }
    E(At, I, {
      /**
       * @namespace
       * @memberof RotateRecognizer
       */
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [z];
      },
      attrTest: function(t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & _);
      }
    });
    function St() {
      I.apply(this, arguments);
    }
    E(St, I, {
      /**
       * @namespace
       * @memberof SwipeRecognizer
       */
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: P | L,
        pointers: 1
      },
      getTouchAction: function() {
        return ut.prototype.getTouchAction.call(this);
      },
      attrTest: function(t) {
        var e = this.options.direction, i;
        return e & (P | L) ? i = t.overallVelocity : e & P ? i = t.overallVelocityX : e & L && (i = t.overallVelocityY), this._super.attrTest.call(this, t) && e & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && R(i) > this.options.velocity && t.eventType & u;
      },
      emit: function(t) {
        var e = ee(t.offsetDirection);
        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
      }
    });
    function ft() {
      b.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    E(ft, b, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        // max time between the multi-tap taps
        time: 250,
        // max time of the pointer to be down (like finger on the screen)
        threshold: 9,
        // a minimal movement is ok, but keep it low
        posThreshold: 10
        // a multi-tap can be a bit off the initial position
      },
      getTouchAction: function() {
        return [Ot];
      },
      process: function(t) {
        var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold, r = t.deltaTime < e.time;
        if (this.reset(), t.eventType & d && this.count === 0)
          return this.failTimeout();
        if (n && r && i) {
          if (t.eventType != u)
            return this.failTimeout();
          var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0, h = !this.pCenter || st(this.pCenter, t.center) < e.posThreshold;
          this.pTime = t.timeStamp, this.pCenter = t.center, !h || !s ? this.count = 1 : this.count += 1, this._input = t;
          var p = this.count % e.taps;
          if (p === 0)
            return this.hasRequireFailures() ? (this._timer = Tt(function() {
              this.state = S, this.tryEmit();
            }, e.interval, this), _) : S;
        }
        return N;
      },
      failTimeout: function() {
        return this._timer = Tt(function() {
          this.state = N;
        }, this.options.interval, this), N;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == S && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    });
    function D(t, e) {
      return e = e || {}, e.recognizers = wt(e.recognizers, D.defaults.preset), new bt(t, e);
    }
    D.VERSION = "2.0.7", D.defaults = {
      /**
       * set if DOM events are being triggered.
       * But this is slower and unused by simple implementations, so disabled by default.
       * @type {Boolean}
       * @default false
       */
      domEvents: !1,
      /**
       * The value for the touchAction property/fallback.
       * When set to `compute` it will magically set the correct value based on the added recognizers.
       * @type {String}
       * @default compute
       */
      touchAction: Kt,
      /**
       * @type {Boolean}
       * @default true
       */
      enable: !0,
      /**
       * EXPERIMENTAL FEATURE -- can be removed/changed
       * Change the parent input target element.
       * If Null, then it is being set the to main element.
       * @type {Null|EventTarget}
       * @default null
       */
      inputTarget: null,
      /**
       * force an input class
       * @type {Null|Function}
       * @default null
       */
      inputClass: null,
      /**
       * Default recognizer setup when calling `Hammer()`
       * When creating a new Manager these will be skipped.
       * @type {Array}
       */
      preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [At, { enable: !1 }],
        [Nt, { enable: !1 }, ["rotate"]],
        [St, { direction: P }],
        [ut, { direction: P }, ["swipe"]],
        [ft],
        [ft, { event: "doubletap", taps: 2 }, ["tap"]],
        [Ct]
      ],
      /**
       * Some CSS properties can be used to improve the working of Hammer.
       * Add them to this method and they will be set when creating a new Manager.
       * @namespace
       */
      cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: "none",
        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: "none",
        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: "none",
        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: "none",
        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: "none",
        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var We = 1, ie = 2;
    function bt(t, e) {
      this.options = O({}, D.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = ge(this), this.touchAction = new Pt(this, this.options.touchAction), ne(this, !0), A(this.options.recognizers, function(i) {
        var n = this.add(new i[0](i[1]));
        i[2] && n.recognizeWith(i[2]), i[3] && n.requireFailure(i[3]);
      }, this);
    }
    bt.prototype = {
      /**
       * set options
       * @param {Object} options
       * @returns {Manager}
       */
      set: function(t) {
        return O(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
      },
      /**
       * stop recognizing for this session.
       * This session will be discarded, when a new [input]start event is fired.
       * When forced, the recognizer cycle is stopped immediately.
       * @param {Boolean} [force]
       */
      stop: function(t) {
        this.session.stopped = t ? ie : We;
      },
      /**
       * run the recognizers!
       * called by the inputHandler function on every movement of the pointers (touches)
       * it walks through all the recognizers and tries to detect the gesture that is being made
       * @param {Object} inputData
       */
      recognize: function(t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var i, n = this.recognizers, r = e.curRecognizer;
          (!r || r && r.state & S) && (r = e.curRecognizer = null);
          for (var s = 0; s < n.length; )
            i = n[s], e.stopped !== ie && // 1
            (!r || i == r || // 2
            i.canRecognizeWith(r)) ? i.recognize(t) : i.reset(), !r && i.state & (_ | X | M) && (r = e.curRecognizer = i), s++;
        }
      },
      /**
       * get a recognizer by its event name.
       * @param {Recognizer|String} recognizer
       * @returns {Recognizer|Null}
       */
      get: function(t) {
        if (t instanceof b)
          return t;
        for (var e = this.recognizers, i = 0; i < e.length; i++)
          if (e[i].options.event == t)
            return e[i];
        return null;
      },
      /**
       * add a recognizer to the manager
       * existing recognizers with the same event name will be removed
       * @param {Recognizer} recognizer
       * @returns {Recognizer|Manager}
       */
      add: function(t) {
        if (H(t, "add", this))
          return this;
        var e = this.get(t.options.event);
        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t;
      },
      /**
       * remove a recognizer by name or instance
       * @param {Recognizer|String} recognizer
       * @returns {Manager}
       */
      remove: function(t) {
        if (H(t, "remove", this))
          return this;
        if (t = this.get(t), t) {
          var e = this.recognizers, i = F(e, t);
          i !== -1 && (e.splice(i, 1), this.touchAction.update());
        }
        return this;
      },
      /**
       * bind event
       * @param {String} events
       * @param {Function} handler
       * @returns {EventEmitter} this
       */
      on: function(t, e) {
        if (t !== l && e !== l) {
          var i = this.handlers;
          return A(tt(t), function(n) {
            i[n] = i[n] || [], i[n].push(e);
          }), this;
        }
      },
      /**
       * unbind event, leave emit blank to remove all handlers
       * @param {String} events
       * @param {Function} [handler]
       * @returns {EventEmitter} this
       */
      off: function(t, e) {
        if (t !== l) {
          var i = this.handlers;
          return A(tt(t), function(n) {
            e ? i[n] && i[n].splice(F(i[n], e), 1) : delete i[n];
          }), this;
        }
      },
      /**
       * emit event to the listeners
       * @param {String} event
       * @param {Object} data
       */
      emit: function(t, e) {
        this.options.domEvents && Ve(t, e);
        var i = this.handlers[t] && this.handlers[t].slice();
        if (!(!i || !i.length)) {
          e.type = t, e.preventDefault = function() {
            e.srcEvent.preventDefault();
          };
          for (var n = 0; n < i.length; )
            i[n](e), n++;
        }
      },
      /**
       * destroy the manager and unbinds all events
       * it doesn't unbind dom events, that is the user own responsibility
       */
      destroy: function() {
        this.element && ne(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    };
    function ne(t, e) {
      var i = t.element;
      if (i.style) {
        var n;
        A(t.options.cssProps, function(r, s) {
          n = it(i.style, s), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = r) : i.style[n] = t.oldCssProps[n] || "";
        }), e || (t.oldCssProps = {});
      }
    }
    function Ve(t, e) {
      var i = c.createEvent("Event");
      i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i);
    }
    O(D, {
      INPUT_START: d,
      INPUT_MOVE: w,
      INPUT_END: u,
      INPUT_CANCEL: g,
      STATE_POSSIBLE: ct,
      STATE_BEGAN: _,
      STATE_CHANGED: X,
      STATE_ENDED: M,
      STATE_RECOGNIZED: S,
      STATE_CANCELLED: Z,
      STATE_FAILED: N,
      DIRECTION_NONE: nt,
      DIRECTION_LEFT: V,
      DIRECTION_RIGHT: k,
      DIRECTION_UP: q,
      DIRECTION_DOWN: G,
      DIRECTION_HORIZONTAL: P,
      DIRECTION_VERTICAL: L,
      DIRECTION_ALL: Ht,
      Manager: bt,
      Input: y,
      TouchAction: Pt,
      TouchInput: at,
      MouseInput: ot,
      PointerEventInput: _t,
      TouchMouseInput: It,
      SingleTouchInput: jt,
      Recognizer: b,
      AttrRecognizer: I,
      Tap: ft,
      Pan: ut,
      Swipe: St,
      Pinch: Nt,
      Rotate: At,
      Press: Ct,
      on: K,
      off: $,
      each: A,
      merge: ce,
      extend: Ut,
      assign: O,
      inherit: E,
      bindFn: mt,
      prefixed: it
    });
    var ke = typeof o < "u" ? o : typeof self < "u" ? self : {};
    ke.Hammer = D, typeof l == "function" && l.amd ? l(function() {
      return D;
    }) : a.exports ? a.exports = D : o[f] = D;
  })(window, document, "Hammer");
})(se);
var je = se.exports;
const pt = /* @__PURE__ */ Ge(je);
function Dt(a, ...o) {
  for (let c = 0; c < o.length; c++) {
    const f = o[c], l = Object.keys(f);
    for (let m = 0; m < l.length; m++) {
      const Q = l[m];
      a[Q] = f[Q];
    }
  }
  return a;
}
function x() {
  return {
    type: Object,
    default: function() {
      return {};
    }
  };
}
function Be(a) {
  return a.charAt(0).toUpperCase() + a.slice(1);
}
const Ze = ["up", "down", "left", "right", "horizontal", "vertical", "all"];
function Je(a) {
  var o = a.direction;
  if (typeof o == "string") {
    var c = "DIRECTION_" + o.toUpperCase();
    Ze.indexOf(o) > -1 && pt.hasOwnProperty(c) ? a.direction = pt[c] : console.warn("[vue-touch] invalid direction: " + o);
  }
  return a;
}
const oe = {}, vt = {}, re = [
  "pan",
  "panstart",
  "panmove",
  "panend",
  "pancancel",
  "panleft",
  "panright",
  "panup",
  "pandown",
  "pinch",
  "pinchstart",
  "pinchmove",
  "pinchend",
  "pinchcancel",
  "pinchin",
  "pinchout",
  "press",
  "pressup",
  "rotate",
  "rotatestart",
  "rotatemove",
  "rotateend",
  "rotatecancel",
  "swipe",
  "swipeleft",
  "swiperight",
  "swipeup",
  "swipedown",
  "tap"
], Qe = {
  pan: "pan",
  panstart: "pan",
  panmove: "pan",
  panend: "pan",
  pancancel: "pan",
  panleft: "pan",
  panright: "pan",
  panup: "pan",
  pandown: "pan",
  pinch: "pinch",
  pinchstart: "pinch",
  pinchmove: "pinch",
  pinchend: "pinch",
  pinchcancel: "pinch",
  pinchin: "pinch",
  pinchout: "pinch",
  press: "press",
  pressup: "press",
  rotate: "rotate",
  rotatestart: "rotate",
  rotatemove: "rotate",
  rotateend: "rotate",
  rotatecancel: "rotate",
  swipe: "swipe",
  swipeleft: "swipe",
  swiperight: "swipe",
  swipeup: "swipe",
  swipedown: "swipe",
  tap: "tap"
}, Mt = {
  props: {
    options: x(),
    tapOptions: x(),
    panOptions: x(),
    pinchOptions: x(),
    pressOptions: x(),
    rotateOptions: x(),
    swipeOptions: x(),
    tag: { type: String, default: "div" },
    enabled: {
      default: !0,
      type: [Boolean, Object]
    }
  },
  data() {
    return {
      _events: {}
    };
  },
  mounted() {
    this.$isServer || (this.hammer = new pt.Manager(this.$el, this.options), this.recognizers = {}, this.setupBuiltinRecognizers(), this.setupCustomRecognizers(), this.updateEnabled(this.enabled));
  },
  unmounted() {
    this.$isServer || this.hammer.destroy();
  },
  watch: {
    enabled: {
      deep: !0,
      handler(...a) {
        this.updateEnabled(...a);
      }
    }
  },
  methods: {
    setupBuiltinRecognizers() {
      for (let a = 0; a < re.length; a++) {
        const o = re[a];
        if (!this._events[o]) {
          const c = Qe[o], f = Dt(
            {},
            oe[c] || {},
            this[`${c}Options`]
          );
          this.addRecognizer(c, f), this.addEvent(o);
        }
      }
    },
    setupCustomRecognizers() {
      const a = Object.keys(vt);
      for (let o = 0; o < a.length; o++) {
        const c = a[o];
        if (this._events[c]) {
          const f = vt[c], l = this[`${c}Options`] || {}, m = Dt({}, f, l);
          this.addRecognizer(c, m, {
            mainGesture: m.type
          }), this.addEvent(c);
        }
      }
    },
    /**
     * Registers a new Recognizer with the manager and saves it on the component
     * instance
     * @param {String} gesture     See utils.js -> gestures
     * @param {Object} options     Hammer options
     * @param {String} mainGesture if gesture is a custom event name, mapping to utils.js -> gestures
     */
    addRecognizer: function(o, c, { mainGesture: f } = {}) {
      if (!this.recognizers[o]) {
        const l = new pt[Be(f || o)](Je(c));
        this.recognizers[o] = l, this.hammer.add(l), l.recognizeWith(this.hammer.recognizers);
      }
    },
    addEvent(a) {
      this.hammer.on(a, (o) => this.$emit(a, o));
    },
    // Enabling / Disabling certain recognizers.
    /**
     * Called when the `enabled` prop changes, and during mounted()
     * It enables/disables values according to the value of the `emabled` prop
     * @param  {Boolean|Object} newVal If an object: { recognizer: true|false }
     * @param  {Boolean|Object} oldVal The previous value
     * @return {undefined}
     */
    updateEnabled: function(o, c) {
      if (o === !0)
        this.enableAll();
      else if (o === !1)
        this.disableAll();
      else if (typeof o == "object") {
        const f = Object.keys(o);
        for (let l = 0; l < f.length; l++) {
          const m = f[l];
          this.recognizers[m] && (o[m] ? this.enable(m) : this.disable(m));
        }
      }
    },
    enable(a) {
      const o = this.recognizers[a];
      o.options.enable || o.set({ enable: !0 });
    },
    disable(a) {
      const o = this.recognizers[a];
      o.options.enable && o.set({ enable: !1 });
    },
    toggle(a) {
      const o = this.recognizers[a];
      o && (o.options.enable ? this.disable(a) : this.enable(a));
    },
    enableAll(a) {
      this.toggleAll({ enable: !0 });
    },
    disableAll(a) {
      this.toggleAll({ enable: !1 });
    },
    toggleAll({ enable: a }) {
      const o = Object.keys(this.recognizers);
      for (let c = 0; c < o.length; c++) {
        const f = this.recognizers[o[c]];
        f.options.enable !== a && f.set({ enable: a });
      }
    },
    isEnabled(a) {
      return this.recognizers[a] && this.recognizers[a].options.enable;
    }
  },
  render() {
    return qe(this.tag, {}, this.$slots.default());
  }
};
let ae = !1;
const J = { config: oe, customEvents: vt };
J.install = (function(o, c = {}) {
  const f = c.name || "v-touch";
  o.component(f, Dt(Mt, { name: f })), ae = !0;
}).bind(J);
J.registerCustomEvent = (function(o, c = {}) {
  if (ae) {
    console.warn(`
      [vue3-touch]: Custom Event '${o}' couldn't be added to vue3-touch.
      Custom Events have to be registered before installing the plugin.
      `);
    return;
  }
  c.event = o, vt[o] = c, Mt.props[`${o}Options`] = {
    type: Object,
    default() {
      return {};
    }
  };
}).bind(J);
J.component = Mt;
export {
  J as default
};
