const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const oceaniaController = require('../controllers/oceania');
const validation = require('../middleware/validate');

router.get('/', requiresAuth(), oceaniaController.getAll);

router.get('/:id', requiresAuth(), oceaniaController.getOceaniaPlace);

router.post('/', requiresAuth(), validation.validateCreatePlace, oceaniaController.postOceaniaPlace);

router.put('/:id', validation.validateChangeSuggestion, oceaniaController.updateOceania);

router.delete('/:id', requiresAuth(), oceaniaController.deleteOceaniaPlace);

module.exports = router;
