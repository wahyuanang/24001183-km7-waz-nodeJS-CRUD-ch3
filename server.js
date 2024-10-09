require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const morgan = require("morgan");
const motorcyclesRouter = require("./routes/motorcyles");
const carsRouter = require("./routes/cars");
const healthCheck = require("./routes/healthCheck");
const notFoundMiddleware = require("./middleware/notFound");

app.use(express.json());

app.use(morgan("dev"));

// API Routes Motorcycles
app.use("/API/v1/motorcycles", motorcyclesRouter);

// API Routes Cars
app.use("/API/v1/cars", carsRouter);

// Health Check = Default URL
app.use("/", healthCheck);

// Middleware for Not Found
app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log(`This server is listening on port ${PORT}`);
});
