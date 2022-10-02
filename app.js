const cards = [
    {
        id: 1,
        img: 'images/tariffs/tariffs-img-wordpress.svg',
        title: 'WordPress-хостинг',
        text: 'Ідеальний для блогів і не тільки',
        price: 187.96,
        btnTxt: 'Хочу'
    },
    {
        id: 2,
        img: 'images/tariffs/tariffs-img-virtual-hosting.svg',
        title: 'Віртуальний хостинг',
        text: 'Підходить для найрізноманітніших сайтів',
        price: 180.01,
        btnTxt: 'Хочу'
    },
    {
        id: 3,
        img: 'images/tariffs/tariffs-img-cloud-hosting.svg',
        title: 'Хмарний хостинг',
        text: 'Безвідмовний хостинг для успішних проектів',
        price: 294.52,
        btnTxt: 'Хочу'
    },
];




document.querySelector('.header__burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
})


const tariffsCardsContainer = document.querySelector('.tariffs__csrds');

function renderTariffCards(cards) {
    for (const card of cards) {
        tariffsCardsContainer.innerHTML += '';
        tariffsCardsContainer.innerHTML += `
        <div class="tariffs__card">
        <div class="tariffs__card-img">
            <img src="${card.img}" alt="${card.title}">
        </div>
        <h3 class="tariffs__card-title">
            ${card.title}
        </h3>
        <p class="tariffs__card-text">
            ${card.text}
        </p>
        <p class="tariffs__card-price">
            від ${card.price} грн. на місяць
        </p>
        <a href="#" class="btn tariffs__btn">${card.btnTxt}</a>
    </div>`
    }
}

renderTariffCards(cards);