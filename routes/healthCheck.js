const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: "Succes",
    message: "Health Check Succes",
    isSuccess: true,
  });
});

module.exports = router;
