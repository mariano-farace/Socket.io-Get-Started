const someRouter = require('express').Router();
const fruitController = require('../controllers/fruit-controller');

someRouter.get('/banana', fruitController.banana);

module.exports = { someRouter };
