const express = require("express");
const router = express.Router();
const motorcyclesController = require("../controller/motorcycles");

router.post("/", motorcyclesController.createMotorcycles);


// update
router.patch("/:id", motorcyclesController.updateMotorcycles);

router.get("/", motorcyclesController.getMotorcycles);

router.get("/:id", motorcyclesController.getMotorcyclesById);

// Delete
router.delete("/:id", motorcyclesController.deleteMotorcycles);

module.exports = router;
