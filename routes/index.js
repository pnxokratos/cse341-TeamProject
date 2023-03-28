const express = require('express');
const router = express.Router();

const { requiresAuth } = require('express-openid-connect');

// Auth0 test routes

router.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});

/*
router.use('/travel', require('./travel'));
*/
router.use('/asia', require('./asia'));
router.use('/africa', require('./africa'));
router.use('/america', require('./america'));
router.use('/europe', require('./europe'));
router.use('/oceania', require('./oceania'));
router.use('/', require('./swagger'));

module.exports = router;