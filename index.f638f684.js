!function(){var e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),n=document.getElementsByClassName("mobile-menu-nav__link"),o=document.body;e.addEventListener("click",c);for(var l=0;l<n.length;l++)n[l].addEventListener("click",c);function c(){var n="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),o.classList.toggle("no-scroll")}}(),mybutton=document.getElementById("myBtn"),window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?mybutton.style.display="block":mybutton.style.display="none"},document.querySelectorAll('a[href^="#"]').forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}));
//# sourceMappingURL=index.f638f684.js.map