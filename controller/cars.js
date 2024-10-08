const { Cars } = require("../models");

// GET ALL CARS = GET
const readCars = async (req, res) => {
    try {
        const data = await Cars.findAll();

        if (data === null) {
            return res.status(400).json({
                status : "Bad Request",
                message : "Invalid Request",
                isSucces : false,
                Error : "Invalid Request"
            })  
        }

        res.status(200).json({
            status : "succes",
            message : "Succes get cars data",
            isSucces : true,
            data : [
                data
            ]
        })    
    } catch (error) {
        res.status(500).json({
            status : "succes",
            message : "Succes get cars data",
            isSucces : true,
            data : null
        })    
    }
};

const readCarsById = async (req, res) => {
    try {
        const CarsId = req.params.id;
        const data = await Cars.findByPk(CarsId);

        if (data === null) {
            return res.status(400).json({
                status : "Bad Request",
                message : "Invalid Request",
                isSucces : false,
                Error : "Invalid Request"
            })  
        }

        res.status(200).json({
            status : "succes",
            message : "Succes get cars data",
            isSucces : true,
            data : [
                data
            ]
        })    
    } catch (error) {
        res.status(500).json({
            status : "succes",
            message : "Succes get cars data",
            isSucces : true,
            data : null
        })    
    }
};
  

// GET CARS BY ID = GET

// CREATE CARS = POST

// UPDATE CARS = PATCH

// DELETE CARS = DELETE

module.exports = {
    readCars,
    readCarsById
};
