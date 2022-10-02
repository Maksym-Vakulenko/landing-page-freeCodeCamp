(async function () {
    document.querySelector('.header__burger').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('.menu').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    });
    
    const response = await fetch('api/tariffCards.json');
    const tariffCards = await response.json();
    
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
    
    renderTariffCards(tariffCards);
})();