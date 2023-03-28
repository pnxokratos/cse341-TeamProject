const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const americaController = require('../controllers/america');

router.get('/', requiresAuth(), americaController.getAll);

router.get('/:id', requiresAuth(), americaController.getAmericaPlace);

router.post('/', requiresAuth(), americaController.postAmericaPlace);

router.delete('/:id', requiresAuth(), americaController.deleteAmericaPlace);

module.exports = router;
