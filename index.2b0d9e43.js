const t=tns({container:".customer__cards",slideBy:"page",controls:!1,nav:!1,touch:!1,loop:!0,autoplayButton:!1,autoplayButtonOutput:!1,autoplay:!1}),n=document.getElementsByClassName("button__item");function e(n,e,l){t.goTo(e);for(let t=0;t<n.length;t++)t==e?o(n[t],l):u(n[t])}function o(t,n){t.classList.add("button__current"),t.innerHTML=n}function u(t){t.classList.remove("button__current"),t.innerHTML=""}if(null!=n&&n.length>0){let t=document.getElementsByClassName("button__current")[0].innerHTML;for(let o=0;o<n.length;o++)n[o].addEventListener("click",(function(){e(n,o,t)}))}
//# sourceMappingURL=index.2b0d9e43.js.map
