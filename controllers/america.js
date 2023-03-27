const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('TravelWish')
  .collection('america')
  .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

//AMERICA ROUTES

//GET place to visit by id

const getAmericaPlace = async (req, res, next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('TravelWish')
    .collection('america')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
    console.log(result);
  });
}

// POST - CREATION AMERICA PLACES
const postAmericaPlace = async (req, res) => {
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
  const response = await mongodb.getDb().db('TravelWish').collection('america').insertOne(place);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the place.');
  }
};

// DELETE - DELETE AMERICA PLACES
const deleteAmericaPlace = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db('TravelWish').collection('america').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the place.');
  }
};
module.exports = { getAll, getAmericaPlace, postAmericaPlace, deleteAmericaPlace};