const form = require('../src/index');

describe('form(url, id)', () => {
  it('shoud return a response well formed', () =>
    form('https://www.google.com/', 'tsf').then((received) => {
      expect(received).toBeDefined();
      for (let i = 0; i < received.length; i += 1) {
        expect(received[i]).toHaveProperty('name');
        expect(received[i]).toHaveProperty('value');
        expect(typeof received[i].name).toBe('string');
        expect(typeof received[i].value).toBe('string');
      }
    }));
});
