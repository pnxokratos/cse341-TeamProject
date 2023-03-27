const express = require('express');
const router = express.Router();

const africaController = require('../controllers/africa');
const validation = require('../middleware/validate');

router.get('/', africaController.getAll);

router.get('/:id', africaController.getAfricaPlace);

router.post('/', validation.validateCreatePlace, africaController.postAfricaPlace);

router.delete('/:id', africaController.deleteAfricaPlace);

module.exports = router;
