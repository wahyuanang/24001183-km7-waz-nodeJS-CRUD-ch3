const express = require("express");
const router = express.Router();
const carsController = require("../controller/cars");

// Buat Router disini lalu gunakan callbacknya dari controller

// Get All Cars
router.get("/", carsController.getCars);

// Get Car by ID
router.get("/:id/", carsController.getCarById);

// Create Car
router.post("/", carsController.createCar);

// Update Car
router.patch("/:id", carsController.updateCar);

// Delete Car
router.delete("/:id", carsController.deleteCar);

module.exports = router;
