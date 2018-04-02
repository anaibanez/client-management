const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const httpStatus = require('http-status');
const expressWinston = require('express-winston');
const expressValidation = require('express-validation');
const winstonInstance = require('./logger');

const clientRoutes = require('../routes/clientRouter');
const config = require('./config');
const APIError = require('../models/error');

const app = express();

const apiPath = '/api';
const apiVersion = 'v1';
const baseApiUrl = `${apiPath}/${apiVersion}`;

// Configure HTTP request logger middleware for dev
if (config.env === 'development') {
  app.use(logger('dev'));
}

// parse body params and attach them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// HTTP compression middleware
app.use(compress());


// enable detailed API logging in dev env
if (config.env === 'development') {
  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');
  app.use(expressWinston.logger({
    winstonInstance,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
  }));
}

// mount routes
app.use(`${baseApiUrl}/client`, clientRoutes);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const details = err.errors.map(error => error.messages.map(d => d));
    const error = new APIError('Validation error', details, err.status, true);
    return next(error);
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, [], err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', [], httpStatus.NOT_FOUND);
  return next(err);
});

// log error in winston transports except when executing test suite
if (config.env !== 'test') {
  app.use(expressWinston.errorLogger({
    winstonInstance
  }));
}

// error handler, send stacktrace only during development
app.use((err, req, res, next) => // eslint-disable-line no-unused-vars
res.status(err.status).json({
  message: err.isPublic ? err.message : httpStatus[err.status],
  details: err.details,
  stack: config.env === 'development' ? err.stack : {}
})
);

module.exports = app;
