const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars");

// Buat Router disini lalu gunakan callbacknya dari controller

// update
router.patch("/:id", carsController.updateCars);

router.delete("/:id", carsController.deleteCars);

module.exports = router;
