const express = require('express');
const router = express.Router();

const asiaController = require('../controllers/asia');

router.get('/', asiaController.getAll);

router.get('/:id', asiaController.getAsiaPlace);

router.post('/', asiaController.postAsiaPlace);

module.exports = router;
