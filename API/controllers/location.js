const LocationModel = require("../models/location")

exports.getAll = async (req, res, next) => {
   
   try{
    let locations = await LocationModel.find({});
    res.send({
        count: locations.length, 
        locations,
    });
} catch (err){
    next(err);
    }
};


exports.getLocation = async (req, res, next) => {
    try {
      let name = req.params.name;
      let location = await LocationModel.findOne({ name });
      if (!location) {
        return res.status(404).send({
          message: "Location not found",
        });
      }
      res.send({ location });
    } catch (err) {
      next(err);
    }
  };


  exports.createLocation = async (req, res, next) => {
    try {
      //TODO: Requiere validation
      let { locationId, name, type } = req.body;
      let newLocation = await WordModel.create({ locationId, name, type });
      res.send({ newLocation });
    } catch (err) {
      next(err);
    }
  };

  exports.deleteLocation = async (req, res, next) => {
    try {
      let name = req.params.name;
      let { deletedCount } = await LocationModel.deleteOne({ name });
      if (deletedCount == 1) {
        return res.send({
          message: "successfully deleted",
        });
      }
      return res.status(400).send({
        message: "cannot delete the Location, maybe is delete before",
      });
    } catch (err) {
      next(err);
    }
  };
