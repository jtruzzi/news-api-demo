import { getTopHeadlines, getArticlesByCategory } from "../api/articles";

describe("API", () => {
  it("Test that getTopHeadlines returns results", async () => {
    process.env.REACT_APP_USE_MOCKS = true;
    const results = await getTopHeadlines();
    expect(results.articles.length).toBe(20);
  });

  it("Test that getArticlesByCategory returns results", async () => {
    process.env.REACT_APP_USE_MOCKS = true;
    const results = await getArticlesByCategory("health");
    expect(results.articles.length).toBe(20);
  });
});
