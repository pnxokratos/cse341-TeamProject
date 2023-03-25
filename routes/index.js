const express = require('express');
const router = express.Router();

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