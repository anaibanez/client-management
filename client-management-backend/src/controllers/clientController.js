const httpStatus = require('http-status');
const Client = require('../models/client');
const clientDAO = require('../util/clientDAO');

/**
 * Returns list of clients
 * @param req
 * @param res
 * @param next
 */
const listClients = (req, res, next) => {
  clientDAO.getClients()
        .then(clients => res.status(httpStatus.OK).json(clients))
        .catch(e => next(e));
};

/**
 * Returns the details of a client
 * @param req
 * @param res
 * @param next
 */
const getClient = (req, res, next) => {
  const id = Number.parseInt(req.params.id, 10);

  clientDAO.getClient(id)
      .then(client => res.status(httpStatus.OK).json(client))
      .catch(e => next(e));
};

/**
 * Creates a new Client
 * @param req
 * @param res
 * @param next
 */
const createClient = (req, res, next) => {
  const client = new Client(req.body);

  clientDAO.createClient(client)
      .then(() => res.status(httpStatus.CREATED).end())
      .catch(e => next(e));
};

/**
 * Updates an existing client
 * @param req
 * @param res
 * @param next
 */
const updateClient = (req, res, next) => {
  const id = Number.parseInt(req.params.id, 10);
  const client = new Client(req.body);

  clientDAO.updateClient(id, client)
      .then(changedClient => res.status(httpStatus.OK).json(changedClient))
      .catch(e => next(e));
};

/**
 * Deletes a client
 * @param req
 * @param res
 * @param next
 */
const deleteClient = (req, res, next) => {
  const id = Number.parseInt(req.params.id, 10);

  clientDAO.deleteClient(id)
        .then(() => res.status(httpStatus.OK).end())
        .catch(e => next(e));
};

module.exports = { listClients, getClient, createClient, updateClient, deleteClient };
