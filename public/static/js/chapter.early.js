function e(){var e=document.querySelector("body"),t=document.querySelector("#invert-colors-toggle");if(t){var c,o=function(t){!0===t?e.classList.add("invert-colors"):e.classList.remove("invert-colors"),function(e){var t={invertedColors:e};localStorage.setItem("colors-theme-state",JSON.stringify(t))}(t)},s=!(!(c=JSON.parse(localStorage.getItem("colors-theme-state")))||!c.invertedColors)&&c.invertedColors;o(s),!0===s&&(t.checked=!0),t.addEventListener("change",(function(){t.checked?o(!0):o(!1)}))}}function t(){e(),document.body.classList.remove("loading-page"),function(){var e=document.querySelector(".wrapper"),t=document.querySelector("#left-menu-toggle"),c=document.querySelector("#right-menu-toggle"),o=document.querySelector(".left-menu"),s=document.querySelector(".right-menu");function n(c){o&&(!0===c?(t.checked=!0,r(!1),o.classList.add("show"),e.classList.add("fade")):(t.checked=!1,o.classList.remove("show"),e.classList.remove("fade")))}function r(t){!0===t?(c.checked=!0,n(!1),s.classList.add("show"),e.classList.add("fade")):(c.checked=!1,s.classList.remove("show"),e.classList.remove("fade"))}o||t.labels[0].classList.add("hide"),t.addEventListener("click",(function(){n(t.checked)})),c.addEventListener("click",(function(){r(c.checked)})),e.addEventListener("click",(function(){n(!1),r(!1)}))}()}export{t as setupChapterEarly};
//# sourceMappingURL=chapter.early.js.map