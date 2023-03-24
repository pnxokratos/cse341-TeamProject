const express = require('express');
const router = express.Router();

router.use('/travel', require('./travel'));
router.use('/', require('./swagger'));

module.exports = router;