const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const africaController = require('../controllers/africa');
const validation = require('../middleware/validate');

router.get('/', requiresAuth(), africaController.getAll);

router.get('/:id', requiresAuth(), africaController.getAfricaPlace);

router.post('/', requiresAuth(), validation.validateCreatePlace, africaController.postAfricaPlace);

router.put('/:id', validation.validateChangeSuggestion, africaController.updateAfrica);

router.delete('/:id', requiresAuth(), africaController.deleteAfricaPlace);

module.exports = router;
