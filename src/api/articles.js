export const getTopHeadlines = async () => {
  if (process.env.REACT_APP_USE_MOCKS) return require("./mocks/articles.json");

  const response = await fetch(
    `${
      process.env.REACT_APP_NEWS_API_BASE_URL
    }/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to get top headlines");
};

export const getArticlesByCategory = async category => {
  if (process.env.REACT_APP_USE_MOCKS) return require("./mocks/headlines.json");

  const response = await fetch(
    `${
      process.env.REACT_APP_NEWS_API_BASE_URL
    }/everything?q=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
  );
  if (response.ok) {
    return response.json();
  }
  throw new Error("Failed to get top headlines");
};
