import { findPhotoByRequst } from './js/pixabay-api.js';
import { createGalleryItemMarcup } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.search-form');
// console.log(searchFormEl);
const galleryEl = document.querySelector('.js-gallery');
// console.dir(inputEl);
// const searchBtnEl = document.querySelector('.js-btn');
// console.log(searchBtnEl);

searchFormEl.reset();

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchReqest = event.target.elements.searchQuery.value.trim();
  console.log(searchReqest);
  searchFormEl.reset();

  //   if (searchReqest === ' ') {
  //     iziToast.show({
  //       message:
  //         'Sorry, there are no images matching your search query. Please try again!',
  //       position: 'topRight',
  //     });
  //   }

  findPhotoByRequst(searchReqest).then(imagesData => {
    galleryEl.innerHTML = createGalleryItemMarcup(imagesData.hits);
  });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
