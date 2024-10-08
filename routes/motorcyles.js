const express = require("express");
const router = express.Router();
const motorcyclesController = require("../controller/motorcycles");

router.post("/", motorcyclesController.createMotorcycles);

// update
router.patch("/:id", motorcyclesController.updateMotorcycles);

module.exports = router;
