const express = require('express');
const router = express.Router();

const oceaniaController = require('../controllers/oceania');

router.get('/', oceaniaController.getAll);

router.get('/:id', oceaniaController.getOceaniaPlace);

router.post('/', oceaniaController.postOceaniaPlace);

module.exports = router;
