!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1,console.log("Start")})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0,console.log("Stop")}))}();
//# sourceMappingURL=01-color-switcher.414df325.js.map
