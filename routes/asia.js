const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const asiaController = require('../controllers/asia');

router.get('/', requiresAuth(), asiaController.getAll);

router.get('/:id', requiresAuth(), asiaController.getAsiaPlace);

router.post('/', requiresAuth(), asiaController.postAsiaPlace);

router.delete('/:id', requiresAuth(), asiaController.deleteAsiaPlace);

module.exports = router;
