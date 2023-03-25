const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('TravelWish')
  .collection('asia')
  .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//ASIA ROUTES

//GET PLACE TO VISIT BY ID ASIA COLLECTION
const getAsiaPlace = async (req, res, next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('TravelWish')
    .collection('asia')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
    console.log(result);
  });
}

// POST - CREATION ASIA PLACES
const postAsiaPlace = async (req, res) => {
  const place = {
    place: req.body.place,
    continent: req.body.continent,
    country: req.body.country,
    city: req.body.city,
    activities: req.body.activities,
    admissionCost: req.body.admissionCost,
    bestDateToTravel: req.body.bestDateToTravel,
    suggestion: req.body.suggestion
  };
  const response = await mongodb.getDb().db('TravelWish').collection('asia').insertOne(place);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the place.');
  }
};

module.exports = { getAll, getAsiaPlace, postAsiaPlace};