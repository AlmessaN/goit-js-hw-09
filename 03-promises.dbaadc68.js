function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("eWCmQ");const l=document.querySelector(".form");function u(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}document.querySelector("button[type = submit]").addEventListener("click",(function(o){o.preventDefault();let t=Number(document.querySelector("input[name = delay]").value);const n=Number(document.querySelector("input[name = step]").value),r=Number(document.querySelector("input[name = amount]").value);for(let o=1;o<=r;o+=1)u(o,t).then((({position:o,delay:t})=>{console.log(`✅ Fulfilled promise ${o} in ${t}ms`),e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{console.log(`❌ Rejected promise ${o} in ${t}ms`),e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)})),t+=n;setTimeout((()=>{l.reset()}),2*t)}));
//# sourceMappingURL=03-promises.dbaadc68.js.map