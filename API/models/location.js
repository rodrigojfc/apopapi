const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema(
    {
        locationId: {
            type: String,
            required: true,
            unique: true,
          },
          name: {
            type: String,
            required: true,
        
          },
          type: {
            type: String,
            required: true,
          },
    },
    {timestamps: true}
);


const LocationModel = mongoose.model("location", LocationSchema);

module.exports = LocationModel;