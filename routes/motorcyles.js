const express = require("express");
const router = express.Router();
const motorcyclesController = require("../controller/motorcycles");

router.post("/", motorcyclesController.createMotorcycles);

// Delete
router.delete("/:id", motorcyclesController.deleteMotorcycles);

module.exports = router;
