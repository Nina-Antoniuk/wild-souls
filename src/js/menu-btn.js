import refs from './refs';

export function buttonClikHandler() {
  showMenu();
  hideBody();
  refs.mobileMenu.addEventListener('click', closeMobileMenu)
  refs.closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
  hideMenu();
  showBody();
  refs.closeMobileMenuBtn.removeEventListener('click', closeMobileMenu)
}

function showBody() {
  refs.body.classList.remove('hidden');
}

function hideBody() {
  refs.body.classList.add('hidden');
}

function showMenu() {
  refs.mobileMenu.classList.remove('is-hidden');
}

function hideMenu() {
  refs.mobileMenu.classList.add('is-hidden');
}


