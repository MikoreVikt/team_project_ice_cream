(() => {
  const prod = {
    openProdBtn: document.getElementsByClassName('products__open'),
    closeProdBtn: document.getElementsByClassName('products__close'),
    front: document.getElementsByClassName('products__front'),
    back: document.getElementsByClassName('products__back'),
    icon: document.getElementsByClassName('products__icon'),
  };
  for (let i = 0; i < prod.openProdBtn.length; i++) {
    prod.openProdBtn[i].addEventListener('click', function () {
      toggleProd(i);
    });
    prod.closeProdBtn[i].addEventListener('click', function () {
      toggleProd(i);
    });
  }
  function toggleProd(elemntIndex) {
    prod.front[elemntIndex].classList.toggle('rotate');
    prod.back[elemntIndex].classList.toggle('is-rotate');
    prod.icon[2 * elemntIndex + 1].style.transform = 'rotate(270deg)';
  }
})();
