const { Motorcycles } = require("../models");

// GET ALL = GET

// GET BY ID = GET

// CREATE MOTORCYLES = POST
const createMotorcycles = async (req, res) => {
  const { body } = req;
  const updateAt = new Date();
  const createAt = new Date();
  try {
    const data = await Motorcycles.create({
      ...body,
      updateAt,
      createAt,
    });

    if (!data) {
      return res.status(400).json({
        status: "Bad request",
        message: "Invalid request",
        error: "Invalid request",
      });
    }

    res.status(201).json({
      status: "OK",
      message: "Motorcycle created successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Internal server error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

// UPDATE MOTORCYCLE = PATCH

// DELETE MOTORCYCLE = DELETE

module.exports = {
  createMotorcycles,
};
