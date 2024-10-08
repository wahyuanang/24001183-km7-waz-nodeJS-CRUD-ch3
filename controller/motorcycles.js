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

// UPDATE Motorcycle
const updateMotorcycles = async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const updateAt = new Date();

  try {
    const data = await Motorcycles.update(
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

    if (data[0] === 0) { // Jika tidak ada baris yang diperbarui
      return res.status(404).json({
        status: "Not found",
        message: `Motorcycle with ID ${id} not found`,
        error: "Not found",
      });
    }

    res.status(200).json({
      status: "OK",
      message: "Motorcycle updated successfully",
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

module.exports = {
  updateMotorcycles,
};



// DELETE MOTORCYCLE = DELETE

module.exports = {
  createMotorcycles,
};
