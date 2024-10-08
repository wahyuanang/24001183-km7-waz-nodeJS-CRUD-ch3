require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`This server is listening on port ${PORT}`);
});
