const url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=b0618ebaff294edeaa8e211a293398ac';

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
