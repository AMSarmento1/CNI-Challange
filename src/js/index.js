import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

const state = {};
const searchController  = async () => {
  const query = searchView.getInput();

    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();
    
    renderLoader(elements.searchLoader);

    await state.search.getNews();

    clearLoader();
    searchView.renderResults(state.search.resutls);

}
elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  searchController();
})

window.addEventListener('load', searchController);