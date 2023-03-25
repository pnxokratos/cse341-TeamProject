const express = require('express');
const router = express.Router();

const americaController = require('../controllers/america');

router.get('/', americaController.getAll);

router.get('/:id', americaController.getAmericaPlace);

router.post('/', americaController.postAmericaPlace);

module.exports = router;
