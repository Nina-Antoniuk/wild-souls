const nutsList = [
  {
    name: 'Almond',
    title: 'Roasted Almond',
    bg: '#a5483d',
    description: 'Roasted Almond. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '5.00',
    image: 'https://down.imgspng.com/download/0720/almond_PNG57.png',
    alt: 'big almond'
  }, {
    name: 'Hazelnut',
    title: 'Tasty Hazelnut',
    bg: '#72a080',
    description: 'Hazelnut. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '6.00',
    image: '',
    alt: 'big hazelnut'
  },
  {
    name: 'Peanut',
    title: 'Goold Peanut',
    bg: '#abafd6',
    description: 'Peanut. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '3.00',
    image: '../images/nuts/peanuts/peanuts.png',
    alt: 'peanuts'
  }, {
    name: 'Sesame',
    title: 'Treasure Sesame',
    bg: '#daad8f',
    description: 'Sesame. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '5.00',
    image: '',
    alt: 'sesame'
  },
  {
    name: 'Cashew',
    title: 'The Great Cashew',
    bg: '#fecf6b',
    description: 'Cashew. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '4.00',
    image: '../images/nuts/cashew/cashew.png',
    alt: 'cashew'
  }
]


const nutsListEl = document.querySelector('#nuts-list-js');
const descriptionCardEl = document.querySelector('#description-card-js');



nutsListEl.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') {
    return
  }
  return nutsList.map(el => {
    if (e.target.textContent === el.name) {
      makeMarkupDescriptionCard(el);
      changeBg(el);
    }
  })
})

function makeMarkupDescriptionCard(el) {
  descriptionCardEl.innerHTML = `<div class="description-card__content">
          <h3 class="description-card__title">${el.title}</h3>
          <p>
            ${el.description}
            <span class="description-card__price">250G | ${el.price}</span>
          </p>

          <div class="nuts__btn button-container">
            <span class="mas">Taste it!</span>
            <button class="content-button" type="button">Taste it!</button>
          </div>
        </div>

        <div class="description-card__img-wrapp">
           <img loading="lazy" src="${el.image}" alt="almond" />
        </div>
      </div>`;
}


function changeBg(el) {
  const imageBgEL = document.querySelector('.description-card__img-wrapp');
      imageBgEL.style.backgroundColor = el.bg;
}
