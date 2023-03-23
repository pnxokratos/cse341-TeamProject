const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travel');

router.get('/', travelController.getAll);

router.get('/:id', travelController.getSingle);

module.exports = router;