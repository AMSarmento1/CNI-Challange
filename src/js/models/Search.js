import { key } from '../config';

export default class Search {
  constructor(query = '') {
    this.endPoint = 'v2/top-headlines/';
    this.query = query ? `country=gb&q=${query}` : `country=gb`;
  }

  async getNews() {
    const fullUrl = `https://newsapi.org/${this.endPoint}` +
                    `?${this.query}&` +
                    `apiKey=${key}`;
    const req = new Request(fullUrl);
    try {
      const result = await fetch(req);
      const data = await result.json();
      this.resutls =  data.articles;
    } catch {
      error => console.log(error);
    }
  }

}
