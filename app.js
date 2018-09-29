const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const mongoose = require('mongoose');
const userModel = require('./models/users');
const extractUserMiddleware = require('./middleware/extractUserFromToken');

const usersRouter = require('./routes/users');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://calculadoraUser:gTQP9Qzo5TPYWkYFAy@ds119343.mlab.com:19343/calculadora');

const app = express();

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(extractUserMiddleware.extractUser);
  
app.use('/users', usersRouter);

module.exports = app;
