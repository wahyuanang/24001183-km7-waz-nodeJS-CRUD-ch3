const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  res.status(404).json({
    status: "Not Found",
    message: "API Not Found",
    error: "Not Found",
    isSuccess: false,
  });
});

module.exports = router;
