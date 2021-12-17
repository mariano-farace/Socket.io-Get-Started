const express = require('express');

const app = express();

const middlewareUtils = require('./utils/middleware');
const fruitRouter = require('./routes/fruit-router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(middlewareUtils.requestLogger);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/fruits', fruitRouter);

// app.use(middlewareUtils.errorHandler);
app.use(middlewareUtils.unknownEndpoint);

module.exports = app;
