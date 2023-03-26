const validator = require('../helpers/validate');

const validateCreatePlace = (req, res, next) => {
    const validationRule = {
        place: 'required|string',
        continent: 'required|string',
        country: 'required|string',
        city: 'required|string',
        activities: 'required|string',
        admissionCost: 'required|string',
        bestDateToTravel: 'required|string',
        suggestion: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
      if (!status) {
        res.status(412).send({
          success: false,
          message: 'Validation failed, please enter de correct data',
          data: err
        });
      } else {
        next();
      }
    });
  };

module.exports = {
    validateCreatePlace
};