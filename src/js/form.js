import refs from './refs';

export function opensBackdrop() {
  refs.formCloseBtn = document.querySelector('.backdrop__close-btn');
  refs.backdropEl.classList.remove('is-hidden');
  window.addEventListener('keydown', closeBackdropByEsc);
  refs.backdropEl.addEventListener('click', closeBackdropByClick);
  refs.formCloseBtn.addEventListener('click', closesBackdrop);
}

function closesBackdrop() {
  refs.formCloseBtn.removeEventListener('click', closesBackdrop);
  refs.backdropEl.removeEventListener('click', closeBackdropByClick);
  window.removeEventListener('keydown', closeBackdropByEsc);
  refs.backdropEl.classList.add('is-hidden');
}

function closeBackdropByEsc(e) {
  if (e.key === 'Escape') {
    closesBackdrop();
  }
}

function closeBackdropByClick(e) {
  const condition = [...e.target.classList].includes('backdrop')
    if (condition) { 
      closesBackdrop();
    }
}

export function formSubmitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  return formData;
}