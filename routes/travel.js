const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travel');

router.get('/', travelController.getAll);

router.get('/:id', travelController.getSingle);

router.post('/', travelController.postPlace);

//--------------ASIA ROUTES-----------------

//GET ROUTES

//GET place to visit by id
router.get('/asia/:id', travelController.getAsiaPlace);

//POST ROUTES
router.post('/asia', travelController.postAsiaPlace);

//PUT ROUTES

//DELETE ROUTES



//-------------AMERICA ROUTES---------------

//GET ROUTES

//GET place to visit by id
router.get('/america/:id', travelController.getAmericaPlace);


//POST ROUTES
router.post('/america', travelController.postAmericaPlace);

//PUT ROUTES

//DELETE ROUTES


//------------AFRICA ROUTES-------------------

//GET ROUTES

//GET place to visit by id

router.get('/africa/:id', travelController.getAfricaPlace);

//POST ROUTES
router.post('/africa', travelController.postAfricaPlace);

//PUT ROTES

//DELETE ROUTES

//------------EUROPE ROUTES-------------------

//GET ROUTES

//GET place to visit by id

router.get('/europe/:id', travelController.getEuropePlace);

//POST ROUTES
router.post('/europe', travelController.postEuropePlace);

//PUT ROTES

//DELETE ROUTES


//------------OCEANIA ROUTES-------------------

//GET ROUTES

//GET place to visit by id

router.get('/oceania/:id', travelController.getOceaniaPlace);

//POST ROUTES
router.post('/oceania', travelController.postOceaniaPlace);

//PUT ROTES

//DELETE ROUTES


module.exports = router;