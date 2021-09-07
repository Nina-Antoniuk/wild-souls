const backdropEl = document.querySelector('.backdrop');
const loginEl = document.querySelector('.login-btn');


loginEl.addEventListener('click', opensBackdrop);

function opensBackdrop() {
  backdropEl.classList.remove('is-hidden');
  document.body.classList.add('hidden');
  
  const formCloseBtn = document.querySelector('.backdrop__close-btn');
  formCloseBtn.addEventListener('click', closesBackdrop);
}

function closesBackdrop() {
    backdropEl.classList.add('is-hidden');
  document.body.classList.remove('hidden');
  formCloseBtn.removeEventListener('click', closesBackdrop);
}
  
//addprevent defoult for form

// function formSubmitHandler(e) {
//   e.preventDefault();
//   const formData = new FormData(e.currentTarget);
    
//   console.log(formData);
  
//   formData.forEach((x, y) => {
//     console.log('x', x);
//     console.log('y', y);
//   })
 
// }