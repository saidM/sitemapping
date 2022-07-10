# Sitemapping

Sitemapping is a powerful yet simple sitemap parser.
It is able to parse a sitemap containing urls of pages, or urls of other sitemaps as well.

## Installation

```javascript
npm install sitemapping
```

## Usage 1; sitemap containing url to pages

```javascript
(async() => {
  const sitemapping = require('sitemapping');
  const urls = await sitemapping('https://baremetrics.com/podcast-sitemap.xml');
  console.log(urls[0]); // https://baremetrics.com/founder-chats/john-sheehan
})();
```

## Usage 1; sitemap containing url to other sitemaps

```javascript
(async() => {
  const sitemapping = require('sitemapping');
  const urls = await sitemapping('https://baremetrics.com/sitemap.xml');
  console.log(urls[0]); // https://baremetrics.com/academy/3-places-to-find-customers-for-your-business
})();
```

## Licence

MIT
