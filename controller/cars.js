const { Cars } = require("../models");

// GET ALL CARS = GET

// GET CARS BY ID = GET

// CREATE CARS = POST

// UPDATE CARS = PATCH
const updateCars = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const updateAt = new Date();

  try {
    const data = await Cars.update(
      {
        ...body,
        updateAt,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!data) {
      return res.status(400).json({
        status: "Bad request",
        message: "Invalid request",
        error: "Invalid request",
      });
    }

    res.status(200).json({
      status: "OK",
      message: "Car updated successfully",
      data: {
        ...body,
        updateAt,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Internal server error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

// DELETE CARS = DELETE

module.exports = {
  updateCars,
};
