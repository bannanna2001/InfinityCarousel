'use strict'

let items = document.querySelectorAll('.carousel__item');
let arrowBack = document.querySelector('.arrow-back');
let arrowNext = document.querySelector('.arrow-next');

let itemCount = 5;
let startItem = 0;
let endItem = itemCount - 1;

let firstElem = 0;

for (let i = 0; i < items.length; i++) {
    items[i].style.order = 1;
    if (i > itemCount - 1) {
        items[i].classList.add('hidden');
    }
}

arrowBack.addEventListener('click', () => {
    if (endItem === items.length - 1)
        endItem = 0;
    else
        endItem++;

    items[firstElem].classList.toggle('hidden');

    if (firstElem >= items.length - itemCount)
        items[endItem].style.order = itemCount + 1;
    else
        items[endItem].style.order = itemCount;

    items[endItem].classList.toggle('hidden');

    firstElem++;

    if (firstElem === items.length) {
        firstElem = 0;
        for (let i = 0; i < itemCount + 1; i++) {
            items[i].style.order = 1;
        }
    }
});

arrowNext.addEventListener('click', () => {
    if (firstElem === 0) {
        firstElem = items.length - 1;
        for (let i = 0; i < itemCount + 1; i++) {
            items[i].style.order = 2;
        }
    } else {
        firstElem--;
    }

    items[endItem].classList.toggle('hidden');
    items[firstElem].style.order = 1;
    items[firstElem].classList.toggle('hidden');

    if (endItem === 0) {
        endItem = items.length - 1;
    } else
        endItem--;

});