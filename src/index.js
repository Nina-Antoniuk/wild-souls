import './sass/main.scss';
import refs from './js/refs';
import { buttonClikHandler } from './js/menu-btn';
import { opensBackdrop, formSubmitHandler } from './js/form';

refs.menuBtn.addEventListener('click', buttonClikHandler);

refs.form.addEventListener('submit', formSubmitHandler);
refs. mobileLoginEl.addEventListener('click', opensBackdrop);
refs.loginEl.addEventListener('click', opensBackdrop);