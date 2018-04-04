const jsonfile = require('jsonfile');
const logger = require('../config/logger');
const Client = require('../models/client');
const APIError = require('../models/error');
const httpStatus = require('http-status');

const DATA_FILE_LOCATION = './initial_data.json';

class ClientDAO {

  constructor(data = []) {
    this.data = data;
    this.maxId = 0;
  }

  setData(data = []) {
    this.data = data.map((item) => {
      const c = new Client(item);
      if (c.id > this.maxId) {
        this.maxId = c.id;
      }
      return c;
    });
  }

  /**
   * Loads the initial data file
   */
  load(callback) {
    jsonfile.readFile(DATA_FILE_LOCATION, 'utf8', (err, fileData) => {
      if (!err) {
        this.setData(fileData);
        logger.info(`Initial data file correctly processed at ${DATA_FILE_LOCATION}. Clients found: ${this.data.length}`);
        callback();
      } else {
        logger.error(`Unable to read data file ${err}`);
      }
    });
  }

  /**
   * Returns the complete list of clients
   * @returns {Promise<*|Array>}
   */
  async getClients() {
    return [...this.data];
  }

  /**
   * Returns a client
   * @param id The id of the client to retrieve
   * @returns {Promise<T>}
   */
  async getClient(id) {
    const client = this.data.find(item => item.id === id);
    if (!client) {
      throw new APIError(`Unable to find Client with id ${id}`, [], httpStatus.NOT_FOUND, true);
    } else { return { ...client }; }
  }

  /**
   * Creates a client
   * @param client Client data to be persited
   * @returns {Promise<void>}
   */
  async createClient(client) {
    const newClient = {
      ...client,
      id: this.generateId()
    };
    this.data = this.data.concat([newClient]);
    return newClient;
  }

  /**
   * Updates a client
   * @param id The id of the client to update
   * @param client Client data to be persited
   * @returns {Promise<*>}
   */
  async updateClient(id, client) {
    const idx = this.data.findIndex(item => item.id === id);
    if (idx >= 0) {
      this.data[idx] = new Client(client);
      return client;
    }
    throw new APIError(`Unable to find Client with id ${id}`, [], httpStatus.NOT_FOUND, true);
  }

  /**
   * Deletes a client
   * @param id The id of the client to remove
   * @returns {Promise<void>}
   */
  async deleteClient(id) {
    const idx = this.data.findIndex(item => item.id === id);
    if (idx >= 0) {
      this.data = this.data.filter(item => item.id !== id);
      return;
    }
    throw new APIError(`Unable to find Client with id ${id}`, [], httpStatus.NOT_FOUND, true);
  }

  /**
   * Generated a new Id simulating a sequence
   * Note: Concurrent id generation is not supported
   * @returns {number}
   */
  generateId() {
    this.maxId += 1;
    return this.maxId;
  }

}

module.exports = new ClientDAO();
