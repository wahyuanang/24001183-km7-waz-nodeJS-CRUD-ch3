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

    const result = {
      status: "OK",
      message: "Motorcycle created successfully",
      data: data,
    };

    if (!data) {
      return res.status(400).json({
        status: "Bad request",
        message: "Invalid request",
        error: "Invalid request",
      });
    }

    res.status(201).json(result);
  } catch (error) {
    const errorResult = {
      status: "Internal server error",
      message: "Internal server error",
      error: error.message,
    };
    res.status(500).json(errorResult);
  }
};

// UPDATE MOTORCYCLE = PATCH

// DELETE MOTORCYCLE = DELETE
const deleteMotorcycles = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Motorcycles.findOne({
      where: { id: id },
    });

    if (!data) {
      return res.status(404).json({
        status: "Failed",
        message: "Get data not successfully",
        isSuccess: false,
      });
    }

    await Motorcycles.destroy({
      where: { id: id },
    });

    res.status(201).json({
      status: "Success",
      message: "Delete data successfully",
      isSuccess: true,
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
  createMotorcycles,
  deleteMotorcycles,
};
