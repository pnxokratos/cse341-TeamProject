const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  try{
    const result = await mongodb
    .getDb()
    .db('TravelWish')
    .collection('europe')
    .find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
  });
}catch (err) {
  res.status(500).json(err);
}
};

//EUROPE ROUTES

//GET place to visit by id
const getEuropePlace = async (req, res, next) => {
  try{
    if (ObjectId.isValid(req.id)) 
    {return res.status(400).send("Invalid object id");}
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db('TravelWish')
      .collection('europe')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
      console.log(result);
  });
}catch (err) {
  res.status(500).json(err || 'Some error occurred while getting the information.');
}
}

// POST - CREATION EUROPE PLACES
const postEuropePlace = async (req, res) => {
  try{
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
    const response = await mongodb.getDb().db('TravelWish').collection('europe').insertOne(place);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while creating the place.');
    }
}catch (err) {
  res.status(500).json(err);
}
};

// PUT - UPDATES SUGGESTIONS

const updateEurope = async (req, res, next) => {
  if (ObjectId.isValid(req.id)) {
    return res.status(400).send("Invalid object id");
  }
  const userId = new ObjectId(req.params.id);
  const europe = {
    $set: {
      suggestion: req.body.suggestion,
   },
  };
  try {
    const response = await mongodb
      .getDb()
      .db("TravelWish")
      .collection("europe")
      .replaceOne({ _id: userId }, europe);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: (response.error || "Some error occurred while updating suggestions.")
    })
  }
};

// DELETE - DELETE EUROPE PLACES
const deleteEuropePlace = async (req, res) => {
  try{
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db('TravelWish').collection('europe').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the place.');
    }
}catch (err) {
  res.status(500).json(err);
}
};
module.exports = { getAll, getEuropePlace, postEuropePlace, updateEurope, deleteEuropePlace };