const config = require('./config/config');
const app = require('./config/express');
const logger = require('./config/logger');
const clientDAO = require('./util/clientDAO');

const server = app.listen(config.port, () => {
      // Read the client datasource
  clientDAO.load(() => {
    app.emit('dataLoaded');
  });

  logger.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});

module.exports = { app, server };
