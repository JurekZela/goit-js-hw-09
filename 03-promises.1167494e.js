var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector(".form");i.addEventListener("submit",(function(e){e.preventDefault();const n=parseInt(i.querySelector("[name='delay']").value),t=parseInt(i.querySelector("[name='step']").value),o=parseInt(i.querySelector("[name='amount']").value);function l(e,n){return new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}for(let e=1;e<=o;e+=1){l(e,n+(e-1)*t).then((({position:e,delay:n})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)}))}}));
//# sourceMappingURL=03-promises.1167494e.js.map
