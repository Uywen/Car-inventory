const Car = require('../model/car.js')

// the function used to get all the cars from the database
const getAllCars = async (req,res,next) =>{
    let cars;
    try{
        // used the find method
        cars = await Car.find();
    } catch (err) {
        console.log(err)
    }
    if (!cars) {
         return res.send(404).json({message: "No car found"})
    }
    return res.status(200).json({cars})
}

// the function used to get the car by the id
const getById = async (req, res, next) => {
    const id = req.params.id;
    let cars;
    try {

        // used the function findbyid
      cars = await Car.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!cars) {
      return res.status(404).json({ message: "No car found" });
    }
    return res.status(200).json({ cars });
  };

//   the function used to addcars to the databse
const addCars = async (req, res, next) =>{
    // stored them all in one const variable
    const {model, make , registration , owner, previousowner, image} = req.body;
    let cars;
     try {
        // the put the in an object because i kept getting errors
        // and undefined values
        cars =  Car({
            model: model,
            make: make,
            registration: registration,
            owner: owner,
            previousowner:previousowner,
            image: image
        });
        // sends the information to the database
        await cars.save();
     } catch(err){
        console.log(err)
     }

     if(!cars) {
        return res.status(500).json({message:"Unable to add"})
     }
     return res.status(200).json({cars})
    }

    // the function used to update cars
const updateCar = async(req,res, next) =>{
    // used the params with id because the car needs to be updated by the id called
    const id = req.params.id;
     // stored them all in one const variable
    const {model, make , registration , owner, previousowner, image} = req.body;
    let cars;
    try{
        // used thr findbyidandupdate function
        cars = await Car.findByIdAndUpdate(id,{

            // the put the in an object because i kept getting errors
        // and undefined values
            model:model,
            make:make,
            registration: registration,
            owner:owner,
            previousowner: previousowner,
            image: image
        })
        // sends the information to the database
        cars = await cars.save()
    } catch(err) {
        console.log(err)
    }
    if(!cars) {
        return res.status(404).json({message:"Unable to Update by this id"})
     }
     return res.status(200).json({cars})
};

// the function used to delete information from the database
const deleteCar = async (req,res,next) =>{
    // deletes the item based on the id
    const id = req.params.id;
    let cars;
    try{
        // used the findbyidandremovefunction
        cars = await Car.findByIdAndRemove(id);
    } catch(err){
        console.log(err)
    }

    if(!cars) {
        return res.status(404).json({message:"Unable to Delete by this id"})
     }
     return res.status(200).json({cars})
}

// exports all of the functions to the car-routes.js file
exports.getAllCars = getAllCars
exports.addCars = addCars
exports.updateCar = updateCar
exports.deleteCar = deleteCar
exports.getById = getById