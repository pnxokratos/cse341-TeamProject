const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travel');

router.get('/', travelController.getAll);

router.get('/:id', travelController.getSingle);

//ASIA ROUTES

//GET ROUTES

//GET place to visit by id
router.get('/asia/:id', travelController.getAsiaPlace);


//AMERICA ROUTES

//GET ROUTES

//GET place to visit by id
router.get('/america/:id', travelController.getAmericaPlace)

module.exports = router;