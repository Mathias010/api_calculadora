const express = require('express');
const logger = require('morgan');
const compression = require('compression');

const usersRouter = require('./routes/users');

const app = express();

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);

module.exports = app;
