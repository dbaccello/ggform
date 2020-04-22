const fetch = require('node-fetch');
const cheerio = require('cheerio');

// <input value="eXifXqOCPYKLlwS1zIrgDA" name="ei" type="hidden">

const form = (url, id) => {
  const options = {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0',
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
    },
  };

  return fetch(url, options)
    .then((response) => response.text())
    .then((content) => {
      const $ = cheerio.load(content);
      const query = $(`.${id}`).serializeArray();
      return query;
    });
};

module.exports = form;
