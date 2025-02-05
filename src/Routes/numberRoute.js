const express = require('express');
const numberRoute = express.Router();
const { classifyNumber } = require('../Controller/numberController');

numberRoute.get('/api/classify-number', classifyNumber);

module.exports = numberRoute;