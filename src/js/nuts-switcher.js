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
    bg: '#fecf6b',
    description: 'Hazelnut. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '6.00',
    image: 'https://www.nutella.com/bc/sites/nutella20_bc/files/styles/scale_width_475/public/2020-07/hazelnut-single.png?t=1628857953',
    alt: 'big hazelnut'
  },
  {
    name: 'Peanut',
    title: 'Goold Peanut',
    bg: '#abafd6',
    description: 'Peanut. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '3.00',
    image: 'http://pngimg.com/uploads/peanut/peanut_PNG3.png',
    alt: 'peanuts'
  }, {
    name: 'Sesame',
    title: 'Treasure Sesame',
    bg: '#839c3e',
    description: 'Sesame. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '5.00',
    image: 'https://terrabites.eu/sites/default/files/images/2019-05/Sesame5.png',
    alt: 'sesame'
  },
  {
    name: 'Cashew',
    title: 'The Great Cashew',
    bg: '#72a080',
    description: 'Cashew. All the treasures are hidden in a chest. Respectively, our treasures are enclosed intheir Wild shell.',
    price: '4.00',
    image: 'https://pngimg.com/uploads/cashew/cashew_PNG21.png',
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
           <img class="img" loading="lazy" src="${el.image}" alt=${el.name} />
        </div>
      </div>`;
}


function changeBg(el) {
  const imageBgEL = document.querySelector('.description-card__img-wrapp');
      imageBgEL.style.backgroundColor = el.bg;
}
