const fetch = require("node-fetch");
const apiKey = process.env.NEWS_SERVICE_API_KEY;

module.exports = async (query) => {
  const tag = query.tag || "bitcoin" 
  const articles = await fetch(`https://newsapi.org/v2/everything?q=${tag}&from=2019-12-30&sortBy=publishedAt&apiKey=${apiKey}`)
  .then(res => {
    return res.json();
  })
  .then(res => res.articles);
  return articles
}