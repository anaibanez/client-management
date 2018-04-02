const Address = require('./address');
const Company = require('./company');

class Client {

  constructor(
      { id = 0, name = '', username = '', email = '', phone = '',
        website = '', address = {}, company = {} }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;

    this.address = new Address(address);
    this.company = new Company(company);
  }

}

module.exports = Client;
