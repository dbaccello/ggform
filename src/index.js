const fetch = require('node-fetch');
const cheerio = require('cheerio');

// <input value="eXifXqOCPYKLlwS1zIrgDA" name="ei" type="hidden">

const form = (url, selector) => {
  const options = {
    method: 'GET',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36',
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
    },
  };

  return fetch(url, options)
    .then((response) => response.text())
    .then((content) => {
      const $ = cheerio.load(content);
      const query = $(selector).serializeArray();
      return query;
    });
};

module.exports = form;
