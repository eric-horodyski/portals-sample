import * as S from "react";
import _e, { forwardRef as Js, useContext as Xs, useRef as vr, useState as di, useEffect as On, useMemo as Zs, useLayoutEffect as Qs } from "react";
import * as el from "react-dom";
function tl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fn = { exports: {} }, sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho;
function rl() {
  if (Ho)
    return sr;
  Ho = 1;
  var e = _e, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, c, d) {
    var u, f = {}, p = null, h = null;
    d !== void 0 && (p = "" + d), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c)
      n.call(c, u) && !a.hasOwnProperty(u) && (f[u] = c[u]);
    if (i && i.defaultProps)
      for (u in c = i.defaultProps, c)
        f[u] === void 0 && (f[u] = c[u]);
    return { $$typeof: t, type: i, key: p, ref: h, props: f, _owner: o.current };
  }
  return sr.Fragment = r, sr.jsx = s, sr.jsxs = s, sr;
}
var lr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wo;
function nl() {
  return Wo || (Wo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = _e, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = Symbol.iterator, v = "@@iterator";
    function m(b) {
      if (b === null || typeof b != "object")
        return null;
      var z = g && b[g] || b[v];
      return typeof z == "function" ? z : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(b) {
      {
        for (var z = arguments.length, X = new Array(z > 1 ? z - 1 : 0), le = 1; le < z; le++)
          X[le - 1] = arguments[le];
        I("error", b, X);
      }
    }
    function I(b, z, X) {
      {
        var le = $.ReactDebugCurrentFrame, he = le.getStackAddendum();
        he !== "" && (z += "%s", X = X.concat([he]));
        var Re = X.map(function(ve) {
          return String(ve);
        });
        Re.unshift("Warning: " + z), Function.prototype.apply.call(console[b], console, Re);
      }
    }
    var y = !1, x = !1, E = !1, R = !1, N = !1, k;
    k = Symbol.for("react.module.reference");
    function V(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === a || N || b === o || b === d || b === u || R || b === h || y || x || E || typeof b == "object" && b !== null && (b.$$typeof === p || b.$$typeof === f || b.$$typeof === s || b.$$typeof === i || b.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === k || b.getModuleId !== void 0));
    }
    function j(b, z, X) {
      var le = b.displayName;
      if (le)
        return le;
      var he = z.displayName || z.name || "";
      return he !== "" ? X + "(" + he + ")" : X;
    }
    function Y(b) {
      return b.displayName || "Context";
    }
    function M(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case d:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case i:
            var z = b;
            return Y(z) + ".Consumer";
          case s:
            var X = b;
            return Y(X._context) + ".Provider";
          case c:
            return j(b, b.render, "ForwardRef");
          case f:
            var le = b.displayName || null;
            return le !== null ? le : M(b.type) || "Memo";
          case p: {
            var he = b, Re = he._payload, ve = he._init;
            try {
              return M(ve(Re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Q = Object.assign, _ = 0, O, T, L, oe, P, B, J;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function U() {
      {
        if (_ === 0) {
          O = console.log, T = console.info, L = console.warn, oe = console.error, P = console.group, B = console.groupCollapsed, J = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        _++;
      }
    }
    function te() {
      {
        if (_--, _ === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Q({}, b, {
              value: O
            }),
            info: Q({}, b, {
              value: T
            }),
            warn: Q({}, b, {
              value: L
            }),
            error: Q({}, b, {
              value: oe
            }),
            group: Q({}, b, {
              value: P
            }),
            groupCollapsed: Q({}, b, {
              value: B
            }),
            groupEnd: Q({}, b, {
              value: J
            })
          });
        }
        _ < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = $.ReactCurrentDispatcher, re;
    function G(b, z, X) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (he) {
            var le = he.stack.trim().match(/\n( *(at )?)/);
            re = le && le[1] || "";
          }
        return `
` + re + b;
      }
    }
    var A = !1, q;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      q = new se();
    }
    function D(b, z) {
      if (!b || A)
        return "";
      {
        var X = q.get(b);
        if (X !== void 0)
          return X;
      }
      var le;
      A = !0;
      var he = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Re;
      Re = ee.current, ee.current = null, U();
      try {
        if (z) {
          var ve = function() {
            throw Error();
          };
          if (Object.defineProperty(ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ve, []);
            } catch (bt) {
              le = bt;
            }
            Reflect.construct(b, [], ve);
          } else {
            try {
              ve.call();
            } catch (bt) {
              le = bt;
            }
            b.call(ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            le = bt;
          }
          b();
        }
      } catch (bt) {
        if (bt && le && typeof bt.stack == "string") {
          for (var fe = bt.stack.split(`
`), Ue = le.stack.split(`
`), Be = fe.length - 1, Fe = Ue.length - 1; Be >= 1 && Fe >= 0 && fe[Be] !== Ue[Fe]; )
            Fe--;
          for (; Be >= 1 && Fe >= 0; Be--, Fe--)
            if (fe[Be] !== Ue[Fe]) {
              if (Be !== 1 || Fe !== 1)
                do
                  if (Be--, Fe--, Fe < 0 || fe[Be] !== Ue[Fe]) {
                    var ot = `
` + fe[Be].replace(" at new ", " at ");
                    return b.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", b.displayName)), typeof b == "function" && q.set(b, ot), ot;
                  }
                while (Be >= 1 && Fe >= 0);
              break;
            }
        }
      } finally {
        A = !1, ee.current = Re, te(), Error.prepareStackTrace = he;
      }
      var Ft = b ? b.displayName || b.name : "", Mo = Ft ? G(Ft) : "";
      return typeof b == "function" && q.set(b, Mo), Mo;
    }
    function ae(b, z, X) {
      return D(b, !1);
    }
    function W(b) {
      var z = b.prototype;
      return !!(z && z.isReactComponent);
    }
    function F(b, z, X) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return D(b, W(b));
      if (typeof b == "string")
        return G(b);
      switch (b) {
        case d:
          return G("Suspense");
        case u:
          return G("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case c:
            return ae(b.render);
          case f:
            return F(b.type, z, X);
          case p: {
            var le = b, he = le._payload, Re = le._init;
            try {
              return F(Re(he), z, X);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, ie = {}, xe = $.ReactDebugCurrentFrame;
    function de(b) {
      if (b) {
        var z = b._owner, X = F(b.type, b._source, z ? z.type : null);
        xe.setExtraStackFrame(X);
      } else
        xe.setExtraStackFrame(null);
    }
    function ce(b, z, X, le, he) {
      {
        var Re = Function.call.bind(Z);
        for (var ve in b)
          if (Re(b, ve)) {
            var fe = void 0;
            try {
              if (typeof b[ve] != "function") {
                var Ue = Error((le || "React class") + ": " + X + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ue.name = "Invariant Violation", Ue;
              }
              fe = b[ve](z, ve, le, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Be) {
              fe = Be;
            }
            fe && !(fe instanceof Error) && (de(he), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", X, ve, typeof fe), de(null)), fe instanceof Error && !(fe.message in ie) && (ie[fe.message] = !0, de(he), w("Failed %s type: %s", X, fe.message), de(null));
          }
      }
    }
    var ge = Array.isArray;
    function Te(b) {
      return ge(b);
    }
    function Xe(b) {
      {
        var z = typeof Symbol == "function" && Symbol.toStringTag, X = z && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return X;
      }
    }
    function ne(b) {
      try {
        return ue(b), !1;
      } catch {
        return !0;
      }
    }
    function ue(b) {
      return "" + b;
    }
    function Ie(b) {
      if (ne(b))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(b)), ue(b);
    }
    var Pe = $.ReactCurrentOwner, ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ht, tr, rr;
    rr = {};
    function bn(b) {
      if (Z.call(b, "ref")) {
        var z = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function xn(b) {
      if (Z.call(b, "key")) {
        var z = Object.getOwnPropertyDescriptor(b, "key").get;
        if (z && z.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Cn(b, z) {
      if (typeof b.ref == "string" && Pe.current && z && Pe.current.stateNode !== z) {
        var X = M(Pe.current.type);
        rr[X] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Pe.current.type), b.ref), rr[X] = !0);
      }
    }
    function Sn(b, z) {
      {
        var X = function() {
          ht || (ht = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        X.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: X,
          configurable: !0
        });
      }
    }
    function yt(b, z) {
      {
        var X = function() {
          tr || (tr = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", z));
        };
        X.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: X,
          configurable: !0
        });
      }
    }
    var $n = function(b, z, X, le, he, Re, ve) {
      var fe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: z,
        ref: X,
        props: ve,
        // Record the component responsible for creating this element.
        _owner: Re
      };
      return fe._store = {}, Object.defineProperty(fe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(fe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(fe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.freeze && (Object.freeze(fe.props), Object.freeze(fe)), fe;
    };
    function En(b, z, X, le, he) {
      {
        var Re, ve = {}, fe = null, Ue = null;
        X !== void 0 && (Ie(X), fe = "" + X), xn(z) && (Ie(z.key), fe = "" + z.key), bn(z) && (Ue = z.ref, Cn(z, he));
        for (Re in z)
          Z.call(z, Re) && !ct.hasOwnProperty(Re) && (ve[Re] = z[Re]);
        if (b && b.defaultProps) {
          var Be = b.defaultProps;
          for (Re in Be)
            ve[Re] === void 0 && (ve[Re] = Be[Re]);
        }
        if (fe || Ue) {
          var Fe = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          fe && Sn(ve, Fe), Ue && yt(ve, Fe);
        }
        return $n(b, fe, Ue, he, le, Pe.current, ve);
      }
    }
    var nr = $.ReactCurrentOwner, Nr = $.ReactDebugCurrentFrame;
    function $t(b) {
      if (b) {
        var z = b._owner, X = F(b.type, b._source, z ? z.type : null);
        Nr.setExtraStackFrame(X);
      } else
        Nr.setExtraStackFrame(null);
    }
    var or;
    or = !1;
    function ar(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function Rt() {
      {
        if (nr.current) {
          var b = M(nr.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Br(b) {
      {
        if (b !== void 0) {
          var z = b.fileName.replace(/^.*[\\\/]/, ""), X = b.lineNumber;
          return `

Check your code at ` + z + ":" + X + ".";
        }
        return "";
      }
    }
    var ir = {};
    function Ve(b) {
      {
        var z = Rt();
        if (!z) {
          var X = typeof b == "string" ? b : b.displayName || b.name;
          X && (z = `

Check the top-level render call using <` + X + ">.");
        }
        return z;
      }
    }
    function zo(b, z) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var X = Ve(z);
        if (ir[X])
          return;
        ir[X] = !0;
        var le = "";
        b && b._owner && b._owner !== nr.current && (le = " It was passed a child from " + M(b._owner.type) + "."), $t(b), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, le), $t(null);
      }
    }
    function jo(b, z) {
      {
        if (typeof b != "object")
          return;
        if (Te(b))
          for (var X = 0; X < b.length; X++) {
            var le = b[X];
            ar(le) && zo(le, z);
          }
        else if (ar(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var he = m(b);
          if (typeof he == "function" && he !== b.entries)
            for (var Re = he.call(b), ve; !(ve = Re.next()).done; )
              ar(ve.value) && zo(ve.value, z);
        }
      }
    }
    function Ws(b) {
      {
        var z = b.type;
        if (z == null || typeof z == "string")
          return;
        var X;
        if (typeof z == "function")
          X = z.propTypes;
        else if (typeof z == "object" && (z.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        z.$$typeof === f))
          X = z.propTypes;
        else
          return;
        if (X) {
          var le = M(z);
          ce(X, b.props, "prop", le, b);
        } else if (z.PropTypes !== void 0 && !or) {
          or = !0;
          var he = M(z);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", he || "Unknown");
        }
        typeof z.getDefaultProps == "function" && !z.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Us(b) {
      {
        for (var z = Object.keys(b.props), X = 0; X < z.length; X++) {
          var le = z[X];
          if (le !== "children" && le !== "key") {
            $t(b), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), $t(null);
            break;
          }
        }
        b.ref !== null && ($t(b), w("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    function Lo(b, z, X, le, he, Re) {
      {
        var ve = V(b);
        if (!ve) {
          var fe = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (fe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ue = Br(he);
          Ue ? fe += Ue : fe += Rt();
          var Be;
          b === null ? Be = "null" : Te(b) ? Be = "array" : b !== void 0 && b.$$typeof === t ? (Be = "<" + (M(b.type) || "Unknown") + " />", fe = " Did you accidentally export a JSX literal instead of a component?") : Be = typeof b, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Be, fe);
        }
        var Fe = En(b, z, X, he, Re);
        if (Fe == null)
          return Fe;
        if (ve) {
          var ot = z.children;
          if (ot !== void 0)
            if (le)
              if (Te(ot)) {
                for (var Ft = 0; Ft < ot.length; Ft++)
                  jo(ot[Ft], b);
                Object.freeze && Object.freeze(ot);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jo(ot, b);
        }
        return b === n ? Us(Fe) : Ws(Fe), Fe;
      }
    }
    function qs(b, z, X) {
      return Lo(b, z, X, !0);
    }
    function Ys(b, z, X) {
      return Lo(b, z, X, !1);
    }
    var Ks = Ys, Gs = qs;
    lr.Fragment = n, lr.jsx = Ks, lr.jsxs = Gs;
  }()), lr;
}
process.env.NODE_ENV === "production" ? Fn.exports = rl() : Fn.exports = nl();
var H = Fn.exports;
const ol = {
  grey: {
    50: "#F5F7FA",
    100: "#EAEEF6",
    200: "#DDE7EE",
    300: "#CDD7E1",
    400: "#9FA6AD",
    500: "#636B74",
    600: "#555E68",
    700: "#32383E",
    800: "#23272B",
    900: "#121416"
  },
  blue: {
    50: "#EDF5FD",
    100: "#E3EFFB",
    200: "#C7DFF7",
    300: "#97C3F0",
    400: "#4393E4",
    500: "#0B6BCB",
    600: "#185EA5",
    700: "#12467B",
    800: "#0A2744",
    900: "#051423"
  },
  yellow: {
    50: "#FEFAF6",
    100: "#FDF0E1",
    200: "#FCE1C2",
    300: "#F3C896",
    400: "#EA9A3E",
    500: "#9A5B13",
    600: "#72430D",
    700: "#492B08",
    800: "#2E1B05",
    900: "#1D1002"
  },
  red: {
    50: "#FEF6F6",
    100: "#FCE4E4",
    200: "#F7C5C5",
    300: "#F09898",
    400: "#E47474",
    500: "#C41C1C",
    600: "#A51818",
    700: "#7D1212",
    800: "#430A0A",
    900: "#240505"
  },
  green: {
    50: "#F6FEF6",
    100: "#E3FBE3",
    200: "#C7F7C7",
    300: "#A1E8A1",
    400: "#51BC51",
    500: "#1F7A1F",
    600: "#136C13",
    700: "#0A470A",
    800: "#042F04",
    900: "#021D02"
  }
}, cr = ol, eo = "$$joy";
function al(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function C() {
  return C = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, C.apply(this, arguments);
}
function _t(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function fi(e) {
  if (!_t(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = fi(e[r]);
  }), t;
}
function Ye(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? C({}, e) : e;
  return _t(e) && _t(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (_t(t[o]) && o in e && _t(e[o]) ? n[o] = Ye(e[o], t[o], r) : r.clone ? n[o] = _t(t[o]) ? fi(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
var zn = { exports: {} }, Vr = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo;
function il() {
  if (Uo)
    return Ce;
  Uo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function I(x) {
    if (typeof x == "object" && x !== null) {
      var E = x.$$typeof;
      switch (E) {
        case t:
          switch (x = x.type, x) {
            case c:
            case d:
            case n:
            case a:
            case o:
            case f:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case i:
                case u:
                case g:
                case h:
                case s:
                  return x;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function y(x) {
    return I(x) === d;
  }
  return Ce.AsyncMode = c, Ce.ConcurrentMode = d, Ce.ContextConsumer = i, Ce.ContextProvider = s, Ce.Element = t, Ce.ForwardRef = u, Ce.Fragment = n, Ce.Lazy = g, Ce.Memo = h, Ce.Portal = r, Ce.Profiler = a, Ce.StrictMode = o, Ce.Suspense = f, Ce.isAsyncMode = function(x) {
    return y(x) || I(x) === c;
  }, Ce.isConcurrentMode = y, Ce.isContextConsumer = function(x) {
    return I(x) === i;
  }, Ce.isContextProvider = function(x) {
    return I(x) === s;
  }, Ce.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ce.isForwardRef = function(x) {
    return I(x) === u;
  }, Ce.isFragment = function(x) {
    return I(x) === n;
  }, Ce.isLazy = function(x) {
    return I(x) === g;
  }, Ce.isMemo = function(x) {
    return I(x) === h;
  }, Ce.isPortal = function(x) {
    return I(x) === r;
  }, Ce.isProfiler = function(x) {
    return I(x) === a;
  }, Ce.isStrictMode = function(x) {
    return I(x) === o;
  }, Ce.isSuspense = function(x) {
    return I(x) === f;
  }, Ce.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === d || x === a || x === o || x === f || x === p || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === h || x.$$typeof === s || x.$$typeof === i || x.$$typeof === u || x.$$typeof === m || x.$$typeof === $ || x.$$typeof === w || x.$$typeof === v);
  }, Ce.typeOf = I, Ce;
}
var Se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qo;
function sl() {
  return qo || (qo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, $ = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function I(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === d || D === a || D === o || D === f || D === p || typeof D == "object" && D !== null && (D.$$typeof === g || D.$$typeof === h || D.$$typeof === s || D.$$typeof === i || D.$$typeof === u || D.$$typeof === m || D.$$typeof === $ || D.$$typeof === w || D.$$typeof === v);
    }
    function y(D) {
      if (typeof D == "object" && D !== null) {
        var ae = D.$$typeof;
        switch (ae) {
          case t:
            var W = D.type;
            switch (W) {
              case c:
              case d:
              case n:
              case a:
              case o:
              case f:
                return W;
              default:
                var F = W && W.$$typeof;
                switch (F) {
                  case i:
                  case u:
                  case g:
                  case h:
                  case s:
                    return F;
                  default:
                    return ae;
                }
            }
          case r:
            return ae;
        }
      }
    }
    var x = c, E = d, R = i, N = s, k = t, V = u, j = n, Y = g, M = h, Q = r, _ = a, O = o, T = f, L = !1;
    function oe(D) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), P(D) || y(D) === c;
    }
    function P(D) {
      return y(D) === d;
    }
    function B(D) {
      return y(D) === i;
    }
    function J(D) {
      return y(D) === s;
    }
    function K(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function U(D) {
      return y(D) === u;
    }
    function te(D) {
      return y(D) === n;
    }
    function ee(D) {
      return y(D) === g;
    }
    function re(D) {
      return y(D) === h;
    }
    function G(D) {
      return y(D) === r;
    }
    function A(D) {
      return y(D) === a;
    }
    function q(D) {
      return y(D) === o;
    }
    function se(D) {
      return y(D) === f;
    }
    Se.AsyncMode = x, Se.ConcurrentMode = E, Se.ContextConsumer = R, Se.ContextProvider = N, Se.Element = k, Se.ForwardRef = V, Se.Fragment = j, Se.Lazy = Y, Se.Memo = M, Se.Portal = Q, Se.Profiler = _, Se.StrictMode = O, Se.Suspense = T, Se.isAsyncMode = oe, Se.isConcurrentMode = P, Se.isContextConsumer = B, Se.isContextProvider = J, Se.isElement = K, Se.isForwardRef = U, Se.isFragment = te, Se.isLazy = ee, Se.isMemo = re, Se.isPortal = G, Se.isProfiler = A, Se.isStrictMode = q, Se.isSuspense = se, Se.isValidElementType = I, Se.typeOf = y;
  }()), Se;
}
var Yo;
function pi() {
  return Yo || (Yo = 1, process.env.NODE_ENV === "production" ? Vr.exports = il() : Vr.exports = sl()), Vr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var In, Ko;
function ll() {
  if (Ko)
    return In;
  Ko = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var c = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        d[u] = u;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return In = o() ? Object.assign : function(a, s) {
    for (var i, c = n(a), d, u = 1; u < arguments.length; u++) {
      i = Object(arguments[u]);
      for (var f in i)
        t.call(i, f) && (c[f] = i[f]);
      if (e) {
        d = e(i);
        for (var p = 0; p < d.length; p++)
          r.call(i, d[p]) && (c[d[p]] = i[d[p]]);
      }
    }
    return c;
  }, In;
}
var wn, Go;
function to() {
  if (Go)
    return wn;
  Go = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wn = e, wn;
}
var Tn, Jo;
function vi() {
  return Jo || (Jo = 1, Tn = Function.call.bind(Object.prototype.hasOwnProperty)), Tn;
}
var Rn, Xo;
function cl() {
  if (Xo)
    return Rn;
  Xo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = to(), r = {}, n = vi();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, i, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (n(a, u)) {
          var f;
          try {
            if (typeof a[u] != "function") {
              var p = Error(
                (c || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            f = a[u](s, u, c, i, null, t);
          } catch (g) {
            f = g;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + i + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + i + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Rn = o, Rn;
}
var Pn, Zo;
function ul() {
  if (Zo)
    return Pn;
  Zo = 1;
  var e = pi(), t = ll(), r = to(), n = vi(), o = cl(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var c = "Warning: " + i;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Pn = function(i, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function f(P) {
      var B = P && (d && P[d] || P[u]);
      if (typeof B == "function")
        return B;
    }
    var p = "<<anonymous>>", h = {
      array: $("array"),
      bigint: $("bigint"),
      bool: $("boolean"),
      func: $("function"),
      number: $("number"),
      object: $("object"),
      string: $("string"),
      symbol: $("symbol"),
      any: w(),
      arrayOf: I,
      element: y(),
      elementType: x(),
      instanceOf: E,
      node: V(),
      objectOf: N,
      oneOf: R,
      oneOfType: k,
      shape: Y,
      exact: M
    };
    function g(P, B) {
      return P === B ? P !== 0 || 1 / P === 1 / B : P !== P && B !== B;
    }
    function v(P, B) {
      this.message = P, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function m(P) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, J = 0;
      function K(te, ee, re, G, A, q, se) {
        if (G = G || p, q = q || re, se !== r) {
          if (c) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ae = G + ":" + re;
            !B[ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + G + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[ae] = !0, J++);
          }
        }
        return ee[re] == null ? te ? ee[re] === null ? new v("The " + A + " `" + q + "` is marked as required " + ("in `" + G + "`, but its value is `null`.")) : new v("The " + A + " `" + q + "` is marked as required in " + ("`" + G + "`, but its value is `undefined`.")) : null : P(ee, re, G, A, q);
      }
      var U = K.bind(null, !1);
      return U.isRequired = K.bind(null, !0), U;
    }
    function $(P) {
      function B(J, K, U, te, ee, re) {
        var G = J[K], A = O(G);
        if (A !== P) {
          var q = T(G);
          return new v(
            "Invalid " + te + " `" + ee + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected ") + ("`" + P + "`."),
            { expectedType: P }
          );
        }
        return null;
      }
      return m(B);
    }
    function w() {
      return m(s);
    }
    function I(P) {
      function B(J, K, U, te, ee) {
        if (typeof P != "function")
          return new v("Property `" + ee + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var re = J[K];
        if (!Array.isArray(re)) {
          var G = O(re);
          return new v("Invalid " + te + " `" + ee + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an array."));
        }
        for (var A = 0; A < re.length; A++) {
          var q = P(re, A, U, te, ee + "[" + A + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return m(B);
    }
    function y() {
      function P(B, J, K, U, te) {
        var ee = B[J];
        if (!i(ee)) {
          var re = O(ee);
          return new v("Invalid " + U + " `" + te + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(P);
    }
    function x() {
      function P(B, J, K, U, te) {
        var ee = B[J];
        if (!e.isValidElementType(ee)) {
          var re = O(ee);
          return new v("Invalid " + U + " `" + te + "` of type " + ("`" + re + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(P);
    }
    function E(P) {
      function B(J, K, U, te, ee) {
        if (!(J[K] instanceof P)) {
          var re = P.name || p, G = oe(J[K]);
          return new v("Invalid " + te + " `" + ee + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return m(B);
    }
    function R(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function B(J, K, U, te, ee) {
        for (var re = J[K], G = 0; G < P.length; G++)
          if (g(re, P[G]))
            return null;
        var A = JSON.stringify(P, function(se, D) {
          var ae = T(D);
          return ae === "symbol" ? String(D) : D;
        });
        return new v("Invalid " + te + " `" + ee + "` of value `" + String(re) + "` " + ("supplied to `" + U + "`, expected one of " + A + "."));
      }
      return m(B);
    }
    function N(P) {
      function B(J, K, U, te, ee) {
        if (typeof P != "function")
          return new v("Property `" + ee + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var re = J[K], G = O(re);
        if (G !== "object")
          return new v("Invalid " + te + " `" + ee + "` of type " + ("`" + G + "` supplied to `" + U + "`, expected an object."));
        for (var A in re)
          if (n(re, A)) {
            var q = P(re, A, U, te, ee + "." + A, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return m(B);
    }
    function k(P) {
      if (!Array.isArray(P))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var B = 0; B < P.length; B++) {
        var J = P[B];
        if (typeof J != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(J) + " at index " + B + "."
          ), s;
      }
      function K(U, te, ee, re, G) {
        for (var A = [], q = 0; q < P.length; q++) {
          var se = P[q], D = se(U, te, ee, re, G, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && A.push(D.data.expectedType);
        }
        var ae = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new v("Invalid " + re + " `" + G + "` supplied to " + ("`" + ee + "`" + ae + "."));
      }
      return m(K);
    }
    function V() {
      function P(B, J, K, U, te) {
        return Q(B[J]) ? null : new v("Invalid " + U + " `" + te + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return m(P);
    }
    function j(P, B, J, K, U) {
      return new v(
        (P || "React class") + ": " + B + " type `" + J + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function Y(P) {
      function B(J, K, U, te, ee) {
        var re = J[K], G = O(re);
        if (G !== "object")
          return new v("Invalid " + te + " `" + ee + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var A in P) {
          var q = P[A];
          if (typeof q != "function")
            return j(U, te, ee, A, T(q));
          var se = q(re, A, U, te, ee + "." + A, r);
          if (se)
            return se;
        }
        return null;
      }
      return m(B);
    }
    function M(P) {
      function B(J, K, U, te, ee) {
        var re = J[K], G = O(re);
        if (G !== "object")
          return new v("Invalid " + te + " `" + ee + "` of type `" + G + "` " + ("supplied to `" + U + "`, expected `object`."));
        var A = t({}, J[K], P);
        for (var q in A) {
          var se = P[q];
          if (n(P, q) && typeof se != "function")
            return j(U, te, ee, q, T(se));
          if (!se)
            return new v(
              "Invalid " + te + " `" + ee + "` key `" + q + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(J[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(P), null, "  ")
            );
          var D = se(re, q, U, te, ee + "." + q, r);
          if (D)
            return D;
        }
        return null;
      }
      return m(B);
    }
    function Q(P) {
      switch (typeof P) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !P;
        case "object":
          if (Array.isArray(P))
            return P.every(Q);
          if (P === null || i(P))
            return !0;
          var B = f(P);
          if (B) {
            var J = B.call(P), K;
            if (B !== P.entries) {
              for (; !(K = J.next()).done; )
                if (!Q(K.value))
                  return !1;
            } else
              for (; !(K = J.next()).done; ) {
                var U = K.value;
                if (U && !Q(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function _(P, B) {
      return P === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function O(P) {
      var B = typeof P;
      return Array.isArray(P) ? "array" : P instanceof RegExp ? "object" : _(B, P) ? "symbol" : B;
    }
    function T(P) {
      if (typeof P > "u" || P === null)
        return "" + P;
      var B = O(P);
      if (B === "object") {
        if (P instanceof Date)
          return "date";
        if (P instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function L(P) {
      var B = T(P);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function oe(P) {
      return !P.constructor || !P.constructor.name ? p : P.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Pn;
}
var _n, Qo;
function dl() {
  if (Qo)
    return _n;
  Qo = 1;
  var e = to();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, _n = function() {
    function n(s, i, c, d, u, f) {
      if (f !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, _n;
}
if (process.env.NODE_ENV !== "production") {
  var fl = pi(), pl = !0;
  zn.exports = ul()(fl.isElement, pl);
} else
  zn.exports = dl()();
var vl = zn.exports;
const l = /* @__PURE__ */ tl(vl), ml = "exact-prop: ​";
function gl(e) {
  return process.env.NODE_ENV === "production" ? e : C({}, e, {
    [ml]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Nt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var jn = { exports: {} }, $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea;
function hl() {
  if (ea)
    return $e;
  ea = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), i = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function v(m) {
    if (typeof m == "object" && m !== null) {
      var $ = m.$$typeof;
      switch ($) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case d:
            case u:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case i:
                case s:
                case c:
                case p:
                case f:
                case a:
                  return m;
                default:
                  return $;
              }
          }
        case t:
          return $;
      }
    }
  }
  return $e.ContextConsumer = s, $e.ContextProvider = a, $e.Element = e, $e.ForwardRef = c, $e.Fragment = r, $e.Lazy = p, $e.Memo = f, $e.Portal = t, $e.Profiler = o, $e.StrictMode = n, $e.Suspense = d, $e.SuspenseList = u, $e.isAsyncMode = function() {
    return !1;
  }, $e.isConcurrentMode = function() {
    return !1;
  }, $e.isContextConsumer = function(m) {
    return v(m) === s;
  }, $e.isContextProvider = function(m) {
    return v(m) === a;
  }, $e.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, $e.isForwardRef = function(m) {
    return v(m) === c;
  }, $e.isFragment = function(m) {
    return v(m) === r;
  }, $e.isLazy = function(m) {
    return v(m) === p;
  }, $e.isMemo = function(m) {
    return v(m) === f;
  }, $e.isPortal = function(m) {
    return v(m) === t;
  }, $e.isProfiler = function(m) {
    return v(m) === o;
  }, $e.isStrictMode = function(m) {
    return v(m) === n;
  }, $e.isSuspense = function(m) {
    return v(m) === d;
  }, $e.isSuspenseList = function(m) {
    return v(m) === u;
  }, $e.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === d || m === u || m === h || typeof m == "object" && m !== null && (m.$$typeof === p || m.$$typeof === f || m.$$typeof === a || m.$$typeof === s || m.$$typeof === c || m.$$typeof === g || m.getModuleId !== void 0);
  }, $e.typeOf = v, $e;
}
var Ee = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function yl() {
  return ta || (ta = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), i = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = !1, v = !1, m = !1, $ = !1, w = !1, I;
    I = Symbol.for("react.module.reference");
    function y(W) {
      return !!(typeof W == "string" || typeof W == "function" || W === r || W === o || w || W === n || W === d || W === u || $ || W === h || g || v || m || typeof W == "object" && W !== null && (W.$$typeof === p || W.$$typeof === f || W.$$typeof === a || W.$$typeof === s || W.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      W.$$typeof === I || W.getModuleId !== void 0));
    }
    function x(W) {
      if (typeof W == "object" && W !== null) {
        var F = W.$$typeof;
        switch (F) {
          case e:
            var Z = W.type;
            switch (Z) {
              case r:
              case o:
              case n:
              case d:
              case u:
                return Z;
              default:
                var ie = Z && Z.$$typeof;
                switch (ie) {
                  case i:
                  case s:
                  case c:
                  case p:
                  case f:
                  case a:
                    return ie;
                  default:
                    return F;
                }
            }
          case t:
            return F;
        }
      }
    }
    var E = s, R = a, N = e, k = c, V = r, j = p, Y = f, M = t, Q = o, _ = n, O = d, T = u, L = !1, oe = !1;
    function P(W) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(W) {
      return oe || (oe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(W) {
      return x(W) === s;
    }
    function K(W) {
      return x(W) === a;
    }
    function U(W) {
      return typeof W == "object" && W !== null && W.$$typeof === e;
    }
    function te(W) {
      return x(W) === c;
    }
    function ee(W) {
      return x(W) === r;
    }
    function re(W) {
      return x(W) === p;
    }
    function G(W) {
      return x(W) === f;
    }
    function A(W) {
      return x(W) === t;
    }
    function q(W) {
      return x(W) === o;
    }
    function se(W) {
      return x(W) === n;
    }
    function D(W) {
      return x(W) === d;
    }
    function ae(W) {
      return x(W) === u;
    }
    Ee.ContextConsumer = E, Ee.ContextProvider = R, Ee.Element = N, Ee.ForwardRef = k, Ee.Fragment = V, Ee.Lazy = j, Ee.Memo = Y, Ee.Portal = M, Ee.Profiler = Q, Ee.StrictMode = _, Ee.Suspense = O, Ee.SuspenseList = T, Ee.isAsyncMode = P, Ee.isConcurrentMode = B, Ee.isContextConsumer = J, Ee.isContextProvider = K, Ee.isElement = U, Ee.isForwardRef = te, Ee.isFragment = ee, Ee.isLazy = re, Ee.isMemo = G, Ee.isPortal = A, Ee.isProfiler = q, Ee.isStrictMode = se, Ee.isSuspense = D, Ee.isSuspenseList = ae, Ee.isValidElementType = y, Ee.typeOf = x;
  }()), Ee;
}
process.env.NODE_ENV === "production" ? jn.exports = hl() : jn.exports = yl();
var ra = jn.exports;
const bl = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function xl(e) {
  const t = `${e}`.match(bl);
  return t && t[1] || "";
}
function mi(e, t = "") {
  return e.displayName || e.name || xl(e) || t;
}
function na(e, t, r) {
  const n = mi(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Cl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return mi(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ra.ForwardRef:
          return na(e, e.render, "ForwardRef");
        case ra.Memo:
          return na(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ln(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const a = e[t], s = o || t;
  return a == null ? null : a && a.nodeType !== 1 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an HTMLElement.`) : null;
}
const Sl = l.oneOfType([l.func, l.object]), $l = Sl;
function me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Nt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function El(e, t) {
  return /* @__PURE__ */ S.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function oa(e) {
  return e && e.ownerDocument || document;
}
function Mn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Ol = typeof window < "u" ? S.useLayoutEffect : S.useEffect, Ot = Ol;
let aa = 0;
function Il(e) {
  const [t, r] = S.useState(e), n = e || t;
  return S.useEffect(() => {
    t == null && (aa += 1, r(`mui-${aa}`));
  }, [t]), n;
}
const ia = S["useId".toString()];
function ro(e) {
  if (ia !== void 0) {
    const t = ia();
    return e ?? t;
  }
  return Il(e);
}
function Me(...e) {
  return S.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Mn(r, t);
    });
  }, e);
}
let Zr = !0, Hn = !1, sa;
const wl = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Tl(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && wl[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Rl(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Zr = !0);
}
function Dn() {
  Zr = !1;
}
function Pl() {
  this.visibilityState === "hidden" && Hn && (Zr = !0);
}
function _l(e) {
  e.addEventListener("keydown", Rl, !0), e.addEventListener("mousedown", Dn, !0), e.addEventListener("pointerdown", Dn, !0), e.addEventListener("touchstart", Dn, !0), e.addEventListener("visibilitychange", Pl, !0);
}
function Dl(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Zr || Tl(t);
}
function kl() {
  const e = S.useCallback((o) => {
    o != null && _l(o.ownerDocument);
  }, []), t = S.useRef(!1);
  function r() {
    return t.current ? (Hn = !0, window.clearTimeout(sa), sa = window.setTimeout(() => {
      Hn = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Dl(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function gi(e, t) {
  const r = C({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = C({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, a = t[n];
      r[n] = {}, !a || !Object.keys(a) ? r[n] = o : !o || !Object.keys(o) ? r[n] = a : (r[n] = C({}, a), Object.keys(o).forEach((s) => {
        r[n][s] = gi(o[s], a[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function rt(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((a, s) => {
        if (s) {
          const i = t(s);
          i !== "" && a.push(i), r && r[s] && a.push(r[s]);
        }
        return a;
      }, []).join(" ");
    }
  ), n;
}
const la = (e) => e, Al = () => {
  let e = la;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = la;
    }
  };
}, Nl = Al(), hi = Nl, Bl = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Ir(e, t, r = "Mui") {
  const n = Bl[t];
  return n ? `${r}-${n}` : `${hi.generate(e)}-${t}`;
}
function no(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Ir(e, o, r);
  }), n;
}
function yi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Vl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Fl = /* @__PURE__ */ yi(
  function(e) {
    return Vl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function zl(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function jl(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ll = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jl(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var s = zl(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (i) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', i);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), We = "-ms-", qr = "-moz-", ye = "-webkit-", oo = "comm", ao = "rule", io = "decl", Ml = "@import", bi = "@keyframes", Hl = "@layer", Wl = Math.abs, Qr = String.fromCharCode, Ul = Object.assign;
function ql(e, t) {
  return Le(e, 0) ^ 45 ? (((t << 2 ^ Le(e, 0)) << 2 ^ Le(e, 1)) << 2 ^ Le(e, 2)) << 2 ^ Le(e, 3) : 0;
}
function xi(e) {
  return e.trim();
}
function Yl(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function be(e, t, r) {
  return e.replace(t, r);
}
function Wn(e, t) {
  return e.indexOf(t);
}
function Le(e, t) {
  return e.charCodeAt(t) | 0;
}
function yr(e, t, r) {
  return e.slice(t, r);
}
function ft(e) {
  return e.length;
}
function so(e) {
  return e.length;
}
function Fr(e, t) {
  return t.push(e), e;
}
function Kl(e, t) {
  return e.map(t).join("");
}
var en = 1, Kt = 1, Ci = 0, Je = 0, ze = 0, Qt = "";
function tn(e, t, r, n, o, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: en, column: Kt, length: s, return: "" };
}
function ur(e, t) {
  return Ul(tn("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Gl() {
  return ze;
}
function Jl() {
  return ze = Je > 0 ? Le(Qt, --Je) : 0, Kt--, ze === 10 && (Kt = 1, en--), ze;
}
function et() {
  return ze = Je < Ci ? Le(Qt, Je++) : 0, Kt++, ze === 10 && (Kt = 1, en++), ze;
}
function vt() {
  return Le(Qt, Je);
}
function jr() {
  return Je;
}
function wr(e, t) {
  return yr(Qt, e, t);
}
function br(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Si(e) {
  return en = Kt = 1, Ci = ft(Qt = e), Je = 0, [];
}
function $i(e) {
  return Qt = "", e;
}
function Lr(e) {
  return xi(wr(Je - 1, Un(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xl(e) {
  for (; (ze = vt()) && ze < 33; )
    et();
  return br(e) > 2 || br(ze) > 3 ? "" : " ";
}
function Zl(e, t) {
  for (; --t && et() && !(ze < 48 || ze > 102 || ze > 57 && ze < 65 || ze > 70 && ze < 97); )
    ;
  return wr(e, jr() + (t < 6 && vt() == 32 && et() == 32));
}
function Un(e) {
  for (; et(); )
    switch (ze) {
      case e:
        return Je;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Un(ze);
        break;
      case 40:
        e === 41 && Un(e);
        break;
      case 92:
        et();
        break;
    }
  return Je;
}
function Ql(e, t) {
  for (; et() && e + ze !== 47 + 10; )
    if (e + ze === 42 + 42 && vt() === 47)
      break;
  return "/*" + wr(t, Je - 1) + "*" + Qr(e === 47 ? e : et());
}
function ec(e) {
  for (; !br(vt()); )
    et();
  return wr(e, Je);
}
function tc(e) {
  return $i(Mr("", null, null, null, [""], e = Si(e), 0, [0], e));
}
function Mr(e, t, r, n, o, a, s, i, c) {
  for (var d = 0, u = 0, f = s, p = 0, h = 0, g = 0, v = 1, m = 1, $ = 1, w = 0, I = "", y = o, x = a, E = n, R = I; m; )
    switch (g = w, w = et()) {
      case 40:
        if (g != 108 && Le(R, f - 1) == 58) {
          Wn(R += be(Lr(w), "&", "&\f"), "&\f") != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += Lr(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Xl(g);
        break;
      case 92:
        R += Zl(jr() - 1, 7);
        continue;
      case 47:
        switch (vt()) {
          case 42:
          case 47:
            Fr(rc(Ql(et(), jr()), t, r), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * v:
        i[d++] = ft(R) * $;
      case 125 * v:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            m = 0;
          case 59 + u:
            $ == -1 && (R = be(R, /\f/g, "")), h > 0 && ft(R) - f && Fr(h > 32 ? ua(R + ";", n, r, f - 1) : ua(be(R, " ", "") + ";", n, r, f - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (Fr(E = ca(R, t, r, d, u, o, i, I, y = [], x = [], f), a), w === 123)
              if (u === 0)
                Mr(R, t, E, E, y, a, f, i, x);
              else
                switch (p === 99 && Le(R, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Mr(e, E, E, n && Fr(ca(e, E, E, 0, 0, o, i, I, o, y = [], f), x), o, x, f, i, n ? y : x);
                    break;
                  default:
                    Mr(R, E, E, E, [""], x, 0, i, x);
                }
        }
        d = u = h = 0, v = $ = 1, I = R = "", f = s;
        break;
      case 58:
        f = 1 + ft(R), h = g;
      default:
        if (v < 1) {
          if (w == 123)
            --v;
          else if (w == 125 && v++ == 0 && Jl() == 125)
            continue;
        }
        switch (R += Qr(w), w * v) {
          case 38:
            $ = u > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            i[d++] = (ft(R) - 1) * $, $ = 1;
            break;
          case 64:
            vt() === 45 && (R += Lr(et())), p = vt(), u = f = ft(I = R += ec(jr())), w++;
            break;
          case 45:
            g === 45 && ft(R) == 2 && (v = 0);
        }
    }
  return a;
}
function ca(e, t, r, n, o, a, s, i, c, d, u) {
  for (var f = o - 1, p = o === 0 ? a : [""], h = so(p), g = 0, v = 0, m = 0; g < n; ++g)
    for (var $ = 0, w = yr(e, f + 1, f = Wl(v = s[g])), I = e; $ < h; ++$)
      (I = xi(v > 0 ? p[$] + " " + w : be(w, /&\f/g, p[$]))) && (c[m++] = I);
  return tn(e, t, r, o === 0 ? ao : i, c, d, u);
}
function rc(e, t, r) {
  return tn(e, t, r, oo, Qr(Gl()), yr(e, 2, -2), 0);
}
function ua(e, t, r, n) {
  return tn(e, t, r, io, yr(e, 0, n), yr(e, n + 1, -1), n);
}
function Wt(e, t) {
  for (var r = "", n = so(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function nc(e, t, r, n) {
  switch (e.type) {
    case Hl:
      if (e.children.length)
        break;
    case Ml:
    case io:
      return e.return = e.return || e.value;
    case oo:
      return "";
    case bi:
      return e.return = e.value + "{" + Wt(e.children, n) + "}";
    case ao:
      e.value = e.props.join(",");
  }
  return ft(r = Wt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function oc(e) {
  var t = so(e);
  return function(r, n, o, a) {
    for (var s = "", i = 0; i < t; i++)
      s += e[i](r, n, o, a) || "";
    return s;
  };
}
function ac(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ic = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = vt(), o === 38 && a === 12 && (r[n] = 1), !br(a); )
    et();
  return wr(t, Je);
}, sc = function(t, r) {
  var n = -1, o = 44;
  do
    switch (br(o)) {
      case 0:
        o === 38 && vt() === 12 && (r[n] = 1), t[n] += ic(Je - 1, r, n);
        break;
      case 2:
        t[n] += Lr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = vt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Qr(o);
    }
  while (o = et());
  return t;
}, lc = function(t, r) {
  return $i(sc(Si(t), r));
}, da = /* @__PURE__ */ new WeakMap(), cc = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !da.get(n)) && !o) {
      da.set(t, !0);
      for (var a = [], s = lc(r, a), i = n.props, c = 0, d = 0; c < s.length; c++)
        for (var u = 0; u < i.length; u++, d++)
          t.props[d] = a[c] ? s[c].replace(/&\f/g, i[u]) : i[u] + " " + s[c];
    }
  }
}, uc = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, dc = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", fc = function(t) {
  return t.type === "comm" && t.children.indexOf(dc) > -1;
}, pc = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var a = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var s = !!r.parent, i = s ? r.parent.children : (
          // global rule at the root level
          o
        ), c = i.length - 1; c >= 0; c--) {
          var d = i[c];
          if (d.line < r.line)
            break;
          if (d.column < r.column) {
            if (fc(d))
              return;
            break;
          }
        }
        a.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Ei = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, vc = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Ei(r[n]))
      return !0;
  return !1;
}, fa = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, mc = function(t, r, n) {
  Ei(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), fa(t)) : vc(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), fa(t)));
};
function Oi(e, t) {
  switch (ql(e, t)) {
    case 5103:
      return ye + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ye + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ye + e + qr + e + We + e + e;
    case 6828:
    case 4268:
      return ye + e + We + e + e;
    case 6165:
      return ye + e + We + "flex-" + e + e;
    case 5187:
      return ye + e + be(e, /(\w+).+(:[^]+)/, ye + "box-$1$2" + We + "flex-$1$2") + e;
    case 5443:
      return ye + e + We + "flex-item-" + be(e, /flex-|-self/, "") + e;
    case 4675:
      return ye + e + We + "flex-line-pack" + be(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ye + e + We + be(e, "shrink", "negative") + e;
    case 5292:
      return ye + e + We + be(e, "basis", "preferred-size") + e;
    case 6060:
      return ye + "box-" + be(e, "-grow", "") + ye + e + We + be(e, "grow", "positive") + e;
    case 4554:
      return ye + be(e, /([^-])(transform)/g, "$1" + ye + "$2") + e;
    case 6187:
      return be(be(be(e, /(zoom-|grab)/, ye + "$1"), /(image-set)/, ye + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return be(e, /(image-set\([^]*)/, ye + "$1$`$1");
    case 4968:
      return be(be(e, /(.+:)(flex-)?(.*)/, ye + "box-pack:$3" + We + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ye + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return be(e, /(.+)-inline(.+)/, ye + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ft(e) - 1 - t > 6)
        switch (Le(e, t + 1)) {
          case 109:
            if (Le(e, t + 4) !== 45)
              break;
          case 102:
            return be(e, /(.+:)(.+)-([^]+)/, "$1" + ye + "$2-$3$1" + qr + (Le(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Wn(e, "stretch") ? Oi(be(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Le(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Le(e, ft(e) - 3 - (~Wn(e, "!important") && 10))) {
        case 107:
          return be(e, ":", ":" + ye) + e;
        case 101:
          return be(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ye + (Le(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ye + "$2$3$1" + We + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Le(e, t + 11)) {
        case 114:
          return ye + e + We + be(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ye + e + We + be(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ye + e + We + be(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ye + e + We + e + e;
  }
  return e;
}
var gc = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case io:
        t.return = Oi(t.value, t.length);
        break;
      case bi:
        return Wt([ur(t, {
          value: be(t.value, "@", "@" + ye)
        })], o);
      case ao:
        if (t.length)
          return Kl(t.props, function(a) {
            switch (Yl(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Wt([ur(t, {
                  props: [be(a, /:(read-\w+)/, ":" + qr + "$1")]
                })], o);
              case "::placeholder":
                return Wt([ur(t, {
                  props: [be(a, /:(plac\w+)/, ":" + ye + "input-$1")]
                }), ur(t, {
                  props: [be(a, /:(plac\w+)/, ":" + qr + "$1")]
                }), ur(t, {
                  props: [be(a, /:(plac\w+)/, We + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, hc = [gc], yc = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(v) {
      var m = v.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || hc;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, s, i = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(v) {
      for (var m = v.getAttribute("data-emotion").split(" "), $ = 1; $ < m.length; $++)
        a[m[$]] = !0;
      i.push(v);
    }
  );
  var c, d = [cc, uc];
  process.env.NODE_ENV !== "production" && d.push(pc({
    get compat() {
      return g.compat;
    }
  }), mc);
  {
    var u, f = [nc, process.env.NODE_ENV !== "production" ? function(v) {
      v.root || (v.return ? u.insert(v.return) : v.value && v.type !== oo && u.insert(v.value + "{}"));
    } : ac(function(v) {
      u.insert(v);
    })], p = oc(d.concat(o, f)), h = function(m) {
      return Wt(tc(m), p);
    };
    c = function(m, $, w, I) {
      u = w, process.env.NODE_ENV !== "production" && $.map !== void 0 && (u = {
        insert: function(x) {
          w.insert(x + $.map);
        }
      }), h(m ? m + "{" + $.styles + "}" : $.styles), I && (g.inserted[$.name] = !0);
    };
  }
  var g = {
    key: r,
    sheet: new Ll({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: c
  };
  return g.sheet.hydrate(i), g;
}, bc = !0;
function Ii(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var lo = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  bc === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, wi = function(t, r, n) {
  lo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function xc(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Cc = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, pa = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Sc = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", $c = /[A-Z]|^ms/g, Ti = /_EMO_([^_]+?)_([^]*?)_EMO_/g, co = function(t) {
  return t.charCodeAt(1) === 45;
}, va = function(t) {
  return t != null && typeof t != "boolean";
}, kn = /* @__PURE__ */ yi(function(e) {
  return co(e) ? e : e.replace($c, "-$&").toLowerCase();
}), Yr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ti, function(n, o, a) {
          return ut = {
            name: o,
            styles: a,
            next: ut
          }, o;
        });
  }
  return Cc[t] !== 1 && !co(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Ec = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Oc = ["normal", "none", "initial", "inherit", "unset"], Ic = Yr, wc = /^-ms-/, Tc = /-(.)/g, ma = {};
  Yr = function(t, r) {
    if (t === "content" && (typeof r != "string" || Oc.indexOf(r) === -1 && !Ec.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = Ic(t, r);
    return n !== "" && !co(t) && t.indexOf("-") !== -1 && ma[t] === void 0 && (ma[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(wc, "ms-").replace(Tc, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Ri = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function xr(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Ri);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return ut = {
          name: r.name,
          styles: r.styles,
          next: ut
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ut = {
              name: n.name,
              styles: n.styles,
              next: ut
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Rc(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = ut, s = r(e);
        return ut = a, xr(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var i = [], c = r.replace(Ti, function(u, f, p) {
          var h = "animation" + i.length;
          return i.push("const " + h + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + h + "}";
        });
        i.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(i, ["`" + c + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + c + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var d = t[r];
  return d !== void 0 ? d : r;
}
function Rc(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += xr(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += a + "{" + t[s] + "}" : va(s) && (n += kn(a) + ":" + Yr(a, s) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Ri);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var i = 0; i < s.length; i++)
            va(s[i]) && (n += kn(a) + ":" + Yr(a, s[i]) + ";");
        else {
          var c = xr(e, t, s);
          switch (a) {
            case "animation":
            case "animationName": {
              n += kn(a) + ":" + c + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(Sc), n += a + "{" + c + "}";
          }
        }
      }
    }
  return n;
}
var ga = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Pi;
process.env.NODE_ENV !== "production" && (Pi = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ut, qn = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  ut = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, a += xr(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(pa), a += s[0]);
  for (var i = 1; i < t.length; i++)
    a += xr(n, r, t[i]), o && (process.env.NODE_ENV !== "production" && s[i] === void 0 && console.error(pa), a += s[i]);
  var c;
  process.env.NODE_ENV !== "production" && (a = a.replace(Pi, function(p) {
    return c = p, "";
  })), ga.lastIndex = 0;
  for (var d = "", u; (u = ga.exec(a)) !== null; )
    d += "-" + // $FlowFixMe we know it's not null
    u[1];
  var f = xc(a) + d;
  return process.env.NODE_ENV !== "production" ? {
    name: f,
    styles: a,
    map: c,
    next: ut,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: f,
    styles: a,
    next: ut
  };
}, Pc = function(t) {
  return t();
}, _c = S["useInsertionEffect"] ? S["useInsertionEffect"] : !1, _i = _c || Pc, Dc = {}.hasOwnProperty, uo = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ yc({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (uo.displayName = "EmotionCacheContext");
uo.Provider;
var Di = function(t) {
  return /* @__PURE__ */ Js(function(r, n) {
    var o = Xs(uo);
    return t(r, o, n);
  });
}, rn = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (rn.displayName = "EmotionThemeContext");
var ha = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ya = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", kc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return lo(r, n, o), _i(function() {
    return wi(r, n, o);
  }), null;
}, Ac = /* @__PURE__ */ Di(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[ha], a = [n], s = "";
  typeof e.className == "string" ? s = Ii(t.registered, a, e.className) : e.className != null && (s = e.className + " ");
  var i = qn(a, void 0, S.useContext(rn));
  if (process.env.NODE_ENV !== "production" && i.name.indexOf("-") === -1) {
    var c = e[ya];
    c && (i = qn([i, "label:" + c + ";"]));
  }
  s += t.key + "-" + i.name;
  var d = {};
  for (var u in e)
    Dc.call(e, u) && u !== "css" && u !== ha && (process.env.NODE_ENV === "production" || u !== ya) && (d[u] = e[u]);
  return d.ref = r, d.className = s, /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(kc, {
    cache: t,
    serialized: i,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ S.createElement(o, d));
});
process.env.NODE_ENV !== "production" && (Ac.displayName = "EmotionCssPropInternal");
var Nc = Fl, Bc = function(t) {
  return t !== "theme";
}, ba = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Nc : Bc;
}, xa = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(s) {
      return t.__emotion_forwardProp(s) && a(s);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Ca = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Vc = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return lo(r, n, o), _i(function() {
    return wi(r, n, o);
  }), null;
}, Fc = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, s;
  r !== void 0 && (a = r.label, s = r.target);
  var i = xa(t, r, n), c = i || ba(o), d = !c("as");
  return function() {
    var u = arguments, f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && f.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      f.push.apply(f, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(Ca), f.push(u[0][0]);
      for (var p = u.length, h = 1; h < p; h++)
        process.env.NODE_ENV !== "production" && u[0][h] === void 0 && console.error(Ca), f.push(u[h], u[0][h]);
    }
    var g = Di(function(v, m, $) {
      var w = d && v.as || o, I = "", y = [], x = v;
      if (v.theme == null) {
        x = {};
        for (var E in v)
          x[E] = v[E];
        x.theme = S.useContext(rn);
      }
      typeof v.className == "string" ? I = Ii(m.registered, y, v.className) : v.className != null && (I = v.className + " ");
      var R = qn(f.concat(y), m.registered, x);
      I += m.key + "-" + R.name, s !== void 0 && (I += " " + s);
      var N = d && i === void 0 ? ba(w) : c, k = {};
      for (var V in v)
        d && V === "as" || // $FlowFixMe
        N(V) && (k[V] = v[V]);
      return k.className = I, k.ref = $, /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Vc, {
        cache: m,
        serialized: R,
        isStringTag: typeof w == "string"
      }), /* @__PURE__ */ S.createElement(w, k));
    });
    return g.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = f, g.__emotion_forwardProp = i, Object.defineProperty(g, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), g.withComponent = function(v, m) {
      return e(v, C({}, r, m, {
        shouldForwardProp: xa(g, m, !0)
      })).apply(void 0, f);
    }, g;
  };
}, zc = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Yn = Fc.bind();
zc.forEach(function(e) {
  Yn[e] = Yn(e);
});
/**
 * @mui/styled-engine v5.14.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ki(e, t) {
  const r = Yn(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const jc = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
};
function pe(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const Lc = ["values", "unit", "step"], Mc = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => C({}, r, {
    [n.key]: n.val
  }), {});
};
function Ai(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = pe(e, Lc), a = Mc(t), s = Object.keys(a);
  function i(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function c(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function d(p, h) {
    const g = s.indexOf(h);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : h) - n / 100}${r})`;
  }
  function u(p) {
    return s.indexOf(p) + 1 < s.length ? d(p, s[s.indexOf(p) + 1]) : i(p);
  }
  function f(p) {
    const h = s.indexOf(p);
    return h === 0 ? i(s[1]) : h === s.length - 1 ? c(s[h]) : d(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return C({
    keys: s,
    values: a,
    up: i,
    down: c,
    between: d,
    only: u,
    not: f,
    unit: r
  }, o);
}
const Hc = {
  borderRadius: 4
}, Wc = Hc, Uc = process.env.NODE_ENV !== "production" ? l.oneOfType([l.number, l.string, l.object, l.array]) : {}, It = Uc;
function mr(e, t) {
  return t ? Ye(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const fo = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Sa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${fo[e]}px)`
};
function xt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const a = n.breakpoints || Sa;
    return t.reduce((s, i, c) => (s[a.up(a.keys[c])] = r(t[c]), s), {});
  }
  if (typeof t == "object") {
    const a = n.breakpoints || Sa;
    return Object.keys(t).reduce((s, i) => {
      if (Object.keys(a.values || fo).indexOf(i) !== -1) {
        const c = a.up(i);
        s[c] = r(t[i], i);
      } else {
        const c = i;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return r(t);
}
function qc(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const a = e.up(o);
    return n[a] = {}, n;
  }, {})) || {};
}
function Yc(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function nn(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, a) => o && o[a] ? o[a] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Kr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = nn(e, r) || n, t && (o = t(o, n, e)), o;
}
function Oe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const i = s[t], c = s.theme, d = nn(c, n) || {};
    return xt(s, i, (f) => {
      let p = Kr(d, o, f);
      return f === p && typeof f == "string" && (p = Kr(d, o, `${t}${f === "default" ? "" : me(f)}`, f)), r === !1 ? p : {
        [r]: p
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: It
  } : {}, a.filterProps = [t], a;
}
function Kc(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Gc = {
  m: "margin",
  p: "padding"
}, Jc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $a = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Xc = Kc((e) => {
  if (e.length > 2)
    if ($a[e])
      e = $a[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Gc[t], o = Jc[r] || "";
  return Array.isArray(o) ? o.map((a) => n + a) : [n + o];
}), on = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], an = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Zc = [...on, ...an];
function Tr(e, t, r, n) {
  var o;
  const a = (o = nn(e, t, !1)) != null ? o : r;
  return typeof a == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), a * s) : Array.isArray(a) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > a.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(a)}.`, `${s} > ${a.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), a[s]) : typeof a == "function" ? a : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${a}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ni(e) {
  return Tr(e, "spacing", 8, "spacing");
}
function Rr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Qc(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Rr(t, r), n), {});
}
function eu(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Xc(r), a = Qc(o, n), s = e[r];
  return xt(e, s, a);
}
function Bi(e, t) {
  const r = Ni(e.theme);
  return Object.keys(e).map((n) => eu(e, t, n, r)).reduce(mr, {});
}
function ke(e) {
  return Bi(e, on);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? on.reduce((e, t) => (e[t] = It, e), {}) : {};
ke.filterProps = on;
function Ae(e) {
  return Bi(e, an);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? an.reduce((e, t) => (e[t] = It, e), {}) : {};
Ae.filterProps = an;
process.env.NODE_ENV !== "production" && Zc.reduce((e, t) => (e[t] = It, e), {});
function Vi(e = 8) {
  if (e.mui)
    return e;
  const t = Ni({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function sn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, a) => t[a] ? mr(o, t[a](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function pt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const tu = Oe({
  prop: "border",
  themeKey: "borders",
  transform: pt
}), ru = Oe({
  prop: "borderTop",
  themeKey: "borders",
  transform: pt
}), nu = Oe({
  prop: "borderRight",
  themeKey: "borders",
  transform: pt
}), ou = Oe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: pt
}), au = Oe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: pt
}), iu = Oe({
  prop: "borderColor",
  themeKey: "palette"
}), su = Oe({
  prop: "borderTopColor",
  themeKey: "palette"
}), lu = Oe({
  prop: "borderRightColor",
  themeKey: "palette"
}), cu = Oe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), uu = Oe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), ln = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Tr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Rr(t, n)
    });
    return xt(e, e.borderRadius, r);
  }
  return null;
};
ln.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: It
} : {};
ln.filterProps = ["borderRadius"];
sn(tu, ru, nu, ou, au, iu, su, lu, cu, uu, ln);
const cn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Tr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Rr(t, n)
    });
    return xt(e, e.gap, r);
  }
  return null;
};
cn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: It
} : {};
cn.filterProps = ["gap"];
const un = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Tr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Rr(t, n)
    });
    return xt(e, e.columnGap, r);
  }
  return null;
};
un.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: It
} : {};
un.filterProps = ["columnGap"];
const dn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Tr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Rr(t, n)
    });
    return xt(e, e.rowGap, r);
  }
  return null;
};
dn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: It
} : {};
dn.filterProps = ["rowGap"];
const du = Oe({
  prop: "gridColumn"
}), fu = Oe({
  prop: "gridRow"
}), pu = Oe({
  prop: "gridAutoFlow"
}), vu = Oe({
  prop: "gridAutoColumns"
}), mu = Oe({
  prop: "gridAutoRows"
}), gu = Oe({
  prop: "gridTemplateColumns"
}), hu = Oe({
  prop: "gridTemplateRows"
}), yu = Oe({
  prop: "gridTemplateAreas"
}), bu = Oe({
  prop: "gridArea"
});
sn(cn, un, dn, du, fu, pu, vu, mu, gu, hu, yu, bu);
function Ut(e, t) {
  return t === "grey" ? t : e;
}
const xu = Oe({
  prop: "color",
  themeKey: "palette",
  transform: Ut
}), Cu = Oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ut
}), Su = Oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ut
});
sn(xu, Cu, Su);
function Qe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const $u = Oe({
  prop: "width",
  transform: Qe
}), po = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const a = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || fo[r];
      return a ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${a}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: Qe(r)
      };
    };
    return xt(e, e.maxWidth, t);
  }
  return null;
};
po.filterProps = ["maxWidth"];
const Eu = Oe({
  prop: "minWidth",
  transform: Qe
}), Ou = Oe({
  prop: "height",
  transform: Qe
}), Iu = Oe({
  prop: "maxHeight",
  transform: Qe
}), wu = Oe({
  prop: "minHeight",
  transform: Qe
});
Oe({
  prop: "size",
  cssProperty: "width",
  transform: Qe
});
Oe({
  prop: "size",
  cssProperty: "height",
  transform: Qe
});
const Tu = Oe({
  prop: "boxSizing"
});
sn($u, po, Eu, Ou, Iu, wu, Tu);
const Ru = {
  // borders
  border: {
    themeKey: "borders",
    transform: pt
  },
  borderTop: {
    themeKey: "borders",
    transform: pt
  },
  borderRight: {
    themeKey: "borders",
    transform: pt
  },
  borderBottom: {
    themeKey: "borders",
    transform: pt
  },
  borderLeft: {
    themeKey: "borders",
    transform: pt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ln
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ut
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ut
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ut
  },
  // spacing
  p: {
    style: Ae
  },
  pt: {
    style: Ae
  },
  pr: {
    style: Ae
  },
  pb: {
    style: Ae
  },
  pl: {
    style: Ae
  },
  px: {
    style: Ae
  },
  py: {
    style: Ae
  },
  padding: {
    style: Ae
  },
  paddingTop: {
    style: Ae
  },
  paddingRight: {
    style: Ae
  },
  paddingBottom: {
    style: Ae
  },
  paddingLeft: {
    style: Ae
  },
  paddingX: {
    style: Ae
  },
  paddingY: {
    style: Ae
  },
  paddingInline: {
    style: Ae
  },
  paddingInlineStart: {
    style: Ae
  },
  paddingInlineEnd: {
    style: Ae
  },
  paddingBlock: {
    style: Ae
  },
  paddingBlockStart: {
    style: Ae
  },
  paddingBlockEnd: {
    style: Ae
  },
  m: {
    style: ke
  },
  mt: {
    style: ke
  },
  mr: {
    style: ke
  },
  mb: {
    style: ke
  },
  ml: {
    style: ke
  },
  mx: {
    style: ke
  },
  my: {
    style: ke
  },
  margin: {
    style: ke
  },
  marginTop: {
    style: ke
  },
  marginRight: {
    style: ke
  },
  marginBottom: {
    style: ke
  },
  marginLeft: {
    style: ke
  },
  marginX: {
    style: ke
  },
  marginY: {
    style: ke
  },
  marginInline: {
    style: ke
  },
  marginInlineStart: {
    style: ke
  },
  marginInlineEnd: {
    style: ke
  },
  marginBlock: {
    style: ke
  },
  marginBlockStart: {
    style: ke
  },
  marginBlockEnd: {
    style: ke
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: cn
  },
  rowGap: {
    style: dn
  },
  columnGap: {
    style: un
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Qe
  },
  maxWidth: {
    style: po
  },
  minWidth: {
    transform: Qe
  },
  height: {
    transform: Qe
  },
  maxHeight: {
    transform: Qe
  },
  minHeight: {
    transform: Qe
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Pr = Ru;
function Pu(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function _u(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Du() {
  function e(r, n, o, a) {
    const s = {
      [r]: n,
      theme: o
    }, i = a[r];
    if (!i)
      return {
        [r]: n
      };
    const {
      cssProperty: c = r,
      themeKey: d,
      transform: u,
      style: f
    } = i;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const p = nn(o, d) || {};
    return f ? f(s) : xt(s, n, (g) => {
      let v = Kr(p, u, g);
      return g === v && typeof g == "string" && (v = Kr(p, u, `${r}${g === "default" ? "" : me(g)}`, g)), c === !1 ? v : {
        [c]: v
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: a = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = a.unstable_sxConfig) != null ? n : Pr;
    function i(c) {
      let d = c;
      if (typeof c == "function")
        d = c(a);
      else if (typeof c != "object")
        return c;
      if (!d)
        return null;
      const u = qc(a.breakpoints), f = Object.keys(u);
      let p = u;
      return Object.keys(d).forEach((h) => {
        const g = _u(d[h], a);
        if (g != null)
          if (typeof g == "object")
            if (s[h])
              p = mr(p, e(h, g, a, s));
            else {
              const v = xt({
                theme: a
              }, g, (m) => ({
                [h]: m
              }));
              Pu(v, g) ? p[h] = t({
                sx: g,
                theme: a
              }) : p = mr(p, v);
            }
          else
            p = mr(p, e(h, g, a, s));
      }), Yc(f, p);
    }
    return Array.isArray(o) ? o.map(i) : i(o);
  }
  return t;
}
const Fi = Du();
Fi.filterProps = ["sx"];
const _r = Fi, ku = ["breakpoints", "palette", "spacing", "shape"];
function vo(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {}
  } = e, s = pe(e, ku), i = Ai(r), c = Vi(o);
  let d = Ye({
    breakpoints: i,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: C({
      mode: "light"
    }, n),
    spacing: c,
    shape: C({}, Wc, a)
  }, s);
  return d = t.reduce((u, f) => Ye(u, f), d), d.unstable_sxConfig = C({}, Pr, s == null ? void 0 : s.unstable_sxConfig), d.unstable_sx = function(f) {
    return _r({
      sx: f,
      theme: this
    });
  }, d;
}
function Au(e) {
  return Object.keys(e).length === 0;
}
function Nu(e = null) {
  const t = S.useContext(rn);
  return !t || Au(t) ? e : t;
}
const Bu = vo();
function zi(e = Bu) {
  return Nu(e);
}
const Vu = ["sx"], Fu = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : Pr;
  return Object.keys(e).forEach((a) => {
    o[a] ? n.systemProps[a] = e[a] : n.otherProps[a] = e[a];
  }), n;
};
function ji(e) {
  const {
    sx: t
  } = e, r = pe(e, Vu), {
    systemProps: n,
    otherProps: o
  } = Fu(r);
  let a;
  return Array.isArray(t) ? a = [n, ...t] : typeof t == "function" ? a = (...s) => {
    const i = t(...s);
    return _t(i) ? C({}, n, i) : n;
  } : a = C({}, n, t), C({}, o, {
    sx: a
  });
}
function Li(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Li(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ct() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Li(e)) && (n && (n += " "), n += t);
  return n;
}
const zu = ["className", "component"];
function ju(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, a = ki("div", {
    shouldForwardProp: (i) => i !== "theme" && i !== "sx" && i !== "as"
  })(_r);
  return /* @__PURE__ */ S.forwardRef(function(c, d) {
    const u = zi(r), f = ji(c), {
      className: p,
      component: h = "div"
    } = f, g = pe(f, zu);
    return /* @__PURE__ */ H.jsx(a, C({
      as: h,
      ref: d,
      className: Ct(p, o ? o(n) : n),
      theme: t && u[t] || u
    }, g));
  });
}
const Lu = ["variant"];
function Ea(e) {
  return e.length === 0;
}
function Mi(e) {
  const {
    variant: t
  } = e, r = pe(e, Lu);
  let n = t || "";
  return Object.keys(r).sort().forEach((o) => {
    o === "color" ? n += Ea(n) ? e[o] : me(e[o]) : n += `${Ea(n) ? o : me(o)}${me(e[o].toString())}`;
  }), n;
}
const Mu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Hu(e) {
  return Object.keys(e).length === 0;
}
function Wu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Uu = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, qu = (e, t) => {
  let r = [];
  t && t.components && t.components[e] && t.components[e].variants && (r = t.components[e].variants);
  const n = {};
  return r.forEach((o) => {
    const a = Mi(o.props);
    n[a] = o.style;
  }), n;
}, Yu = (e, t, r, n) => {
  var o;
  const {
    ownerState: a = {}
  } = e, s = [], i = r == null || (o = r.components) == null || (o = o[n]) == null ? void 0 : o.variants;
  return i && i.forEach((c) => {
    let d = !0;
    Object.keys(c.props).forEach((u) => {
      a[u] !== c.props[u] && e[u] !== c.props[u] && (d = !1);
    }), d && s.push(t[Mi(c.props)]);
  }), s;
};
function Hr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ku = vo(), Oa = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function dr({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return Hu(t) ? e : t[r] || t;
}
function Gu(e) {
  return e ? (t, r) => r[e] : null;
}
function Hi(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Ku,
    rootShouldForwardProp: n = Hr,
    slotShouldForwardProp: o = Hr
  } = e, a = (s) => _r(C({}, s, {
    theme: dr(C({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return a.__mui_systemSx = !0, (s, i = {}) => {
    jc(s, (y) => y.filter((x) => !(x != null && x.__mui_systemSx)));
    const {
      name: c,
      slot: d,
      skipVariantsResolver: u,
      skipSx: f,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Gu(Oa(d))
    } = i, h = pe(i, Mu), g = u !== void 0 ? u : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), v = f || !1;
    let m;
    process.env.NODE_ENV !== "production" && c && (m = `${c}-${Oa(d || "Root")}`);
    let $ = Hr;
    d === "Root" || d === "root" ? $ = n : d ? $ = o : Wu(s) && ($ = void 0);
    const w = ki(s, C({
      shouldForwardProp: $,
      label: m
    }, h)), I = (y, ...x) => {
      const E = x ? x.map((V) => typeof V == "function" && V.__emotion_real !== V ? (j) => V(C({}, j, {
        theme: dr(C({}, j, {
          defaultTheme: r,
          themeId: t
        }))
      })) : V) : [];
      let R = y;
      c && p && E.push((V) => {
        const j = dr(C({}, V, {
          defaultTheme: r,
          themeId: t
        })), Y = Uu(c, j);
        if (Y) {
          const M = {};
          return Object.entries(Y).forEach(([Q, _]) => {
            M[Q] = typeof _ == "function" ? _(C({}, V, {
              theme: j
            })) : _;
          }), p(V, M);
        }
        return null;
      }), c && !g && E.push((V) => {
        const j = dr(C({}, V, {
          defaultTheme: r,
          themeId: t
        }));
        return Yu(V, qu(c, j), j, c);
      }), v || E.push(a);
      const N = E.length - x.length;
      if (Array.isArray(y) && N > 0) {
        const V = new Array(N).fill("");
        R = [...y, ...V], R.raw = [...y.raw, ...V];
      } else
        typeof y == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        y.__emotion_real !== y && (R = (V) => y(C({}, V, {
          theme: dr(C({}, V, {
            defaultTheme: r,
            themeId: t
          }))
        })));
      const k = w(R, ...E);
      if (process.env.NODE_ENV !== "production") {
        let V;
        c && (V = `${c}${me(d || "")}`), V === void 0 && (V = `Styled(${Cl(s)})`), k.displayName = V;
      }
      return s.muiName && (k.muiName = s.muiName), k;
    };
    return w.withConfig && (I.withConfig = w.withConfig), I;
  };
}
function Ju(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : gi(t.components[r].defaultProps, n);
}
function Wi({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = zi(r);
  return n && (o = o[n] || o), Ju({
    theme: o,
    name: t,
    props: e
  });
}
function Ui(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Math.min(Math.max(t, e), r);
}
function Xu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Bt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Bt(Xu(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Nt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Nt(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Pt = (e) => {
  const t = Bt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
function mo(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Zu(e) {
  e = Bt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (d, u = (d + r / 30) % 12) => o - a * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let i = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (i += "a", c.push(t[3])), mo({
    type: i,
    values: c
  });
}
function Ia(e) {
  e = Bt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Bt(Zu(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function wa(e, t) {
  const r = Ia(e), n = Ia(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Qu(e, t) {
  if (e = Bt(e), t = Ui(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return mo(e);
}
function ed(e, t) {
  if (e = Bt(e), t = Ui(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return mo(e);
}
function go(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Ta = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, td = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([i, c]) => {
      (!r || r && !r([...a, i])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...a, i], Array.isArray(c) ? [...s, i] : s) : t([...a, i], c, s));
    });
  }
  n(e);
}, rd = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0 ? t : `${t}px` : t;
function An(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return td(
    e,
    (i, c, d) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(i, c))) {
        const u = `--${r ? `${r}-` : ""}${i.join("-")}`;
        Object.assign(o, {
          [u]: rd(i, c)
        }), Ta(a, i, `var(${u})`, d), Ta(s, i, `var(${u}, ${c})`, d);
      }
    },
    (i) => i[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: a,
    varsWithDefaults: s
  };
}
const nd = ["colorSchemes", "components"], od = ["light"];
function ad(e, t) {
  const {
    colorSchemes: r = {}
  } = e, n = pe(e, nd), {
    vars: o,
    css: a,
    varsWithDefaults: s
  } = An(n, t);
  let i = s;
  const c = {}, {
    light: d
  } = r, u = pe(r, od);
  if (Object.entries(u || {}).forEach(([p, h]) => {
    const {
      vars: g,
      css: v,
      varsWithDefaults: m
    } = An(h, t);
    i = Ye(i, m), c[p] = {
      css: v,
      vars: g
    };
  }), d) {
    const {
      css: p,
      vars: h,
      varsWithDefaults: g
    } = An(d, t);
    i = Ye(i, g), c.light = {
      css: p,
      vars: h
    };
  }
  return {
    vars: i,
    generateCssVars: (p) => p ? {
      css: C({}, c[p].css),
      vars: c[p].vars
    } : {
      css: C({}, a),
      vars: o
    }
  };
}
const id = C({}, Pr, {
  // The default system themeKey is shape
  borderRadius: {
    themeKey: "radius"
  },
  // The default system themeKey is shadows
  boxShadow: {
    themeKey: "shadow"
  },
  // The default system themeKey is typography
  fontFamily: {
    themeKey: "fontFamily"
  },
  // The default system themeKey is typography
  fontSize: {
    themeKey: "fontSize"
  },
  // The default system themeKey is typography
  fontWeight: {
    themeKey: "fontWeight"
  },
  // The default system themeKey is typography
  letterSpacing: {
    themeKey: "letterSpacing"
  },
  // The default system themeKey is typography
  lineHeight: {
    themeKey: "lineHeight"
  }
}), sd = id;
function ld(e) {
  var t;
  return !!e[0].match(/^(typography|variants|breakpoints|colorInversion|colorInversionConfig)$/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/^(mode)$/)) || e[0] === "focus" && e[1] !== "thickness";
}
const lt = (e, t) => Ir(e, t, "Mui"), nt = (e, t) => no(e, t, "Mui"), ho = (e) => e && typeof e == "object" && Object.keys(e).some((t) => {
  var r;
  return (r = t.match) == null ? void 0 : r.call(t, /^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/);
}), Ra = (e, t, r) => {
  t.includes("Color") && (e.color = r), t.includes("Bg") && (e.backgroundColor = r), t.includes("Border") && (e.borderColor = r);
}, Pa = (e, t, r) => {
  const n = {};
  return Object.entries(t || {}).forEach(([o, a]) => {
    if (o.match(new RegExp(`${e}(color|bg|border)`, "i")) && a) {
      const s = r ? r(o) : a;
      o.includes("Disabled") && (n.pointerEvents = "none", n.cursor = "default", n["--Icon-color"] = "currentColor"), o.match(/(Hover|Active|Disabled)/) || (n["--variant-borderWidth"] || (n["--variant-borderWidth"] = "0px"), o.includes("Border") && (n["--variant-borderWidth"] = "1px", n.border = "var(--variant-borderWidth) solid")), Ra(n, o, s);
    }
  }), n;
}, qi = (e) => (t) => `--${e ? `${e}-` : ""}${t.replace(/^--/, "")}`, He = (e, t) => {
  let r = {};
  if (t) {
    const {
      getCssVar: n,
      palette: o
    } = t;
    Object.entries(o).forEach((a) => {
      const [s, i] = a;
      ho(i) && typeof i == "object" && (r = C({}, r, {
        [s]: Pa(e, i, (c) => n(`palette-${s}-${c}`, o[s][c]))
      }));
    });
  }
  return r.context = Pa(e, {
    plainColor: "var(--variant-plainColor)",
    plainHoverColor: "var(--variant-plainHoverColor)",
    plainHoverBg: "var(--variant-plainHoverBg)",
    plainActiveBg: "var(--variant-plainActiveBg)",
    plainDisabledColor: "var(--variant-plainDisabledColor)",
    outlinedColor: "var(--variant-outlinedColor)",
    outlinedBorder: "var(--variant-outlinedBorder)",
    outlinedHoverColor: "var(--variant-outlinedHoverColor)",
    outlinedHoverBorder: "var(--variant-outlinedHoverBorder)",
    outlinedHoverBg: "var(--variant-outlinedHoverBg)",
    outlinedActiveBg: "var(--variant-outlinedActiveBg)",
    outlinedDisabledColor: "var(--variant-outlinedDisabledColor)",
    outlinedDisabledBorder: "var(--variant-outlinedDisabledBorder)",
    softColor: "var(--variant-softColor)",
    softBg: "var(--variant-softBg)",
    softHoverColor: "var(--variant-softHoverColor)",
    softHoverBg: "var(--variant-softHoverBg)",
    softActiveBg: "var(--variant-softActiveBg)",
    softDisabledColor: "var(--variant-softDisabledColor)",
    softDisabledBg: "var(--variant-softDisabledBg)",
    solidColor: "var(--variant-solidColor)",
    solidBg: "var(--variant-solidBg)",
    solidHoverBg: "var(--variant-solidHoverBg)",
    solidActiveBg: "var(--variant-solidActiveBg)",
    solidDisabledColor: "var(--variant-solidDisabledColor)",
    solidDisabledBg: "var(--variant-solidDisabledBg)"
  }), r;
}, cd = (e, t) => {
  const r = go(e.cssVarPrefix), n = qi(e.cssVarPrefix), o = {}, a = t ? (s) => {
    var i;
    const c = s.split("-"), d = c[1], u = c[2];
    return r(s, (i = e.palette) == null || (i = i[d]) == null ? void 0 : i[u]);
  } : r;
  return Object.entries(e.palette).forEach((s) => {
    const [i, c] = s;
    ho(c) && (o[i] = {
      "--Badge-ringColor": a(`palette-${i}-softBg`),
      [e.getColorSchemeSelector("dark")]: {
        [n("--palette-focusVisible")]: a(`palette-${i}-300`),
        [n("--palette-background-body")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.1)`,
        [n("--palette-background-surface")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.08)`,
        [n("--palette-background-level1")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.2)`,
        [n("--palette-background-level2")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.4)`,
        [n("--palette-background-level3")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.6)`,
        [n("--palette-text-primary")]: a(`palette-${i}-100`),
        [n("--palette-text-secondary")]: `rgba(${a(`palette-${i}-lightChannel`)} / 0.72)`,
        [n("--palette-text-tertiary")]: `rgba(${a(`palette-${i}-lightChannel`)} / 0.6)`,
        [n("--palette-text-icon")]: `rgba(${a(`palette-${i}-lightChannel`)} / 0.6)`,
        [n("--palette-divider")]: `rgba(${a(`palette-${i}-lightChannel`)} / 0.2)`,
        "--variant-plainColor": `rgba(${a(`palette-${i}-lightChannel`)} / 1)`,
        "--variant-plainHoverColor": a(`palette-${i}-50`),
        "--variant-plainHoverBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.16)`,
        "--variant-plainActiveBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.32)`,
        "--variant-plainDisabledColor": `rgba(${a(`palette-${i}-mainChannel`)} / 0.72)`,
        "--variant-outlinedColor": `rgba(${a(`palette-${i}-lightChannel`)} / 1)`,
        "--variant-outlinedHoverColor": a(`palette-${i}-50`),
        "--variant-outlinedBg": "initial",
        "--variant-outlinedBorder": `rgba(${a(`palette-${i}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverBorder": a(`palette-${i}-600`),
        "--variant-outlinedHoverBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.16)`,
        "--variant-outlinedActiveBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.32)`,
        "--variant-outlinedDisabledColor": `rgba(${a(`palette-${i}-mainChannel`)} / 0.72)`,
        "--variant-outlinedDisabledBorder": `rgba(${a(`palette-${i}-mainChannel`)} / 0.2)`,
        "--variant-softColor": a(`palette-${i}-200`),
        "--variant-softBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.24)`,
        "--variant-softHoverColor": "#fff",
        "--variant-softHoverBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.32)`,
        "--variant-softActiveBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.48)`,
        "--variant-softDisabledColor": `rgba(${a(`palette-${i}-mainChannel`)} / 0.72)`,
        "--variant-softDisabledBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.12)`,
        "--variant-solidColor": "#fff",
        "--variant-solidBg": a(`palette-${i}-500`),
        "--variant-solidHoverColor": "#fff",
        "--variant-solidHoverBg": a(`palette-${i}-600`),
        "--variant-solidActiveBg": a(`palette-${i}-600`),
        "--variant-solidDisabledColor": `rgba(${a(`palette-${i}-mainChannel`)} / 0.72)`,
        "--variant-solidDisabledBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.12)`
      },
      // `light` (default color scheme) should come last in case that `theme.getColorSchemeSelector()` return the same value
      [e.getColorSchemeSelector("light")]: {
        [n("--palette-focusVisible")]: a(`palette-${i}-500`),
        [n("--palette-background-body")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.1)`,
        [n("--palette-background-surface")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.08)`,
        [n("--palette-background-level1")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.2)`,
        [n("--palette-background-level2")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.32)`,
        [n("--palette-background-level3")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.48)`,
        [n("--palette-text-primary")]: a(`palette-${i}-700`),
        [n("--palette-text-secondary")]: `rgba(${a(`palette-${i}-darkChannel`)} / 0.8)`,
        [n("--palette-text-tertiary")]: `rgba(${a(`palette-${i}-darkChannel`)} / 0.68)`,
        [n("--palette-text-icon")]: a(`palette-${i}-500`),
        [n("--palette-divider")]: `rgba(${a(`palette-${i}-mainChannel`)} / 0.32)`,
        "--variant-plainColor": `rgba(${a(`palette-${i}-darkChannel`)} / 0.8)`,
        "--variant-plainHoverColor": `rgba(${a(`palette-${i}-darkChannel`)} / 1)`,
        "--variant-plainHoverBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.12)`,
        "--variant-plainActiveBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.24)`,
        "--variant-plainDisabledColor": `rgba(${a(`palette-${i}-mainChannel`)} / 0.6)`,
        "--variant-outlinedColor": `rgba(${a(`palette-${i}-mainChannel`)} / 1)`,
        "--variant-outlinedBorder": `rgba(${a(`palette-${i}-mainChannel`)} / 0.4)`,
        "--variant-outlinedHoverColor": a(`palette-${i}-600`),
        "--variant-outlinedHoverBorder": a(`palette-${i}-300`),
        "--variant-outlinedHoverBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.12)`,
        "--variant-outlinedActiveBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.24)`,
        "--variant-outlinedDisabledColor": `rgba(${a(`palette-${i}-mainChannel`)} / 0.6)`,
        "--variant-outlinedDisabledBorder": `rgba(${a(`palette-${i}-mainChannel`)} / 0.12)`,
        "--variant-softColor": a(`palette-${i}-600`),
        "--variant-softBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.8)`,
        "--variant-softHoverColor": a(`palette-${i}-700`),
        "--variant-softHoverBg": a(`palette-${i}-200`),
        "--variant-softActiveBg": a(`palette-${i}-300`),
        "--variant-softDisabledColor": `rgba(${a(`palette-${i}-mainChannel`)} / 0.6)`,
        "--variant-softDisabledBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.08)`,
        "--variant-solidColor": a("palette-common-white"),
        "--variant-solidBg": a(`palette-${i}-${i === "neutral" ? "700" : "500"}`),
        "--variant-solidHoverColor": a("palette-common-white"),
        "--variant-solidHoverBg": a(`palette-${i}-600`),
        "--variant-solidActiveBg": a(`palette-${i}-600`),
        "--variant-solidDisabledColor": `rgba(${a(`palette-${i}-mainChannel`)} / 0.6)`,
        "--variant-solidDisabledBg": `rgba(${a(`palette-${i}-mainChannel`)} / 0.08)`
      }
    });
  }), o;
}, ud = (e, t) => {
  const r = go(e.cssVarPrefix), n = qi(e.cssVarPrefix), o = {}, a = t ? (s) => {
    const i = s.split("-"), c = i[1], d = i[2];
    return r(s, e.palette[c][d]);
  } : r;
  return Object.entries(e.palette).forEach((s) => {
    const [i, c] = s;
    ho(c) && (o[i] = {
      colorScheme: "dark",
      "--Badge-ringColor": a(`palette-${i}-solidBg`),
      [n("--palette-focusVisible")]: a(`palette-${i}-200`),
      [n("--palette-background-body")]: "rgba(0 0 0 / 0.1)",
      [n("--palette-background-surface")]: "rgba(0 0 0 / 0.06)",
      [n("--palette-background-popup")]: a(`palette-${i}-700`),
      [n("--palette-background-level1")]: `rgba(${a(`palette-${i}-darkChannel`)} / 0.2)`,
      [n("--palette-background-level2")]: `rgba(${a(`palette-${i}-darkChannel`)} / 0.36)`,
      [n("--palette-background-level3")]: `rgba(${a(`palette-${i}-darkChannel`)} / 0.6)`,
      [n("--palette-text-primary")]: a("palette-common-white"),
      [n("--palette-text-secondary")]: a(`palette-${i}-200`),
      [n("--palette-text-tertiary")]: a(`palette-${i}-300`),
      [n("--palette-text-icon")]: a(`palette-${i}-200`),
      [n("--palette-divider")]: `rgba(${a(`palette-${i}-lightChannel`)} / 0.32)`,
      "--variant-plainColor": a(`palette-${i}-50`),
      "--variant-plainHoverColor": "#fff",
      "--variant-plainHoverBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.12)`,
      "--variant-plainActiveBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.32)`,
      "--variant-plainDisabledColor": `rgba(${a(`palette-${i}-lightChannel`)} / 0.72)`,
      "--variant-outlinedColor": a(`palette-${i}-50`),
      "--variant-outlinedBorder": `rgba(${a(`palette-${i}-lightChannel`)} / 0.5)`,
      "--variant-outlinedHoverColor": "#fff",
      "--variant-outlinedHoverBorder": a(`palette-${i}-300`),
      "--variant-outlinedHoverBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.12)`,
      "--variant-outlinedActiveBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.32)`,
      "--variant-outlinedDisabledColor": `rgba(${a(`palette-${i}-lightChannel`)} / 0.72)`,
      "--variant-outlinedDisabledBorder": "rgba(255 255 255 / 0.2)",
      "--variant-softColor": a("palette-common-white"),
      "--variant-softHoverColor": a("palette-common-white"),
      "--variant-softBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.24)`,
      "--variant-softHoverBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.36)`,
      "--variant-softActiveBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.16)`,
      "--variant-softDisabledColor": `rgba(${a(`palette-${i}-lightChannel`)} / 0.72)`,
      "--variant-softDisabledBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.1)`,
      "--variant-solidColor": a(`palette-${i}-${i === "neutral" ? "600" : "500"}`),
      "--variant-solidBg": a("palette-common-white"),
      "--variant-solidHoverBg": a("palette-common-white"),
      "--variant-solidActiveBg": a(`palette-${i}-100`),
      "--variant-solidDisabledColor": `rgba(${a(`palette-${i}-lightChannel`)} / 0.72)`,
      "--variant-solidDisabledBg": `rgba(${a(`palette-${i}-lightChannel`)} / 0.1)`
    });
  }), o;
}, dd = ["cssVarPrefix", "breakpoints", "spacing", "components", "variants", "colorInversion", "shouldSkipGeneratingVar"], fd = ["colorSchemes"], pd = (e = "joy") => go(e);
function vd(e) {
  var t, r, n, o, a, s, i, c, d, u;
  const f = e || {}, {
    cssVarPrefix: p = "joy",
    breakpoints: h,
    spacing: g,
    components: v,
    variants: m,
    colorInversion: $,
    shouldSkipGeneratingVar: w = ld
  } = f, I = pe(f, dd), y = pd(p), x = {
    primary: cr.blue,
    neutral: cr.grey,
    danger: cr.red,
    success: cr.green,
    warning: cr.yellow,
    common: {
      white: "#FCFCFD",
      black: "#09090B"
    }
  }, E = (A) => {
    var q;
    const se = A.split("-"), D = se[1], ae = se[2];
    return y(A, (q = x[D]) == null ? void 0 : q[ae]);
  }, R = (A) => ({
    plainColor: E(`palette-${A}-500`),
    plainHoverBg: E(`palette-${A}-50`),
    plainActiveBg: E(`palette-${A}-100`),
    plainDisabledColor: E("palette-neutral-400"),
    outlinedColor: E(`palette-${A}-500`),
    outlinedBorder: E(`palette-${A}-300`),
    outlinedHoverBg: E(`palette-${A}-100`),
    outlinedActiveBg: E(`palette-${A}-200`),
    outlinedDisabledColor: E("palette-neutral-400"),
    outlinedDisabledBorder: E("palette-neutral-200"),
    softColor: E(`palette-${A}-700`),
    softBg: E(`palette-${A}-100`),
    softHoverBg: E(`palette-${A}-200`),
    softActiveColor: E(`palette-${A}-800`),
    softActiveBg: E(`palette-${A}-300`),
    softDisabledColor: E("palette-neutral-400"),
    softDisabledBg: E(`palette-${A}-50`),
    solidColor: E("palette-common-white"),
    solidBg: E(`palette-${A}-500`),
    solidHoverBg: E(`palette-${A}-600`),
    solidActiveBg: E(`palette-${A}-700`),
    solidDisabledColor: E("palette-neutral-400"),
    solidDisabledBg: E(`palette-${A}-100`)
  }), N = (A) => ({
    plainColor: E(`palette-${A}-300`),
    plainHoverBg: E(`palette-${A}-800`),
    plainActiveBg: E(`palette-${A}-700`),
    plainDisabledColor: E("palette-neutral-500"),
    outlinedColor: E(`palette-${A}-200`),
    outlinedBorder: E(`palette-${A}-700`),
    outlinedHoverBg: E(`palette-${A}-800`),
    outlinedActiveBg: E(`palette-${A}-700`),
    outlinedDisabledColor: E("palette-neutral-500"),
    outlinedDisabledBorder: E("palette-neutral-800"),
    softColor: E(`palette-${A}-200`),
    softBg: E(`palette-${A}-800`),
    softHoverBg: E(`palette-${A}-700`),
    softActiveColor: E(`palette-${A}-100`),
    softActiveBg: E(`palette-${A}-600`),
    softDisabledColor: E("palette-neutral-500"),
    softDisabledBg: E(`palette-${A}-900`),
    solidColor: E("palette-common-white"),
    solidBg: E(`palette-${A}-500`),
    solidHoverBg: E(`palette-${A}-600`),
    solidActiveBg: E(`palette-${A}-700`),
    solidDisabledColor: E("palette-neutral-500"),
    solidDisabledBg: E(`palette-${A}-800`)
  }), k = {
    palette: {
      mode: "light",
      primary: C({}, x.primary, R("primary")),
      neutral: C({}, x.neutral, R("neutral"), {
        plainColor: E("palette-neutral-700"),
        outlinedColor: E("palette-neutral-700")
      }),
      danger: C({}, x.danger, R("danger")),
      success: C({}, x.success, R("success")),
      warning: C({}, x.warning, R("warning")),
      common: {
        white: "#FBFCFD",
        black: "#0E0E10"
      },
      text: {
        primary: E("palette-neutral-800"),
        secondary: E("palette-neutral-700"),
        tertiary: E("palette-neutral-600"),
        icon: E("palette-neutral-500")
      },
      background: {
        body: E("palette-neutral-50"),
        surface: E("palette-common-white"),
        popup: E("palette-common-white"),
        level1: E("palette-neutral-100"),
        level2: E("palette-neutral-200"),
        level3: E("palette-neutral-300"),
        tooltip: E("palette-neutral-500"),
        backdrop: `rgba(${y(
          "palette-neutral-darkChannel",
          Pt(x.neutral[900])
          // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${y(
        "palette-neutral-mainChannel",
        Pt(x.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.3)`,
      focusVisible: E("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "21 21 21",
    shadowOpacity: "0.08"
  }, V = {
    palette: {
      mode: "dark",
      primary: C({}, x.primary, N("primary")),
      neutral: C({}, x.neutral, N("neutral")),
      danger: C({}, x.danger, N("danger")),
      success: C({}, x.success, N("success")),
      warning: C({}, x.warning, N("warning")),
      common: {
        white: "#FBFCFD",
        black: "#0E0E10"
      },
      text: {
        primary: E("palette-neutral-100"),
        secondary: E("palette-neutral-300"),
        tertiary: E("palette-neutral-400"),
        icon: E("palette-neutral-400")
      },
      background: {
        body: E("palette-common-black"),
        surface: E("palette-neutral-900"),
        popup: E("palette-common-black"),
        level1: E("palette-neutral-800"),
        level2: E("palette-neutral-700"),
        level3: E("palette-neutral-600"),
        tooltip: E("palette-neutral-600"),
        backdrop: `rgba(${y(
          "palette-neutral-darkChannel",
          Pt(x.neutral[50])
          // should be the same index as in `attachColorChannels`
        )} / 0.25)`
      },
      divider: `rgba(${y(
        "palette-neutral-mainChannel",
        Pt(x.neutral[500])
        // should be the same index as in `attachColorChannels`
      )} / 0.16)`,
      focusVisible: E("palette-primary-500")
    },
    shadowRing: "0 0 #000",
    shadowChannel: "0 0 0",
    shadowOpacity: "0.6"
  }, j = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', Y = C({
    body: `"Inter", ${y(`fontFamily-fallback, ${j}`)}`,
    display: `"Inter", ${y(`fontFamily-fallback, ${j}`)}`,
    code: "Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    fallback: j
  }, I.fontFamily), M = C({
    sm: 300,
    // regular
    md: 500,
    // medium
    lg: 600,
    // semi-bold
    xl: 700
  }, I.fontWeight), Q = C({
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    md: "1rem",
    // 16px
    lg: "1.125rem",
    // 18px
    xl: "1.25rem",
    // 20px
    xl2: "1.5rem",
    // 24px
    xl3: "1.875rem",
    // 30px
    xl4: "2.25rem"
  }, I.fontSize), _ = C({
    xs: "1.33334",
    // largest font sizes: h1, h2
    sm: "1.42858",
    // normal font sizes
    md: "1.5",
    // normal font sizes
    lg: "1.55556",
    // large font sizes for components
    xl: "1.66667"
  }, I.lineHeight), O = (t = (r = I.colorSchemes) == null || (r = r.light) == null ? void 0 : r.shadowRing) != null ? t : k.shadowRing, T = (n = (o = I.colorSchemes) == null || (o = o.light) == null ? void 0 : o.shadowChannel) != null ? n : k.shadowChannel, L = (a = (s = I.colorSchemes) == null || (s = s.light) == null ? void 0 : s.shadowOpacity) != null ? a : k.shadowOpacity, oe = {
    colorSchemes: {
      light: k,
      dark: V
    },
    fontSize: Q,
    fontFamily: Y,
    fontWeight: M,
    focus: {
      thickness: "2px",
      selector: `&.${lt("", "focusVisible")}, &:focus-visible`,
      default: {
        outlineOffset: `var(--focus-outline-offset, ${y("focus-thickness", (i = (c = I.focus) == null ? void 0 : c.thickness) != null ? i : "2px")})`,
        outline: `${y("focus-thickness", (d = (u = I.focus) == null ? void 0 : u.thickness) != null ? d : "2px")} solid ${y("palette-focusVisible", x.primary[500])}`
      }
    },
    lineHeight: _,
    radius: {
      xs: "2px",
      sm: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px"
    },
    shadow: {
      xs: `${y("shadowRing", O)}, 0px 1px 2px 0px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)})`,
      sm: `${y("shadowRing", O)}, 0px 1px 2px 0px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)}), 0px 2px 4px 0px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)})`,
      md: `${y("shadowRing", O)}, 0px 2px 8px -2px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)}), 0px 6px 12px -2px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)})`,
      lg: `${y("shadowRing", O)}, 0px 2px 8px -2px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)}), 0px 12px 16px -4px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)})`,
      xl: `${y("shadowRing", O)}, 0px 2px 8px -2px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)}), 0px 20px 24px -4px rgba(${y("shadowChannel", T)} / ${y("shadowOpacity", L)})`
    },
    zIndex: {
      badge: 1,
      table: 10,
      popup: 1e3,
      modal: 1300,
      tooltip: 1500
    },
    typography: {
      h1: {
        fontFamily: y(`fontFamily-display, ${Y.display}`),
        fontWeight: y(`fontWeight-xl, ${M.xl}`),
        fontSize: y(`fontSize-xl4, ${Q.xl4}`),
        lineHeight: y(`lineHeight-xs, ${_.xs}`),
        letterSpacing: "-0.025em",
        color: y(`palette-text-primary, ${k.palette.text.primary}`)
      },
      h2: {
        fontFamily: y(`fontFamily-display, ${Y.display}`),
        fontWeight: y(`fontWeight-xl, ${M.xl}`),
        fontSize: y(`fontSize-xl3, ${Q.xl3}`),
        lineHeight: y(`lineHeight-xs, ${_.xs}`),
        letterSpacing: "-0.025em",
        color: y(`palette-text-primary, ${k.palette.text.primary}`)
      },
      h3: {
        fontFamily: y(`fontFamily-display, ${Y.display}`),
        fontWeight: y(`fontWeight-lg, ${M.lg}`),
        fontSize: y(`fontSize-xl2, ${Q.xl2}`),
        lineHeight: y(`lineHeight-xs, ${_.xs}`),
        letterSpacing: "-0.025em",
        color: y(`palette-text-primary, ${k.palette.text.primary}`)
      },
      h4: {
        fontFamily: y(`fontFamily-display, ${Y.display}`),
        fontWeight: y(`fontWeight-lg, ${M.lg}`),
        fontSize: y(`fontSize-xl, ${Q.xl}`),
        lineHeight: y(`lineHeight-md, ${_.md}`),
        letterSpacing: "-0.025em",
        color: y(`palette-text-primary, ${k.palette.text.primary}`)
      },
      "title-lg": {
        fontFamily: y(`fontFamily-body, ${Y.body}`),
        fontWeight: y(`fontWeight-lg, ${M.lg}`),
        fontSize: y(`fontSize-lg, ${Q.lg}`),
        lineHeight: y(`lineHeight-xs, ${_.xs}`),
        color: y(`palette-text-primary, ${k.palette.text.primary}`)
      },
      "title-md": {
        fontFamily: y(`fontFamily-body, ${Y.body}`),
        fontWeight: y(`fontWeight-md, ${M.md}`),
        fontSize: y(`fontSize-md, ${Q.md}`),
        lineHeight: y(`lineHeight-md, ${_.md}`),
        color: y(`palette-text-primary, ${k.palette.text.primary}`)
      },
      "title-sm": {
        fontFamily: y(`fontFamily-body, ${Y.body}`),
        fontWeight: y(`fontWeight-md, ${M.md}`),
        fontSize: y(`fontSize-sm, ${Q.sm}`),
        lineHeight: y(`lineHeight-sm, ${_.sm}`),
        color: y(`palette-text-primary, ${k.palette.text.primary}`)
      },
      "body-lg": {
        fontFamily: y(`fontFamily-body, ${Y.body}`),
        fontSize: y(`fontSize-lg, ${Q.lg}`),
        lineHeight: y(`lineHeight-md, ${_.md}`),
        color: y(`palette-text-secondary, ${k.palette.text.secondary}`)
      },
      "body-md": {
        fontFamily: y(`fontFamily-body, ${Y.body}`),
        fontSize: y(`fontSize-md, ${Q.md}`),
        lineHeight: y(`lineHeight-md, ${_.md}`),
        color: y(`palette-text-secondary, ${k.palette.text.secondary}`)
      },
      "body-sm": {
        fontFamily: y(`fontFamily-body, ${Y.body}`),
        fontSize: y(`fontSize-sm, ${Q.sm}`),
        lineHeight: y(`lineHeight-md, ${_.md}`),
        color: y(`palette-text-tertiary, ${k.palette.text.tertiary}`)
      },
      "body-xs": {
        fontFamily: y(`fontFamily-body, ${Y.body}`),
        fontWeight: y(`fontWeight-md, ${M.md}`),
        fontSize: y(`fontSize-xs, ${Q.xs}`),
        lineHeight: y(`lineHeight-md, ${_.md}`),
        color: y(`palette-text-tertiary, ${k.palette.text.tertiary}`)
      }
    }
  }, P = I ? Ye(oe, I) : oe, {
    colorSchemes: B
  } = P, J = pe(P, fd), K = C({
    colorSchemes: B
  }, J, {
    breakpoints: Ai(h ?? {}),
    components: Ye({
      // TODO: find a way to abstract SvgIcon out of @mui/material
      MuiSvgIcon: {
        defaultProps: {
          fontSize: "xl2"
        },
        styleOverrides: {
          root: ({
            ownerState: A,
            theme: q
          }) => {
            var se;
            const D = A.instanceFontSize;
            return C({
              margin: "var(--Icon-margin)"
            }, A.fontSize && A.fontSize !== "inherit" && {
              fontSize: `var(--Icon-fontSize, ${q.vars.fontSize[A.fontSize]})`
            }, !A.htmlColor && C({
              color: `var(--Icon-color, ${K.vars.palette.text.icon})`
            }, A.color && A.color !== "inherit" && A.color !== "context" && q.vars.palette[A.color] && {
              color: `rgba(${(se = q.vars.palette[A.color]) == null ? void 0 : se.mainChannel} / 1)`
            }, A.color === "context" && {
              color: q.vars.palette.text.secondary
            }), D && D !== "inherit" && {
              "--Icon-fontSize": q.vars.fontSize[D]
            });
          }
        }
      }
    }, v),
    cssVarPrefix: p,
    getCssVar: y,
    spacing: Vi(g),
    colorInversionConfig: {
      soft: ["plain", "outlined", "soft", "solid"],
      solid: ["plain", "outlined", "soft", "solid"]
    }
  });
  function U(A, q) {
    Object.keys(q).forEach((se) => {
      const D = {
        main: "500",
        light: "200",
        dark: "700"
      };
      A === "dark" && (D.main = 400), !q[se].mainChannel && q[se][D.main] && (q[se].mainChannel = Pt(q[se][D.main])), !q[se].lightChannel && q[se][D.light] && (q[se].lightChannel = Pt(q[se][D.light])), !q[se].darkChannel && q[se][D.dark] && (q[se].darkChannel = Pt(q[se][D.dark]));
    });
  }
  Object.entries(K.colorSchemes).forEach(([A, q]) => {
    U(A, q.palette);
  });
  const te = {
    prefix: p,
    shouldSkipGeneratingVar: w
  }, {
    vars: ee,
    generateCssVars: re
  } = ad(
    // @ts-ignore property truDark is missing from colorSchemes
    C({
      colorSchemes: B
    }, J),
    te
  );
  K.vars = ee, K.generateCssVars = re, K.unstable_sxConfig = C({}, sd, e == null ? void 0 : e.unstable_sxConfig), K.unstable_sx = function(q) {
    return _r({
      sx: q,
      theme: this
    });
  }, K.getColorSchemeSelector = (A) => A === "light" ? "&" : `&[data-joy-color-scheme="${A}"], [data-joy-color-scheme="${A}"] &`;
  const G = {
    getCssVar: y,
    palette: K.colorSchemes.light.palette
  };
  return K.variants = Ye({
    plain: He("plain", G),
    plainHover: He("plainHover", G),
    plainActive: He("plainActive", G),
    plainDisabled: He("plainDisabled", G),
    outlined: He("outlined", G),
    outlinedHover: He("outlinedHover", G),
    outlinedActive: He("outlinedActive", G),
    outlinedDisabled: He("outlinedDisabled", G),
    soft: He("soft", G),
    softHover: He("softHover", G),
    softActive: He("softActive", G),
    softDisabled: He("softDisabled", G),
    solid: He("solid", G),
    solidHover: He("solidHover", G),
    solidActive: He("solidActive", G),
    solidDisabled: He("solidDisabled", G)
  }, m), K.palette = C({}, K.colorSchemes.light.palette, {
    colorScheme: "light"
  }), K.shouldSkipGeneratingVar = w, K.colorInversion = typeof $ == "function" ? $ : Ye({
    soft: cd(K, !0),
    solid: ud(K, !0)
  }, $ || {}, {
    clone: !1
  }), K;
}
const md = vd(), yo = md, gd = Hi({
  defaultTheme: yo,
  themeId: eo
}), we = gd;
function dt({
  props: e,
  name: t
}) {
  return Wi({
    props: e,
    name: t,
    defaultTheme: C({}, yo, {
      components: {}
    }),
    themeId: eo
  });
}
const Yi = /* @__PURE__ */ S.createContext(void 0), wt = (e) => {
  const t = S.useContext(Yi);
  return {
    /**
     * Resolve the `color` value for the component.
     * @param {ColorPaletteProp | 'inherit' | undefined} instanceColorProp The color defined on the instance.
     * @param {ColorPaletteProp | 'inherit' | undefined} defaultColorProp The default color to use when variant inversion is not enabled.
     */
    getColor: (r, n) => t && e && t.includes(e) ? r || "context" : r || n
  };
}, hd = Yi;
function yd(e) {
  return typeof e == "string";
}
function Ki(e, t, r) {
  return e === void 0 || yd(e) ? t : C({}, t, {
    ownerState: C({}, t.ownerState, r)
  });
}
function _a(e, t, r = (n, o) => n === o) {
  return e.length === t.length && e.every((n, o) => r(n, t[o]));
}
const bd = {
  disableDefaultClasses: !1
}, xd = /* @__PURE__ */ S.createContext(bd);
function Cd(e) {
  const {
    disableDefaultClasses: t
  } = S.useContext(xd);
  return (r) => t ? "" : e(r);
}
function qt(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == "function" && !t.includes(n)).forEach((n) => {
    r[n] = e[n];
  }), r;
}
function Gi(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Da(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function Ji(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: n,
    externalForwardedProps: o,
    className: a
  } = e;
  if (!t) {
    const h = Ct(o == null ? void 0 : o.className, n == null ? void 0 : n.className, a, r == null ? void 0 : r.className), g = C({}, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), v = C({}, r, o, n);
    return h.length > 0 && (v.className = h), Object.keys(g).length > 0 && (v.style = g), {
      props: v,
      internalRef: void 0
    };
  }
  const s = qt(C({}, o, n)), i = Da(n), c = Da(o), d = t(s), u = Ct(d == null ? void 0 : d.className, r == null ? void 0 : r.className, a, o == null ? void 0 : o.className, n == null ? void 0 : n.className), f = C({}, d == null ? void 0 : d.style, r == null ? void 0 : r.style, o == null ? void 0 : o.style, n == null ? void 0 : n.style), p = C({}, d, r, c, i);
  return u.length > 0 && (p.className = u), Object.keys(f).length > 0 && (p.style = f), {
    props: p,
    internalRef: d.ref
  };
}
const Sd = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function $d(e) {
  var t;
  const {
    elementType: r,
    externalSlotProps: n,
    ownerState: o,
    skipResolvingSlotProps: a = !1
  } = e, s = pe(e, Sd), i = a ? {} : Gi(n, o), {
    props: c,
    internalRef: d
  } = Ji(C({}, s, {
    externalSlotProps: i
  })), u = Me(d, i == null ? void 0 : i.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Ki(r, C({}, c, {
    ref: u
  }), o);
}
function bo(e = {}) {
  const {
    disabled: t = !1,
    focusableWhenDisabled: r,
    href: n,
    rootRef: o,
    tabIndex: a,
    to: s,
    type: i
  } = e, c = S.useRef(), [d, u] = S.useState(!1), {
    isFocusVisibleRef: f,
    onFocus: p,
    onBlur: h,
    ref: g
  } = kl(), [v, m] = S.useState(!1);
  t && !r && v && m(!1), S.useEffect(() => {
    f.current = v;
  }, [v, f]);
  const [$, w] = S.useState(""), I = (_) => (O) => {
    var T;
    v && O.preventDefault(), (T = _.onMouseLeave) == null || T.call(_, O);
  }, y = (_) => (O) => {
    var T;
    h(O), f.current === !1 && m(!1), (T = _.onBlur) == null || T.call(_, O);
  }, x = (_) => (O) => {
    var T;
    if (c.current || (c.current = O.currentTarget), p(O), f.current === !0) {
      var L;
      m(!0), (L = _.onFocusVisible) == null || L.call(_, O);
    }
    (T = _.onFocus) == null || T.call(_, O);
  }, E = () => {
    const _ = c.current;
    return $ === "BUTTON" || $ === "INPUT" && ["button", "submit", "reset"].includes(_ == null ? void 0 : _.type) || $ === "A" && (_ == null ? void 0 : _.href);
  }, R = (_) => (O) => {
    if (!t) {
      var T;
      (T = _.onClick) == null || T.call(_, O);
    }
  }, N = (_) => (O) => {
    var T;
    t || (u(!0), document.addEventListener("mouseup", () => {
      u(!1);
    }, {
      once: !0
    })), (T = _.onMouseDown) == null || T.call(_, O);
  }, k = (_) => (O) => {
    var T;
    if ((T = _.onKeyDown) == null || T.call(_, O), !O.defaultMuiPrevented && (O.target === O.currentTarget && !E() && O.key === " " && O.preventDefault(), O.target === O.currentTarget && O.key === " " && !t && u(!0), O.target === O.currentTarget && !E() && O.key === "Enter" && !t)) {
      var L;
      (L = _.onClick) == null || L.call(_, O), O.preventDefault();
    }
  }, V = (_) => (O) => {
    var T;
    if (O.target === O.currentTarget && u(!1), (T = _.onKeyUp) == null || T.call(_, O), O.target === O.currentTarget && !E() && !t && O.key === " " && !O.defaultMuiPrevented) {
      var L;
      (L = _.onClick) == null || L.call(_, O);
    }
  }, j = S.useCallback((_) => {
    var O;
    w((O = _ == null ? void 0 : _.tagName) != null ? O : "");
  }, []), Y = Me(j, o, g, c), M = {};
  return a !== void 0 && (M.tabIndex = a), $ === "BUTTON" ? (M.type = i ?? "button", r ? M["aria-disabled"] = t : M.disabled = t) : $ !== "" && (!n && !s && (M.role = "button", M.tabIndex = a ?? 0), t && (M["aria-disabled"] = t, M.tabIndex = r ? a ?? 0 : -1)), {
    getRootProps: (_ = {}) => {
      const O = C({}, qt(e), qt(_)), T = C({
        type: i
      }, O, M, _, {
        onBlur: y(O),
        onClick: R(O),
        onFocus: x(O),
        onKeyDown: k(O),
        onKeyUp: V(O),
        onMouseDown: N(O),
        onMouseLeave: I(O),
        ref: Y
      });
      return delete T.onFocusVisible, T;
    },
    focusVisible: v,
    setFocusVisible: m,
    active: d,
    rootRef: Y
  };
}
function Ed(e, t) {
  return e === t;
}
const Nn = {}, ka = () => {
};
function Kn(e, t) {
  const r = C({}, e);
  return Object.keys(t).forEach((n) => {
    t[n] !== void 0 && (r[n] = t[n]);
  }), r;
}
function Od(e) {
  const {
    nextState: t,
    initialState: r,
    stateComparers: n,
    onStateChange: o,
    controlledProps: a,
    lastActionRef: s
  } = e, i = S.useRef(r);
  S.useEffect(() => {
    if (s.current === null)
      return;
    const c = Kn(i.current, a);
    Object.keys(t).forEach((d) => {
      var u;
      const f = (u = n[d]) != null ? u : Ed, p = t[d], h = c[d];
      if (h == null && p != null || h != null && p == null || h != null && p != null && !f(p, h)) {
        var g, v;
        o == null || o((g = s.current.event) != null ? g : null, d, p, (v = s.current.type) != null ? v : "", t);
      }
    }), i.current = t, s.current = null;
  }, [i, t, s, o, n, a]);
}
function Id(e) {
  const t = S.useRef(null), {
    reducer: r,
    initialState: n,
    controlledProps: o = Nn,
    stateComparers: a = Nn,
    onStateChange: s = ka,
    actionContext: i
  } = e, c = S.useCallback((p, h) => {
    t.current = h;
    const g = Kn(p, o);
    return r(g, h);
  }, [o, r]), [d, u] = S.useReducer(c, n), f = S.useCallback((p) => {
    u(C({}, p, {
      context: i
    }));
  }, [i]);
  return Od({
    nextState: d,
    initialState: n,
    stateComparers: a ?? Nn,
    onStateChange: s ?? ka,
    controlledProps: o,
    lastActionRef: t
  }), [Kn(d, o), f];
}
const Xi = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (Xi.displayName = "FormControlContext");
function wd() {
  return S.useContext(Xi);
}
function Td(e) {
  const {
    defaultValue: t,
    disabled: r = !1,
    error: n = !1,
    onBlur: o,
    onChange: a,
    onFocus: s,
    required: i = !1,
    value: c,
    inputRef: d
  } = e, u = wd();
  let f, p, h, g, v;
  if (u) {
    var m, $, w;
    if (f = void 0, p = (m = u.disabled) != null ? m : !1, h = ($ = u.error) != null ? $ : !1, g = (w = u.required) != null ? w : !1, v = u.value, process.env.NODE_ENV !== "production") {
      const _ = ["defaultValue", "disabled", "error", "required", "value"].filter((O) => e[O] !== void 0);
      _.length > 0 && console.warn(["MUI: You have set props on an input that is inside a FormControl.", "Set these props on a FormControl instead. Otherwise they will be ignored.", `Ignored props: ${_.join(", ")}`].join(`
`));
    }
  } else
    f = t, p = r, h = n, g = i, v = c;
  const {
    current: I
  } = S.useRef(v != null), y = S.useCallback((_) => {
    process.env.NODE_ENV !== "production" && _ && _.nodeName !== "INPUT" && !_.focus && console.error(["MUI: You have provided a `slots.input` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), x = S.useRef(null), E = Me(x, d, y), [R, N] = S.useState(!1);
  S.useEffect(() => {
    !u && p && R && (N(!1), o == null || o());
  }, [u, p, R, o]);
  const k = (_) => (O) => {
    var T;
    if (u != null && u.disabled) {
      O.stopPropagation();
      return;
    }
    if ((T = _.onFocus) == null || T.call(_, O), u && u.onFocus) {
      var L;
      u == null || (L = u.onFocus) == null || L.call(u);
    } else
      N(!0);
  }, V = (_) => (O) => {
    var T;
    (T = _.onBlur) == null || T.call(_, O), u && u.onBlur ? u.onBlur() : N(!1);
  }, j = (_) => (O, ...T) => {
    var L, oe;
    if (!I && (O.target || x.current) == null)
      throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `slots.input` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Nt(17));
    u == null || (L = u.onChange) == null || L.call(u, O), (oe = _.onChange) == null || oe.call(_, O, ...T);
  }, Y = (_) => (O) => {
    var T;
    x.current && O.currentTarget === O.target && x.current.focus(), (T = _.onClick) == null || T.call(_, O);
  };
  return {
    disabled: p,
    error: h,
    focused: R,
    formControlContext: u,
    getInputProps: (_ = {}) => {
      const T = C({}, {
        onBlur: o,
        onChange: a,
        onFocus: s
      }, qt(_)), L = C({}, _, T, {
        onBlur: V(T),
        onChange: j(T),
        onFocus: k(T)
      });
      return C({}, L, {
        "aria-invalid": h || void 0,
        defaultValue: f,
        ref: E,
        value: v,
        required: g,
        disabled: p
      });
    },
    getRootProps: (_ = {}) => {
      const O = qt(e, ["onBlur", "onChange", "onFocus"]), T = C({}, O, qt(_));
      return C({}, _, T, {
        onClick: Y(T)
      });
    },
    inputRef: E,
    required: g,
    value: v
  };
}
const je = {
  blur: "list:blur",
  focus: "list:focus",
  itemClick: "list:itemClick",
  itemHover: "list:itemHover",
  itemsChange: "list:itemsChange",
  keyDown: "list:keyDown",
  resetHighlight: "list:resetHighlight",
  textNavigation: "list:textNavigation"
};
function Rd(e, t, r, n, o, a) {
  if (r.length === 0 || !n && r.every((i, c) => o(i, c)))
    return -1;
  let s = e;
  for (; ; ) {
    if (!a && t === "next" && s === r.length || !a && t === "previous" && s === -1)
      return -1;
    if (n ? !1 : o(r[s], s))
      s += t === "next" ? 1 : -1, a && (s = (s + r.length) % r.length);
    else
      return s;
  }
}
function qe(e, t, r) {
  var n;
  const {
    items: o,
    isItemDisabled: a,
    disableListWrap: s,
    disabledItemsFocusable: i,
    itemComparer: c,
    focusManagement: d
  } = r, u = d === "DOM" ? 0 : -1, f = o.length - 1, p = e == null ? -1 : o.findIndex(($) => c($, e));
  let h, g, v = !s;
  switch (t) {
    case "reset":
      if (u === -1)
        return null;
      h = 0, g = "next", v = !1;
      break;
    case "start":
      h = 0, g = "next", v = !1;
      break;
    case "end":
      h = f, g = "previous", v = !1;
      break;
    default: {
      const $ = p + t;
      $ < 0 ? !v && p !== -1 || Math.abs(t) > 1 ? (h = 0, g = "next") : (h = f, g = "previous") : $ > f ? !v || Math.abs(t) > 1 ? (h = f, g = "previous") : (h = 0, g = "next") : (h = $, g = t >= 0 ? "next" : "previous");
    }
  }
  const m = Rd(h, g, o, i, a, v);
  return m === -1 && e !== null && !a(e, p) ? e : (n = o[m]) != null ? n : null;
}
function Pd(e, t, r, n) {
  return r === "none" ? [] : r === "single" ? n(t[0], e) ? t : [e] : t.some((o) => n(o, e)) ? t.filter((o) => !n(o, e)) : [...t, e];
}
function Zi(e, t, r) {
  const {
    itemComparer: n,
    isItemDisabled: o,
    selectionMode: a,
    items: s
  } = r, {
    selectedValues: i
  } = t, c = s.findIndex((u) => n(e, u));
  if (o(e, c))
    return t;
  const d = Pd(e, i, a, n);
  return C({}, t, {
    selectedValues: d,
    highlightedValue: e
  });
}
function _d(e, t, r) {
  const n = t.highlightedValue, {
    orientation: o,
    pageSize: a
  } = r;
  switch (e) {
    case "Home":
      return C({}, t, {
        highlightedValue: qe(n, "start", r)
      });
    case "End":
      return C({}, t, {
        highlightedValue: qe(n, "end", r)
      });
    case "PageUp":
      return C({}, t, {
        highlightedValue: qe(n, -a, r)
      });
    case "PageDown":
      return C({}, t, {
        highlightedValue: qe(n, a, r)
      });
    case "ArrowUp":
      if (o !== "vertical")
        break;
      return C({}, t, {
        highlightedValue: qe(n, -1, r)
      });
    case "ArrowDown":
      if (o !== "vertical")
        break;
      return C({}, t, {
        highlightedValue: qe(n, 1, r)
      });
    case "ArrowLeft": {
      if (o === "vertical")
        break;
      return C({}, t, {
        highlightedValue: qe(n, o === "horizontal-ltr" ? -1 : 1, r)
      });
    }
    case "ArrowRight": {
      if (o === "vertical")
        break;
      return C({}, t, {
        highlightedValue: qe(n, o === "horizontal-ltr" ? 1 : -1, r)
      });
    }
    case "Enter":
    case " ":
      return t.highlightedValue === null ? t : Zi(t.highlightedValue, t, r);
  }
  return t;
}
function Dd(e, t) {
  return t.focusManagement === "DOM" ? e : C({}, e, {
    highlightedValue: null
  });
}
function kd(e, t, r) {
  var n;
  const o = (n = r(e)) == null ? void 0 : n.trim().toLowerCase();
  return !o || o.length === 0 ? !1 : o.indexOf(t) === 0;
}
function Ad(e, t, r) {
  const {
    items: n,
    isItemDisabled: o,
    disabledItemsFocusable: a,
    getItemAsString: s
  } = r, i = t.length > 1;
  let c = i ? e.highlightedValue : qe(e.highlightedValue, 1, r);
  for (let d = 0; d < n.length; d += 1) {
    if (!c || !i && e.highlightedValue === c)
      return e;
    if (kd(c, t, s) && (!o(c, n.indexOf(c)) || a))
      return C({}, e, {
        highlightedValue: c
      });
    c = qe(c, 1, r);
  }
  return e;
}
function Nd(e, t, r, n) {
  var o;
  const {
    itemComparer: a,
    focusManagement: s
  } = n;
  let i = null;
  if (r.highlightedValue != null) {
    var c;
    i = (c = e.find((f) => a(f, r.highlightedValue))) != null ? c : null;
  } else
    s === "DOM" && t.length === 0 && (i = qe(null, "reset", n));
  const u = ((o = r.selectedValues) != null ? o : []).filter((f) => e.some((p) => a(p, f)));
  return C({}, r, {
    highlightedValue: i,
    selectedValues: u
  });
}
function Bd(e, t) {
  return C({}, e, {
    highlightedValue: qe(null, "reset", t)
  });
}
function Qi(e, t) {
  const {
    type: r,
    context: n
  } = t;
  switch (r) {
    case je.keyDown:
      return _d(t.key, e, n);
    case je.itemClick:
      return Zi(t.item, e, n);
    case je.blur:
      return Dd(e, n);
    case je.textNavigation:
      return Ad(e, t.searchString, n);
    case je.itemsChange:
      return Nd(t.items, t.previousItems, e, n);
    case je.resetHighlight:
      return Bd(e, n);
    default:
      return e;
  }
}
function Vd() {
  const e = /* @__PURE__ */ new Map();
  function t(n, o) {
    let a = e.get(n);
    return a ? a.add(o) : (a = /* @__PURE__ */ new Set([o]), e.set(n, a)), () => {
      a.delete(o), a.size === 0 && e.delete(n);
    };
  }
  function r(n, ...o) {
    const a = e.get(n);
    a && a.forEach((s) => s(...o));
  }
  return {
    subscribe: t,
    publish: r
  };
}
function Fd() {
  const e = S.useRef();
  return e.current || (e.current = Vd()), e.current;
}
const Aa = "select:change-selection", Na = "select:change-highlight";
function zd() {
  const e = Fd(), t = S.useCallback((a) => {
    e.publish(Aa, a);
  }, [e]), r = S.useCallback((a) => {
    e.publish(Na, a);
  }, [e]), n = S.useCallback((a) => e.subscribe(Aa, a), [e]), o = S.useCallback((a) => e.subscribe(Na, a), [e]);
  return {
    notifySelectionChanged: t,
    notifyHighlightChanged: r,
    registerSelectionChangeHandler: n,
    registerHighlightChangeHandler: o
  };
}
function Ba(e, t) {
  const r = S.useRef(e);
  return S.useEffect(() => {
    r.current = e;
  }, t ?? [e]), r;
}
const jd = 500;
function Ld(e) {
  const t = S.useRef({
    searchString: "",
    lastTime: null
  });
  return S.useCallback((r) => {
    if (r.key.length === 1 && r.key !== " ") {
      const n = t.current, o = r.key.toLowerCase(), a = performance.now();
      n.searchString.length > 0 && n.lastTime && a - n.lastTime > jd ? n.searchString = o : (n.searchString.length !== 1 || o !== n.searchString) && (n.searchString += o), n.lastTime = a, e(n.searchString, r);
    }
  }, [e]);
}
const Va = {}, Md = () => {
}, Hd = (e, t) => e === t, Wd = () => !1, Ud = (e) => typeof e == "string" ? e : String(e), qd = () => ({
  highlightedValue: null,
  selectedValues: []
});
function Yd(e) {
  const {
    controlledProps: t = Va,
    disabledItemsFocusable: r = !1,
    disableListWrap: n = !1,
    focusManagement: o = "activeDescendant",
    getInitialState: a = qd,
    getItemDomElement: s,
    getItemId: i,
    isItemDisabled: c = Wd,
    rootRef: d,
    onStateChange: u = Md,
    items: f,
    itemComparer: p = Hd,
    getItemAsString: h = Ud,
    onChange: g,
    onHighlightChange: v,
    onItemsChange: m,
    orientation: $ = "vertical",
    pageSize: w = 5,
    reducerActionContext: I = Va,
    selectionMode: y = "single",
    stateReducer: x
  } = e;
  if (process.env.NODE_ENV !== "production") {
    if (o === "DOM" && s == null)
      throw new Error("useList: The `getItemDomElement` prop is required when using the `DOM` focus management.");
    if (o === "activeDescendant" && i == null)
      throw new Error("useList: The `getItemId` prop is required when using the `activeDescendant` focus management.");
  }
  const E = S.useRef(null), R = Me(d, E), N = S.useCallback((D, ae, W) => {
    if (v == null || v(D, ae, W), o === "DOM" && ae != null && (W === je.itemClick || W === je.keyDown || W === je.textNavigation)) {
      var F;
      s == null || (F = s(ae)) == null || F.focus();
    }
  }, [s, v, o]), k = S.useMemo(() => ({
    highlightedValue: p,
    selectedValues: (D, ae) => _a(D, ae, p)
  }), [p]), V = S.useCallback((D, ae, W, F, Z) => {
    switch (u == null || u(D, ae, W, F, Z), ae) {
      case "highlightedValue":
        N(D, W, F);
        break;
      case "selectedValues":
        g == null || g(D, W, F);
        break;
    }
  }, [N, g, u]), j = S.useMemo(() => ({
    disabledItemsFocusable: r,
    disableListWrap: n,
    focusManagement: o,
    isItemDisabled: c,
    itemComparer: p,
    items: f,
    getItemAsString: h,
    onHighlightChange: N,
    orientation: $,
    pageSize: w,
    selectionMode: y,
    stateComparers: k
  }), [r, n, o, c, p, f, h, N, $, w, y, k]), Y = a(), M = x ?? Qi, Q = S.useMemo(() => C({}, I, j), [I, j]), [_, O] = Id({
    reducer: M,
    actionContext: Q,
    initialState: Y,
    controlledProps: t,
    stateComparers: k,
    onStateChange: V
  }), {
    highlightedValue: T,
    selectedValues: L
  } = _, oe = Ld((D, ae) => O({
    type: je.textNavigation,
    event: ae,
    searchString: D
  })), P = Ba(L), B = Ba(T), J = S.useRef([]);
  S.useEffect(() => {
    _a(J.current, f, p) || (O({
      type: je.itemsChange,
      event: null,
      items: f,
      previousItems: J.current
    }), J.current = f, m == null || m(f));
  }, [f, p, O, m]);
  const {
    notifySelectionChanged: K,
    notifyHighlightChanged: U,
    registerHighlightChangeHandler: te,
    registerSelectionChangeHandler: ee
  } = zd();
  S.useEffect(() => {
    K(L);
  }, [L, K]), S.useEffect(() => {
    U(T);
  }, [T, U]);
  const re = (D) => (ae) => {
    var W;
    if ((W = D.onKeyDown) == null || W.call(D, ae), ae.defaultMuiPrevented)
      return;
    const F = ["Home", "End", "PageUp", "PageDown"];
    $ === "vertical" ? F.push("ArrowUp", "ArrowDown") : F.push("ArrowLeft", "ArrowRight"), o === "activeDescendant" && F.push(" ", "Enter"), F.includes(ae.key) && ae.preventDefault(), O({
      type: je.keyDown,
      key: ae.key,
      event: ae
    }), oe(ae);
  }, G = (D) => (ae) => {
    var W, F;
    (W = D.onBlur) == null || W.call(D, ae), !ae.defaultMuiPrevented && ((F = E.current) != null && F.contains(ae.relatedTarget) || O({
      type: je.blur,
      event: ae
    }));
  }, A = (D = {}) => C({}, D, {
    "aria-activedescendant": o === "activeDescendant" && T != null ? i(T) : void 0,
    onBlur: G(D),
    onKeyDown: re(D),
    tabIndex: o === "DOM" ? -1 : 0,
    ref: R
  }), q = S.useCallback((D) => {
    var ae;
    const W = f.findIndex((de) => p(de, D)), F = ((ae = P.current) != null ? ae : []).some((de) => de != null && p(D, de)), Z = c(D, W), ie = B.current != null && p(D, B.current);
    return {
      disabled: Z,
      focusable: o === "DOM",
      highlighted: ie,
      index: W,
      selected: F
    };
  }, [f, c, p, P, B, o]), se = S.useMemo(() => ({
    dispatch: O,
    getItemState: q,
    registerHighlightChangeHandler: te,
    registerSelectionChangeHandler: ee
  }), [O, q, te, ee]);
  return S.useDebugValue({
    state: _
  }), {
    contextValue: se,
    dispatch: O,
    getRootProps: A,
    rootRef: R,
    state: _
  };
}
function Kd() {
  const [, e] = S.useState({});
  return S.useCallback(() => {
    e({});
  }, []);
}
const xo = /* @__PURE__ */ S.createContext(null);
process.env.NODE_ENV !== "production" && (xo.displayName = "ListContext");
function Gd(e) {
  const {
    handlePointerOverEvents: t = !1,
    item: r,
    rootRef: n
  } = e, o = S.useRef(null), a = Me(o, n), s = S.useContext(xo);
  if (!s)
    throw new Error("useListItem must be used within a ListProvider");
  const {
    dispatch: i,
    getItemState: c,
    registerHighlightChangeHandler: d,
    registerSelectionChangeHandler: u
  } = s, {
    highlighted: f,
    selected: p,
    focusable: h
  } = c(r), g = Kd();
  Ot(() => {
    function I(y) {
      (y === r && !f || y !== r && f) && g();
    }
    return d(I);
  }), Ot(() => {
    function I(y) {
      p ? y.includes(r) || g() : y.includes(r) && g();
    }
    return u(I);
  }, [u, g, p, r]);
  const v = S.useCallback((I) => (y) => {
    var x;
    (x = I.onClick) == null || x.call(I, y), !y.defaultPrevented && i({
      type: je.itemClick,
      item: r,
      event: y
    });
  }, [i, r]), m = S.useCallback((I) => (y) => {
    var x;
    (x = I.onMouseOver) == null || x.call(I, y), !y.defaultPrevented && i({
      type: je.itemHover,
      item: r,
      event: y
    });
  }, [i, r]);
  let $;
  return h && ($ = f ? 0 : -1), {
    getRootProps: (I = {}) => C({}, I, {
      onClick: v(I),
      onPointerOver: t ? m(I) : void 0,
      ref: a,
      tabIndex: $
    }),
    highlighted: f,
    rootRef: a,
    selected: p
  };
}
const Co = /* @__PURE__ */ S.createContext(null);
Co.displayName = "CompoundComponentContext";
function Jd(e) {
  const t = Array.from(e.keys()).map((r) => {
    const n = e.get(r);
    return {
      key: r,
      subitem: n
    };
  });
  return t.sort((r, n) => {
    const o = r.subitem.ref.current, a = n.subitem.ref.current;
    return o === null || a === null || o === a ? 0 : o.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1;
  }), new Map(t.map((r) => [r.key, r.subitem]));
}
function Xd() {
  const [e, t] = S.useState(/* @__PURE__ */ new Map()), r = S.useRef(/* @__PURE__ */ new Set()), n = S.useCallback(function(d) {
    r.current.delete(d), t((u) => {
      const f = new Map(u);
      return f.delete(d), f;
    });
  }, []), o = S.useCallback(function(d, u) {
    let f;
    return typeof d == "function" ? f = d(r.current) : f = d, r.current.add(f), t((p) => {
      const h = new Map(p);
      return h.set(f, u), h;
    }), {
      id: f,
      deregister: () => n(f)
    };
  }, [n]), a = S.useMemo(() => Jd(e), [e]), s = S.useCallback(function(d) {
    return Array.from(a.keys()).indexOf(d);
  }, [a]);
  return {
    contextValue: S.useMemo(() => ({
      getItemIndex: s,
      registerItem: o,
      totalSubitemCount: e.size
    }), [s, o, e.size]),
    subitems: a
  };
}
function Fa(e, t) {
  return function(n = {}) {
    const o = C({}, n, e(n));
    return C({}, o, t(o));
  };
}
var Ke = "top", it = "bottom", st = "right", Ge = "left", So = "auto", Dr = [Ke, it, st, Ge], Gt = "start", Cr = "end", Zd = "clippingParents", es = "viewport", fr = "popper", Qd = "reference", za = /* @__PURE__ */ Dr.reduce(function(e, t) {
  return e.concat([t + "-" + Gt, t + "-" + Cr]);
}, []), ts = /* @__PURE__ */ [].concat(Dr, [So]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Gt, t + "-" + Cr]);
}, []), ef = "beforeRead", tf = "read", rf = "afterRead", nf = "beforeMain", of = "main", af = "afterMain", sf = "beforeWrite", lf = "write", cf = "afterWrite", uf = [ef, tf, rf, nf, of, af, sf, lf, cf];
function gt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function tt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Vt(e) {
  var t = tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function at(e) {
  var t = tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function $o(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function df(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !at(a) || !gt(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function ff(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), i = s.reduce(function(c, d) {
        return c[d] = "", c;
      }, {});
      !at(o) || !gt(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(c) {
        o.removeAttribute(c);
      }));
    });
  };
}
const pf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: df,
  effect: ff,
  requires: ["computeStyles"]
};
function mt(e) {
  return e.split("-")[0];
}
var kt = Math.max, Gr = Math.min, Jt = Math.round;
function Gn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function rs() {
  return !/^((?!chrome|android).)*safari/i.test(Gn());
}
function Xt(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && at(e) && (o = e.offsetWidth > 0 && Jt(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Jt(n.height) / e.offsetHeight || 1);
  var s = Vt(e) ? tt(e) : window, i = s.visualViewport, c = !rs() && r, d = (n.left + (c && i ? i.offsetLeft : 0)) / o, u = (n.top + (c && i ? i.offsetTop : 0)) / a, f = n.width / o, p = n.height / a;
  return {
    width: f,
    height: p,
    top: u,
    right: d + f,
    bottom: u + p,
    left: d,
    x: d,
    y: u
  };
}
function Eo(e) {
  var t = Xt(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function ns(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && $o(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function St(e) {
  return tt(e).getComputedStyle(e);
}
function vf(e) {
  return ["table", "td", "th"].indexOf(gt(e)) >= 0;
}
function Tt(e) {
  return ((Vt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function fn(e) {
  return gt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    ($o(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Tt(e)
  );
}
function ja(e) {
  return !at(e) || // https://github.com/popperjs/popper-core/issues/837
  St(e).position === "fixed" ? null : e.offsetParent;
}
function mf(e) {
  var t = /firefox/i.test(Gn()), r = /Trident/i.test(Gn());
  if (r && at(e)) {
    var n = St(e);
    if (n.position === "fixed")
      return null;
  }
  var o = fn(e);
  for ($o(o) && (o = o.host); at(o) && ["html", "body"].indexOf(gt(o)) < 0; ) {
    var a = St(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function kr(e) {
  for (var t = tt(e), r = ja(e); r && vf(r) && St(r).position === "static"; )
    r = ja(r);
  return r && (gt(r) === "html" || gt(r) === "body" && St(r).position === "static") ? t : r || mf(e) || t;
}
function Oo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gr(e, t, r) {
  return kt(e, Gr(t, r));
}
function gf(e, t, r) {
  var n = gr(e, t, r);
  return n > r ? r : n;
}
function os() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function as(e) {
  return Object.assign({}, os(), e);
}
function is(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var hf = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, as(typeof t != "number" ? t : is(t, Dr));
};
function yf(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = mt(r.placement), c = Oo(i), d = [Ge, st].indexOf(i) >= 0, u = d ? "height" : "width";
  if (!(!a || !s)) {
    var f = hf(o.padding, r), p = Eo(a), h = c === "y" ? Ke : Ge, g = c === "y" ? it : st, v = r.rects.reference[u] + r.rects.reference[c] - s[c] - r.rects.popper[u], m = s[c] - r.rects.reference[c], $ = kr(a), w = $ ? c === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0, I = v / 2 - m / 2, y = f[h], x = w - p[u] - f[g], E = w / 2 - p[u] / 2 + I, R = gr(y, E, x), N = c;
    r.modifiersData[n] = (t = {}, t[N] = R, t.centerOffset = R - E, t);
  }
}
function bf(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || ns(t.elements.popper, o) && (t.elements.arrow = o));
}
const xf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: yf,
  effect: bf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Zt(e) {
  return e.split("-")[1];
}
var Cf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Sf(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Jt(r * o) / o || 0,
    y: Jt(n * o) / o || 0
  };
}
function La(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, c = e.gpuAcceleration, d = e.adaptive, u = e.roundOffsets, f = e.isFixed, p = s.x, h = p === void 0 ? 0 : p, g = s.y, v = g === void 0 ? 0 : g, m = typeof u == "function" ? u({
    x: h,
    y: v
  }) : {
    x: h,
    y: v
  };
  h = m.x, v = m.y;
  var $ = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), I = Ge, y = Ke, x = window;
  if (d) {
    var E = kr(r), R = "clientHeight", N = "clientWidth";
    if (E === tt(r) && (E = Tt(r), St(E).position !== "static" && i === "absolute" && (R = "scrollHeight", N = "scrollWidth")), E = E, o === Ke || (o === Ge || o === st) && a === Cr) {
      y = it;
      var k = f && E === x && x.visualViewport ? x.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[R]
      );
      v -= k - n.height, v *= c ? 1 : -1;
    }
    if (o === Ge || (o === Ke || o === it) && a === Cr) {
      I = st;
      var V = f && E === x && x.visualViewport ? x.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[N]
      );
      h -= V - n.width, h *= c ? 1 : -1;
    }
  }
  var j = Object.assign({
    position: i
  }, d && Cf), Y = u === !0 ? Sf({
    x: h,
    y: v
  }, tt(r)) : {
    x: h,
    y: v
  };
  if (h = Y.x, v = Y.y, c) {
    var M;
    return Object.assign({}, j, (M = {}, M[y] = w ? "0" : "", M[I] = $ ? "0" : "", M.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", M));
  }
  return Object.assign({}, j, (t = {}, t[y] = w ? v + "px" : "", t[I] = $ ? h + "px" : "", t.transform = "", t));
}
function $f(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, s = a === void 0 ? !0 : a, i = r.roundOffsets, c = i === void 0 ? !0 : i, d = {
    placement: mt(t.placement),
    variation: Zt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, La(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, La(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Ef = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: $f,
  data: {}
};
var zr = {
  passive: !0
};
function Of(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, s = n.resize, i = s === void 0 ? !0 : s, c = tt(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && d.forEach(function(u) {
    u.addEventListener("scroll", r.update, zr);
  }), i && c.addEventListener("resize", r.update, zr), function() {
    a && d.forEach(function(u) {
      u.removeEventListener("scroll", r.update, zr);
    }), i && c.removeEventListener("resize", r.update, zr);
  };
}
const If = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Of,
  data: {}
};
var wf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return wf[t];
  });
}
var Tf = {
  start: "end",
  end: "start"
};
function Ma(e) {
  return e.replace(/start|end/g, function(t) {
    return Tf[t];
  });
}
function Io(e) {
  var t = tt(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function wo(e) {
  return Xt(Tt(e)).left + Io(e).scrollLeft;
}
function Rf(e, t) {
  var r = tt(e), n = Tt(e), o = r.visualViewport, a = n.clientWidth, s = n.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    var d = rs();
    (d || !d && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + wo(e),
    y: c
  };
}
function Pf(e) {
  var t, r = Tt(e), n = Io(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = kt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = kt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -n.scrollLeft + wo(e), c = -n.scrollTop;
  return St(o || r).direction === "rtl" && (i += kt(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function To(e) {
  var t = St(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function ss(e) {
  return ["html", "body", "#document"].indexOf(gt(e)) >= 0 ? e.ownerDocument.body : at(e) && To(e) ? e : ss(fn(e));
}
function hr(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = ss(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = tt(n), s = o ? [a].concat(a.visualViewport || [], To(n) ? n : []) : n, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(hr(fn(s)))
  );
}
function Jn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _f(e, t) {
  var r = Xt(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ha(e, t, r) {
  return t === es ? Jn(Rf(e, r)) : Vt(t) ? _f(t, r) : Jn(Pf(Tt(e)));
}
function Df(e) {
  var t = hr(fn(e)), r = ["absolute", "fixed"].indexOf(St(e).position) >= 0, n = r && at(e) ? kr(e) : e;
  return Vt(n) ? t.filter(function(o) {
    return Vt(o) && ns(o, n) && gt(o) !== "body";
  }) : [];
}
function kf(e, t, r, n) {
  var o = t === "clippingParents" ? Df(e) : [].concat(t), a = [].concat(o, [r]), s = a[0], i = a.reduce(function(c, d) {
    var u = Ha(e, d, n);
    return c.top = kt(u.top, c.top), c.right = Gr(u.right, c.right), c.bottom = Gr(u.bottom, c.bottom), c.left = kt(u.left, c.left), c;
  }, Ha(e, s, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ls(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? mt(n) : null, a = n ? Zt(n) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, c;
  switch (o) {
    case Ke:
      c = {
        x: s,
        y: t.y - r.height
      };
      break;
    case it:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case st:
      c = {
        x: t.x + t.width,
        y: i
      };
      break;
    case Ge:
      c = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? Oo(o) : null;
  if (d != null) {
    var u = d === "y" ? "height" : "width";
    switch (a) {
      case Gt:
        c[d] = c[d] - (t[u] / 2 - r[u] / 2);
        break;
      case Cr:
        c[d] = c[d] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return c;
}
function Sr(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, s = a === void 0 ? e.strategy : a, i = r.boundary, c = i === void 0 ? Zd : i, d = r.rootBoundary, u = d === void 0 ? es : d, f = r.elementContext, p = f === void 0 ? fr : f, h = r.altBoundary, g = h === void 0 ? !1 : h, v = r.padding, m = v === void 0 ? 0 : v, $ = as(typeof m != "number" ? m : is(m, Dr)), w = p === fr ? Qd : fr, I = e.rects.popper, y = e.elements[g ? w : p], x = kf(Vt(y) ? y : y.contextElement || Tt(e.elements.popper), c, u, s), E = Xt(e.elements.reference), R = ls({
    reference: E,
    element: I,
    strategy: "absolute",
    placement: o
  }), N = Jn(Object.assign({}, I, R)), k = p === fr ? N : E, V = {
    top: x.top - k.top + $.top,
    bottom: k.bottom - x.bottom + $.bottom,
    left: x.left - k.left + $.left,
    right: k.right - x.right + $.right
  }, j = e.modifiersData.offset;
  if (p === fr && j) {
    var Y = j[o];
    Object.keys(V).forEach(function(M) {
      var Q = [st, it].indexOf(M) >= 0 ? 1 : -1, _ = [Ke, it].indexOf(M) >= 0 ? "y" : "x";
      V[M] += Y[_] * Q;
    });
  }
  return V;
}
function Af(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, c = r.allowedAutoPlacements, d = c === void 0 ? ts : c, u = Zt(n), f = u ? i ? za : za.filter(function(g) {
    return Zt(g) === u;
  }) : Dr, p = f.filter(function(g) {
    return d.indexOf(g) >= 0;
  });
  p.length === 0 && (p = f);
  var h = p.reduce(function(g, v) {
    return g[v] = Sr(e, {
      placement: v,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[mt(v)], g;
  }, {});
  return Object.keys(h).sort(function(g, v) {
    return h[g] - h[v];
  });
}
function Nf(e) {
  if (mt(e) === So)
    return [];
  var t = Wr(e);
  return [Ma(e), t, Ma(t)];
}
function Bf(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !0 : s, c = r.fallbackPlacements, d = r.padding, u = r.boundary, f = r.rootBoundary, p = r.altBoundary, h = r.flipVariations, g = h === void 0 ? !0 : h, v = r.allowedAutoPlacements, m = t.options.placement, $ = mt(m), w = $ === m, I = c || (w || !g ? [Wr(m)] : Nf(m)), y = [m].concat(I).reduce(function(U, te) {
      return U.concat(mt(te) === So ? Af(t, {
        placement: te,
        boundary: u,
        rootBoundary: f,
        padding: d,
        flipVariations: g,
        allowedAutoPlacements: v
      }) : te);
    }, []), x = t.rects.reference, E = t.rects.popper, R = /* @__PURE__ */ new Map(), N = !0, k = y[0], V = 0; V < y.length; V++) {
      var j = y[V], Y = mt(j), M = Zt(j) === Gt, Q = [Ke, it].indexOf(Y) >= 0, _ = Q ? "width" : "height", O = Sr(t, {
        placement: j,
        boundary: u,
        rootBoundary: f,
        altBoundary: p,
        padding: d
      }), T = Q ? M ? st : Ge : M ? it : Ke;
      x[_] > E[_] && (T = Wr(T));
      var L = Wr(T), oe = [];
      if (a && oe.push(O[Y] <= 0), i && oe.push(O[T] <= 0, O[L] <= 0), oe.every(function(U) {
        return U;
      })) {
        k = j, N = !1;
        break;
      }
      R.set(j, oe);
    }
    if (N)
      for (var P = g ? 3 : 1, B = function(te) {
        var ee = y.find(function(re) {
          var G = R.get(re);
          if (G)
            return G.slice(0, te).every(function(A) {
              return A;
            });
        });
        if (ee)
          return k = ee, "break";
      }, J = P; J > 0; J--) {
        var K = B(J);
        if (K === "break")
          break;
      }
    t.placement !== k && (t.modifiersData[n]._skip = !0, t.placement = k, t.reset = !0);
  }
}
const Vf = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Bf,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Wa(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function Ua(e) {
  return [Ke, st, it, Ge].some(function(t) {
    return e[t] >= 0;
  });
}
function Ff(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Sr(t, {
    elementContext: "reference"
  }), i = Sr(t, {
    altBoundary: !0
  }), c = Wa(s, n), d = Wa(i, o, a), u = Ua(c), f = Ua(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const zf = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ff
};
function jf(e, t, r) {
  var n = mt(e), o = [Ge, Ke].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Ge, st].indexOf(n) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function Lf(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, s = ts.reduce(function(u, f) {
    return u[f] = jf(f, t.rects, a), u;
  }, {}), i = s[t.placement], c = i.x, d = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = s;
}
const Mf = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Lf
};
function Hf(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = ls({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Wf = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Hf,
  data: {}
};
function Uf(e) {
  return e === "x" ? "y" : "x";
}
function qf(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, s = r.altAxis, i = s === void 0 ? !1 : s, c = r.boundary, d = r.rootBoundary, u = r.altBoundary, f = r.padding, p = r.tether, h = p === void 0 ? !0 : p, g = r.tetherOffset, v = g === void 0 ? 0 : g, m = Sr(t, {
    boundary: c,
    rootBoundary: d,
    padding: f,
    altBoundary: u
  }), $ = mt(t.placement), w = Zt(t.placement), I = !w, y = Oo($), x = Uf(y), E = t.modifiersData.popperOffsets, R = t.rects.reference, N = t.rects.popper, k = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, V = typeof k == "number" ? {
    mainAxis: k,
    altAxis: k
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, k), j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Y = {
    x: 0,
    y: 0
  };
  if (E) {
    if (a) {
      var M, Q = y === "y" ? Ke : Ge, _ = y === "y" ? it : st, O = y === "y" ? "height" : "width", T = E[y], L = T + m[Q], oe = T - m[_], P = h ? -N[O] / 2 : 0, B = w === Gt ? R[O] : N[O], J = w === Gt ? -N[O] : -R[O], K = t.elements.arrow, U = h && K ? Eo(K) : {
        width: 0,
        height: 0
      }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : os(), ee = te[Q], re = te[_], G = gr(0, R[O], U[O]), A = I ? R[O] / 2 - P - G - ee - V.mainAxis : B - G - ee - V.mainAxis, q = I ? -R[O] / 2 + P + G + re + V.mainAxis : J + G + re + V.mainAxis, se = t.elements.arrow && kr(t.elements.arrow), D = se ? y === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, ae = (M = j == null ? void 0 : j[y]) != null ? M : 0, W = T + A - ae - D, F = T + q - ae, Z = gr(h ? Gr(L, W) : L, T, h ? kt(oe, F) : oe);
      E[y] = Z, Y[y] = Z - T;
    }
    if (i) {
      var ie, xe = y === "x" ? Ke : Ge, de = y === "x" ? it : st, ce = E[x], ge = x === "y" ? "height" : "width", Te = ce + m[xe], Xe = ce - m[de], ne = [Ke, Ge].indexOf($) !== -1, ue = (ie = j == null ? void 0 : j[x]) != null ? ie : 0, Ie = ne ? Te : ce - R[ge] - N[ge] - ue + V.altAxis, Pe = ne ? ce + R[ge] + N[ge] - ue - V.altAxis : Xe, ct = h && ne ? gf(Ie, ce, Pe) : gr(h ? Ie : Te, ce, h ? Pe : Xe);
      E[x] = ct, Y[x] = ct - ce;
    }
    t.modifiersData[n] = Y;
  }
}
const Yf = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: qf,
  requiresIfExists: ["offset"]
};
function Kf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Gf(e) {
  return e === tt(e) || !at(e) ? Io(e) : Kf(e);
}
function Jf(e) {
  var t = e.getBoundingClientRect(), r = Jt(t.width) / e.offsetWidth || 1, n = Jt(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Xf(e, t, r) {
  r === void 0 && (r = !1);
  var n = at(t), o = at(t) && Jf(t), a = Tt(t), s = Xt(e, o, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((gt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  To(a)) && (i = Gf(t)), at(t) ? (c = Xt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : a && (c.x = wo(a))), {
    x: s.left + i.scrollLeft - c.x,
    y: s.top + i.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Zf(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!r.has(i)) {
        var c = t.get(i);
        c && o(c);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function Qf(e) {
  var t = Zf(e);
  return uf.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function ep(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function tp(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var qa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ya() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function rp(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? qa : o;
  return function(i, c, d) {
    d === void 0 && (d = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, qa, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: c
      },
      attributes: {},
      styles: {}
    }, f = [], p = !1, h = {
      state: u,
      setOptions: function($) {
        var w = typeof $ == "function" ? $(u.options) : $;
        v(), u.options = Object.assign({}, a, u.options, w), u.scrollParents = {
          reference: Vt(i) ? hr(i) : i.contextElement ? hr(i.contextElement) : [],
          popper: hr(c)
        };
        var I = Qf(tp([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = I.filter(function(y) {
          return y.enabled;
        }), g(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!p) {
          var $ = u.elements, w = $.reference, I = $.popper;
          if (Ya(w, I)) {
            u.rects = {
              reference: Xf(w, kr(I), u.options.strategy === "fixed"),
              popper: Eo(I)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(V) {
              return u.modifiersData[V.name] = Object.assign({}, V.data);
            });
            for (var y = 0; y < u.orderedModifiers.length; y++) {
              if (u.reset === !0) {
                u.reset = !1, y = -1;
                continue;
              }
              var x = u.orderedModifiers[y], E = x.fn, R = x.options, N = R === void 0 ? {} : R, k = x.name;
              typeof E == "function" && (u = E({
                state: u,
                options: N,
                name: k,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ep(function() {
        return new Promise(function(m) {
          h.forceUpdate(), m(u);
        });
      }),
      destroy: function() {
        v(), p = !0;
      }
    };
    if (!Ya(i, c))
      return h;
    h.setOptions(d).then(function(m) {
      !p && d.onFirstUpdate && d.onFirstUpdate(m);
    });
    function g() {
      u.orderedModifiers.forEach(function(m) {
        var $ = m.name, w = m.options, I = w === void 0 ? {} : w, y = m.effect;
        if (typeof y == "function") {
          var x = y({
            state: u,
            name: $,
            instance: h,
            options: I
          }), E = function() {
          };
          f.push(x || E);
        }
      });
    }
    function v() {
      f.forEach(function(m) {
        return m();
      }), f = [];
    }
    return h;
  };
}
var np = [If, Wf, Ef, pf, Mf, Vf, Yf, xf, zf], op = /* @__PURE__ */ rp({
  defaultModifiers: np
});
function ap(e) {
  return typeof e == "function" ? e() : e;
}
const Jr = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    children: n,
    container: o,
    disablePortal: a = !1
  } = t, [s, i] = S.useState(null), c = Me(/* @__PURE__ */ S.isValidElement(n) ? n.ref : null, r);
  if (Ot(() => {
    a || i(ap(o) || document.body);
  }, [o, a]), Ot(() => {
    if (s && !a)
      return Mn(r, s), () => {
        Mn(r, null);
      };
  }, [r, s, a]), a) {
    if (/* @__PURE__ */ S.isValidElement(n)) {
      const d = {
        ref: c
      };
      return /* @__PURE__ */ S.cloneElement(n, d);
    }
    return /* @__PURE__ */ H.jsx(S.Fragment, {
      children: n
    });
  }
  return /* @__PURE__ */ H.jsx(S.Fragment, {
    children: s && /* @__PURE__ */ el.createPortal(n, s)
  });
});
process.env.NODE_ENV !== "production" && (Jr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: l.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([Ln, l.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool
});
process.env.NODE_ENV !== "production" && (Jr["propTypes"] = gl(Jr.propTypes));
function ip(e) {
  return Ir("MuiPopper", e);
}
no("MuiPopper", ["root"]);
const sp = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], lp = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function cp(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Xr(e) {
  return typeof e == "function" ? e() : e;
}
function pn(e) {
  return e.nodeType !== void 0;
}
function up(e) {
  return !pn(e);
}
const dp = () => rt({
  root: ["root"]
}, Cd(ip)), fp = {}, pp = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n;
  const {
    anchorEl: o,
    children: a,
    direction: s,
    disablePortal: i,
    modifiers: c,
    open: d,
    placement: u,
    popperOptions: f,
    popperRef: p,
    slotProps: h = {},
    slots: g = {},
    TransitionProps: v
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, m = pe(t, sp), $ = S.useRef(null), w = Me($, r), I = S.useRef(null), y = Me(I, p), x = S.useRef(y);
  Ot(() => {
    x.current = y;
  }, [y]), S.useImperativeHandle(p, () => I.current, []);
  const E = cp(u, s), [R, N] = S.useState(E), [k, V] = S.useState(Xr(o));
  S.useEffect(() => {
    I.current && I.current.forceUpdate();
  }), S.useEffect(() => {
    o && V(Xr(o));
  }, [o]), Ot(() => {
    if (!k || !d)
      return;
    const _ = (L) => {
      N(L.placement);
    };
    if (process.env.NODE_ENV !== "production" && k && pn(k) && k.nodeType === 1) {
      const L = k.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && L.top === 0 && L.left === 0 && L.right === 0 && L.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let O = [{
      name: "preventOverflow",
      options: {
        altBoundary: i
      }
    }, {
      name: "flip",
      options: {
        altBoundary: i
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: L
      }) => {
        _(L);
      }
    }];
    c != null && (O = O.concat(c)), f && f.modifiers != null && (O = O.concat(f.modifiers));
    const T = op(k, $.current, C({
      placement: E
    }, f, {
      modifiers: O
    }));
    return x.current(T), () => {
      T.destroy(), x.current(null);
    };
  }, [k, i, c, d, f, E]);
  const j = {
    placement: R
  };
  v !== null && (j.TransitionProps = v);
  const Y = dp(), M = (n = g.root) != null ? n : "div", Q = $d({
    elementType: M,
    externalSlotProps: h.root,
    externalForwardedProps: m,
    additionalProps: {
      role: "tooltip",
      ref: w
    },
    ownerState: t,
    className: Y.root
  });
  return /* @__PURE__ */ H.jsx(M, C({}, Q, {
    children: typeof a == "function" ? a(j) : a
  }));
}), cs = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const {
    anchorEl: n,
    children: o,
    container: a,
    direction: s = "ltr",
    disablePortal: i = !1,
    keepMounted: c = !1,
    modifiers: d,
    open: u,
    placement: f = "bottom",
    popperOptions: p = fp,
    popperRef: h,
    style: g,
    transition: v = !1,
    slotProps: m = {},
    slots: $ = {}
  } = t, w = pe(t, lp), [I, y] = S.useState(!0), x = () => {
    y(!1);
  }, E = () => {
    y(!0);
  };
  if (!c && !u && (!v || I))
    return null;
  let R;
  if (a)
    R = a;
  else if (n) {
    const V = Xr(n);
    R = V && pn(V) ? oa(V).body : oa(null).body;
  }
  const N = !u && c && (!v || I) ? "none" : void 0, k = v ? {
    in: u,
    onEnter: x,
    onExited: E
  } : void 0;
  return /* @__PURE__ */ H.jsx(Jr, {
    disablePortal: i,
    container: R,
    children: /* @__PURE__ */ H.jsx(pp, C({
      anchorEl: n,
      direction: s,
      disablePortal: i,
      modifiers: d,
      ref: r,
      open: v ? !I : u,
      placement: f,
      popperOptions: p,
      popperRef: h,
      slotProps: m,
      slots: $
    }, w, {
      style: C({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: N
      }, g),
      TransitionProps: k,
      children: o
    }))
  });
});
process.env.NODE_ENV !== "production" && (cs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: al(l.oneOfType([Ln, l.object, l.func]), (e) => {
    if (e.open) {
      const t = Xr(e.anchorEl);
      if (t && pn(t) && t.nodeType === 1) {
        const r = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && r.top === 0 && r.left === 0 && r.right === 0 && r.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || up(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: l.oneOfType([l.node, l.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: l.oneOfType([Ln, l.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: l.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: l.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: l.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: l.arrayOf(l.shape({
    data: l.object,
    effect: l.func,
    enabled: l.bool,
    fn: l.func,
    name: l.any,
    options: l.object,
    phase: l.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: l.arrayOf(l.string),
    requiresIfExists: l.arrayOf(l.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: l.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: l.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: l.shape({
    modifiers: l.array,
    onFirstUpdate: l.func,
    placement: l.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: l.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: $l,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: l.bool
});
function vp(e, t) {
  const r = S.useContext(Co);
  if (r === null)
    throw new Error("useCompoundItem must be used within a useCompoundParent");
  const {
    registerItem: n
  } = r, [o, a] = S.useState(typeof e == "function" ? void 0 : e);
  return Ot(() => {
    const {
      id: s,
      deregister: i
    } = n(e, t);
    return a(s), i;
  }, [n, t, e]), {
    id: o,
    index: o !== void 0 ? r.getItemIndex(o) : -1,
    totalItemCount: r.totalSubitemCount
  };
}
function mp(e) {
  const {
    value: t,
    label: r,
    disabled: n,
    rootRef: o,
    id: a
  } = e, {
    getRootProps: s,
    rootRef: i,
    highlighted: c,
    selected: d
  } = Gd({
    item: t
  }), u = ro(a), f = S.useRef(null), p = S.useMemo(() => ({
    disabled: n,
    label: r,
    value: t,
    ref: f,
    id: u
  }), [n, r, t, u]), {
    index: h
  } = vp(t, p), g = Me(o, f, i);
  return {
    getRootProps: (v = {}) => C({}, v, s(v), {
      id: u,
      ref: g,
      role: "option",
      "aria-selected": d
    }),
    highlighted: c,
    index: h,
    selected: d,
    rootRef: g
  };
}
const us = {
  buttonClick: "buttonClick"
}, gp = (e) => {
  const {
    label: t,
    value: r
  } = e;
  return typeof t == "string" ? t : typeof r == "string" ? r : String(e);
};
function hp(e, t) {
  const {
    open: r
  } = e, {
    context: {
      selectionMode: n
    }
  } = t;
  if (t.type === us.buttonClick) {
    var o;
    const c = (o = e.selectedValues[0]) != null ? o : qe(null, "start", t.context);
    return C({}, e, {
      open: !r,
      highlightedValue: r ? null : c
    });
  }
  const a = Qi(e, t);
  switch (t.type) {
    case je.keyDown:
      if (e.open) {
        if (t.event.key === "Escape")
          return C({}, a, {
            open: !1
          });
        if (n === "single" && (t.event.key === "Enter" || t.event.key === " "))
          return C({}, a, {
            open: !1
          });
      } else {
        if (t.event.key === "Enter" || t.event.key === " " || t.event.key === "ArrowDown") {
          var s;
          return C({}, e, {
            open: !0,
            highlightedValue: (s = e.selectedValues[0]) != null ? s : qe(null, "start", t.context)
          });
        }
        if (t.event.key === "ArrowUp") {
          var i;
          return C({}, e, {
            open: !0,
            highlightedValue: (i = e.selectedValues[0]) != null ? i : qe(null, "end", t.context)
          });
        }
      }
      break;
    case je.itemClick:
      if (n === "single")
        return C({}, a, {
          open: !1
        });
      break;
    case je.blur:
      return C({}, a, {
        open: !1
      });
    default:
      return a;
  }
  return a;
}
const yp = {
  clip: "rect(1px, 1px, 1px, 1px)",
  clipPath: "inset(50%)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  left: "50%",
  bottom: 0
  // to display the native browser validation error at the bottom of the Select.
}, bp = () => {
};
function xp(e) {
  return Array.isArray(e) ? e.length === 0 ? "" : JSON.stringify(e.map((t) => t.value)) : (e == null ? void 0 : e.value) == null ? "" : typeof e.value == "string" || typeof e.value == "number" ? e.value : JSON.stringify(e.value);
}
function Cp(e) {
  e.preventDefault();
}
function Sp(e) {
  const {
    areOptionsEqual: t,
    buttonRef: r,
    defaultOpen: n = !1,
    defaultValue: o,
    disabled: a = !1,
    listboxId: s,
    listboxRef: i,
    multiple: c = !1,
    name: d,
    required: u,
    onChange: f,
    onHighlightChange: p,
    onOpenChange: h,
    open: g,
    options: v,
    getOptionAsString: m = gp,
    getSerializedValue: $ = xp,
    value: w
  } = e, I = S.useRef(null), y = Me(r, I), x = S.useRef(null), E = ro(s);
  let R;
  w === void 0 && o === void 0 ? R = [] : o !== void 0 && (c ? R = o : R = o == null ? [] : [o]);
  const N = S.useMemo(() => {
    if (w !== void 0)
      return c ? w : w == null ? [] : [w];
  }, [w, c]), {
    subitems: k,
    contextValue: V
  } = Xd(), j = S.useMemo(() => v != null ? new Map(v.map((ne, ue) => [ne.value, {
    value: ne.value,
    label: ne.label,
    disabled: ne.disabled,
    ref: /* @__PURE__ */ S.createRef(),
    id: `${E}_${ue}`
  }])) : k, [v, k, E]), Y = Me(i, x), {
    getRootProps: M,
    active: Q,
    focusVisible: _,
    rootRef: O
  } = bo({
    disabled: a,
    rootRef: y
  }), T = S.useMemo(() => Array.from(j.keys()), [j]), L = S.useCallback((ne) => {
    if (t !== void 0) {
      const ue = T.find((Ie) => t(Ie, ne));
      return j.get(ue);
    }
    return j.get(ne);
  }, [j, t, T]), oe = S.useCallback((ne) => {
    var ue;
    const Ie = L(ne);
    return (ue = Ie == null ? void 0 : Ie.disabled) != null ? ue : !1;
  }, [L]), P = S.useCallback((ne) => {
    const ue = L(ne);
    return ue ? m(ue) : "";
  }, [L, m]), B = S.useMemo(() => ({
    selectedValues: N,
    open: g
  }), [N, g]), J = S.useCallback((ne) => {
    var ue;
    return (ue = j.get(ne)) == null ? void 0 : ue.id;
  }, [j]), K = S.useCallback((ne, ue) => {
    if (c)
      f == null || f(ne, ue);
    else {
      var Ie;
      f == null || f(ne, (Ie = ue[0]) != null ? Ie : null);
    }
  }, [c, f]), U = S.useCallback((ne, ue) => {
    p == null || p(ne, ue ?? null);
  }, [p]), te = S.useCallback((ne, ue, Ie) => {
    if (ue === "open" && (h == null || h(Ie), Ie === !1 && (ne == null ? void 0 : ne.type) !== "blur")) {
      var Pe;
      (Pe = I.current) == null || Pe.focus();
    }
  }, [h]), ee = {
    getInitialState: () => {
      var ne;
      return {
        highlightedValue: null,
        selectedValues: (ne = R) != null ? ne : [],
        open: n
      };
    },
    getItemId: J,
    controlledProps: B,
    itemComparer: t,
    isItemDisabled: oe,
    rootRef: O,
    onChange: K,
    onHighlightChange: U,
    onStateChange: te,
    reducerActionContext: S.useMemo(() => ({
      multiple: c
    }), [c]),
    items: T,
    getItemAsString: P,
    selectionMode: c ? "multiple" : "single",
    stateReducer: hp
  }, {
    dispatch: re,
    getRootProps: G,
    contextValue: A,
    state: {
      open: q,
      highlightedValue: se,
      selectedValues: D
    },
    rootRef: ae
  } = Yd(ee), W = (ne) => (ue) => {
    var Ie;
    if (ne == null || (Ie = ne.onMouseDown) == null || Ie.call(ne, ue), !ue.defaultMuiPrevented) {
      const Pe = {
        type: us.buttonClick,
        event: ue
      };
      re(Pe);
    }
  };
  Ot(() => {
    if (se != null) {
      var ne;
      const ue = (ne = L(se)) == null ? void 0 : ne.ref;
      if (!x.current || !(ue != null && ue.current))
        return;
      const Ie = x.current.getBoundingClientRect(), Pe = ue.current.getBoundingClientRect();
      Pe.top < Ie.top ? x.current.scrollTop -= Ie.top - Pe.top : Pe.bottom > Ie.bottom && (x.current.scrollTop += Pe.bottom - Ie.bottom);
    }
  }, [se, L]);
  const F = S.useCallback((ne) => L(ne), [L]), Z = (ne = {}) => C({}, ne, {
    onMouseDown: W(ne),
    ref: ae,
    role: "combobox",
    "aria-expanded": q,
    "aria-controls": E
  }), ie = (ne = {}) => {
    const ue = Fa(M, G);
    return Fa(ue, Z)(ne);
  }, xe = (ne = {}) => C({}, ne, {
    id: E,
    role: "listbox",
    "aria-multiselectable": c ? "true" : void 0,
    ref: Y,
    onMouseDown: Cp
    // to prevent the button from losing focus when interacting with the listbox
  });
  S.useDebugValue({
    selectedOptions: D,
    highlightedOption: se,
    open: q
  });
  const de = S.useMemo(() => C({}, A, V), [A, V]);
  let ce;
  e.multiple ? ce = D : ce = D.length > 0 ? D[0] : null;
  let ge;
  if (c)
    ge = ce.map((ne) => F(ne)).filter((ne) => ne !== void 0);
  else {
    var Te;
    ge = (Te = F(ce)) != null ? Te : null;
  }
  return {
    buttonActive: Q,
    buttonFocusVisible: _,
    buttonRef: O,
    contextValue: de,
    disabled: a,
    dispatch: re,
    getButtonProps: ie,
    getHiddenInputProps: (ne = {}) => C({
      name: d,
      tabIndex: -1,
      "aria-hidden": !0,
      required: u ? !0 : void 0,
      value: $(ge),
      onChange: bp,
      style: yp
    }, ne),
    getListboxProps: xe,
    getOptionMetadata: F,
    listboxRef: ae,
    open: q,
    options: T,
    value: ce,
    highlightedOption: se
  };
}
function $p(e) {
  const {
    value: t,
    children: r
  } = e, {
    dispatch: n,
    getItemIndex: o,
    getItemState: a,
    registerHighlightChangeHandler: s,
    registerSelectionChangeHandler: i,
    registerItem: c,
    totalSubitemCount: d
  } = t, u = S.useMemo(() => ({
    dispatch: n,
    getItemState: a,
    getItemIndex: o,
    registerHighlightChangeHandler: s,
    registerSelectionChangeHandler: i
  }), [n, o, a, s, i]), f = S.useMemo(() => ({
    getItemIndex: o,
    registerItem: c,
    totalSubitemCount: d
  }), [c, o, d]);
  return /* @__PURE__ */ H.jsx(Co.Provider, {
    value: f,
    children: /* @__PURE__ */ H.jsx(xo.Provider, {
      value: u,
      children: r
    })
  });
}
const Ep = ["className", "elementType", "ownerState", "externalForwardedProps", "getSlotOwnerState", "internalForwardedProps"], Op = ["component", "slots", "slotProps"], Ip = ["component"], wp = ["disableColorInversion"];
function Ne(e, t) {
  const {
    className: r,
    elementType: n,
    ownerState: o,
    externalForwardedProps: a,
    getSlotOwnerState: s,
    internalForwardedProps: i
  } = t, c = pe(t, Ep), {
    component: d,
    slots: u = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    }
  } = a, p = pe(a, Op), h = u[e] || n, g = Gi(f[e], o), v = Ji(C({
    className: r
  }, c, {
    externalForwardedProps: e === "root" ? p : void 0,
    externalSlotProps: g
  })), {
    props: {
      component: m
    },
    internalRef: $
  } = v, w = pe(v.props, Ip), I = Me($, g == null ? void 0 : g.ref, t.ref), y = s ? s(w) : {}, {
    disableColorInversion: x = !1
  } = y, E = pe(y, wp), R = C({}, o, E), {
    getColor: N
  } = wt(R.variant);
  if (e === "root") {
    var k;
    R.color = (k = w.color) != null ? k : o.color;
  } else
    x || (R.color = N(w.color, R.color));
  const V = e === "root" ? m || d : m, j = Ki(h, C({}, e === "root" && !d && !u[e] && i, e !== "root" && !u[e] && i, w, V && {
    as: V
  }, {
    ref: I
  }), R);
  return Object.keys(E).forEach((Y) => {
    delete j[Y];
  }), [h, j];
}
const Tp = nt("MuiListItem", ["root", "startAction", "endAction", "nested", "nesting", "sticky", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]), Rp = Tp, Pp = /* @__PURE__ */ S.createContext(!1), ds = Pp, _p = /* @__PURE__ */ S.createContext(!1), Ro = _p, Dp = /* @__PURE__ */ S.createContext(!1), kp = Dp, Ap = /* @__PURE__ */ S.createContext(void 0), Np = Ap, Bp = /* @__PURE__ */ S.createContext(void 0), fs = Bp, Vp = {
  "--NestedList-marginRight": "0px",
  "--NestedList-marginLeft": "0px",
  "--NestedListItem-paddingLeft": "var(--ListItem-paddingX)",
  // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
  "--ListItemButton-marginBlock": "0px",
  "--ListItemButton-marginInline": "0px",
  "--ListItem-marginBlock": "0px",
  "--ListItem-marginInline": "0px"
};
function ps(e) {
  const {
    children: t,
    nested: r,
    row: n = !1,
    wrap: o = !1
  } = e, a = /* @__PURE__ */ H.jsx(Ro.Provider, {
    value: n,
    children: /* @__PURE__ */ H.jsx(kp.Provider, {
      value: o,
      children: S.Children.map(t, (s, i) => /* @__PURE__ */ S.isValidElement(s) ? /* @__PURE__ */ S.cloneElement(s, C({}, i === 0 && {
        "data-first-child": ""
      }, i === S.Children.count(t) - 1 && {
        "data-last-child": ""
      })) : s)
    })
  });
  return r === void 0 ? a : /* @__PURE__ */ H.jsx(ds.Provider, {
    value: r,
    children: a
  });
}
const vs = ({
  theme: e,
  ownerState: t
}, r) => {
  let n = {};
  function o(a) {
    if (typeof a == "function") {
      const s = a(e);
      o(s);
    } else
      Array.isArray(a) ? a.forEach((s) => {
        typeof s != "boolean" && o(s);
      }) : typeof a == "object" && (n = C({}, n, a));
  }
  return t.sx && (o(t.sx), r.forEach((a) => {
    const s = n[a];
    if (typeof s == "string" || typeof s == "number")
      if (a === "borderRadius")
        if (typeof s == "number")
          n[a] = `${s}px`;
        else {
          var i;
          n[a] = ((i = e.vars) == null ? void 0 : i.radius[s]) || s;
        }
      else
        ["p", "padding", "m", "margin"].indexOf(a) !== -1 && typeof s == "number" ? n[a] = e.spacing(s) : n[a] = s;
    else
      typeof s == "function" ? n[a] = s(e) : n[a] = void 0;
  })), n;
};
function Fp(e) {
  return lt("MuiList", e);
}
nt("MuiList", ["root", "nesting", "scoped", "sizeSm", "sizeMd", "sizeLg", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "horizontal", "vertical"]);
const ms = /* @__PURE__ */ S.createContext(void 0);
process.env.NODE_ENV !== "production" && (ms.displayName = "RadioGroupContext");
const zp = ms, jp = ["component", "className", "children", "size", "orientation", "wrap", "variant", "color", "role", "slots", "slotProps"], Lp = (e) => {
  const {
    variant: t,
    color: r,
    size: n,
    nesting: o,
    orientation: a,
    instanceSize: s
  } = e, i = {
    root: ["root", a, t && `variant${me(t)}`, r && `color${me(r)}`, !s && !o && n && `size${me(n)}`, s && `size${me(s)}`, o && "nesting"]
  };
  return rt(i, Fp, {});
}, gs = we("ul")(({
  theme: e,
  ownerState: t
}) => {
  var r;
  const {
    p: n,
    padding: o,
    borderRadius: a
  } = vs({
    theme: e,
    ownerState: t
  }, ["p", "padding", "borderRadius"]);
  function s(i) {
    return i === "sm" ? {
      "--ListDivider-gap": "0.25rem",
      "--ListItem-minHeight": "2rem",
      "--ListItem-paddingY": "0.25rem",
      "--ListItem-paddingX": "0.5rem",
      "--ListItemDecorator-size": t.orientation === "horizontal" ? "1.5rem" : "2rem",
      "--Icon-fontSize": e.vars.fontSize.lg
    } : i === "md" ? {
      "--ListDivider-gap": "0.375rem",
      "--ListItem-minHeight": "2.5rem",
      "--ListItem-paddingY": "0.375rem",
      "--ListItem-paddingX": "0.75rem",
      "--ListItemDecorator-size": t.orientation === "horizontal" ? "1.75rem" : "2.5rem",
      "--Icon-fontSize": e.vars.fontSize.xl
    } : i === "lg" ? {
      "--ListDivider-gap": "0.5rem",
      "--ListItem-minHeight": "3rem",
      "--ListItem-paddingY": "0.5rem",
      "--ListItem-paddingX": "1rem",
      "--ListItemDecorator-size": t.orientation === "horizontal" ? "2.25rem" : "3rem",
      "--Icon-fontSize": e.vars.fontSize.xl2
    } : {};
  }
  return [t.nesting && C({}, s(t.instanceSize), {
    "--ListItem-paddingRight": "var(--ListItem-paddingX)",
    "--ListItem-paddingLeft": "var(--NestedListItem-paddingLeft)",
    // reset ListItem, ListItemButton negative margin (caused by NestedListItem)
    "--ListItemButton-marginBlock": "0px",
    "--ListItemButton-marginInline": "0px",
    "--ListItem-marginBlock": "0px",
    "--ListItem-marginInline": "0px",
    padding: 0,
    marginInlineStart: "var(--NestedList-marginLeft)",
    marginInlineEnd: "var(--NestedList-marginRight)",
    marginBlockStart: "var(--List-gap)",
    marginBlockEnd: "initial"
    // reset user agent stylesheet.
  }), !t.nesting && C({}, s(t.size), {
    "--List-gap": "0px",
    "--List-nestedInsetStart": "0px",
    "--ListItem-paddingLeft": "var(--ListItem-paddingX)",
    "--ListItem-paddingRight": "var(--ListItem-paddingX)",
    // Automatic radius adjustment kicks in only if '--List-padding' and '--List-radius' are provided.
    "--unstable_List-childRadius": "calc(max(var(--List-radius) - var(--List-padding), min(var(--List-padding) / 2, var(--List-radius) / 2)) - var(--variant-borderWidth, 0px))",
    "--ListItem-radius": "var(--unstable_List-childRadius)",
    // by default, The ListItem & ListItemButton use automatic radius adjustment based on the parent List.
    "--ListItem-startActionTranslateX": "calc(0.5 * var(--ListItem-paddingLeft))",
    "--ListItem-endActionTranslateX": "calc(-0.5 * var(--ListItem-paddingRight))",
    margin: "initial"
  }, e.typography[`body-${t.size}`], t.orientation === "horizontal" ? C({}, t.wrap ? {
    padding: "var(--List-padding)",
    // Fallback is not needed for row-wrap List
    marginInlineStart: "calc(-1 * var(--List-gap))",
    marginBlockStart: "calc(-1 * var(--List-gap))"
  } : {
    paddingInline: "var(--List-padding, var(--ListDivider-gap))",
    paddingBlock: "var(--List-padding)"
  }) : {
    paddingBlock: "var(--List-padding, var(--ListDivider-gap))",
    paddingInline: "var(--List-padding)"
  }), C({
    boxSizing: "border-box",
    borderRadius: "var(--List-radius)",
    listStyle: "none",
    display: "flex",
    flexDirection: t.orientation === "horizontal" ? "row" : "column"
  }, t.wrap && {
    flexWrap: "wrap"
  }, {
    flexGrow: 1,
    position: "relative"
  }, (r = e.variants[t.variant]) == null ? void 0 : r[t.color], {
    "--unstable_List-borderWidth": "var(--variant-borderWidth, 0px)"
  }, a !== void 0 && {
    "--List-radius": a
  }, n !== void 0 && {
    "--List-padding": n
  }, o !== void 0 && {
    "--List-padding": o
  })];
}), Mp = we(gs, {
  name: "JoyList",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Hp = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n;
  const o = S.useContext(ds), a = S.useContext(fs), s = S.useContext(zp), i = dt({
    props: t,
    name: "JoyList"
  }), {
    component: c,
    className: d,
    children: u,
    size: f,
    orientation: p = "vertical",
    wrap: h = !1,
    variant: g = "plain",
    color: v = "neutral",
    role: m,
    slots: $ = {},
    slotProps: w = {}
  } = i, I = pe(i, jp), {
    getColor: y
  } = wt(g), x = y(t.color, v), E = f || ((n = t.size) != null ? n : "md");
  let R;
  a && (R = "group"), s && (R = "presentation"), m && (R = m);
  const N = C({}, i, {
    instanceSize: t.size,
    size: E,
    nesting: o,
    orientation: p,
    wrap: h,
    variant: g,
    color: x,
    role: R
  }), k = Lp(N), V = C({}, I, {
    component: c,
    slots: $,
    slotProps: w
  }), [j, Y] = Ne("root", {
    ref: r,
    className: Ct(k.root, d),
    elementType: Mp,
    externalForwardedProps: V,
    ownerState: N,
    additionalProps: {
      as: c,
      role: R,
      "aria-labelledby": typeof o == "string" ? o : void 0
    }
  });
  return /* @__PURE__ */ H.jsx(j, C({}, Y, {
    children: /* @__PURE__ */ H.jsx(Np.Provider, {
      value: `${typeof c == "string" ? c : ""}:${R || ""}`,
      children: /* @__PURE__ */ H.jsx(ps, {
        row: p === "horizontal",
        wrap: h,
        children: u
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (Hp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: l.oneOfType([l.oneOf(["danger", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The component orientation.
   * @default 'vertical'
   */
  orientation: l.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: l.string,
  /**
   * The size of the component (affect other nested list* components).
   * @default 'md'
   */
  size: l.oneOfType([l.oneOf(["sm", "md", "lg"]), l.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: l.oneOfType([l.oneOf(["outlined", "plain", "soft", "solid"]), l.string]),
  /**
   * Only for horizontal list.
   * If `true`, the list sets the flex-wrap to "wrap" and adjust margin to have gap-like behavior (will move to `gap` in the future).
   *
   * @default false
   */
  wrap: l.bool
});
function Wp(e) {
  return lt("MuiListItemButton", e);
}
const Up = nt("MuiListItemButton", ["root", "horizontal", "vertical", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "focusVisible", "disabled", "selected", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]), Ur = Up, qp = /* @__PURE__ */ S.createContext("horizontal"), Yp = qp, Kp = ["children", "className", "action", "component", "orientation", "role", "selected", "color", "variant", "slots", "slotProps"], Gp = (e) => {
  const {
    color: t,
    disabled: r,
    focusVisible: n,
    focusVisibleClassName: o,
    selected: a,
    variant: s
  } = e, i = {
    root: ["root", r && "disabled", n && "focusVisible", t && `color${me(t)}`, a && "selected", s && `variant${me(s)}`]
  }, c = rt(i, Wp, {});
  return n && o && (c.root += ` ${o}`), c;
}, hs = we("div")(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, a, s;
  return C({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon,
    WebkitTapHighlightColor: "transparent",
    boxSizing: "border-box",
    position: "relative",
    font: "inherit",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch"
  }, t.orientation === "vertical" && {
    flexDirection: "column",
    justifyContent: "center"
  }, {
    textAlign: "initial",
    textDecoration: "initial",
    // reset native anchor tag
    backgroundColor: "initial",
    // reset button background
    cursor: "pointer",
    // In some cases, ListItemButton is a child of ListItem so the margin needs to be controlled by the ListItem. The value is negative to account for the ListItem's padding
    marginInline: "var(--ListItemButton-marginInline)",
    marginBlock: "var(--ListItemButton-marginBlock)"
  }, t["data-first-child"] === void 0 && {
    marginInlineStart: t.row ? "var(--List-gap)" : void 0,
    marginBlockStart: t.row ? void 0 : "var(--List-gap)"
  }, {
    // account for the border width, so that all of the ListItemButtons content aligned horizontally
    paddingBlock: "calc(var(--ListItem-paddingY) - var(--variant-borderWidth, 0px))",
    // account for the border width, so that all of the ListItemButtons content aligned vertically
    paddingInlineStart: "calc(var(--ListItem-paddingLeft) + var(--ListItem-startActionWidth, var(--unstable_startActionWidth, 0px)))",
    // --internal variable makes it possible to customize the actionWidth from the top List
    paddingInlineEnd: "calc(var(--ListItem-paddingRight) + var(--ListItem-endActionWidth, var(--unstable_endActionWidth, 0px)))",
    // --internal variable makes it possible to customize the actionWidth from the top List
    minBlockSize: "var(--ListItem-minHeight)",
    border: "1px solid transparent",
    // use `transparent` as a placeholder to prevent the button from jumping when switching to `outlined` variant
    borderRadius: "var(--ListItem-radius)",
    flex: "var(--unstable_ListItem-flex, none)",
    // prevent children from shrinking when the List's height is limited.
    fontSize: "inherit",
    // prevent user agent style when component="button"
    lineHeight: "inherit",
    // prevent user agent style when component="button"
    minInlineSize: 0,
    [e.focus.selector]: C({}, e.focus.default, {
      zIndex: 1
      // to be above of the next element. For example, the first Tab item should be above the second so that the outline is above the second Tab.
    })
  }, (r = e.variants[t.variant]) == null ? void 0 : r[t.color], {
    [`.${Rp.root} > &`]: {
      "--unstable_ListItem-flex": "1 0 0%"
      // grow to fill the available space of ListItem
    },
    [`&.${Ur.selected}`]: C({}, (n = e.variants[`${t.variant}Active`]) == null ? void 0 : n[t.color], {
      "--Icon-color": "currentColor"
    }),
    [`&:not(.${Ur.selected}, [aria-selected="true"])`]: {
      "&:hover": (o = e.variants[`${t.variant}Hover`]) == null ? void 0 : o[t.color],
      "&:active": (a = e.variants[`${t.variant}Active`]) == null ? void 0 : a[t.color]
    },
    [`&.${Ur.disabled}`]: C({}, (s = e.variants[`${t.variant}Disabled`]) == null ? void 0 : s[t.color])
  });
}), Jp = we(hs, {
  name: "JoyListItemButton",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  ownerState: e,
  theme: t
}) => C({}, !e.row && {
  [`&.${Ur.selected}`]: {
    fontWeight: t.vars.fontWeight.md
  }
})), Xp = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = dt({
    props: t,
    name: "JoyListItemButton"
  }), o = S.useContext(Ro), {
    children: a,
    className: s,
    action: i,
    component: c = "div",
    orientation: d = "horizontal",
    role: u,
    selected: f = !1,
    color: p = "neutral",
    variant: h = "plain",
    slots: g = {},
    slotProps: v = {}
  } = n, m = pe(n, Kp), {
    getColor: $
  } = wt(h), w = $(t.color, p), I = S.useRef(null), y = Me(I, r), {
    focusVisible: x,
    setFocusVisible: E,
    getRootProps: R
  } = bo(C({}, n, {
    rootRef: y
  }));
  S.useImperativeHandle(i, () => ({
    focusVisible: () => {
      var M;
      E(!0), (M = I.current) == null || M.focus();
    }
  }), [E]);
  const N = C({}, n, {
    component: c,
    color: w,
    focusVisible: x,
    orientation: d,
    row: o,
    selected: f,
    variant: h
  }), k = Gp(N), V = C({}, m, {
    component: c,
    slots: g,
    slotProps: v
  }), [j, Y] = Ne("root", {
    ref: r,
    className: Ct(k.root, s),
    elementType: Jp,
    externalForwardedProps: V,
    ownerState: N,
    getSlotProps: R
  });
  return /* @__PURE__ */ H.jsx(Yp.Provider, {
    value: d,
    children: /* @__PURE__ */ H.jsx(j, C({}, Y, {
      role: u ?? Y.role,
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (Xp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: l.oneOfType([l.func, l.shape({
    current: l.shape({
      focusVisible: l.func.isRequired
    })
  })]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: l.bool,
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: l.oneOfType([l.oneOf(["danger", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: l.string,
  /**
   * The content direction flow.
   * @default 'horizontal'
   */
  orientation: l.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: l.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: l.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @default 0
   */
  tabIndex: l.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: l.oneOfType([l.oneOf(["outlined", "plain", "soft", "solid"]), l.string])
});
function Zp(e) {
  return lt("MuiSvgIcon", e);
}
nt("MuiSvgIcon", ["root", "colorInherit", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "fontSizeInherit", "fontSizeXs", "fontSizeSm", "fontSizeMd", "fontSizeLg", "fontSizeXl", "fontSizeXl2", "fontSizeXl3", "fontSizeXl4", "sizeSm", "sizeMd", "sizeLg"]);
const Qp = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox", "size", "slots", "slotProps"], ev = (e) => {
  const {
    color: t,
    size: r,
    fontSize: n
  } = e, o = {
    root: ["root", t && t !== "inherit" && `color${me(t)}`, r && `size${me(r)}`, n && `fontSize${me(n)}`]
  };
  return rt(o, Zp, {});
}, Ka = {
  sm: "xl",
  md: "xl2",
  lg: "xl3"
}, tv = we("svg", {
  name: "JoySvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  return C({}, t.instanceSize && {
    "--Icon-fontSize": e.vars.fontSize[Ka[t.instanceSize]]
  }, t.instanceFontSize && t.instanceFontSize !== "inherit" && {
    "--Icon-fontSize": e.vars.fontSize[t.instanceFontSize]
  }, {
    userSelect: "none",
    margin: "var(--Icon-margin)",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    fontSize: `var(--Icon-fontSize, ${e.vars.fontSize[Ka[t.size]] || "unset"})`
  }, t.fontSize && t.fontSize !== "inherit" && {
    fontSize: `var(--Icon-fontSize, ${e.fontSize[t.fontSize]})`
  }, !t.htmlColor && C({
    color: `var(--Icon-color, ${e.vars.palette.text.icon})`
  }, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "context" && e.vars.palette[t.color] && {
    color: `rgba(${(r = e.vars.palette[t.color]) == null ? void 0 : r.mainChannel} / 1)`
  }));
}), ys = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = dt({
    props: t,
    name: "JoySvgIcon"
  }), {
    children: o,
    className: a,
    color: s,
    component: i = "svg",
    fontSize: c,
    htmlColor: d,
    inheritViewBox: u = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24",
    size: h = "md",
    slots: g = {},
    slotProps: v = {}
  } = n, m = pe(n, Qp), $ = /* @__PURE__ */ S.isValidElement(o) && o.type === "svg", w = C({}, n, {
    color: s,
    component: i,
    size: h,
    instanceSize: t.size,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: p,
    hasSvgAsChild: $
  }), I = ev(w), y = C({}, m, {
    component: i,
    slots: g,
    slotProps: v
  }), [x, E] = Ne("root", {
    ref: r,
    className: Ct(I.root, a),
    elementType: tv,
    externalForwardedProps: y,
    ownerState: w,
    additionalProps: C({
      color: d,
      focusable: !1
    }, f && {
      role: "img"
    }, !f && {
      "aria-hidden": !0
    }, !u && {
      viewBox: p
    }, $ && o.props)
  });
  return /* @__PURE__ */ H.jsxs(x, C({}, E, {
    children: [$ ? o.props.children : o, f ? /* @__PURE__ */ H.jsx("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ys.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: l.node,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: l.oneOfType([l.oneOf(["danger", "inherit", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The theme's fontSize applied to the icon that will override the `size` prop.
   * Use this prop when you want to use a specific font-size from the theme.
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "lg", "md", "sm", "xl", "xl2", "xl3", "xl4", "xs"]), l.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: l.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: l.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: l.string,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: l.oneOfType([l.oneOf(["sm", "md", "lg"]), l.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: l.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: l.string
});
const Ga = ys;
function rv(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ H.jsx(Ga, C({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = Ga.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(r));
}
const bs = /* @__PURE__ */ S.createContext(void 0);
function nv(e, t) {
  let r = t, n = e;
  return e === "outlined" && (r = "neutral", n = "plain"), e === "plain" && (r = "neutral"), {
    variant: n,
    color: r
  };
}
function ov(e, t) {
  const r = S.useContext(bs), [n, o] = typeof r == "string" ? r.split(":") : [], a = nv(n || void 0, o || void 0);
  return a.variant = e || a.variant, a.color = t || a.color, a;
}
function av({
  children: e,
  color: t,
  variant: r
}) {
  return /* @__PURE__ */ H.jsx(bs.Provider, {
    value: `${r || ""}:${t || ""}`,
    children: e
  });
}
function iv(e) {
  return lt("MuiIconButton", e);
}
nt("MuiIconButton", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "focusVisible", "disabled", "sizeSm", "sizeMd", "sizeLg"]);
const xs = /* @__PURE__ */ S.createContext({});
process.env.NODE_ENV !== "production" && (xs.displayName = "ButtonGroupContext");
const sv = xs, lv = ["children", "action", "component", "color", "disabled", "variant", "size", "slots", "slotProps"], cv = (e) => {
  const {
    color: t,
    disabled: r,
    focusVisible: n,
    focusVisibleClassName: o,
    size: a,
    variant: s
  } = e, i = {
    root: ["root", r && "disabled", n && "focusVisible", s && `variant${me(s)}`, t && `color${me(t)}`, a && `size${me(a)}`]
  }, c = rt(i, iv, {});
  return n && o && (c.root += ` ${o}`), c;
}, uv = we("button")(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, a;
  return [C({
    "--Icon-margin": "initial",
    // reset the icon's margin.
    "--Icon-color": t.color !== "neutral" || t.variant === "solid" ? "currentColor" : e.vars.palette.text.icon
  }, t.instanceSize && {
    "--IconButton-size": {
      sm: "2rem",
      md: "2.5rem",
      lg: "3rem"
    }[t.instanceSize]
  }, t.size === "sm" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2rem) / 1.6)",
    // 1.25rem by default
    "--CircularProgress-size": "20px",
    "--CircularProgress-thickness": "2px",
    minWidth: "var(--IconButton-size, 2rem)",
    // use min-width instead of height to make the button resilient to its content
    minHeight: "var(--IconButton-size, 2rem)",
    // use min-height instead of height to make the button resilient to its content
    fontSize: e.vars.fontSize.sm,
    paddingInline: "2px"
    // add a gap, in case the content is long, e.g. multiple icons
  }, t.size === "md" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 2.5rem) / 1.667)",
    // 1.5rem by default
    "--CircularProgress-size": "24px",
    "--CircularProgress-thickness": "3px",
    minWidth: "var(--IconButton-size, 2.5rem)",
    minHeight: "var(--IconButton-size, 2.5rem)",
    fontSize: e.vars.fontSize.md,
    paddingInline: "0.25rem"
  }, t.size === "lg" && {
    "--Icon-fontSize": "calc(var(--IconButton-size, 3rem) / 1.714)",
    // 1.75rem by default
    "--CircularProgress-size": "28px",
    "--CircularProgress-thickness": "4px",
    minWidth: "var(--IconButton-size, 3rem)",
    minHeight: "var(--IconButton-size, 3rem)",
    fontSize: e.vars.fontSize.lg,
    paddingInline: "0.375rem"
  }, {
    WebkitTapHighlightColor: "transparent",
    paddingBlock: 0,
    fontFamily: e.vars.fontFamily.body,
    fontWeight: e.vars.fontWeight.md,
    margin: "var(--IconButton-margin)",
    // to be controlled by other components, e.g. Input
    borderRadius: `var(--IconButton-radius, ${e.vars.radius.sm})`,
    // to be controlled by other components, e.g. Input
    border: "none",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    [e.focus.selector]: C({
      "--Icon-color": "currentColor"
    }, e.focus.default)
  }), C({}, (r = e.variants[t.variant]) == null ? void 0 : r[t.color], {
    "&:hover": {
      "@media (hover: hover)": C({
        "--Icon-color": "currentColor"
      }, (n = e.variants[`${t.variant}Hover`]) == null ? void 0 : n[t.color])
    },
    '&:active, &[aria-pressed="true"]': C({
      "--Icon-color": "currentColor"
    }, (o = e.variants[`${t.variant}Active`]) == null ? void 0 : o[t.color]),
    "&:disabled": (a = e.variants[`${t.variant}Disabled`]) == null ? void 0 : a[t.color]
  })];
}), dv = we(uv, {
  name: "JoyIconButton",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Po = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n;
  const o = dt({
    props: t,
    name: "JoyIconButton"
  }), {
    children: a,
    action: s,
    component: i = "button",
    color: c = "neutral",
    disabled: d,
    variant: u = "plain",
    size: f = "md",
    slots: p = {},
    slotProps: h = {}
  } = o, g = pe(o, lv), v = S.useContext(sv), m = t.variant || v.variant || u, $ = t.size || v.size || f, {
    getColor: w
  } = wt(m), I = w(t.color, v.color || c), y = (n = t.disabled) != null ? n : v.disabled || d, x = S.useRef(null), E = Me(x, r), {
    focusVisible: R,
    setFocusVisible: N,
    getRootProps: k
  } = bo(C({}, o, {
    disabled: y,
    rootRef: E
  }));
  S.useImperativeHandle(s, () => ({
    focusVisible: () => {
      var _;
      N(!0), (_ = x.current) == null || _.focus();
    }
  }), [N]);
  const V = C({}, o, {
    component: i,
    color: I,
    disabled: y,
    variant: m,
    size: $,
    focusVisible: R,
    instanceSize: t.size
  }), j = cv(V), Y = C({}, g, {
    component: i,
    slots: p,
    slotProps: h
  }), [M, Q] = Ne("root", {
    ref: r,
    className: j.root,
    elementType: dv,
    getSlotProps: k,
    externalForwardedProps: Y,
    ownerState: V
  });
  return /* @__PURE__ */ H.jsx(M, C({}, Q, {
    children: a
  }));
});
process.env.NODE_ENV !== "production" && (Po.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: l.oneOfType([l.func, l.shape({
    current: l.shape({
      focusVisible: l.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  children: l.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: l.oneOfType([l.oneOf(["danger", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: l.string,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: l.oneOfType([l.oneOf(["sm", "md", "lg"]), l.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @default 0
   */
  tabIndex: l.number,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: l.oneOfType([l.oneOf(["outlined", "plain", "soft", "solid"]), l.string])
});
Po.muiName = "IconButton";
const fv = Po;
function pv(e) {
  return lt("MuiInput", e);
}
const vv = nt("MuiInput", ["root", "input", "formControl", "focused", "disabled", "error", "adornedStart", "adornedEnd", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "fullWidth", "startDecorator", "endDecorator"]), Cs = vv, mv = /* @__PURE__ */ S.createContext(void 0), Ar = mv, gv = ["aria-describedby", "aria-label", "aria-labelledby", "autoComplete", "autoFocus", "className", "defaultValue", "disabled", "error", "id", "name", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur", "placeholder", "readOnly", "required", "type", "value"];
function hv(e, t) {
  const r = S.useContext(Ar), {
    "aria-describedby": n,
    "aria-label": o,
    "aria-labelledby": a,
    autoComplete: s,
    autoFocus: i,
    className: c,
    defaultValue: d,
    disabled: u,
    error: f,
    id: p,
    name: h,
    onClick: g,
    onChange: v,
    onKeyDown: m,
    onKeyUp: $,
    onFocus: w,
    onBlur: I,
    placeholder: y,
    readOnly: x,
    required: E,
    type: R,
    value: N
  } = e, k = pe(e, gv), {
    getRootProps: V,
    getInputProps: j,
    focused: Y,
    error: M,
    disabled: Q
  } = Td({
    disabled: u ?? (r == null ? void 0 : r.disabled),
    defaultValue: d,
    error: f,
    onBlur: I,
    onClick: g,
    onChange: v,
    onFocus: w,
    required: E ?? (r == null ? void 0 : r.required),
    value: N
  }), _ = {
    [t.disabled]: Q,
    [t.error]: M,
    [t.focused]: Y,
    [t.formControl]: !!r,
    [c]: c
  }, O = {
    [t.disabled]: Q
  };
  return C({
    formControl: r,
    propsToForward: {
      "aria-describedby": n,
      "aria-label": o,
      "aria-labelledby": a,
      autoComplete: s,
      autoFocus: i,
      disabled: Q,
      id: p,
      onKeyDown: m,
      onKeyUp: $,
      name: h,
      placeholder: y,
      readOnly: x,
      type: R
    },
    rootStateClasses: _,
    inputStateClasses: O,
    getRootProps: V,
    getInputProps: j,
    focused: Y,
    error: M,
    disabled: Q
  }, k);
}
const yv = ["propsToForward", "rootStateClasses", "inputStateClasses", "getRootProps", "getInputProps", "formControl", "focused", "error", "disabled", "fullWidth", "size", "color", "variant", "startDecorator", "endDecorator", "component", "slots", "slotProps"], bv = (e) => {
  const {
    disabled: t,
    fullWidth: r,
    variant: n,
    color: o,
    size: a
  } = e, s = {
    root: ["root", t && "disabled", r && "fullWidth", n && `variant${me(n)}`, o && `color${me(o)}`, a && `size${me(a)}`],
    input: ["input"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return rt(s, pv, {});
}, xv = we("div")(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, a, s;
  const i = (r = e.variants[`${t.variant}`]) == null ? void 0 : r[t.color];
  return [C({
    "--Input-radius": e.vars.radius.sm,
    "--Input-gap": "0.5rem",
    "--Input-placeholderColor": "inherit",
    "--Input-placeholderOpacity": 0.64,
    "--Input-decoratorColor": e.vars.palette.text.icon,
    "--Input-focused": "0",
    "--Input-focusedThickness": e.vars.focus.thickness
  }, t.color === "context" ? {
    "--Input-focusedHighlight": e.vars.palette.focusVisible
  } : {
    "--Input-focusedHighlight": (n = e.vars.palette[t.color === "neutral" ? "primary" : t.color]) == null ? void 0 : n[500]
  }, t.size === "sm" && {
    "--Input-minHeight": "2rem",
    "--Input-paddingInline": "0.5rem",
    "--Input-decoratorChildHeight": "min(1.5rem, var(--Input-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl
  }, t.size === "md" && {
    "--Input-minHeight": "2.5rem",
    "--Input-paddingInline": "0.75rem",
    "--Input-decoratorChildHeight": "min(2rem, var(--Input-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl2
  }, t.size === "lg" && {
    "--Input-minHeight": "3rem",
    "--Input-paddingInline": "1rem",
    "--Input-gap": "0.75rem",
    "--Input-decoratorChildHeight": "min(2.375rem, var(--Input-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--Input-decoratorChildOffset": "min(calc(var(--Input-paddingInline) - (var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2), var(--Input-paddingInline))",
    "--_Input-paddingBlock": "max((var(--Input-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Input-decoratorChildHeight)) / 2, 0px)",
    "--Input-decoratorChildRadius": "max(var(--Input-radius) - var(--variant-borderWidth, 0px) - var(--_Input-paddingBlock), min(var(--_Input-paddingBlock) + var(--variant-borderWidth, 0px), var(--Input-radius) / 2))",
    "--Button-minHeight": "var(--Input-decoratorChildHeight)",
    "--IconButton-size": "var(--Input-decoratorChildHeight)",
    "--Button-radius": "var(--Input-decoratorChildRadius)",
    "--IconButton-radius": "var(--Input-decoratorChildRadius)",
    boxSizing: "border-box"
  }, t.variant !== "plain" && {
    boxShadow: e.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Input-minHeight)"
  }, t.fullWidth && {
    width: "100%"
  }, {
    cursor: "text",
    position: "relative",
    display: "flex",
    paddingInline: "var(--Input-paddingInline)",
    borderRadius: "var(--Input-radius)"
  }, e.typography[`body-${t.size}`], i, {
    backgroundColor: (o = i == null ? void 0 : i.backgroundColor) != null ? o : e.vars.palette.background.surface,
    "&:before": {
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: "inherit",
      margin: "calc(var(--variant-borderWidth, 0px) * -1)",
      // for outlined variant
      boxShadow: "var(--Input-focusedInset, inset) 0 0 0 calc(var(--Input-focused) * var(--Input-focusedThickness)) var(--Input-focusedHighlight)"
    }
  }), {
    "&:hover": C({}, (a = e.variants[`${t.variant}Hover`]) == null ? void 0 : a[t.color], {
      backgroundColor: null
      // it is not common to change background on hover for Input
    }),
    [`&.${Cs.disabled}`]: (s = e.variants[`${t.variant}Disabled`]) == null ? void 0 : s[t.color],
    "&:focus-within::before": {
      "--Input-focused": "1"
    }
  }];
}), Cv = we("input")(({
  ownerState: e
}) => ({
  border: "none",
  // remove the native input width
  minWidth: 0,
  // remove the native input width
  outline: 0,
  // remove the native input outline
  padding: 0,
  // remove the native input padding
  flex: 1,
  color: "inherit",
  backgroundColor: "transparent",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontStyle: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textOverflow: "ellipsis",
  "&:-webkit-autofill": C({
    paddingInline: "var(--Input-paddingInline)"
  }, !e.startDecorator && {
    marginInlineStart: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineStart: "var(--Input-paddingInline)",
    borderTopLeftRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomLeftRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"
  }, !e.endDecorator && {
    marginInlineEnd: "calc(-1 * var(--Input-paddingInline))",
    paddingInlineEnd: "var(--Input-paddingInline)",
    borderTopRightRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))",
    borderBottomRightRadius: "calc(var(--Input-radius) - var(--variant-borderWidth, 0px))"
  }),
  "&::-webkit-input-placeholder": {
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&::-moz-placeholder": {
    // Firefox 19+
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&:-ms-input-placeholder": {
    // IE11
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  },
  "&::-ms-input-placeholder": {
    // Edge
    color: "var(--Input-placeholderColor)",
    opacity: "var(--Input-placeholderOpacity)"
  }
})), Sv = we("div")({
  "--Button-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 0 0 calc(var(--Input-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Input-paddingInline) / -4)",
  display: "inherit",
  alignItems: "center",
  paddingBlock: "var(--unstable_InputPaddingBlock)",
  // for wrapping Autocomplete's tags
  flexWrap: "wrap",
  // for wrapping Autocomplete's tags
  marginInlineEnd: "var(--Input-gap)",
  color: "var(--Input-decoratorColor)",
  cursor: "initial"
}), $v = we("div")({
  "--Button-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
  "--IconButton-margin": "0 calc(var(--Input-decoratorChildOffset) * -1) 0 0",
  "--Icon-margin": "0 calc(var(--Input-paddingInline) / -4) 0 0",
  display: "inherit",
  alignItems: "center",
  marginInlineStart: "var(--Input-gap)",
  color: "var(--Input-decoratorColor)",
  cursor: "initial"
}), Ev = we(xv, {
  name: "JoyInput",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ov = we(Cv, {
  name: "JoyInput",
  slot: "Input",
  overridesResolver: (e, t) => t.input
})({}), Iv = we(Sv, {
  name: "JoyInput",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({}), wv = we($v, {
  name: "JoyInput",
  slot: "EndDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({}), Ss = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n, o, a, s, i;
  const c = dt({
    props: t,
    name: "JoyInput"
  }), d = hv(c, Cs), {
    propsToForward: u,
    rootStateClasses: f,
    inputStateClasses: p,
    getRootProps: h,
    getInputProps: g,
    formControl: v,
    focused: m,
    error: $ = !1,
    disabled: w,
    fullWidth: I = !1,
    size: y = "md",
    color: x = "neutral",
    variant: E = "outlined",
    startDecorator: R,
    endDecorator: N,
    component: k,
    slots: V = {},
    slotProps: j = {}
  } = d, Y = pe(d, yv);
  if (process.env.NODE_ENV !== "production") {
    const G = v == null ? void 0 : v.registerEffect;
    S.useEffect(() => {
      if (G)
        return G();
    }, [G]);
  }
  const M = (n = (o = t.error) != null ? o : v == null ? void 0 : v.error) != null ? n : $, Q = (a = (s = t.size) != null ? s : v == null ? void 0 : v.size) != null ? a : y, {
    getColor: _
  } = wt(E), O = _(t.color, M ? "danger" : (i = v == null ? void 0 : v.color) != null ? i : x), T = C({}, c, {
    fullWidth: I,
    color: O,
    disabled: w,
    error: M,
    focused: m,
    size: Q,
    variant: E
  }), L = bv(T), oe = C({}, Y, {
    component: k,
    slots: V,
    slotProps: j
  }), [P, B] = Ne("root", {
    ref: r,
    className: [L.root, f],
    elementType: Ev,
    getSlotProps: h,
    externalForwardedProps: oe,
    ownerState: T
  }), [J, K] = Ne("input", C({}, v && {
    additionalProps: {
      id: v.htmlFor,
      "aria-describedby": v["aria-describedby"]
    }
  }, {
    className: [L.input, p],
    elementType: Ov,
    getSlotProps: g,
    internalForwardedProps: u,
    externalForwardedProps: oe,
    ownerState: T
  })), [U, te] = Ne("startDecorator", {
    className: L.startDecorator,
    elementType: Iv,
    externalForwardedProps: oe,
    ownerState: T
  }), [ee, re] = Ne("endDecorator", {
    className: L.endDecorator,
    elementType: wv,
    externalForwardedProps: oe,
    ownerState: T
  });
  return /* @__PURE__ */ H.jsxs(P, C({}, B, {
    children: [R && /* @__PURE__ */ H.jsx(U, C({}, te, {
      children: R
    })), /* @__PURE__ */ H.jsx(J, C({}, K)), N && /* @__PURE__ */ H.jsx(ee, C({}, re, {
      children: N
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Ss.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  autoComplete: l.string,
  /**
   * @ignore
   */
  autoFocus: l.bool,
  /**
   * @ignore
   */
  children: l.node,
  /**
   * Class name applied to the root element.
   */
  className: l.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: l.oneOfType([l.oneOf(["danger", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * @ignore
   */
  defaultValue: l.oneOfType([l.arrayOf(l.string), l.number, l.string]),
  /**
   * @ignore
   */
  disabled: l.bool,
  /**
   * Trailing adornment for this input.
   */
  endDecorator: l.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   * @default false
   */
  error: l.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: l.bool,
  /**
   * @ignore
   */
  id: l.string,
  /**
   * @ignore
   */
  name: l.string,
  /**
   * @ignore
   */
  onChange: l.func,
  /**
   * @ignore
   */
  placeholder: l.string,
  /**
   * @ignore
   */
  readOnly: l.bool,
  /**
   * @ignore
   */
  required: l.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: l.oneOfType([l.oneOf(["sm", "md", "lg"]), l.string]),
  /**
   * Leading adornment for this input.
   */
  startDecorator: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * @ignore
   */
  value: l.oneOfType([l.arrayOf(l.string), l.number, l.string]),
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: l.oneOfType([l.oneOf(["outlined", "plain", "soft", "solid"]), l.string])
});
const _o = Ss, $s = ju({
  themeId: eo,
  defaultTheme: yo,
  defaultClassName: "MuiBox-root",
  generateClassName: hi.generate
});
process.env.NODE_ENV !== "production" && ($s.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: l.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const Es = $s;
function Tv(e) {
  return lt("MuiTypography", e);
}
nt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "noWrap", "gutterBottom", "startDecorator", "endDecorator", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid"]);
const Rv = ["color", "textColor"], Pv = ["component", "gutterBottom", "noWrap", "level", "levelMapping", "children", "endDecorator", "startDecorator", "variant", "slots", "slotProps"], Ja = /* @__PURE__ */ S.createContext(!1), _v = /* @__PURE__ */ S.createContext(!1), Dv = (e) => {
  const {
    gutterBottom: t,
    noWrap: r,
    level: n,
    color: o,
    variant: a
  } = e, s = {
    root: ["root", n, t && "gutterBottom", r && "noWrap", o && `color${me(o)}`, a && `variant${me(a)}`],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"]
  };
  return rt(s, Tv, {});
}, kv = we("span", {
  name: "JoyTypography",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({
  display: "inline-flex",
  marginInlineEnd: "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"
}), Av = we("span", {
  name: "JoyTypography",
  slot: "endDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({
  display: "inline-flex",
  marginInlineStart: "clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"
}), Nv = we("span", {
  name: "JoyTypography",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, a, s;
  const i = t.level !== "inherit" ? (r = e.typography[t.level]) == null ? void 0 : r.lineHeight : "1";
  return C({
    "--Icon-fontSize": `calc(1em * ${i})`
  }, t.color && {
    "--Icon-color": "currentColor"
  }, {
    margin: "var(--Typography-margin, 0px)"
  }, t.nesting ? {
    display: "inline"
    // looks better than `inline-block` when using with `variant` prop.
  } : C({
    display: "block"
  }, t.unstable_hasSkeleton && {
    position: "relative"
  }), (t.startDecorator || t.endDecorator) && C({
    display: "flex",
    alignItems: "center"
  }, t.nesting && C({
    display: "inline-flex"
  }, t.startDecorator && {
    verticalAlign: "bottom"
    // to make the text align with the parent's content
  })), t.level && t.level !== "inherit" && e.typography[t.level], {
    fontSize: `var(--Typography-fontSize, ${t.level && t.level !== "inherit" && (n = (o = e.typography[t.level]) == null ? void 0 : o.fontSize) != null ? n : "inherit"})`
  }, t.noWrap && {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, t.gutterBottom && {
    marginBottom: "0.35em"
  }, t.color && t.color !== "context" && {
    color: `rgba(${(a = e.vars.palette[t.color]) == null ? void 0 : a.mainChannel} / 1)`
  }, t.variant && C({
    borderRadius: e.vars.radius.xs,
    paddingBlock: "min(0.1em, 4px)",
    paddingInline: "0.25em"
  }, !t.nesting && {
    marginInline: "-0.25em"
  }, (s = e.variants[t.variant]) == null ? void 0 : s[t.color]));
}), Xa = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  "title-lg": "p",
  "title-md": "p",
  "title-sm": "p",
  "body-lg": "p",
  "body-md": "p",
  "body-sm": "p",
  "body-xs": "span",
  inherit: "p"
}, Do = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = dt({
    props: t,
    name: "JoyTypography"
  }), {
    color: o,
    textColor: a
  } = n, s = pe(n, Rv), i = S.useContext(Ja), c = S.useContext(_v), d = ji(C({}, s, {
    color: a
  })), {
    component: u,
    gutterBottom: f = !1,
    noWrap: p = !1,
    level: h = "body-md",
    levelMapping: g = Xa,
    children: v,
    endDecorator: m,
    startDecorator: $,
    variant: w,
    slots: I = {},
    slotProps: y = {}
  } = d, x = pe(d, Pv), {
    getColor: E
  } = wt(w), R = E(t.color, w ? o ?? "neutral" : o), N = i || c ? t.level || "inherit" : h, k = El(v, ["Skeleton"]), V = u || (i ? "span" : g[N] || Xa[N] || "span"), j = C({}, d, {
    level: N,
    component: V,
    color: R,
    gutterBottom: f,
    noWrap: p,
    nesting: i,
    variant: w,
    unstable_hasSkeleton: k
  }), Y = Dv(j), M = C({}, x, {
    component: V,
    slots: I,
    slotProps: y
  }), [Q, _] = Ne("root", {
    ref: r,
    className: Y.root,
    elementType: Nv,
    externalForwardedProps: M,
    ownerState: j
  }), [O, T] = Ne("startDecorator", {
    className: Y.startDecorator,
    elementType: kv,
    externalForwardedProps: M,
    ownerState: j
  }), [L, oe] = Ne("endDecorator", {
    className: Y.endDecorator,
    elementType: Av,
    externalForwardedProps: M,
    ownerState: j
  });
  return /* @__PURE__ */ H.jsx(Ja.Provider, {
    value: !0,
    children: /* @__PURE__ */ H.jsxs(Q, C({}, _, {
      children: [$ && /* @__PURE__ */ H.jsx(O, C({}, T, {
        children: $
      })), k ? /* @__PURE__ */ S.cloneElement(v, {
        variant: v.props.variant || "inline"
      }) : v, m && /* @__PURE__ */ H.jsx(L, C({}, oe, {
        children: m
      }))]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Do.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: l.oneOfType([l.oneOf(["danger", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * Element placed after the children.
   */
  endDecorator: l.node,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: l.bool,
  /**
   * Applies the theme typography styles.
   * @default 'body-md'
   */
  level: l.oneOfType([l.oneOf(["h1", "h2", "h3", "h4", "title-lg", "title-md", "title-sm", "body-lg", "body-md", "body-sm", "body-xs", "inherit"]), l.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, body1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   'title-lg': 'p',
   *   'title-md': 'p',
   *   'title-sm': 'p',
   *   'body-lg': 'p',
   *   'body-md': 'p',
   *   'body-sm': 'p',
   *   'body-xs': 'span',
   *   inherit: 'p',
   * }
   */
  levelMapping: l.object,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: l.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    endDecorator: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object]),
    startDecorator: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    endDecorator: l.elementType,
    root: l.elementType,
    startDecorator: l.elementType
  }),
  /**
   * Element placed before the children.
   */
  startDecorator: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The system color.
   */
  textColor: l.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   */
  variant: l.oneOfType([l.oneOf(["outlined", "plain", "soft", "solid"]), l.string])
});
Do.muiName = "Typography";
const Bv = Do;
function Vv(e) {
  return lt("MuiFormControl", e);
}
const Fv = nt("MuiFormControl", ["root", "error", "disabled", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "sizeSm", "sizeMd", "sizeLg", "horizontal", "vertical"]), Xn = Fv, zv = nt("MuiSwitch", ["root", "checked", "disabled", "action", "input", "thumb", "track", "focusVisible", "readOnly", "colorPrimary", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "sizeSm", "sizeMd", "sizeLg", "variantOutlined", "variantSoft", "variantSolid", "startDecorator", "endDecorator"]), jv = zv, Lv = ["id", "className", "component", "disabled", "required", "error", "color", "size", "orientation", "slots", "slotProps"], Mv = (e) => {
  const {
    disabled: t,
    error: r,
    size: n,
    color: o,
    orientation: a
  } = e, s = {
    root: ["root", a, t && "disabled", r && "error", o && `color${me(o)}`, n && `size${me(n)}`]
  };
  return rt(s, Vv, {});
}, Hv = we("div", {
  name: "JoyFormControl",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o;
  return C({
    "--unstable_RadioGroup-margin": "0.5rem 0",
    "--FormLabel-alignSelf": t.orientation === "horizontal" ? "align-items" : "flex-start",
    "--FormLabel-asteriskColor": e.vars.palette.danger[500]
  }, t.size === "sm" && {
    "--FormLabel-fontSize": e.vars.fontSize.xs,
    "--FormLabel-lineHeight": e.vars.lineHeight.xl,
    "--FormLabel-margin": t.orientation === "horizontal" ? "0 0.5rem 0 0" : "0 0 0.25rem 0",
    "--FormHelperText-fontSize": e.vars.fontSize.xs,
    "--FormHelperText-lineHeight": e.vars.lineHeight.xl
  }, t.size === "md" && {
    "--FormLabel-fontSize": e.vars.fontSize.sm,
    "--FormLabel-lineHeight": e.vars.lineHeight.sm,
    "--FormLabel-margin": t.orientation === "horizontal" ? "0 0.75rem 0 0" : "0 0 0.375rem 0",
    "--FormHelperText-fontSize": e.vars.fontSize.sm,
    "--FormHelperText-lineHeight": e.vars.lineHeight.sm
  }, t.size === "lg" && {
    "--FormLabel-fontSize": e.vars.fontSize.md,
    "--FormLabel-lineHeight": e.vars.lineHeight.md,
    "--FormLabel-margin": t.orientation === "horizontal" ? "0 1rem 0 0" : "0 0 0.5rem 0",
    "--FormHelperText-fontSize": e.vars.fontSize.sm,
    "--FormHelperText-lineHeight": e.vars.lineHeight.sm
  }, t.color && t.color !== "context" && {
    "--FormHelperText-color": (r = e.vars.palette[t.color]) == null ? void 0 : r[500]
  }, {
    "--FormHelperText-margin": "0.375rem 0 0 0",
    [`&.${Xn.error}`]: {
      "--FormHelperText-color": e.vars.palette.danger[500]
    },
    [`&.${Xn.disabled}`]: C({}, t.color !== "context" && {
      "--FormLabel-color": (n = e.vars.palette[t.color || "neutral"]) == null ? void 0 : n.plainDisabledColor,
      "--FormHelperText-color": (o = e.vars.palette[t.color || "neutral"]) == null ? void 0 : o.plainDisabledColor
    }),
    display: "flex",
    position: "relative",
    // for keeping the control action area, e.g. Switch
    flexDirection: t.orientation === "horizontal" ? "row" : "column"
  }, t.orientation === "horizontal" && {
    [`& > label ~ .${jv.root}`]: {
      "--unstable_Switch-margin": "0 0 0 auto"
    }
  });
}), Os = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = dt({
    props: t,
    name: "JoyFormControl"
  }), {
    id: o,
    className: a,
    component: s = "div",
    disabled: i = !1,
    required: c = !1,
    error: d = !1,
    color: u,
    size: f = "md",
    orientation: p = "vertical",
    slots: h = {},
    slotProps: g = {}
  } = n, v = pe(n, Lv), m = ro(o), [$, w] = S.useState(null), I = C({}, n, {
    id: m,
    component: s,
    color: u,
    disabled: i,
    error: d,
    required: c,
    size: f,
    orientation: p
  });
  let y;
  if (process.env.NODE_ENV !== "production") {
    const k = S.useRef(!1);
    y = () => (k.current && console.error(["Joy: A FormControl can contain only one control component (Autocomplete | Input | Textarea | Select | RadioGroup)", "You should not mix those components inside a single FormControl instance"].join(`
`)), k.current = !0, () => {
      k.current = !1;
    });
  }
  const x = Mv(I), [E, R] = Ne("root", {
    ref: r,
    className: Ct(x.root, a),
    elementType: Hv,
    externalForwardedProps: C({}, v, {
      component: s,
      slots: h,
      slotProps: g
    }),
    ownerState: I
  }), N = S.useMemo(() => ({
    disabled: i,
    required: c,
    error: d,
    color: u,
    size: f,
    htmlFor: m,
    labelId: `${m}-label`,
    "aria-describedby": $ ? `${m}-helper-text` : void 0,
    setHelperText: w,
    registerEffect: y
  }), [u, i, d, $, m, y, c, f]);
  return /* @__PURE__ */ H.jsx(Ar.Provider, {
    value: N,
    children: /* @__PURE__ */ H.jsx(E, C({}, R))
  });
});
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: l.oneOfType([l.oneOf(["danger", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the children are in disabled state.
   * @default false
   */
  disabled: l.bool,
  /**
   * If `true`, the children will indicate an error.
   * @default false
   */
  error: l.bool,
  /**
   * @ignore
   */
  id: l.string,
  /**
   * The content direction flow.
   * @default 'vertical'
   */
  orientation: l.oneOf(["horizontal", "vertical"]),
  /**
   * If `true`, the user must specify a value for the input before the owning form can be submitted.
   * If `true`, the asterisk appears on the FormLabel.
   * @default false
   */
  required: l.bool,
  /**
   * The size of the component.
   * @default 'md'
   */
  size: l.oneOfType([l.oneOf(["sm", "md", "lg"]), l.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const vn = Os;
function Wv(e) {
  return lt("MuiFormHelperText", e);
}
nt("MuiFormHelperText", ["root"]);
function Uv(e) {
  return lt("MuiFormLabel", e);
}
const qv = nt("MuiFormLabel", ["root", "asterisk"]), Yv = qv, Kv = ["children", "component", "slots", "slotProps"], Gv = () => rt({
  root: ["root"]
}, Wv, {}), Jv = we("div", {
  name: "JoyFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  "--Icon-fontSize": "calc(var(--FormHelperText-lineHeight) * 1em)",
  display: "flex",
  alignItems: "center",
  gap: "2px",
  fontFamily: e.vars.fontFamily.body,
  fontSize: `var(--FormHelperText-fontSize, ${e.vars.fontSize.sm})`,
  lineHeight: `var(--FormHelperText-lineHeight, ${e.vars.lineHeight.sm})`,
  color: `var(--FormHelperText-color, ${e.vars.palette.text.tertiary})`,
  margin: "var(--FormHelperText-margin, 0px)",
  [`.${Yv.root} + &`]: {
    "--FormHelperText-margin": "0px"
    // remove the margin if the helper text is next to the form label.
  },
  [`.${Xn.error} &`]: {
    "--Icon-color": "currentColor"
  }
})), Is = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = dt({
    props: t,
    name: "JoyFormHelperText"
  }), {
    children: o,
    component: a,
    slots: s = {},
    slotProps: i = {}
  } = n, c = pe(n, Kv), d = S.useRef(null), u = Me(d, r), f = S.useContext(Ar), p = f == null ? void 0 : f.setHelperText;
  S.useEffect(() => (p == null || p(d.current), () => {
    p == null || p(null);
  }), [p]);
  const h = Gv(), g = C({}, c, {
    component: a,
    slots: s,
    slotProps: i
  }), [v, m] = Ne("root", {
    ref: u,
    elementType: Jv,
    externalForwardedProps: g,
    ownerState: n,
    additionalProps: {
      as: a,
      id: f == null ? void 0 : f["aria-describedby"]
    },
    className: h.root
  });
  return /* @__PURE__ */ H.jsx(v, C({}, m, {
    children: o
  }));
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const ko = Is, Xv = ["children", "component", "slots", "slotProps"], Zv = () => rt({
  root: ["root"],
  asterisk: ["asterisk"]
}, Uv, {}), Qv = we("label", {
  name: "JoyFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  "--Icon-fontSize": "calc(var(--FormLabel-lineHeight) * 1em)",
  WebkitTapHighlightColor: "transparent",
  alignSelf: "var(--FormLabel-alignSelf)",
  // to not fill the block space. It seems like a bug when clicking on empty space (within the label area), even though it is not.
  display: "flex",
  gap: "2px",
  alignItems: "center",
  flexWrap: "wrap",
  userSelect: "none",
  fontFamily: e.vars.fontFamily.body,
  fontSize: `var(--FormLabel-fontSize, ${e.vars.fontSize.sm})`,
  fontWeight: e.vars.fontWeight.md,
  lineHeight: `var(--FormLabel-lineHeight, ${e.vars.lineHeight.sm})`,
  color: `var(--FormLabel-color, ${e.vars.palette.text.primary})`,
  margin: "var(--FormLabel-margin, 0px)"
})), em = we("span", {
  name: "JoyFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})({
  color: "var(--FormLabel-asteriskColor)"
}), ws = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n, o;
  const a = dt({
    props: t,
    name: "JoyFormLabel"
  }), {
    children: s,
    component: i = "label",
    slots: c = {},
    slotProps: d = {}
  } = a, u = pe(a, Xv), f = S.useContext(Ar), p = (n = (o = t.required) != null ? o : f == null ? void 0 : f.required) != null ? n : !1, h = C({}, a, {
    required: p
  }), g = Zv(), v = C({}, u, {
    component: i,
    slots: c,
    slotProps: d
  }), [m, $] = Ne("root", {
    additionalProps: {
      htmlFor: f == null ? void 0 : f.htmlFor,
      id: f == null ? void 0 : f.labelId
    },
    ref: r,
    className: g.root,
    elementType: Qv,
    externalForwardedProps: v,
    ownerState: h
  }), [w, I] = Ne("asterisk", {
    additionalProps: {
      "aria-hidden": !0
    },
    className: g.asterisk,
    elementType: em,
    externalForwardedProps: v,
    ownerState: h
  });
  return /* @__PURE__ */ H.jsxs(m, C({}, $, {
    children: [s, p && /* @__PURE__ */ H.jsxs(w, C({}, I, {
      children: [" ", "*"]
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (ws.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The asterisk is added if required=`true`
   */
  required: l.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    asterisk: l.oneOfType([l.func, l.object]),
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    asterisk: l.elementType,
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object])
});
const mn = ws;
function tm(e) {
  return lt("MuiOption", e);
}
const rm = nt("MuiOption", ["root", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "focusVisible", "disabled", "selected", "highlighted", "variantPlain", "variantSoft", "variantOutlined", "variantSolid"]), nm = rm, om = ["component", "children", "disabled", "value", "label", "variant", "color", "slots", "slotProps"], am = (e) => {
  const {
    disabled: t,
    highlighted: r,
    selected: n
  } = e;
  return rt({
    root: ["root", t && "disabled", r && "highlighted", n && "selected"]
  }, tm, {});
}, im = we(hs, {
  name: "JoyOption",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  const n = (r = e.variants[`${t.variant}Hover`]) == null ? void 0 : r[t.color];
  return {
    [`&.${nm.highlighted}:not([aria-selected="true"])`]: {
      backgroundColor: n == null ? void 0 : n.backgroundColor
    }
  };
}), Ts = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n;
  const o = dt({
    props: t,
    name: "JoyOption"
  }), {
    component: a = "li",
    children: s,
    disabled: i = !1,
    value: c,
    label: d,
    variant: u = "plain",
    color: f = "neutral",
    slots: p = {},
    slotProps: h = {}
  } = o, g = pe(o, om), v = S.useContext(Ro), {
    variant: m = u,
    color: $ = f
  } = ov(t.variant, t.color), w = S.useRef(null), I = Me(w, r), y = d ?? (typeof s == "string" ? s : (n = w.current) == null ? void 0 : n.innerText), {
    getRootProps: x,
    selected: E,
    highlighted: R,
    index: N
  } = mp({
    disabled: i,
    label: y,
    value: c,
    rootRef: I
  }), {
    getColor: k
  } = wt(m), V = k(t.color, $), j = C({}, o, {
    disabled: i,
    selected: E,
    highlighted: R,
    index: N,
    component: a,
    variant: m,
    color: V,
    row: v
  }), Y = am(j), M = C({}, g, {
    component: a,
    slots: p,
    slotProps: h
  }), [Q, _] = Ne("root", {
    ref: r,
    getSlotProps: x,
    elementType: im,
    externalForwardedProps: M,
    className: Y.root,
    ownerState: j
  });
  return /* @__PURE__ */ H.jsx(Q, C({}, _, {
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (Ts.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: l.node,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: l.oneOfType([l.oneOf(["danger", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * A text representation of the option's content.
   * Used for keyboard text navigation matching.
   */
  label: l.oneOfType([l.element, l.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: l.shape({
    root: l.oneOfType([l.func, l.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    root: l.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The option value.
   */
  value: l.any.isRequired,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'plain'
   */
  variant: l.oneOfType([l.oneOf(["outlined", "plain", "soft", "solid"]), l.string])
});
const sm = Ts, lm = rv(/* @__PURE__ */ H.jsx("path", {
  d: "m12 5.83 2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 0 0-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34-2.46-2.46a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0L12 18.17z"
}), "Unfold");
function cm(e) {
  return lt("MuiSelect", e);
}
const um = nt("MuiSelect", ["root", "button", "indicator", "startDecorator", "endDecorator", "popper", "listbox", "colorPrimary", "colorNeutral", "colorDanger", "colorSuccess", "colorWarning", "colorContext", "variantPlain", "variantOutlined", "variantSoft", "variantSolid", "sizeSm", "sizeMd", "sizeLg", "focusVisible", "disabled", "expanded"]), At = um;
var Za;
const dm = ["action", "autoFocus", "children", "defaultValue", "defaultListboxOpen", "disabled", "getSerializedValue", "placeholder", "listboxId", "listboxOpen", "onChange", "onListboxOpenChange", "onClose", "renderValue", "required", "value", "size", "variant", "color", "startDecorator", "endDecorator", "indicator", "aria-describedby", "aria-label", "aria-labelledby", "id", "name", "slots", "slotProps"];
function fm(e) {
  var t;
  return (t = e == null ? void 0 : e.label) != null ? t : "";
}
const pm = [{
  name: "offset",
  options: {
    offset: [0, 4]
  }
}, {
  // popper will have the same width as root element when open
  name: "equalWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({
    state: e
  }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  }
}], vm = (e) => {
  const {
    color: t,
    disabled: r,
    focusVisible: n,
    size: o,
    variant: a,
    open: s
  } = e, i = {
    root: ["root", r && "disabled", n && "focusVisible", s && "expanded", a && `variant${me(a)}`, t && `color${me(t)}`, o && `size${me(o)}`],
    button: ["button"],
    startDecorator: ["startDecorator"],
    endDecorator: ["endDecorator"],
    indicator: ["indicator", s && "expanded"],
    listbox: ["listbox", s && "expanded", r && "disabled"]
  };
  return rt(i, cm, {});
}, mm = we("div", {
  name: "JoySelect",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, a;
  const s = (r = e.variants[`${t.variant}`]) == null ? void 0 : r[t.color], {
    borderRadius: i
  } = vs({
    theme: e,
    ownerState: t
  }, ["borderRadius"]);
  return [C({
    "--Select-radius": e.vars.radius.sm,
    "--Select-gap": "0.5rem",
    "--Select-placeholderOpacity": 0.64,
    "--Select-decoratorColor": e.vars.palette.text.icon,
    "--Select-focusedThickness": e.vars.focus.thickness
  }, t.color === "context" ? {
    "--Select-focusedHighlight": e.vars.palette.focusVisible
  } : {
    "--Select-focusedHighlight": (n = e.vars.palette[t.color === "neutral" ? "primary" : t.color]) == null ? void 0 : n[500]
  }, {
    "--Select-indicatorColor": s != null && s.backgroundColor ? s == null ? void 0 : s.color : e.vars.palette.text.tertiary
  }, t.size === "sm" && {
    "--Select-minHeight": "2rem",
    "--Select-paddingInline": "0.5rem",
    "--Select-decoratorChildHeight": "min(1.5rem, var(--Select-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl
  }, t.size === "md" && {
    "--Select-minHeight": "2.5rem",
    "--Select-paddingInline": "0.75rem",
    "--Select-decoratorChildHeight": "min(2rem, var(--Select-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl2
  }, t.size === "lg" && {
    "--Select-minHeight": "3rem",
    "--Select-paddingInline": "1rem",
    "--Select-decoratorChildHeight": "min(2.375rem, var(--Select-minHeight))",
    "--Icon-fontSize": e.vars.fontSize.xl2
  }, {
    // variables for controlling child components
    "--Select-decoratorChildOffset": "min(calc(var(--Select-paddingInline) - (var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2), var(--Select-paddingInline))",
    "--_Select-paddingBlock": "max((var(--Select-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Select-decoratorChildHeight)) / 2, 0px)",
    "--Select-decoratorChildRadius": "max(var(--Select-radius) - var(--variant-borderWidth, 0px) - var(--_Select-paddingBlock), min(var(--_Select-paddingBlock) + var(--variant-borderWidth, 0px), var(--Select-radius) / 2))",
    "--Button-minHeight": "var(--Select-decoratorChildHeight)",
    "--IconButton-size": "var(--Select-decoratorChildHeight)",
    "--Button-radius": "var(--Select-decoratorChildRadius)",
    "--IconButton-radius": "var(--Select-decoratorChildRadius)",
    boxSizing: "border-box"
  }, t.variant !== "plain" && {
    boxShadow: e.shadow.xs
  }, {
    minWidth: 0,
    minHeight: "var(--Select-minHeight)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "var(--Select-radius)",
    cursor: "pointer"
  }, !(s != null && s.backgroundColor) && {
    backgroundColor: e.vars.palette.background.surface
  }, t.size && {
    paddingBlock: {
      sm: 2,
      md: 3,
      lg: 4
    }[t.size]
    // the padding-block act as a minimum spacing between content and root element
  }, {
    paddingInline: "var(--Select-paddingInline)"
  }, e.typography[`body-${t.size}`], s, {
    "&::before": {
      boxSizing: "border-box",
      content: '""',
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      borderRadius: "inherit",
      margin: "calc(var(--variant-borderWidth, 0px) * -1)"
      // for outlined variant
    },
    [`&.${At.focusVisible}`]: {
      "--Select-indicatorColor": s == null ? void 0 : s.color,
      "&::before": {
        boxShadow: "inset 0 0 0 var(--Select-focusedThickness) var(--Select-focusedHighlight)"
      }
    },
    [`&.${At.disabled}`]: {
      "--Select-indicatorColor": "inherit"
    }
  }), {
    "&:hover": (o = e.variants[`${t.variant}Hover`]) == null ? void 0 : o[t.color],
    [`&.${At.disabled}`]: (a = e.variants[`${t.variant}Disabled`]) == null ? void 0 : a[t.color]
  }, i !== void 0 && {
    "--Select-radius": i
  }];
}), gm = we("button", {
  name: "JoySelect",
  slot: "Button",
  overridesResolver: (e, t) => t.button
})(({
  ownerState: e
}) => C({
  // reset user-agent button style
  border: 0,
  outline: 0,
  background: "none",
  padding: 0,
  fontSize: "inherit",
  color: "inherit",
  alignSelf: "stretch",
  // make children horizontally aligned
  display: "flex",
  alignItems: "center",
  flex: 1,
  fontFamily: "inherit",
  cursor: "pointer",
  whiteSpace: "nowrap",
  overflow: "hidden"
}, (e.value === null || e.value === void 0) && {
  opacity: "var(--Select-placeholderOpacity)"
}, {
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    // TODO: use https://caniuse.com/?search=inset when ~94%
    top: "calc(-1 * var(--variant-borderWidth, 0px))",
    left: "calc(-1 * var(--variant-borderWidth, 0px))",
    right: "calc(-1 * var(--variant-borderWidth, 0px))",
    bottom: "calc(-1 * var(--variant-borderWidth, 0px))",
    borderRadius: "var(--Select-radius)"
  }
})), hm = we(gs, {
  name: "JoySelect",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(({
  theme: e,
  ownerState: t
}) => {
  var r;
  const n = t.color === "context" || (r = e.variants[t.variant]) == null ? void 0 : r[t.color];
  return C({
    "--focus-outline-offset": `calc(${e.vars.focus.thickness} * -1)`,
    // to prevent the focus outline from being cut by overflow
    "--ListItem-stickyBackground": (n == null ? void 0 : n.backgroundColor) || (n == null ? void 0 : n.background) || e.vars.palette.background.popup,
    "--ListItem-stickyTop": "calc(var(--List-padding, var(--ListDivider-gap)) * -1)"
  }, Vp, {
    minWidth: "max-content",
    // prevent options from shrinking if some of them is wider than the Select's root.
    maxHeight: "44vh",
    // the best value from what I tried so far which does not cause screen flicker when listbox is open.
    overflow: "auto",
    outline: 0,
    boxShadow: e.shadow.md,
    borderRadius: `var(--List-radius, ${e.vars.radius.sm})`,
    // `unstable_popup-zIndex` is a private variable that lets other component, e.g. Modal, to override the z-index so that the listbox can be displayed above the Modal.
    zIndex: `var(--unstable_popup-zIndex, ${e.vars.zIndex.popup})`
  }, !(n != null && n.backgroundColor) && {
    backgroundColor: e.vars.palette.background.popup
  });
}), ym = we("span", {
  name: "JoySelect",
  slot: "StartDecorator",
  overridesResolver: (e, t) => t.startDecorator
})({
  "--Button-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
  "--IconButton-margin": "0 0 0 calc(var(--Select-decoratorChildOffset) * -1)",
  "--Icon-margin": "0 0 0 calc(var(--Select-paddingInline) / -4)",
  display: "inherit",
  alignItems: "center",
  color: "var(--Select-decoratorColor)",
  marginInlineEnd: "var(--Select-gap)"
}), bm = we("span", {
  name: "JoySelect",
  slot: "EndDecorator",
  overridesResolver: (e, t) => t.endDecorator
})({
  "--Button-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
  "--IconButton-margin": "0 calc(var(--Select-decoratorChildOffset) * -1) 0 0",
  "--Icon-margin": "0 calc(var(--Select-paddingInline) / -4) 0 0",
  display: "inherit",
  alignItems: "center",
  color: "var(--Select-decoratorColor)",
  marginInlineStart: "var(--Select-gap)"
}), xm = we("span", {
  name: "JoySelect",
  slot: "Indicator"
})(({
  ownerState: e,
  theme: t
}) => C({}, e.size === "sm" && {
  "--Icon-fontSize": t.vars.fontSize.lg
}, e.size === "md" && {
  "--Icon-fontSize": t.vars.fontSize.xl
}, e.size === "lg" && {
  "--Icon-fontSize": t.vars.fontSize.xl2
}, {
  "--Icon-color": e.color !== "neutral" || e.variant === "solid" ? "currentColor" : t.vars.palette.text.icon,
  display: "inherit",
  alignItems: "center",
  marginInlineStart: "var(--Select-gap)",
  marginInlineEnd: "calc(var(--Select-paddingInline) / -4)",
  [`.${At.endDecorator} + &`]: {
    marginInlineStart: "calc(var(--Select-gap) / 2)"
  },
  [`&.${At.expanded}, .${At.disabled} > &`]: {
    "--Icon-color": "currentColor"
  }
})), Rs = /* @__PURE__ */ S.forwardRef(function(t, r) {
  var n, o, a, s, i;
  const c = dt({
    props: t,
    name: "JoySelect"
  }), d = c, {
    action: u,
    autoFocus: f,
    children: p,
    defaultValue: h,
    defaultListboxOpen: g = !1,
    disabled: v,
    getSerializedValue: m,
    placeholder: $,
    listboxId: w,
    listboxOpen: I,
    onChange: y,
    onListboxOpenChange: x,
    onClose: E,
    renderValue: R,
    required: N = !1,
    value: k,
    size: V = "md",
    variant: j = "outlined",
    color: Y = "neutral",
    startDecorator: M,
    endDecorator: Q,
    indicator: _ = Za || (Za = /* @__PURE__ */ H.jsx(lm, {})),
    // props to forward to the button (all handlers should go through slotProps.button)
    "aria-describedby": O,
    "aria-label": T,
    "aria-labelledby": L,
    id: oe,
    name: P,
    slots: B = {},
    slotProps: J = {}
  } = d, K = pe(d, dm), U = S.useContext(Ar);
  if (process.env.NODE_ENV !== "production") {
    const Ve = U == null ? void 0 : U.registerEffect;
    S.useEffect(() => {
      if (Ve)
        return Ve();
    }, [Ve]);
  }
  const te = (n = (o = t.disabled) != null ? o : U == null ? void 0 : U.disabled) != null ? n : v, ee = (a = (s = t.size) != null ? s : U == null ? void 0 : U.size) != null ? a : V, {
    getColor: re
  } = wt(j), G = re(t.color, U != null && U.error ? "danger" : (i = U == null ? void 0 : U.color) != null ? i : Y), A = R ?? fm, [q, se] = S.useState(null), D = S.useRef(null), ae = S.useRef(null), W = S.useRef(null), F = Me(r, D);
  S.useImperativeHandle(u, () => ({
    focusVisible: () => {
      var Ve;
      (Ve = ae.current) == null || Ve.focus();
    }
  }), []), S.useEffect(() => {
    se(D.current);
  }, []), S.useEffect(() => {
    f && ae.current.focus();
  }, [f]);
  const Z = S.useCallback((Ve) => {
    x == null || x(Ve), Ve || E == null || E();
  }, [E, x]), {
    buttonActive: ie,
    buttonFocusVisible: xe,
    contextValue: de,
    disabled: ce,
    getButtonProps: ge,
    getListboxProps: Te,
    getHiddenInputProps: Xe,
    getOptionMetadata: ne,
    open: ue,
    value: Ie
  } = Sp({
    buttonRef: ae,
    defaultOpen: g,
    defaultValue: h,
    disabled: te,
    getSerializedValue: m,
    listboxId: w,
    multiple: !1,
    name: P,
    required: N,
    onChange: y,
    onOpenChange: Z,
    open: I,
    value: k
  }), Pe = C({}, c, {
    active: ie,
    defaultListboxOpen: g,
    disabled: ce,
    focusVisible: xe,
    open: ue,
    renderValue: A,
    value: Ie,
    size: ee,
    variant: j,
    color: G
  }), ct = vm(Pe), ht = C({}, K, {
    slots: B,
    slotProps: J
  }), tr = S.useMemo(() => {
    var Ve;
    return (Ve = ne(Ie)) != null ? Ve : null;
  }, [ne, Ie]), [rr, bn] = Ne("root", {
    ref: F,
    className: ct.root,
    elementType: mm,
    externalForwardedProps: ht,
    ownerState: Pe
  }), [xn, Cn] = Ne("button", {
    additionalProps: {
      "aria-describedby": O ?? (U == null ? void 0 : U["aria-describedby"]),
      "aria-label": T,
      "aria-labelledby": L ?? (U == null ? void 0 : U.labelId),
      "aria-required": N ? "true" : void 0,
      id: oe ?? (U == null ? void 0 : U.htmlFor),
      name: P
    },
    className: ct.button,
    elementType: gm,
    externalForwardedProps: ht,
    getSlotProps: ge,
    ownerState: Pe
  }), [Sn, yt] = Ne("listbox", {
    additionalProps: {
      ref: W,
      anchorEl: q,
      open: ue,
      placement: "bottom",
      keepMounted: !0
    },
    className: ct.listbox,
    elementType: hm,
    externalForwardedProps: ht,
    getSlotProps: Te,
    ownerState: C({}, Pe, {
      nesting: !1,
      row: !1,
      wrap: !1
    }),
    getSlotOwnerState: (Ve) => ({
      size: Ve.size || ee,
      variant: Ve.variant || j,
      color: Ve.color || (Ve.disablePortal ? G : Y),
      disableColorInversion: !Ve.disablePortal
    })
  }), [$n, En] = Ne("startDecorator", {
    className: ct.startDecorator,
    elementType: ym,
    externalForwardedProps: ht,
    ownerState: Pe
  }), [nr, Nr] = Ne("endDecorator", {
    className: ct.endDecorator,
    elementType: bm,
    externalForwardedProps: ht,
    ownerState: Pe
  }), [$t, or] = Ne("indicator", {
    className: ct.indicator,
    elementType: xm,
    externalForwardedProps: ht,
    ownerState: Pe
  }), ar = S.useMemo(() => [...pm, ...yt.modifiers || []], [yt.modifiers]);
  let Rt = null;
  if (q) {
    var Br, ir;
    Rt = /* @__PURE__ */ H.jsx(Sn, C({}, yt, {
      className: Ct(yt.className, ((Br = yt.ownerState) == null ? void 0 : Br.color) === "context" && At.colorContext),
      modifiers: ar
    }, !((ir = c.slots) != null && ir.listbox) && {
      as: cs,
      slots: {
        root: yt.as || "ul"
      }
    }, {
      children: /* @__PURE__ */ H.jsx($p, {
        value: de,
        children: /* @__PURE__ */ H.jsx(av, {
          variant: j,
          color: Y,
          children: /* @__PURE__ */ H.jsx(fs.Provider, {
            value: "select",
            children: /* @__PURE__ */ H.jsx(ps, {
              nested: !0,
              children: p
            })
          })
        })
      })
    })), yt.disablePortal || (Rt = // For portal popup, the children should not inherit color inversion from the upper parent.
    /* @__PURE__ */ H.jsx(hd.Provider, {
      value: void 0,
      children: Rt
    }));
  }
  return /* @__PURE__ */ H.jsxs(S.Fragment, {
    children: [/* @__PURE__ */ H.jsxs(rr, C({}, bn, {
      children: [M && /* @__PURE__ */ H.jsx($n, C({}, En, {
        children: M
      })), /* @__PURE__ */ H.jsx(xn, C({}, Cn, {
        children: tr ? A(tr) : $
      })), Q && /* @__PURE__ */ H.jsx(nr, C({}, Nr, {
        children: Q
      })), _ && /* @__PURE__ */ H.jsx($t, C({}, or, {
        children: _
      })), /* @__PURE__ */ H.jsx("input", C({}, Xe()))]
    })), Rt]
  });
});
process.env.NODE_ENV !== "production" && (Rs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions. It currently only supports `focusVisible()` action.
   */
  action: l.oneOfType([l.func, l.shape({
    current: l.shape({
      focusVisible: l.func.isRequired
    })
  })]),
  /**
   * If `true`, the select element is focused during the first mount
   * @default false
   */
  autoFocus: l.bool,
  /**
   * @ignore
   */
  children: l.node,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'neutral'
   */
  color: l.oneOfType([l.oneOf(["danger", "neutral", "primary", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * If `true`, the select will be initially open.
   * @default false
   */
  defaultListboxOpen: l.bool,
  /**
   * The default selected value. Use when the component is not controlled.
   */
  defaultValue: l.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: l.bool,
  /**
   * Trailing adornment for the select.
   */
  endDecorator: l.node,
  /**
   * A function to convert the currently selected value to a string.
   * Used to set a value of a hidden input associated with the select,
   * so that the selected value can be posted with a form.
   */
  getSerializedValue: l.func,
  /**
   * The indicator(*) for the select.
   *    ________________
   *   [ value        * ]
   *    ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
   */
  indicator: l.node,
  /**
   * `id` attribute of the listbox element.
   * Also used to derive the `id` attributes of options.
   */
  listboxId: l.string,
  /**
   * Controls the open state of the select's listbox.
   * @default undefined
   */
  listboxOpen: l.bool,
  /**
   * Name of the element. For example used by the server to identify the fields in form submits.
   * If the name is provided, the component will render a hidden input element that can be submitted to a server.
   */
  name: l.string,
  /**
   * Callback fired when an option is selected.
   */
  onChange: l.func,
  /**
   * Triggered when focus leaves the menu and the menu should close.
   */
  onClose: l.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see listboxOpen).
   */
  onListboxOpenChange: l.func,
  /**
   * Text to show when there is no selected value.
   */
  placeholder: l.node,
  /**
   * Function that customizes the rendering of the selected value.
   */
  renderValue: l.func,
  /**
   * If `true`, the Select cannot be empty when submitting form.
   * @default false
   */
  required: l.bool,
  /**
   * The size of the component.
   */
  size: l.oneOfType([l.oneOf(["sm", "md", "lg"]), l.string]),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: l.shape({
    button: l.elementType,
    endDecorator: l.elementType,
    indicator: l.elementType,
    listbox: l.elementType,
    root: l.elementType,
    startDecorator: l.elementType
  }),
  /**
   * Leading adornment for the select.
   */
  startDecorator: l.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * The selected value.
   * Set to `null` to deselect all options.
   */
  value: l.any,
  /**
   * The [global variant](https://mui.com/joy-ui/main-features/global-variants/) to use.
   * @default 'outlined'
   */
  variant: l.oneOfType([l.oneOf(["outlined", "plain", "soft", "solid"]), l.string])
});
const Cm = Rs, Sm = (e) => /* @__PURE__ */ H.jsx(
  Es,
  {
    component: "header",
    className: "Header",
    ...e,
    sx: [
      {
        p: 1,
        gap: 1.5,
        bgcolor: "background.surface",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gridColumn: "1 / -1",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "sticky",
        top: 0,
        zIndex: 1100
      }
    ]
  }
), $m = (e) => /* @__PURE__ */ H.jsx(
  Es,
  {
    component: "main",
    className: "Main",
    ...e,
    sx: [{ p: 2 }, ...Array.isArray(e.sx) ? e.sx : [e.sx]]
  }
);
function Em(e, t) {
  return C({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Om = {
  black: "#000",
  white: "#fff"
}, $r = Om, Im = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, wm = Im, Tm = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, zt = Tm, Rm = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, jt = Rm, Pm = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, pr = Pm, _m = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Lt = _m, Dm = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Mt = Dm, km = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ht = km, Am = ["mode", "contrastThreshold", "tonalOffset"], Qa = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: $r.white,
    default: $r.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Bn = {
  text: {
    primary: $r.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: $r.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function ei(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ed(e.main, o) : t === "dark" && (e.dark = Qu(e.main, a)));
}
function Nm(e = "light") {
  return e === "dark" ? {
    main: Lt[200],
    light: Lt[50],
    dark: Lt[400]
  } : {
    main: Lt[700],
    light: Lt[400],
    dark: Lt[800]
  };
}
function Bm(e = "light") {
  return e === "dark" ? {
    main: zt[200],
    light: zt[50],
    dark: zt[400]
  } : {
    main: zt[500],
    light: zt[300],
    dark: zt[700]
  };
}
function Vm(e = "light") {
  return e === "dark" ? {
    main: jt[500],
    light: jt[300],
    dark: jt[700]
  } : {
    main: jt[700],
    light: jt[400],
    dark: jt[800]
  };
}
function Fm(e = "light") {
  return e === "dark" ? {
    main: Mt[400],
    light: Mt[300],
    dark: Mt[700]
  } : {
    main: Mt[700],
    light: Mt[500],
    dark: Mt[900]
  };
}
function zm(e = "light") {
  return e === "dark" ? {
    main: Ht[400],
    light: Ht[300],
    dark: Ht[700]
  } : {
    main: Ht[800],
    light: Ht[500],
    dark: Ht[900]
  };
}
function jm(e = "light") {
  return e === "dark" ? {
    main: pr[400],
    light: pr[300],
    dark: pr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: pr[500],
    dark: pr[900]
  };
}
function Lm(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = pe(e, Am), a = e.primary || Nm(t), s = e.secondary || Bm(t), i = e.error || Vm(t), c = e.info || Fm(t), d = e.success || zm(t), u = e.warning || jm(t);
  function f(v) {
    const m = wa(v, Bn.text.primary) >= r ? Bn.text.primary : Qa.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const $ = wa(v, m);
      $ < 3 && console.error([`MUI: The contrast ratio of ${$}:1 for ${m} on ${v}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const p = ({
    color: v,
    name: m,
    mainShade: $ = 500,
    lightShade: w = 300,
    darkShade: I = 700
  }) => {
    if (v = C({}, v), !v.main && v[$] && (v.main = v[$]), !v.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${$}\` property.` : Nt(11, m ? ` (${m})` : "", $));
    if (typeof v.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(v.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Nt(12, m ? ` (${m})` : "", JSON.stringify(v.main)));
    return ei(v, "light", w, n), ei(v, "dark", I, n), v.contrastText || (v.contrastText = f(v.main)), v;
  }, h = {
    dark: Bn,
    light: Qa
  };
  return process.env.NODE_ENV !== "production" && (h[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ye(C({
    // A collection of common colors.
    common: C({}, $r),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: i,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: u,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: wm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, h[t]), o);
}
const Mm = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Hm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ti = {
  textTransform: "uppercase"
}, ri = '"Roboto", "Helvetica", "Arial", sans-serif';
function Wm(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = ri,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: i = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: f
  } = r, p = pe(r, Mm);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = o / 14, g = f || (($) => `${$ / d * h}rem`), v = ($, w, I, y, x) => C({
    fontFamily: n,
    fontWeight: $,
    fontSize: g(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: I
  }, n === ri ? {
    letterSpacing: `${Hm(y / w)}em`
  } : {}, x, u), m = {
    h1: v(a, 96, 1.167, -1.5),
    h2: v(a, 60, 1.2, -0.5),
    h3: v(s, 48, 1.167, 0),
    h4: v(s, 34, 1.235, 0.25),
    h5: v(s, 24, 1.334, 0),
    h6: v(i, 20, 1.6, 0.15),
    subtitle1: v(s, 16, 1.75, 0.15),
    subtitle2: v(i, 14, 1.57, 0.1),
    body1: v(s, 16, 1.5, 0.15),
    body2: v(s, 14, 1.43, 0.15),
    button: v(i, 14, 1.75, 0.4, ti),
    caption: v(s, 12, 1.66, 0.4),
    overline: v(s, 12, 2.66, 1, ti),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ye(C({
    htmlFontSize: d,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: a,
    fontWeightRegular: s,
    fontWeightMedium: i,
    fontWeightBold: c
  }, m), p, {
    clone: !1
    // No need to clone deep
  });
}
const Um = 0.2, qm = 0.14, Ym = 0.12;
function De(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Um})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${qm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ym})`].join(",");
}
const Km = ["none", De(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), De(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), De(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), De(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), De(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), De(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), De(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), De(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), De(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), De(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), De(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), De(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), De(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), De(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), De(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), De(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), De(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), De(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), De(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), De(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), De(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), De(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), De(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), De(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Gm = Km, Jm = ["duration", "easing", "delay"], Xm = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Zm = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ni(e) {
  return `${Math.round(e)}ms`;
}
function Qm(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function eg(e) {
  const t = C({}, Xm, e.easing), r = C({}, Zm, e.duration);
  return C({
    getAutoHeightDuration: Qm,
    create: (o = ["all"], a = {}) => {
      const {
        duration: s = r.standard,
        easing: i = t.easeInOut,
        delay: c = 0
      } = a, d = pe(a, Jm);
      if (process.env.NODE_ENV !== "production") {
        const u = (p) => typeof p == "string", f = (p) => !isNaN(parseFloat(p));
        !u(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !u(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), u(i) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !u(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((u) => `${u} ${typeof s == "string" ? s : ni(s)} ${i} ${typeof c == "string" ? c : ni(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const tg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, rg = tg, ng = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function og(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: a = {}
  } = e, s = pe(e, ng);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Nt(18));
  const i = Lm(n), c = vo(e);
  let d = Ye(c, {
    mixins: Em(c.breakpoints, r),
    palette: i,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Gm.slice(),
    typography: Wm(i, a),
    transitions: eg(o),
    zIndex: C({}, rg)
  });
  if (d = Ye(d, s), d = t.reduce((u, f) => Ye(u, f), d), process.env.NODE_ENV !== "production") {
    const u = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], f = (p, h) => {
      let g;
      for (g in p) {
        const v = p[g];
        if (u.indexOf(g) !== -1 && Object.keys(v).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Ir("", g);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: v
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[g] = {};
        }
      }
    };
    Object.keys(d.components).forEach((p) => {
      const h = d.components[p].styleOverrides;
      h && p.indexOf("Mui") === 0 && f(h, p);
    });
  }
  return d.unstable_sxConfig = C({}, Pr, s == null ? void 0 : s.unstable_sxConfig), d.unstable_sx = function(f) {
    return _r({
      sx: f,
      theme: this
    });
  }, d;
}
const ag = og(), Ps = ag, _s = "$$material";
function ig({
  props: e,
  name: t
}) {
  return Wi({
    props: e,
    name: t,
    defaultTheme: Ps,
    themeId: _s
  });
}
const sg = (e) => Hr(e) && e !== "classes", lg = Hi({
  themeId: _s,
  defaultTheme: Ps,
  rootShouldForwardProp: sg
}), cg = lg;
function ug(e) {
  return Ir("MuiSvgIcon", e);
}
no("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const dg = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], fg = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${me(t)}`, `fontSize${me(r)}`]
  };
  return rt(o, ug, n);
}, pg = cg("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${me(r.color)}`], t[`fontSize${me(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, a, s, i, c, d, u, f, p, h, g;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((a = e.typography) == null || (s = a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem",
      medium: ((i = e.typography) == null || (c = i.pxToRem) == null ? void 0 : c.call(i, 24)) || "1.5rem",
      large: ((d = e.typography) == null || (u = d.pxToRem) == null ? void 0 : u.call(d, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (f = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? f : {
      action: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.active,
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ao = /* @__PURE__ */ S.forwardRef(function(t, r) {
  const n = ig({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: s = "inherit",
    component: i = "svg",
    fontSize: c = "medium",
    htmlColor: d,
    inheritViewBox: u = !1,
    titleAccess: f,
    viewBox: p = "0 0 24 24"
  } = n, h = pe(n, dg), g = /* @__PURE__ */ S.isValidElement(o) && o.type === "svg", v = C({}, n, {
    color: s,
    component: i,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: p,
    hasSvgAsChild: g
  }), m = {};
  u || (m.viewBox = p);
  const $ = fg(v);
  return /* @__PURE__ */ H.jsxs(pg, C({
    as: i,
    className: Ct($.root, a),
    focusable: "false",
    color: d,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r
  }, m, h, g && o.props, {
    ownerState: v,
    children: [g ? o.props.children : o, f ? /* @__PURE__ */ H.jsx("title", {
      children: f
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: l.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: l.object,
  /**
   * @ignore
   */
  className: l.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: l.oneOfType([l.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), l.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: l.oneOfType([l.oneOf(["inherit", "large", "medium", "small"]), l.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: l.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: l.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: l.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: l.oneOfType([l.arrayOf(l.oneOfType([l.func, l.object, l.bool])), l.func, l.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: l.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: l.string
});
Ao.muiName = "SvgIcon";
const oi = Ao;
function Ds(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ H.jsx(oi, C({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = oi.muiName, /* @__PURE__ */ S.memo(/* @__PURE__ */ S.forwardRef(r));
}
const vg = Ds(/* @__PURE__ */ H.jsx("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
}), "ArrowBack"), No = Ds(/* @__PURE__ */ H.jsx("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), "InfoOutlined"), mg = ({ onClick: e }) => /* @__PURE__ */ H.jsx(fv, { className: "BackButton", onClick: e, children: /* @__PURE__ */ H.jsx(vg, {}) }), gg = ({ title: e }) => /* @__PURE__ */ H.jsx(Bv, { component: "h1", fontWeight: "xl", sx: { flex: "1" }, children: e }), gn = ({ children: e }) => /* @__PURE__ */ H.jsx("div", { children: e });
gn.Header = Sm;
gn.Content = $m;
gn.BackButton = mg;
gn.Title = gg;
var hg = (e) => e.type === "checkbox", yg = (e) => e instanceof Date, ks = (e) => e == null;
const bg = (e) => typeof e == "object";
var er = (e) => !ks(e) && !Array.isArray(e) && bg(e) && !yg(e), xg = (e) => er(e) && e.target ? hg(e.target) ? e.target.checked : e.target.value : e, Cg = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Sg = (e, t) => e.has(Cg(t)), $g = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return er(t) && t.hasOwnProperty("isPrototypeOf");
}, Eg = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Bo(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Eg && (e instanceof Blob || e instanceof FileList)) && (r || er(e)))
    if (t = r ? [] : {}, !r && !$g(e))
      t = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (t[n] = Bo(e[n]));
  else
    return e;
  return t;
}
var As = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Zn = (e) => e === void 0, Ze = (e, t, r) => {
  if (!t || !er(e))
    return r;
  const n = As(t.split(/[,[\].]+?/)).reduce((o, a) => ks(o) ? o : o[a], e);
  return Zn(n) || n === e ? Zn(e[t]) ? r : e[t] : n;
};
const ai = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Qn = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Og = _e.createContext(null), Vo = () => _e.useContext(Og);
var Ig = (e, t, r, n = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(o, a, {
      get: () => {
        const s = a;
        return t._proxyFormState[s] !== Qn.all && (t._proxyFormState[s] = !n || Qn.all), r && (r[s] = !0), e[s];
      }
    });
  return o;
}, wg = (e) => er(e) && !Object.keys(e).length, Tg = (e, t, r, n) => {
  r(e);
  const { name: o, ...a } = e;
  return wg(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((s) => t[s] === (!n || Qn.all));
}, Rg = (e) => Array.isArray(e) ? e : [e], Ns = (e, t, r) => r && t ? e === t || Array.isArray(e) && e.some((n) => n && r && n === t) : !e || !t || e === t || Rg(e).some((n) => n && (n.startsWith(t) || t.startsWith(n)));
function Bs(e) {
  const t = _e.useRef(e);
  t.current = e, _e.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function Pg(e) {
  const t = Vo(), { control: r = t.control, disabled: n, name: o, exact: a } = e || {}, [s, i] = _e.useState(r._formState), c = _e.useRef(!0), d = _e.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = _e.useRef(o);
  return u.current = o, Bs({
    disabled: n,
    next: (f) => c.current && Ns(u.current, f.name, a) && Tg(f, d.current, r._updateFormState) && i({
      ...r._formState,
      ...f
    }),
    subject: r._subjects.state
  }), _e.useEffect(() => (c.current = !0, d.current.isValid && r._updateValid(!0), () => {
    c.current = !1;
  }), [r]), Ig(s, r, d.current, !1);
}
var _g = (e) => typeof e == "string", Dg = (e, t, r, n, o) => _g(e) ? (n && t.watch.add(e), Ze(r, e, o)) : Array.isArray(e) ? e.map((a) => (n && t.watch.add(a), Ze(r, a))) : (n && (t.watchAll = !0), r);
function kg(e) {
  const t = Vo(), { control: r = t.control, name: n, defaultValue: o, disabled: a, exact: s } = e || {}, i = _e.useRef(n);
  i.current = n, Bs({
    disabled: a,
    subject: r._subjects.values,
    next: (u) => {
      Ns(i.current, u.name, s) && d(Bo(Dg(i.current, r._names, u.values || r._formValues, !1, o)));
    }
  });
  const [c, d] = _e.useState(r._getWatch(n, o));
  return _e.useEffect(() => r._removeUnmounted()), c;
}
var Ag = (e) => /^\w*$/.test(e), Ng = (e) => As(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function ii(e, t, r) {
  let n = -1;
  const o = Ag(t) ? [t] : Ng(t), a = o.length, s = a - 1;
  for (; ++n < a; ) {
    const i = o[n];
    let c = r;
    if (n !== s) {
      const d = e[i];
      c = er(d) || Array.isArray(d) ? d : isNaN(+o[n + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
}
function Bg(e) {
  const t = Vo(), { name: r, disabled: n, control: o = t.control, shouldUnregister: a } = e, s = Sg(o._names.array, r), i = kg({
    control: o,
    name: r,
    defaultValue: Ze(o._formValues, r, Ze(o._defaultValues, r, e.defaultValue)),
    exact: !0
  }), c = Pg({
    control: o,
    name: r
  }), d = _e.useRef(o.register(r, {
    ...e.rules,
    value: i
  }));
  return d.current = o.register(r, e.rules), _e.useEffect(() => {
    const u = o._options.shouldUnregister || a, f = (p, h) => {
      const g = Ze(o._fields, p);
      g && (g._f.mount = h);
    };
    if (f(r, !0), u) {
      const p = Bo(Ze(o._options.defaultValues, r));
      ii(o._defaultValues, r, p), Zn(Ze(o._formValues, r)) && ii(o._formValues, r, p);
    }
    return () => {
      (s ? u && !o._state.action : u) ? o.unregister(r) : f(r, !1);
    };
  }, [r, o, s, a]), _e.useEffect(() => {
    o._updateDisabledField({
      disabled: n,
      fields: o._fields,
      name: r
    });
  }, [n, r, o]), {
    field: {
      name: r,
      value: i,
      disabled: n,
      onChange: _e.useCallback((u) => d.current.onChange({
        target: {
          value: xg(u),
          name: r
        },
        type: ai.CHANGE
      }), [r]),
      onBlur: _e.useCallback(() => d.current.onBlur({
        target: {
          value: Ze(o._formValues, r),
          name: r
        },
        type: ai.BLUR
      }), [r, o]),
      ref: (u) => {
        const f = Ze(o._fields, r);
        f && u && (f._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (p) => u.setCustomValidity(p),
          reportValidity: () => u.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!Ze(c.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!Ze(c.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!Ze(c.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => Ze(c.errors, r)
      }
    })
  };
}
const hn = (e) => e.render(Bg(e)), Vg = ({
  label: e,
  name: t,
  control: r,
  error: n,
  sx: o = {},
  required: a = !1,
  defaultValue: s = ""
}) => /* @__PURE__ */ H.jsxs(vn, { error: !0, sx: { pb: 1, ...o }, required: a, children: [
  /* @__PURE__ */ H.jsx(mn, { children: e }),
  /* @__PURE__ */ H.jsx(
    hn,
    {
      name: t,
      defaultValue: s,
      control: r,
      render: ({ field: { onChange: i, value: c, onBlur: d } }) => /* @__PURE__ */ H.jsx(
        _o,
        {
          type: "text",
          name: t,
          onChange: i,
          onBlur: d,
          value: c,
          error: !!n
        }
      )
    }
  ),
  /* @__PURE__ */ H.jsxs(ko, { children: [
    n && /* @__PURE__ */ H.jsx(No, {}),
    n == null ? void 0 : n.message
  ] })
] });
function Vs(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
var Er;
(function(e) {
  e.event = "event", e.props = "prop";
})(Er || (Er = {}));
function Et() {
}
function Fg(e) {
  var t, r = void 0;
  return function() {
    for (var n = [], o = arguments.length; o--; )
      n[o] = arguments[o];
    return t && n.length === t.length && n.every(function(a, s) {
      return a === t[s];
    }) || (t = n, r = e.apply(void 0, n)), r;
  };
}
function Or(e) {
  return !!(e || "").match(/\d/);
}
function Yt(e) {
  return e == null;
}
function zg(e) {
  return typeof e == "number" && isNaN(e);
}
function Fs(e) {
  return Yt(e) || zg(e) || typeof e == "number" && !isFinite(e);
}
function zs(e) {
  return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&");
}
function jg(e) {
  switch (e) {
    case "lakh":
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case "wan":
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case "thousand":
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}
function Lg(e, t, r) {
  var n = jg(r), o = e.search(/[1-9]/);
  return o = o === -1 ? e.length : o, e.substring(0, o) + e.substring(o, e.length).replace(n, "$1" + t);
}
function Mg(e) {
  var t = vr(e);
  t.current = e;
  var r = vr(function() {
    for (var n = [], o = arguments.length; o--; )
      n[o] = arguments[o];
    return t.current.apply(t, n);
  });
  return r.current;
}
function Fo(e, t) {
  t === void 0 && (t = !0);
  var r = e[0] === "-", n = r && t;
  e = e.replace("-", "");
  var o = e.split("."), a = o[0], s = o[1] || "";
  return {
    beforeDecimal: a,
    afterDecimal: s,
    hasNegation: r,
    addNegation: n
  };
}
function Hg(e) {
  if (!e)
    return e;
  var t = e[0] === "-";
  t && (e = e.substring(1, e.length));
  var r = e.split("."), n = r[0].replace(/^0+/, "") || "0", o = r[1] || "";
  return (t ? "-" : "") + n + (o ? "." + o : "");
}
function js(e, t, r) {
  for (var n = "", o = r ? "0" : "", a = 0; a <= t - 1; a++)
    n += e[a] || o;
  return n;
}
function si(e, t) {
  return Array(t + 1).join(e);
}
function Ls(e) {
  var t = e + "", r = t[0] === "-" ? "-" : "";
  r && (t = t.substring(1));
  var n = t.split(/[eE]/g), o = n[0], a = n[1];
  if (a = Number(a), !a)
    return r + o;
  o = o.replace(".", "");
  var s = 1 + a, i = o.length;
  return s < 0 ? o = "0." + si("0", Math.abs(s)) + o : s >= i ? o = o + si("0", s - i) : o = (o.substring(0, s) || "0") + "." + o.substring(s), r + o;
}
function li(e, t, r) {
  if (["", "-"].indexOf(e) !== -1)
    return e;
  var n = (e.indexOf(".") !== -1 || r) && t, o = Fo(e), a = o.beforeDecimal, s = o.afterDecimal, i = o.hasNegation, c = parseFloat("0." + (s || "0")), d = s.length <= t ? "0." + s : c.toFixed(t), u = d.split("."), f = a.split("").reverse().reduce(function(v, m, $) {
    return v.length > $ ? (Number(v[0]) + Number(m)).toString() + v.substring(1, v.length) : m + v;
  }, u[0]), p = js(u[1] || "", t, r), h = i ? "-" : "", g = n ? "." : "";
  return "" + h + f + g + p;
}
function Dt(e, t) {
  if (e.value = e.value, e !== null) {
    if (e.createTextRange) {
      var r = e.createTextRange();
      return r.move("character", t), r.select(), !0;
    }
    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1);
  }
}
var Ms = Fg(function(e, t) {
  for (var r = 0, n = 0, o = e.length, a = t.length; e[r] === t[r] && r < o; )
    r++;
  for (; e[o - 1 - n] === t[a - 1 - n] && a - n > r && o - n > r; )
    n++;
  return {
    from: { start: r, end: o - n },
    to: { start: r, end: a - n }
  };
});
function Wg(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
function Vn(e) {
  return Math.max(e.selectionStart, e.selectionEnd);
}
function Ug() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function qg(e) {
  return {
    from: {
      start: 0,
      end: 0
    },
    to: {
      start: 0,
      end: e.length
    },
    lastValue: ""
  };
}
function Yg(e) {
  var t = e.currentValue, r = e.formattedValue, n = e.currentValueIndex, o = e.formattedValueIndex;
  return t[n] === r[o];
}
function Kg(e, t, r, n, o, a, s) {
  s === void 0 && (s = Yg);
  var i = o.findIndex(function(y) {
    return y;
  }), c = e.slice(0, i);
  !t && !r.startsWith(c) && (t = c, r = c + r, n = n + c.length);
  for (var d = r.length, u = e.length, f = {}, p = new Array(d), h = 0; h < d; h++) {
    p[h] = -1;
    for (var g = 0, v = u; g < v; g++) {
      var m = s({
        currentValue: r,
        lastValue: t,
        formattedValue: e,
        currentValueIndex: h,
        formattedValueIndex: g
      });
      if (m && f[g] !== !0) {
        p[h] = g, f[g] = !0;
        break;
      }
    }
  }
  for (var $ = n; $ < d && (p[$] === -1 || !a(r[$])); )
    $++;
  var w = $ === d || p[$] === -1 ? u : p[$];
  for ($ = n - 1; $ > 0 && p[$] === -1; )
    $--;
  var I = $ === -1 || p[$] === -1 ? 0 : p[$] + 1;
  return I > w ? w : n - I < w - n ? I : w;
}
function ci(e, t, r, n) {
  var o = e.length;
  if (t = Wg(t, 0, o), n === "left") {
    for (; t >= 0 && !r[t]; )
      t--;
    t === -1 && (t = r.indexOf(!0));
  } else {
    for (; t <= o && !r[t]; )
      t++;
    t > o && (t = r.lastIndexOf(!0));
  }
  return t === -1 && (t = o), t;
}
function Gg(e) {
  for (var t = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), r = 0, n = t.length; r < n; r++)
    t[r] = !!(Or(e[r]) || Or(e[r - 1]));
  return t;
}
function Hs(e, t, r, n, o, a) {
  a === void 0 && (a = Et);
  var s = Mg(function(g, v) {
    var m, $;
    return Fs(g) ? ($ = "", m = "") : typeof g == "number" || v ? ($ = typeof g == "number" ? Ls(g) : g, m = n($)) : ($ = o(g, void 0), m = n($)), { formattedValue: m, numAsString: $ };
  }), i = di(function() {
    return s(Yt(e) ? t : e, r);
  }), c = i[0], d = i[1], u = function(g, v) {
    g.formattedValue !== c.formattedValue && d({
      formattedValue: g.formattedValue,
      numAsString: g.value
    }), a(g, v);
  }, f = e, p = r;
  Yt(e) && (f = c.numAsString, p = !0);
  var h = s(f, p);
  return Zs(function() {
    d(h);
  }, [h.formattedValue]), [c, u];
}
function Jg(e) {
  return e.replace(/[^0-9]/g, "");
}
function Xg(e) {
  return e;
}
function Zg(e) {
  var t = e.type;
  t === void 0 && (t = "text");
  var r = e.displayType;
  r === void 0 && (r = "input");
  var n = e.customInput, o = e.renderText, a = e.getInputRef, s = e.format;
  s === void 0 && (s = Xg);
  var i = e.removeFormatting;
  i === void 0 && (i = Jg);
  var c = e.defaultValue, d = e.valueIsNumericString, u = e.onValueChange, f = e.isAllowed, p = e.onChange;
  p === void 0 && (p = Et);
  var h = e.onKeyDown;
  h === void 0 && (h = Et);
  var g = e.onMouseUp;
  g === void 0 && (g = Et);
  var v = e.onFocus;
  v === void 0 && (v = Et);
  var m = e.onBlur;
  m === void 0 && (m = Et);
  var $ = e.value, w = e.getCaretBoundary;
  w === void 0 && (w = Gg);
  var I = e.isValidInputCharacter;
  I === void 0 && (I = Or);
  var y = e.isCharacterSame, x = Vs(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), E = Hs($, c, !!d, s, i, u), R = E[0], N = R.formattedValue, k = R.numAsString, V = E[1], j = vr({ formattedValue: N, numAsString: k }), Y = function(F, Z) {
    j.current = { formattedValue: F.formattedValue, numAsString: F.value }, V(F, Z);
  }, M = di(!1), Q = M[0], _ = M[1], O = vr(null), T = vr({
    setCaretTimeout: null,
    focusTimeout: null
  });
  On(function() {
    return _(!0), function() {
      clearTimeout(T.current.setCaretTimeout), clearTimeout(T.current.focusTimeout);
    };
  }, []);
  var L = s, oe = function(F, Z) {
    var ie = parseFloat(Z);
    return {
      formattedValue: F,
      value: Z,
      floatValue: isNaN(ie) ? void 0 : ie
    };
  }, P = function(F, Z, ie) {
    F.selectionStart === 0 && F.selectionEnd === F.value.length || (Dt(F, Z), T.current.setCaretTimeout = setTimeout(function() {
      F.value === ie && F.selectionStart !== F.selectionEnd && Dt(F, Z);
    }, 0));
  }, B = function(F, Z, ie) {
    return ci(F, Z, w(F), ie);
  }, J = function(F, Z, ie) {
    var xe = w(Z), de = Kg(Z, N, F, ie, xe, I, y);
    return de = ci(Z, de, xe), de;
  }, K = function(F) {
    var Z = F.formattedValue;
    Z === void 0 && (Z = "");
    var ie = F.input, xe = F.setCaretPosition;
    xe === void 0 && (xe = !0);
    var de = F.source, ce = F.event, ge = F.numAsString, Te = F.caretPos;
    if (ie) {
      if (Te === void 0 && xe) {
        var Xe = F.inputValue || ie.value, ne = Vn(ie);
        ie.value = Z, Te = J(Xe, Z, ne);
      }
      ie.value = Z, xe && Te !== void 0 && P(ie, Te, Z);
    }
    Z !== N && Y(oe(Z, ge), { event: ce, source: de });
  };
  On(function() {
    var F = j.current, Z = F.formattedValue, ie = F.numAsString;
    N !== Z && (N !== k || Z !== ie) && Y(oe(N, k), {
      event: void 0,
      source: Er.props
    });
  }, [N, k]);
  var U = O.current ? Vn(O.current) : void 0, te = typeof window < "u" ? Qs : On;
  te(function() {
    var F = O.current;
    if (N !== j.current.formattedValue && F) {
      var Z = J(j.current.formattedValue, N, U);
      F.value = N, P(F, Z, N);
    }
  }, [N]);
  var ee = function(F, Z, ie) {
    var xe = Ms(N, F), de = Object.assign(Object.assign({}, xe), { lastValue: N }), ce = i(F, de), ge = L(ce);
    if (ce = i(ge, void 0), f && !f(oe(ge, ce))) {
      var Te = Z.target, Xe = Vn(Te), ne = J(F, N, Xe);
      return Te.value = N, P(Te, ne, N), !1;
    }
    return K({
      formattedValue: ge,
      numAsString: ce,
      inputValue: F,
      event: Z,
      source: ie,
      setCaretPosition: !0,
      input: Z.target
    }), !0;
  }, re = function(F) {
    var Z = F.target, ie = Z.value, xe = ee(ie, F, Er.event);
    xe && p(F);
  }, G = function(F) {
    var Z = F.target, ie = F.key, xe = Z.selectionStart, de = Z.selectionEnd, ce = Z.value;
    ce === void 0 && (ce = "");
    var ge;
    if (ie === "ArrowLeft" || ie === "Backspace" ? ge = Math.max(xe - 1, 0) : ie === "ArrowRight" ? ge = Math.min(xe + 1, ce.length) : ie === "Delete" && (ge = xe), ge === void 0 || xe !== de) {
      h(F);
      return;
    }
    var Te = ge;
    if (ie === "ArrowLeft" || ie === "ArrowRight") {
      var Xe = ie === "ArrowLeft" ? "left" : "right";
      Te = B(ce, ge, Xe), Te !== ge && F.preventDefault();
    } else
      ie === "Delete" && !I(ce[ge]) ? Te = B(ce, ge, "right") : ie === "Backspace" && !I(ce[ge]) && (Te = B(ce, ge, "left"));
    Te !== ge && P(Z, Te, ce), F.isUnitTestRun && P(Z, Te, ce), h(F);
  }, A = function(F) {
    var Z = F.target, ie = Z.selectionStart, xe = Z.selectionEnd, de = Z.value;
    if (de === void 0 && (de = ""), ie === xe) {
      var ce = B(de, ie);
      ce !== ie && P(Z, ce, de);
    }
    g(F);
  }, q = function(F) {
    F.persist && F.persist();
    var Z = F.target;
    O.current = Z, T.current.focusTimeout = setTimeout(function() {
      var ie = Z.selectionStart, xe = Z.selectionEnd, de = Z.value;
      de === void 0 && (de = "");
      var ce = B(de, ie);
      ce !== ie && !(ie === 0 && xe === de.length) && P(Z, ce, de), v(F);
    }, 0);
  }, se = function(F) {
    O.current = null, clearTimeout(T.current.focusTimeout), clearTimeout(T.current.setCaretTimeout), m(F);
  }, D = Q && Ug() ? "numeric" : void 0, ae = Object.assign({ inputMode: D }, x, {
    type: t,
    value: N,
    onChange: re,
    onKeyDown: G,
    onMouseUp: A,
    onFocus: q,
    onBlur: se
  });
  if (r === "text")
    return o ? _e.createElement(_e.Fragment, null, o(N, x) || null) : _e.createElement("span", Object.assign({}, x, { ref: a }), N);
  if (n) {
    var W = n;
    return _e.createElement(W, Object.assign({}, ae, { ref: a }));
  }
  return _e.createElement("input", Object.assign({}, ae, { ref: a }));
}
function ui(e, t) {
  var r = t.decimalScale, n = t.fixedDecimalScale, o = t.prefix;
  o === void 0 && (o = "");
  var a = t.suffix;
  a === void 0 && (a = "");
  var s = t.allowNegative, i = t.thousandsGroupStyle;
  if (i === void 0 && (i = "thousand"), e === "" || e === "-")
    return e;
  var c = yn(t), d = c.thousandSeparator, u = c.decimalSeparator, f = r !== 0 && e.indexOf(".") !== -1 || r && n, p = Fo(e, s), h = p.beforeDecimal, g = p.afterDecimal, v = p.addNegation;
  return r !== void 0 && (g = js(g, r, !!n)), d && (h = Lg(h, d, i)), o && (h = o + h), a && (g = g + a), v && (h = "-" + h), e = h + (f && u || "") + g, e;
}
function yn(e) {
  var t = e.decimalSeparator;
  t === void 0 && (t = ".");
  var r = e.thousandSeparator, n = e.allowedDecimalSeparators;
  return r === !0 && (r = ","), n || (n = [t, "."]), {
    decimalSeparator: t,
    thousandSeparator: r,
    allowedDecimalSeparators: n
  };
}
function Qg(e, t) {
  e === void 0 && (e = "");
  var r = new RegExp("(-)"), n = new RegExp("(-)(.)*(-)"), o = r.test(e), a = n.test(e);
  return e = e.replace(/-/g, ""), o && !a && t && (e = "-" + e), e;
}
function eh(e, t) {
  return new RegExp("(^-)|[0-9]|" + zs(e), t ? "g" : void 0);
}
function th(e, t, r) {
  return e === "" ? !0 : !(t != null && t.match(/\d/)) && !(r != null && r.match(/\d/)) && typeof e == "string" && !isNaN(Number(e));
}
function rh(e, t, r) {
  var n;
  t === void 0 && (t = qg(e));
  var o = r.allowNegative, a = r.prefix;
  a === void 0 && (a = "");
  var s = r.suffix;
  s === void 0 && (s = "");
  var i = r.decimalScale, c = t.from, d = t.to, u = d.start, f = d.end, p = yn(r), h = p.allowedDecimalSeparators, g = p.decimalSeparator, v = e[f] === g;
  if (Or(e) && (e === a || e === s) && t.lastValue === "")
    return e;
  if (f - u === 1 && h.indexOf(e[u]) !== -1) {
    var m = i === 0 ? "" : g;
    e = e.substring(0, u) + m + e.substring(u + 1, e.length);
  }
  var $ = function(T, L, oe) {
    var P = !1, B = !1;
    a.startsWith("-") ? P = !1 : T.startsWith("--") ? (P = !1, B = !0) : s.startsWith("-") && T.length === s.length ? P = !1 : T[0] === "-" && (P = !0);
    var J = P ? 1 : 0;
    return B && (J = 2), J && (T = T.substring(J), L -= J, oe -= J), { value: T, start: L, end: oe, hasNegation: P };
  }, w = $(e, u, f), I = w.hasNegation;
  n = w, e = n.value, u = n.start, f = n.end;
  var y = $(t.lastValue, c.start, c.end), x = y.start, E = y.end, R = y.value, N = e.substring(u, f);
  e.length && R.length && (x > R.length - s.length || E < a.length) && !(N && s.startsWith(N)) && (e = R);
  var k = 0;
  e.startsWith(a) ? k += a.length : u < a.length && (k = u), e = e.substring(k), f -= k;
  var V = e.length, j = e.length - s.length;
  e.endsWith(s) ? V = j : (f > j || f > e.length - s.length) && (V = f), e = e.substring(0, V), e = Qg(I ? "-" + e : e, o), e = (e.match(eh(g, !0)) || []).join("");
  var Y = e.indexOf(g);
  e = e.replace(new RegExp(zs(g), "g"), function(T, L) {
    return L === Y ? "." : "";
  });
  var M = Fo(e, o), Q = M.beforeDecimal, _ = M.afterDecimal, O = M.addNegation;
  return d.end - d.start < c.end - c.start && Q === "" && v && !parseFloat(_) && (e = O ? "-" : ""), e;
}
function nh(e, t) {
  var r = t.prefix;
  r === void 0 && (r = "");
  var n = t.suffix;
  n === void 0 && (n = "");
  var o = Array.from({ length: e.length + 1 }).map(function() {
    return !0;
  }), a = e[0] === "-";
  o.fill(!1, 0, r.length + (a ? 1 : 0));
  var s = e.length;
  return o.fill(!1, s - n.length + 1, s + 1), o;
}
function oh(e) {
  var t = yn(e), r = t.thousandSeparator, n = t.decimalSeparator, o = e.prefix;
  o === void 0 && (o = "");
  var a = e.allowNegative;
  if (a === void 0 && (a = !0), r === n)
    throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: ` + r + ` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: ` + n + ` (default value for decimalSeparator is .)
     `);
  return o.startsWith("-") && a && (console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: ` + o + `
      allowNegative: ` + a + `
    `), a = !1), Object.assign(Object.assign({}, e), { allowNegative: a });
}
function ah(e) {
  e = oh(e), e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
  var t = e.suffix, r = e.allowNegative, n = e.allowLeadingZeros, o = e.onKeyDown;
  o === void 0 && (o = Et);
  var a = e.onBlur;
  a === void 0 && (a = Et);
  var s = e.thousandSeparator, i = e.decimalScale, c = e.fixedDecimalScale, d = e.prefix;
  d === void 0 && (d = "");
  var u = e.defaultValue, f = e.value, p = e.valueIsNumericString, h = e.onValueChange, g = Vs(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]), v = yn(e), m = v.decimalSeparator, $ = v.allowedDecimalSeparators, w = function(O) {
    return ui(O, e);
  }, I = function(O, T) {
    return rh(O, T, e);
  }, y = Yt(f) ? u : f, x = p ?? th(y, d, t);
  Yt(f) ? Yt(u) || (x = x || typeof u == "number") : x = x || typeof f == "number";
  var E = function(O) {
    return Fs(O) ? O : (typeof O == "number" && (O = Ls(O)), x && typeof i == "number" ? li(O, i, !!c) : O);
  }, R = Hs(E(f), E(u), !!x, w, I, h), N = R[0], k = N.numAsString, V = N.formattedValue, j = R[1], Y = function(O) {
    var T = O.target, L = O.key, oe = T.selectionStart, P = T.selectionEnd, B = T.value;
    if (B === void 0 && (B = ""), oe !== P) {
      o(O);
      return;
    }
    L === "Backspace" && B[0] === "-" && oe === d.length + 1 && r && Dt(T, 1), i && c && (L === "Backspace" && B[oe - 1] === m ? (Dt(T, oe - 1), O.preventDefault()) : L === "Delete" && B[oe] === m && O.preventDefault()), $ != null && $.includes(L) && B[oe] === m && Dt(T, oe + 1);
    var J = s === !0 ? "," : s;
    L === "Backspace" && B[oe - 1] === J && Dt(T, oe - 1), L === "Delete" && B[oe] === J && Dt(T, oe + 1), o(O);
  }, M = function(O) {
    var T = k;
    if (T.match(/\d/g) || (T = ""), n || (T = Hg(T)), c && i && (T = li(T, i, c)), T !== k) {
      var L = ui(T, e);
      j({
        formattedValue: L,
        value: T,
        floatValue: parseFloat(T)
      }, {
        event: O,
        source: Er.event
      });
    }
    a(O);
  }, Q = function(O) {
    return O === m ? !0 : Or(O);
  }, _ = function(O) {
    var T = O.currentValue, L = O.lastValue, oe = O.formattedValue, P = O.currentValueIndex, B = O.formattedValueIndex, J = T[P], K = oe[B], U = Ms(L, T), te = U.to;
    return P >= te.start && P < te.end && $ && $.includes(J) && K === m ? !0 : J === K;
  };
  return Object.assign(Object.assign({}, g), {
    value: V,
    valueIsNumericString: !1,
    isValidInputCharacter: Q,
    isCharacterSame: _,
    onValueChange: j,
    format: w,
    removeFormatting: I,
    getCaretBoundary: function(O) {
      return nh(O, e);
    },
    onKeyDown: Y,
    onBlur: M
  });
}
function ih(e) {
  var t = ah(e);
  return _e.createElement(Zg, Object.assign({}, t));
}
const sh = _e.forwardRef(
  (e, t) => {
    const { onChange: r, ...n } = e;
    return /* @__PURE__ */ H.jsx(
      ih,
      {
        ...n,
        getInputRef: t,
        onValueChange: (o) => r({ target: { name: e.name, value: o.value } }),
        thousandSeparator: !0,
        valueIsNumericString: !0,
        allowLeadingZeros: !1,
        allowNegative: !1,
        decimalScale: 2
      }
    );
  }
), lh = ({
  label: e,
  name: t,
  control: r,
  error: n,
  sx: o = {},
  required: a = !1,
  defaultValue: s = ""
}) => /* @__PURE__ */ H.jsxs(vn, { error: !0, sx: { pb: 1, ...o }, required: a, children: [
  /* @__PURE__ */ H.jsx(mn, { children: e }),
  /* @__PURE__ */ H.jsx(
    hn,
    {
      name: t,
      defaultValue: s,
      control: r,
      render: ({ field: { onChange: i, value: c, onBlur: d } }) => /* @__PURE__ */ H.jsx(
        _o,
        {
          startDecorator: "$",
          name: t,
          onChange: i,
          onBlur: d,
          value: c,
          error: !!n,
          slotProps: { input: { component: sh } }
        }
      )
    }
  ),
  /* @__PURE__ */ H.jsxs(ko, { children: [
    n && /* @__PURE__ */ H.jsx(No, {}),
    n == null ? void 0 : n.message
  ] })
] }), ch = ({
  label: e,
  name: t,
  control: r,
  options: n,
  defaultValue: o,
  setValue: a,
  sx: s = {},
  required: i = !1
}) => /* @__PURE__ */ H.jsxs(vn, { sx: { pb: 1, ...s }, required: i, children: [
  /* @__PURE__ */ H.jsx(mn, { children: e }),
  /* @__PURE__ */ H.jsx(
    hn,
    {
      name: t,
      defaultValue: o,
      control: r,
      render: ({ field: { value: c } }) => /* @__PURE__ */ H.jsx(
        Cm,
        {
          onChange: (d) => a(t, d.target.innerHTML),
          value: c,
          children: n.map((d) => /* @__PURE__ */ H.jsx(sm, { value: d, children: d }, d))
        }
      )
    }
  )
] }), uh = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), dh = ({ label: e, name: t, control: r, error: n, sx: o = {}, required: a = !1 }) => /* @__PURE__ */ H.jsxs(vn, { error: !0, sx: { pb: 1, ...o }, required: a, children: [
  /* @__PURE__ */ H.jsx(mn, { children: e }),
  /* @__PURE__ */ H.jsx(
    hn,
    {
      name: t,
      defaultValue: uh,
      control: r,
      render: ({ field: { onChange: s, value: i, onBlur: c } }) => /* @__PURE__ */ H.jsx(
        _o,
        {
          type: "date",
          name: t,
          onChange: s,
          onBlur: c,
          value: i,
          error: !!n
        }
      )
    }
  ),
  /* @__PURE__ */ H.jsxs(ko, { children: [
    n && /* @__PURE__ */ H.jsx(No, {}),
    n == null ? void 0 : n.message
  ] })
] }), ph = { Text: Vg, Currency: lh, Options: ch, DateTime: dh };
export {
  ph as Inputs,
  gn as Layout
};
