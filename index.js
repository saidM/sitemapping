const axios = require('axios');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

const urls = async (sitemap) => {
  const { data } = await axios.get(sitemap);
  const data2 = await parser.parseStringPromise(data);
  const list = data2.urlset.url.map(x => x.loc[0]);
  return list;
};

const main = async (sitemapURL) => {
  const { data } = await axios.get(sitemapURL);
  const sitemap = await parser.parseStringPromise(data);
  if (typeof sitemap.urlset === 'undefined') {
    const allURLs = [];
    const sitemaps = sitemap.sitemapindex.sitemap.map(x => x.loc[0]);
    for (const individualSitemap of sitemaps) {
      const newURLs = await urls(individualSitemap);
      allURLs.push(newURLs);
    }
    return allURLs.flat();
  } else {
    return urls(sitemapURL);
  }
};

(async() => {
  const urls = await main('https://happymining.fr/sitemap.xml');
  process.exit();
})();
