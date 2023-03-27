const express = require('express');
const router = express.Router();

const oceaniaController = require('../controllers/oceania');

router.get('/', oceaniaController.getAll);

router.get('/:id', oceaniaController.getOceaniaPlace);

router.post('/', oceaniaController.postOceaniaPlace);

router.delete('/', oceaniaController.deleteOceaniaPlace);

module.exports = router;
