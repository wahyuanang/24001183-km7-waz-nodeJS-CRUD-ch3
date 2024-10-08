const { Motorcycles } = require("../models");

// GET ALL = GET
const readMotorcycles = async (req, res) =>{
  try{
    const data = await Motorcycles.findAll() 

    if(data.length === 0){
      return res.status(404).json({
        status: "Failed",
        message: "Failed get motorcycles data",
        isSuccess: false,
      })
    }else{
      res.status(200).json({
        status: "Success",
        message: "Success get motorcycles data",
        isSuccess: true,
        data: {
          data,
        }
      })
    }

  }
  catch(error){
    res.status(500).json({
      status: "Internal server error",
      message: "Internal server error",
      error: error.message,
    })
  }
}
// GET BY ID = GET
const readMotorcyclesById = async (req, res) =>{
  const reqId = req.params.id

  try{
    const data = await Motorcycles.findAll({
      where:{
        id: reqId
      }
    })

    if(data.length === 0){
      res.status(404).json({
        status: "Failed",
        message: "Failed get motorcycles data by id",
        isSuccess: false,
      })
    }else{
      res.status(200).json({
        status: "Success",
        message: "Success get motorcycles data by id",
        isSuccess: true,
        data: {
          data,
        }
      })
    }

  }
  catch(error){
    res.status(500).json({
      status: "Internal server error",
      message: "Internal server error",
      error: error.message,
    })
  }
  
}

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
  readMotorcycles,
  readMotorcyclesById,
};
