(()=>{const e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.getElementsByClassName("mobile-menu-nav__link"),o=document.body;e.addEventListener("click",l);for(let e=0;e<n.length;e++)n[e].addEventListener("click",l);function l(){const n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),o.classList.toggle("no-scroll")}})(),mybutton=document.getElementById("myBtn"),window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?mybutton.style.display="block":mybutton.style.display="none"},document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}));
//# sourceMappingURL=index.4562473d.js.map
