require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const motorcyclesRouter = require("./routes/motorcyles");
const carsRouter = require("./routes/cars");

app.use(express.json());

app.use(morgan("dev"));

app.use("/API/v1/motorcycles", motorcyclesRouter);

app.use("/API/v1/cars", carsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`This server is listening on port ${PORT}`);
});
