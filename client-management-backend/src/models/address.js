const Geo = require('./geo');

class Address {

  constructor({ street = '', suite = '', city = '', zipcode = '', geo = {} }) {
    this.street = street;
    this.suite = suite;
    this.city = city;
    this.zipcode = zipcode;

    this.geo = new Geo(geo);
  }

}

module.exports = Address;
