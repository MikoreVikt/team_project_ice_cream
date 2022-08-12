(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-body]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

var modalmap = document.getElementById('modalmap');
var btnopenmap = document.getElementById('map-btn');
var btnclosemap = document.getElementsByClassName('map-close-btn')[0];
var modalfranchise = document.getElementById('modalfranchise');
var btnopenfranchise = document.getElementById('franchise-btn');
var btnclosefranchise = document.getElementsByClassName(
  'franchise-close-btn'
)[0];
btnopenmap.onclick = function () {
  modalmap.style.display = 'block';
};
btnclosemap.onclick = function () {
  modalmap.style.display = 'none';
};
btnopenfranchise.onclick = function () {
  modalfranchise.style.display = 'block';
};
btnclosefranchise.onclick = function () {
  modalfranchise.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target.matches('#modalmap')) {
    modalmap.style.display = 'none';
  }
  if (event.target.matches('#modalfranchise')) {
    modalfranchise.style.display = 'none';
  }
};
