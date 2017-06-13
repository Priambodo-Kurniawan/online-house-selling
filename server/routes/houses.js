'use strict'
var express = require('express');
var router = express.Router();
var house = require('../controllers/houseController')

router.get('/', house.getAll);

router.get('/:id', house.getByID);

router.post('/', house.create);

router.delete('/:id', house.delete);

router.put('/:id', house.update)

module.exports = router;
