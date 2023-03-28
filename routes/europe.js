const express = require('express');
const router = express.Router();
const {requiresAuth } = require('express-openid-connect');

const europeController = require('../controllers/europe');

router.get('/', requiresAuth(), europeController.getAll);

router.get('/:id', requiresAuth(), europeController.getEuropePlace);

router.post('/', requiresAuth(), europeController.postEuropePlace);

router.delete('/:id', requiresAuth(), europeController.deleteEuropePlace);

module.exports = router;
