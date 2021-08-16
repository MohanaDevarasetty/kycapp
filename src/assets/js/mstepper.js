/**
 * Materialize Stepper - A little plugin that implements a stepper to Materializecss framework.
 * @version v3.1.0
 * @author Igor Marcossi (Kinark) <igormarcossi@gmail.com>.
 * @link https://github.com/Kinark/Materialize-stepper
 *
 * Licensed under the MIT License (https://github.com/Kinark/Materialize-stepper/blob/master/LICENSE).
 */

"use strict";
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var MStepper = (function () {
  function E(e) {
    var g = this,
      t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    _classCallCheck(this, E),
      _defineProperty(this, "_init", function () {
        var e = g._formWrapperManager,
          t = g.getSteps,
          n = g.options,
          i = g._methodsBindingManager,
          r = g._openAction,
          s = t().steps;
        (g.form = e()), r(s[n.firstActive], void 0, void 0, !0), i(s);
      }),
      _defineProperty(this, "_methodsBindingManager", function (e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          o = g.classes,
          a = g._formSubmitHandler,
          l = g._nextStepProxy,
          c = g._prevStepProxy,
          p = g._stepTitleClickHandler,
          d = g.form,
          v = g.options,
          n = E.nodesIterator,
          f = E.tabbingDisabler,
          u = t ? E.removeMultipleEventListeners : E.addMultipleEventListeners,
          i = function (e) {
            var t = e.getElementsByClassName(o.NEXTSTEPBTN),
              n = e.getElementsByClassName(o.PREVSTEPBTN),
              i = e.getElementsByClassName(o.STEPTITLE),
              r = e.querySelectorAll("input, select, textarea, button"),
              s = e.querySelectorAll('button[type="submit"]');
            return (
              u(t, "click", l, !1),
              u(n, "click", c, !1),
              v.stepTitleNavigation && u(i, "click", p),
              r.length && u(r[r.length - 1], "keydown", f),
              s && d && v.validationFunction && u(s, "keydown", a),
              e
            );
          };
        e instanceof Element
          ? i(e)
          : n(e, function (e) {
              return i(e);
            });
      }),
      _defineProperty(this, "_formSubmitHandler", function (e) {
        g._validationFunctionCaller() || e.preventDefault();
      }),
      _defineProperty(this, "resetStepper", function () {
        g.form && (g.form.reset(), g.openStep(g.options.firstActive));
      }),
      _defineProperty(this, "updateStepper", function () {
        var e = g.getSteps,
          t = g._methodsBindingManager,
          n = e().steps;
        t(n, !0), t(n);
      }),
      _defineProperty(this, "_openAction", function (e, t) {
        var n =
            !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
          i = 3 < arguments.length ? arguments[3] : void 0,
          r = g._slideDown,
          s = g.classes,
          o = g.getSteps,
          a = g._closeAction,
          l = g.stepper,
          c = g.events,
          p = g.options,
          d = o().active.step;
        if (d && d.isSameNode(e)) return e;
        var v = e.getElementsByClassName(s.STEPCONTENT)[0];
        return (
          e.classList.remove(s.DONESTEP),
          window.innerWidth < 993 || !l.classList.contains(s.HORIZONTALSTEPPER)
            ? (r(v, s.ACTIVESTEP, e, t),
              i ||
                r(v, s.ACTIVESTEP, e, function () {
                  var e = v.querySelector("input, select, textarea");
                  p.autoFocusInput && e && e.focus(),
                    t && "function" == typeof t && t();
                }))
            : e.classList.add(s.ACTIVESTEP),
          d && n && (a(d), l.dispatchEvent(c.STEPCHANGE)),
          l.dispatchEvent(c.STEPOPEN),
          e
        );
      }),
      _defineProperty(this, "_closeAction", function (e, n) {
        var t = g._slideUp,
          i = g.classes,
          r = g.stepper,
          s = g.events,
          o = g._smartListenerUnbind,
          a = g._smartListenerBind,
          l = e.getElementsByClassName(i.STEPCONTENT)[0];
        if (
          window.innerWidth < 993 ||
          !r.classList.contains(i.HORIZONTALSTEPPER)
        )
          t(l, i.ACTIVESTEP, e, n);
        else {
          if (n) {
            a(l, "transitionend", function e(t) {
              "left" === t.propertyName && (o(l, "transitionend", e), n());
            });
          }
          e.classList.remove(i.ACTIVESTEP);
        }
        return r.dispatchEvent(s.STEPCLOSE), e;
      }),
      _defineProperty(this, "_nextStepProxy", function (e) {
        return g.nextStep(void 0, void 0, e);
      }),
      _defineProperty(this, "_prevStepProxy", function (e) {
        return g.prevStep(void 0, e);
      }),
      _defineProperty(this, "_stepTitleClickHandler", function (e) {
        var t = g.getSteps,
          n = g.classes,
          i = g.nextStep,
          r = g.prevStep,
          s = g.stepper,
          o = g._openAction,
          a = t(),
          l = a.steps,
          c = a.active,
          p = e.target.closest(".".concat(n.STEP));
        if (s.classList.contains(n.LINEAR)) {
          var d = Array.prototype.indexOf.call(l, p);
          d == c.index + 1 ? i() : d == c.index - 1 && r();
        } else o(p);
      }),
      _defineProperty(this, "nextStep", function (e, t, n) {
        n && n.preventDefault && n.preventDefault();
        var i = g.options,
          r = g.getSteps,
          s = g.activateFeedback,
          o = g.form,
          a = g.wrongStep,
          l = g.classes,
          c = g._openAction,
          p = g.stepper,
          d = g.events,
          v = g.destroyFeedback,
          f = g._validationFunctionCaller,
          u = i.showFeedbackPreloader,
          E = i.validationFunction,
          h = r().active,
          y = r().steps[h.index + 1],
          P = n && n.target ? n.target.dataset.feedback : null;
        return E && !f()
          ? a()
          : P && !t
          ? (u && !h.step.dataset.nopreloader && s(),
            void window[P](
              v,
              o,
              h.step.querySelector(".".concat(l.STEPCONTENT))
            ))
          : (h.step.classList.add(l.DONESTEP),
            c(y, e),
            void p.dispatchEvent(d.NEXTSTEP));
      }),
      _defineProperty(this, "prevStep", function (e, t) {
        t && t.preventDefault && t.preventDefault();
        var n = g.getSteps,
          i = g._openAction,
          r = g.stepper,
          s = g.events,
          o = g.destroyFeedback,
          a = n().active,
          l = n().steps[a.index + -1];
        o(), i(l, e), r.dispatchEvent(s.PREVSTEP);
      }),
      _defineProperty(this, "openStep", function (e, t) {
        var n = g.getSteps,
          i = g._openAction,
          r = g.destroyFeedback,
          s = n().steps[e];
        r(), i(s, t);
      }),
      _defineProperty(this, "wrongStep", function () {
        var t = g.getSteps,
          n = g.classes,
          e = g.stepper,
          i = g.events;
        t().active.step.classList.add(n.WRONGSTEP);
        var r = t().active.step.querySelectorAll("input, select, textarea");
        E.addMultipleEventListeners(r, "input", function e() {
          t().active.step.classList.remove(n.WRONGSTEP),
            E.removeMultipleEventListeners(r, "input", e);
        }),
          e.dispatchEvent(i.STEPERROR);
      }),
      _defineProperty(this, "activateFeedback", function () {
        var e = g.getSteps,
          t = g.classes,
          n = g.options,
          i = g.stepper,
          r = g.events,
          s = e().active.step;
        s.classList.add(t.FEEDBACKINGSTEP),
          s
            .getElementsByClassName(t.STEPCONTENT)[0]
            .insertAdjacentHTML(
              "afterBegin",
              '<div class="'
                .concat(t.PRELOADERWRAPPER, '">')
                .concat(n.feedbackPreloader, "</div>")
            ),
          i.dispatchEvent(r.FEEDBACKING);
      }),
      _defineProperty(this, "destroyFeedback", function (e) {
        var t = g.getSteps,
          n = g.classes,
          i = g.nextStep,
          r = g.stepper,
          s = g.events,
          o = t().active.step;
        if (o && o.classList.contains(n.FEEDBACKINGSTEP)) {
          o.classList.remove(n.FEEDBACKINGSTEP);
          var a = o.getElementsByClassName(n.PRELOADERWRAPPER)[0];
          a.parentNode.removeChild(a),
            e && i(void 0, !0),
            r.dispatchEvent(s.FEEDBACKDESTROYED);
        }
      }),
      _defineProperty(this, "getSteps", function () {
        var e = g.stepper,
          t = g.classes,
          n = e.children,
          i = e.querySelector("li.".concat(t.STEP, ".").concat(t.ACTIVESTEP));
        return {
          steps: n,
          active: { step: i, index: Array.prototype.indexOf.call(n, i) },
        };
      }),
      _defineProperty(this, "activateStep", function (e, t) {
        var n = g.getSteps,
          i = g._slideDown,
          r = g.stepper,
          s = g._methodsBindingManager,
          o = E.nodesIterator,
          a = n().steps,
          l = a.length > t,
          c = l ? a[t] : a[a.length - 1],
          p = null;
        if ("string" == typeof e)
          c.insertAdjacentHTML(l ? "beforeBegin" : "afterEnd", e.trim()),
            (p = l ? c.previousSibling : c.nextSibling),
            i(p);
        else if (Array.isArray(e))
          (p = []),
            e.forEach(function (e) {
              c.insertAdjacentHTML(l ? "beforeBegin" : "afterEnd", e.trim());
              var t = l ? c.previousSibling : c.nextSibling;
              p.push(t), i(t);
            });
        else if (
          e instanceof Element ||
          e instanceof HTMLCollection ||
          e instanceof NodeList
        ) {
          var d = l ? r.insertBefore : r.appendChild;
          (p = d(e, c)),
            e instanceof Element
              ? i(p)
              : o(p, function (e) {
                  return i(e);
                });
        }
        return p && s(p), p;
      }),
      _defineProperty(this, "deactivateStep", function (t) {
        var n = g._slideUp,
          i = g.stepper,
          r = g._methodsBindingManager,
          e = E.nodesIterator,
          s = function (e) {
            i.contains(t) &&
              (r(e, !0),
              n(e, void 0, void 0, function () {
                return i.removeChild(e);
              }));
          };
        return (
          t instanceof Element
            ? s(t)
            : (t instanceof HTMLCollection || t instanceof NodeList) &&
              e(t, function (e) {
                return s(e);
              }),
          t
        );
      }),
      _defineProperty(this, "_slideDown", function (n, e) {
        var t =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : n,
          i = 3 < arguments.length ? arguments[3] : void 0,
          r = "".concat(E.getUnknownHeight(n), "px"),
          s = function e(t) {
            "height" === t.propertyName &&
              (g._smartListenerUnbind(n, "transitionend", e),
              E.removeMultipleProperties(
                n,
                "visibility overflow height display"
              ),
              i && i());
          };
        return (
          requestAnimationFrame(function () {
            (n.style.display = "none"),
              requestAnimationFrame(function () {
                (n.style.overflow = "hidden"),
                  (n.style.height = "0"),
                  (n.style.paddingBottom = "0"),
                  (n.style.visibility = "unset"),
                  (n.style.display = "block"),
                  requestAnimationFrame(function () {
                    g._smartListenerBind(n, "transitionend", s),
                      (n.style.height = r),
                      n.style.removeProperty("padding-bottom"),
                      e && t.classList.add(e);
                  });
              });
          }),
          n
        );
      }),
      _defineProperty(this, "_slideUp", function (n, e) {
        var t =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : n,
          i = 3 < arguments.length ? arguments[3] : void 0,
          r = "".concat(n.offsetHeight, "px"),
          s = function e(t) {
            "height" === t.propertyName &&
              (g._smartListenerUnbind(n, "transitionend", e),
              (n.style.display = "none"),
              E.removeMultipleProperties(
                n,
                "visibility overflow height padding-bottom"
              ),
              i && i());
          };
        return (
          requestAnimationFrame(function () {
            (n.style.overflow = "hidden"),
              (n.style.visibility = "unset"),
              (n.style.display = "block"),
              (n.style.height = r),
              requestAnimationFrame(function () {
                g._smartListenerBind(n, "transitionend", s),
                  (n.style.height = "0"),
                  (n.style.paddingBottom = "0"),
                  e && t.classList.remove(e);
              });
          }),
          n
        );
      }),
      _defineProperty(this, "_formWrapperManager", function () {
        var e = g.stepper,
          t = g.options,
          n = e.closest("form");
        if (n || !t.autoFormCreation) return n && n.length ? n : null;
        var i = e.dataset || {},
          r = i.method || "GET",
          s = i.action || "?",
          o = document.createElement("form");
        return (
          (o.method = r),
          (o.action = s),
          e.parentNode.insertBefore(o, e),
          o.appendChild(e),
          o
        );
      }),
      _defineProperty(this, "_validationFunctionCaller", function () {
        var e = g.options,
          t = g.getSteps,
          n = g.form,
          i = g.classes;
        return e.validationFunction(
          n,
          t().active.step.querySelector(".".concat(i.STEPCONTENT))
        );
      }),
      _defineProperty(this, "_smartListenerBind", function (e, t, n) {
        var i =
            !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
          r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
          s = g.listenerStore,
          o = { el: e, event: t, fn: n };
        if (i)
          for (var a = 0; a < s.length; a++) {
            var l = s[a];
            l.event === t &&
              l.el.isSameNode(e) &&
              l.el.removeEventListener(l.event, l.fn),
              r && l.fn();
          }
        else {
          var c = s.indexOf(o);
          if (-1 !== p) {
            var p = s[c];
            p.el.removeEventListener(p.event, p.fn), r && p[c].fn();
          }
        }
        e.addEventListener(t, n), s.push(o);
      }),
      _defineProperty(this, "_smartListenerUnbind", function (e, t, n) {
        var i = g.listenerStore,
          r = i.indexOf({ el: e, event: t, fn: n });
        e.removeEventListener(t, n), i.splice(r, 1);
      }),
      (this.stepper = e),
      (this.options = Object.assign(
        {
          firstActive: 0,
          autoFocusInput: !0,
          showFeedbackPreloader: !0,
          autoFormCreation: !0,
          validationFunction: E.defaultValidationFunction,
          stepTitleNavigation: !0,
          feedbackPreloader:
            '<div class="preloader-wrapper active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div>',
        },
        t
      )),
      (this.classes = {
        HORIZONTALSTEPPER: "horizontal",
        LINEAR: "linear",
        NEXTSTEPBTN: "next-step",
        PREVSTEPBTN: "previous-step",
        STEPTITLE: "step-title",
        STEP: "step",
        STEPCONTENT: "step-content",
        PRELOADERWRAPPER: "wait-feedback",
        FEEDBACKINGSTEP: "feedbacking",
        ACTIVESTEP: "active",
        WRONGSTEP: "wrong",
        DONESTEP: "done",
      }),
      (this.events = {
        STEPCHANGE: new Event("stepchange"),
        STEPOPEN: new Event("stepopen"),
        STEPCLOSE: new Event("stepclose"),
        NEXTSTEP: new Event("nextstep"),
        PREVSTEP: new Event("prevstep"),
        STEPERROR: new Event("steperror"),
        FEEDBACKING: new Event("feedbacking"),
        FEEDBACKDESTROYED: new Event("feedbackdestroyed"),
      }),
      (this.listenerStore = []),
      (this.form = null),
      this._init();
  }
  return (
    _createClass(E, null, [
      {
        key: "addMultipleEventListeners",
        value: function (e, t, n) {
          var i =
            3 < arguments.length && void 0 !== arguments[3] && arguments[3];
          if (e instanceof Element) return e.addEventListener(t, n, i);
          for (var r = 0, s = e.length; r < s; r++)
            e[r].addEventListener(t, n, i);
        },
      },
      {
        key: "removeMultipleEventListeners",
        value: function (e, t, n) {
          var i =
            3 < arguments.length && void 0 !== arguments[3] && arguments[3];
          if (e instanceof Element) return e.removeEventListener(t, n, i);
          for (var r = 0, s = e.length; r < s; r++)
            e[r].removeEventListener(t, n, i);
        },
      },
      {
        key: "removeMultipleProperties",
        value: function (e, t) {
          for (var n = t.split(" "), i = 0; i < n.length; i++)
            e.style.removeProperty(n[i]);
        },
      },
      {
        key: "nodesIterator",
        value: function (e, t) {
          for (var n = 0; n < e.length; n++) t(e[n]);
          return e;
        },
      },
      {
        key: "getUnknownHeight",
        value: function (e) {
          (e.style.position = "fixed"),
            (e.style.display = "block"),
            (e.style.top = "-999999px"),
            (e.style.left = "-999999px"),
            (e.style.height = "auto"),
            (e.style.opacity = "0"),
            (e.style.zIndex = "-999999"),
            (e.style.pointerEvents = "none");
          var t = e.offsetHeight;
          return (
            E.removeMultipleProperties(
              e,
              "position display top left height opacity z-index pointer-events"
            ),
            t
          );
        },
      },
      {
        key: "defaultValidationFunction",
        value: function (e, t) {
          for (
            var n = t.querySelectorAll("input, textarea, select"), i = 0;
            i < n.length;
            i++
          )
            if (!n[i].checkValidity()) return !1;
          return !0;
        },
      },
      {
        key: "tabbingDisabler",
        value: function (e) {
          9 === e.keyCode && e.preventDefault();
        },
      },
    ]),
    E
  );
})();
window.Element &&
  !Element.prototype.closest &&
  (Element.prototype.closest = function (e) {
    var t,
      n = (this.document || this.ownerDocument).querySelectorAll(e),
      i = this;
    do {
      for (t = n.length; 0 <= --t && n.item(t) !== i; );
    } while (t < 0 && (i = i.parentElement));
    return i;
  }),
  "function" != typeof Object.assign &&
    Object.defineProperty(Object, "assign", {
      value: function (e, t) {
        if (null == e)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(e), i = 1; i < arguments.length; i++) {
          var r = arguments[i];
          if (null != r)
            for (var s in r)
              Object.prototype.hasOwnProperty.call(r, s) && (n[s] = r[s]);
        }
        return n;
      },
      writable: !0,
      configurable: !0,
    });
