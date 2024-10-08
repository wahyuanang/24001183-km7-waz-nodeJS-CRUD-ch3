const express = require("express");
const router = express.Router();
const motorcyclesController = require("../controller/motorcycles");

router.post("/", motorcyclesController.createMotorcycles);

module.exports = router;
