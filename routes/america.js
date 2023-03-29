const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const americaController = require('../controllers/america');
const validation = require('../middleware/validate');

router.get('/', requiresAuth(), americaController.getAll);

router.get('/:id', requiresAuth(), americaController.getAmericaPlace);

router.post('/', requiresAuth(), validation.validateCreatePlace, americaController.postAmericaPlace);

router.delete('/:id', requiresAuth(), americaController.deleteAmericaPlace);

module.exports = router;
