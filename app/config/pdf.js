'use strict';

class Option {
  constructor(maxAge, surrogateKey_1, surrogateKey_2) {
    this.root = `${__dirname.slice(0, -10)}public/assets/`,
    this.headers = {
      'Cache-Control': 'public, no-cache',
      'Surrogate-Control': `max-age=${maxAge} stale-if-error=120 stale-while-revalidate=30`,
      'Surrogate-Key': `${surrogateKey_1}${surrogateKey_2}`
    }
  }
}

module.exports = {
  resume: new Option('31557600000', 'resume', ''),
  certificate_1: new Option('31557600000', 'certificate', ' certificate_1'),
  certificate_2: new Option('31557600000', 'certificate', ' certificate_2'),
  certificate_3: new Option('10', 'certificate', ' certificate_3')
};
