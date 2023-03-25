const express = require('express');
const router = express.Router();

const europeController = require('../controllers/europe');

router.get('/', europeController.getAll);

router.get('/:id', europeController.getEuropePlace);

router.post('/', europeController.postEuropePlace);

module.exports = router;
