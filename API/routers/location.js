var {
    getAll,
    getLocation,
    createLocation, 
    deleteLocation,
} = require("../controllers/location")
var express = require("express");
var router = express.Router();

router.get("/", getAll);
router.get("/:name", getLocation);
router.post("/", createLocation);
router.delete("/:name", deleteLocation);

module.exports = router;