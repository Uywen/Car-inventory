const express = require('express')
const router = express.Router()
const Car = require("../model/car")
const carController = require('../controllers/cars-controller')


// this is the routes you can use in postman 
// to check each http request for the 
// information about the cars
router.get('/', carController.getAllCars)
router.get('/:id', carController.getById)
router.post('/', carController.addCars)
router.put('/:id', carController.updateCar)
router.delete('/:id', carController.deleteCar)

module.exports = router;