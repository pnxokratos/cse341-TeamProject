const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travel');

router.get('/', travelController.getAll);

router.get('/:id', travelController.getSingle);

router.post('/', travelController.createPlace);

//--------------ASIA ROUTES-----------------

//GET ROUTES

//GET place to visit by id
router.get('/asia/:id', travelController.getAsiaPlace);

//POST ROUTES

router.post('/', travelController.createAsiaPlace);
router.post('/', travelController.createAmericaPlace);
router.post('/', travelController.createEuropePlace);
router.post('/', travelController.createAfricaPlace);
router.post('/', travelController.createOceaniaPlace);

//PUT ROUTES

//DELETE ROUTES



//-------------AMERICA ROUTES---------------

//GET ROUTES

//GET place to visit by id
router.get('/america/:id', travelController.getAmericaPlace);


//POST ROUTES

//PUT ROUTES

//DELETE ROUTES


//------------AFRICA ROUTES-------------------

//GET ROUTES

//GET place to visit by id

router.get('/africa/:id', travelController.getAfricaPlace);

//POST ROUTES

//PUT ROTES

//DELETE ROUTES

//------------EUROPE ROUTES-------------------

//GET ROUTES

//GET place to visit by id

router.get('/europe/:id', travelController.getEuropePlace);

//POST ROUTES

//PUT ROTES

//DELETE ROUTES


//------------OCEANIA ROUTES-------------------

//GET ROUTES

//GET place to visit by id

router.get('/oceania/:id', travelController.getOceaniaPlace);

//POST ROUTES

//PUT ROTES

//DELETE ROUTES


module.exports = router;