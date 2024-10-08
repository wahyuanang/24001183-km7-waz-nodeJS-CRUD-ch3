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

const deleteCars = async (req, res) => {
  const id = req.params.id;
  try {
    const car = await Cars.findOne({
      where: { id: id },
    });
    if (car === null) {
      return res.status(404).json({
        status: "Failed",
        message: "Get data not successfully",
        isSuccess: false,
        data: null,
      });
    }
    await Cars.destroy({
      where: {
        id: id,
      },
    });
    res.status(201).json({
      status: "success",
      message: "Delete data successfully",
      isSuccess: true,
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "Internal server error",
      message: "Internal server error",
      isSuccess: false,
      error: error.message,
    });
  }
};

module.exports = {
  deleteCars,
  updateCars,
};
