const { Motorcycles } = require("../models");

// GET ALL = GET
const readMotorcycles = async (req, res) => {
  try {
    const data = await Motorcycles.findAll();

    if (data.length === 0) {
      return res.status(404).json({
        status: "Failed",
        message: "Failed get motorcycles data",
        isSuccess: false,
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Success get motorcycles data",
        isSuccess: true,
        data: {
          data,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Internal server error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
// GET BY ID = GET
const readMotorcyclesById = async (req, res) => {
  const reqId = req.params.id;

  try {
    const data = await Motorcycles.findAll({
      where: {
        id: reqId,
      },
    });

    if (data.length === 0) {
      res.status(404).json({
        status: "Failed",
        message: "Failed get motorcycles data by id",
        isSuccess: false,
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Success get motorcycles data by id",
        isSuccess: true,
        data: {
          data,
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Internal server error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

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
      status: "Success",
      message: "Create data successfully",
      isSuccess: true,
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

    if (data[0] === 0) {
      // Jika tidak ada baris yang diperbarui
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
  readMotorcycles,
  readMotorcyclesById,
  deleteMotorcycles,
  updateMotorcycles,
};
