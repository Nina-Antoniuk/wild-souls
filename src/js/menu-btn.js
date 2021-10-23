import refs from './refs';

export function buttonClikHandler() {
  toggleMenu();
  toggleBody();
  refs.mobileMenu.addEventListener('click', closeMobileMenu)
  refs.closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
  toggleMenu();
  toggleBody();
  refs.closeMobileMenuBtn.removeEventListener('click', closeMobileMenu)
}

function toggleBody() {
  refs.body.classList.toggle('hidden');
}

function toggleMenu() {
  refs.mobileMenu.classList.toggle('is-hidden');
}
