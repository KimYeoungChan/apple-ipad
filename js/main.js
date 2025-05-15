// 장바구니니
const basketStarterEl = document.querySelector('header .basket-starter');
const basketEl = basketStarterEl.querySelector('.basket');

basketStarterEl.addEventListener('click', function (event) {
    event.stopPropagation();
    if (basketEl.classList.contains('show')) {
        // hide
        hideBasket();
    } else {
        // show
        showBasket();
    }
});

basketEl.addEventListener('click', function (event) {
    event.stopPropagation();
});

window.addEventListener('click', function () {
    hideBasket();
});

function showBasket() {
    basketEl.classList.add('show');
};

function hideBasket() {
    basketEl.classList.remove('show');
};

// 검색
const headerEl = document.querySelector('header');
const searchWrapEl = document.querySelector('.search-wrap');
const searchStarterEl = document.querySelector('.search-starter');
const searchCloserEl = document.querySelector('.search-closer');
const searchShadowEl = document.querySelector('.shadow');

searchStarterEl.addEventListener('click', showSearch);
searchCloserEl.addEventListener('click', hideSearch);
searchShadowEl.addEventListener('click', hideSearch);

function showSearch() {
    headerEl.classList.add("searching");
}

function hideSearch() {
    headerEl.classList.remove("searching");
}