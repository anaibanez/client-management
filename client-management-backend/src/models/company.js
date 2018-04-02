/**
 * Company model
 */
class Company {

  constructor({ name = '', catchPhrase = '', bs = '' }) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.bs = bs;
  }
}

module.exports = Company;
