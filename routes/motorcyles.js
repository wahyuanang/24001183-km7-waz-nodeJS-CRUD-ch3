const express = require("express");
const router = express.Router();
const motorcyclesController = require("../controller/motorcycles");

// Create Motorcycle = POST
router.post("/", motorcyclesController.createMotorcycle);

// update
router.patch("/:id", motorcyclesController.updateMotorcycles);

router.get("/", motorcyclesController.getMotorcycles);

router.get("/:id", motorcyclesController.getMotorcycleById);

// Delete
router.delete("/:id", motorcyclesController.deleteMotorcycles);

module.exports = router;
