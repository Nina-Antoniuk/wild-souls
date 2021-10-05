import refs from './refs';


export function buttonClikHandler() {
  refs.mobileMenu.classList.remove('is-hidden');
  refs.closeMobileMenuBtn.addEventListener('click', closeMobileMenu)
}

function closeMobileMenu() {
  refs.mobileMenu.classList.add('is-hidden');
  refs.closeMobileMenuBtn.removeEventListener('click', closeMobileMenu)
}