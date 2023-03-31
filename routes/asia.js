const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const asiaController = require('../controllers/asia');
const validation = require('../middleware/validate');

router.get('/', requiresAuth(), asiaController.getAll);

router.get('/:id', requiresAuth(), asiaController.getAsiaPlace);

router.post('/', requiresAuth(), validation.validateCreatePlace, asiaController.postAsiaPlace);

router.put('/:id', validation.validateCreatePlace, asiaController.updateAsia);

router.delete('/:id', requiresAuth(), asiaController.deleteAsiaPlace);

module.exports = router;
