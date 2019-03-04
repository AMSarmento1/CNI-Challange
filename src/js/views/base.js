export const elements = {
  searchForm: document.getElementById('searchForm'),
  searchInput: document.getElementById('searchField'),
  searchLoader: document.getElementById('newsContainer'),
  resultsList: document.getElementById('newsList')
}

export const elementsSrt = {
  loader: 'loader'
}

export const renderLoader = parent => {
  const loader = `
    <div id="${elementsSrt.loader}" class="loader">
      <i class="fas fa-spinner"></i>
    </div>
  `
  parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
  const loader = document.getElementById(elementsSrt.loader);
  if (loader) loader.parentElement.removeChild(loader);
}