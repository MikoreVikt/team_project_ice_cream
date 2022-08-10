(() => {
  const prod = {
    openProdBtn: document.querySelector('.products__open'),
    closeProdBtn: document.querySelector('.products__close'),
    front: document.querySelector('.products__front'),
    back: document.querySelector('.products__back'),
  };
  prod.openProdBtn.addEventListener('click', toggleProd);
  prod.closeProdBtn.addEventListener('click', toggleProd);
  function toggleProd() {
    prod.front.classList.toggle('rotate');
    prod.back.classList.toggle('is-rotate');
  }
})();
