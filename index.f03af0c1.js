(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.getElementsByClassName("mobile-menu-nav__link");e.addEventListener("click",a);for(let e=0;e<n.length;e++)n[e].addEventListener("click",a);function a(){const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open")}})();
//# sourceMappingURL=index.f03af0c1.js.map