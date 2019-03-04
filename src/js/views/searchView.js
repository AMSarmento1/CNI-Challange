import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = '';
};

export const clearResults = () => {
  elements.resultsList.innerHTML = '';
}

const headLines = headLine => {
  const event = new Date(headLine.publishedAt);
  const markup = `
    <li class="news__item">
      <a class="news__link" target="_blank" href="${headLine.url}">
          <figure class="news__fig">
              <img class="news__image" src="${headLine.urlToImage}" alt="${headLine.title}">
          </figure>
          <div class="news__data">
              <h4 class="news__name">${headLine.title}</h4>
              <p class="news__description">${headLine.description}</p>
              <p class="news__author">${headLine.author}</p>
              <strong class="news__date">${event.toDateString()}</strong>
          </div>
      </a>
    </li>
  `;
  elements.resultsList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = resutls => {
  resutls.forEach(headLines);
}