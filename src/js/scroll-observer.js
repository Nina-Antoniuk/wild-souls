const aboutSectionEl = document.querySelector(".about");
const aboutImageWrappEl = document.querySelector('.about__image-wrapp');

const handleObserver = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutImageWrappEl.classList.add('decoration');
    } 
  });
};

const watcher = new IntersectionObserver(handleObserver, { threshold: 0.2 });
watcher.observe(aboutSectionEl);


const storeSectionEl = document.querySelector('.store');
const storeImageWrappEl = document.querySelector('.store__img-wrapp');

const storeHandler = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      storeImageWrappEl.classList.add('decoration');
    } 
  })
}

const storeWatcher = new IntersectionObserver(storeHandler, { threshold: 0.4 });
storeWatcher.observe(storeSectionEl);

const treasuresSectionEl = document.querySelector('.treasures');
const treasuresImageWrappEl = document.querySelector('.treasures__img-wrapp');

function treasuresHandler(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      treasuresImageWrappEl.classList.add('decoration');
    }
  })
}

const treasuresWatcher = new IntersectionObserver(treasuresHandler, { threshold: 0.4 });
treasuresWatcher.observe(treasuresSectionEl);