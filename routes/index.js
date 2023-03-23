const express = require('express');
const router = express.Router();

router.use('/travel', require('./travel'));

module.exports = router;