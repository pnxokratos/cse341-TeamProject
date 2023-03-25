const express = require('express');
const router = express.Router();

const africaController = require('../controllers/africa');

router.get('/', africaController.getAll);

router.get('/:id', africaController.getAfricaPlace);

router.post('/', africaController.postAfricaPlace);

module.exports = router;
