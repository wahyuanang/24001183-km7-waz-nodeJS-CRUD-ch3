const { Cars } = require("../models");

// GET ALL CARS = GET
const getCars = async (req, res) => {
  try {
    const data = await Cars.findAll();

    if (data === null) {
      return res.status(404).json({
        status: "Failed",
        message: "Failed get cars data",
        isSucces: false,
        Error: "Invalid Request",
      });
    }

    res.status(200).json({
      status: "succes",
      message: "Succes get cars data",
      isSucces: true,
      data: {
        data,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Internal server error",
      message: "Internal server error",
      isSucces: false,
      error: error.message,
    });
  }
};

// GET CARS BY ID = GET
const getCarById = async (req, res) => {
  try {
    const carId = req.params.id;
    const data = await Cars.findByPk(carId);

    if (data === null) {
      return res.status(404).json({
        status: "Failed",
        message: "Failed get car data by Id",
        isSucces: false,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get car data by Id",
      isSucces: true,
      data: {
        data,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: "Internal Server Error",
      isSucces: false,
      error: error.message,
    });
  }
};

// CREATE CARS = POST
const createCars = async (req, res) => {
  const { name, type, price, stock } = req.body;
  const updateAt = new Date();
  const createAt = new Date();

  try {
    if (!name || !type || !price || !stock) {
      return res.status(400).json({
        status: "Bad request",
        message: "Request body is empty or missing required fields",
        error: "Empty request body or required fields not found",
      });
    }
    const data = await Cars.create({
      name,
      type,
      price,
      stock,
      createAt,
      updateAt,
    });

    if (!data) {
      res.status(400).json({
        status: "Bad request",
        message: "Invalid request",
        error: "Invalid request",
      });
    } else {
      res.status(201).json({
        status: "Success",
        message: "Car created successfully",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "Internal server error",
      message: "An unexpected error occurred",
      isSuccess: false,
      error: error.message,
    });
  }
};

// UPDATE CARS = PATCH
const updateCar = async (req, res) => {
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
  updateCar,
  createCars,
  getCars,
  getCarById,
};
