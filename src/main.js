import { findPhotoByRequst } from './js/pixabay-api.js';
import { createGalleryItemMarcup } from './js/render-functions.js';

const searchFormEl = document.querySelector('.search-form');
// console.log(searchFormEl);
// const galleryEl = document.querySelector('.js-gallery');
// console.dir(inputEl);
// const searchBtnEl = document.querySelector('.js-btn');
// console.log(searchBtnEl);

function onSearchFormSubmit(event) {
    event.preventDefault();
    const searchReqest = event.target.elements.searchQuery.value;
};

searchFormEl.addEventListener('submit', onSearchFormSubmit)