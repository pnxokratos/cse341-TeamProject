const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('TravelWish')
  .collection('oceania')
  .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//OCEANIA ROUTES

//GET place to visit by id
const getOceaniaPlace = async (req, res, next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('TravelWish')
    .collection('oceania')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
    console.log(result);
  });
}

// POST - CREATION OCEANIA PLACES
const postOceaniaPlace = async (req, res) => {
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
  const response = await mongodb.getDb().db('TravelWish').collection('oceania').insertOne(place);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the place.');
  }
};

// DELETE - DELETE OCEANIA PLACES
const deleteOceaniaPlace = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('TravelWish').collection('oceania').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the place.');
  }
};
module.exports = { getAll, getOceaniaPlace, postOceaniaPlace, deleteOceaniaPlace};