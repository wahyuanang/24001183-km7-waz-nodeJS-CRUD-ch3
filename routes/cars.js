const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars");

// Buat Router disini lalu gunakan callbacknya dari controller
router.get("/", carsController.readCars);
router.get("/:id/", carsController.readCarsById);

module.exports = router;
