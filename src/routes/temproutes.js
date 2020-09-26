var express = require('express');
var tempRouter = express.Router();

var temp_controller = require('../controllers/tempcontroller');

tempRouter.get('/okan', temp_controller.templist);
tempRouter.get('/mami', temp_controller.temptest);

module.exports = tempRouter;