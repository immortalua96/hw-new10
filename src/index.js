import './css/styles.css';
import { fetchBreeds } from './js/fetchBreeds';
import { breadSelect } from './js/breadSelect';
import { refs } from './js/refs';
import { fetchCatByBreed } from './js/cat-api';
import { markupOneCat } from './js/markupOneCat';
fetchBreeds('cat').then(breadSelect).then(fillOption);
refs.breedSelect.addEventListener('change', selectCatByBreed);

function selectCatByBreed(evt) {
  evt.preventDefault();
  const breedId = refs.breedSelect.value;

  const markup = fetchCatByBreed(breedId).then(markupOneCat).then(fillOneCat);
}

function fillOneCat(markup) {
  refs.catInfo.innerHTML = markup;
}
function fillOption(markup) {
  refs.breedSelect.insertAdjacentHTML('beforeend', markup);
}
