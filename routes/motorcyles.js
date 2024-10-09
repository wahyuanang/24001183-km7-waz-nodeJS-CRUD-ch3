const express = require("express");
const router = express.Router();
const motorcyclesController = require("../controller/motorcycles");

// Create Motorcycle = POST
router.post("/", motorcyclesController.createMotorcycle);

// Update Motorcycle
router.patch("/:id", motorcyclesController.updateMotorcycles);

// Get All Motorcycles
router.get("/", motorcyclesController.getMotorcycles);

// Get Motorcycle by ID
router.get("/:id", motorcyclesController.getMotorcycleById);

// Delete Motorcycle
router.delete("/:id", motorcyclesController.deleteMotorcycles);

module.exports = router;
