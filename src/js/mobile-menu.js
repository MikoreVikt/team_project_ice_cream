(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const linksRef = document.getElementsByClassName('mobile-menu-nav__link');
  const bodyRef = document.body;
  menuBtnRef.addEventListener('click', openCloseMenu);

  for (let i = 0; i < linksRef.length; i++) {
    linksRef[i].addEventListener('click', openCloseMenu);
  }

  function openCloseMenu() {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    bodyRef.classList.toggle('no-scroll');
  }
})();
