const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const europeController = require('../controllers/europe');
const validation = require('../middleware/validate');

router.get('/', requiresAuth(), europeController.getAll);

router.get('/:id', requiresAuth(), europeController.getEuropePlace);

router.post('/', requiresAuth(), validation.validateCreatePlace, europeController.postEuropePlace);

router.put('/:id', validation.validateCreatePlace, europeController.updateEurope);

router.delete('/:id', requiresAuth(), europeController.deleteEuropePlace);

module.exports = router;
