const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const oceaniaController = require('../controllers/oceania');

router.get('/', requiresAuth(), oceaniaController.getAll);

router.get('/:id', requiresAuth(), oceaniaController.getOceaniaPlace);

router.post('/', requiresAuth(), oceaniaController.postOceaniaPlace);

router.delete('/:id', requiresAuth(), oceaniaController.deleteOceaniaPlace);

module.exports = router;
