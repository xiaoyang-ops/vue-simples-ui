import { openBlock as c, createElementBlock as l, normalizeClass as u, renderSlot as i, ref as d, createElementVNode as f } from "vue";
const a = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
}, _ = {
  name: "Button",
  props: {
    type: {
      type: String,
      default: ""
    }
  }
};
function m(e, t, o, n, r, p) {
  return c(), l("button", {
    class: u(["btn", o.type || "default"]),
    onClick: t[0] || (t[0] = (S) => e.$emit("click"))
  }, [
    i(e.$slots, "default")
  ], 2);
}
const y = /* @__PURE__ */ a(_, [["render", m]]), v = {
  name: "Video",
  props: {
    src: {
      type: String,
      required: !0
    },
    poster: {
      type: String,
      default: ""
    }
  },
  setup() {
    const e = d(null);
    return {
      videoElement: e,
      play: () => {
        e.value && e.value.play();
      },
      pause: () => {
        e.value && e.value.pause();
      }
    };
  }
}, $ = { class: "video-wrapper" }, b = ["src", "poster"];
function g(e, t, o, n, r, p) {
  return c(), l("div", $, [
    f("video", {
      ref: "videoElement",
      src: o.src,
      poster: o.poster,
      controls: ""
    }, null, 8, b)
  ]);
}
const k = /* @__PURE__ */ a(v, [["render", g]]), s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: y,
  Video: k
}, Symbol.toStringTag, { value: "Module" })), B = {
  install(e) {
    Object.keys(s).forEach((t) => {
      e.component(t, s[t]);
    });
  }
};
export {
  y as Button,
  k as Video,
  B as default
};
