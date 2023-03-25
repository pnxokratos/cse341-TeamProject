const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb
  .getDb()
  .db('TravelWish')
  .collection('travel')
  .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('TravelWish')
    .collection('travel')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// POST - CREATION PLACES
const postPlace = async (req, res) => {
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
  const response = await mongodb.getDb().db('TravelWish').collection('travel').insertOne(place);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the place.');
  }
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

//AFRICA ROUTES

//GET place to visit by id

const getAfricaPlace = async (req, res, next) => {
  if (ObjectId.isValid(req.id)) 
  {return res.status(400).send("Invalid object id");}
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('TravelWish')
    .collection('africa')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
    console.log(result);
  });
}

// POST - CREATION AFRICA PLACES
const postAfricaPlace = async (req, res) => {
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
  const response = await mongodb.getDb().db('TravelWish').collection('africa').insertOne(place);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the place.');
  }
};

//EUROPE ROUTES

//GET place to visit by id
const getEuropePlace = async (req, res, next) => {
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
}

// POST - CREATION EUROPE PLACES
const postEuropePlace = async (req, res) => {
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

module.exports = { getAll, getSingle, getAsiaPlace, getAmericaPlace, getEuropePlace, getAfricaPlace, getOceaniaPlace, postPlace, postAsiaPlace, postAmericaPlace, postEuropePlace, postAfricaPlace, postOceaniaPlace };