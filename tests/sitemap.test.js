const sitemap = require('../index');

describe('sitemap.js', () => {
  describe('when invalid url', () => {
    it('rejects', () => {
      return expect(sitemap('https://google.com/foo')).rejects.toThrow('Request failed with status code 404');
    });
  });
  describe('when valid sitemap', () => {
    it('resolves with urls', async () => {
      const urls = await sitemap('https://happymining.fr/sitemap_pages_1.xml');
      expect(urls).toEqual(expect.arrayContaining(['https://happymining.fr/pages/cgv-mentions-legales']));
      expect(urls).toEqual(expect.not.arrayContaining(['https://happymining.fr/blogs/infos']));
    });
  });
  describe('when sitemap is a list of sitemaps', () => {
    it('resolves with all urls', async () => {
      const urls = await sitemap('https://happymining.fr/sitemap.xml');
      expect(urls).toEqual(expect.arrayContaining([
        'https://happymining.fr/pages/cgv-mentions-legales',
        'https://happymining.fr/blogs/infos'
      ]));
    });
  });
});
