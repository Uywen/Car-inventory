import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Car from '../Car/Car'
import "./Car.css"
import axios from "axios"

// fetching the data from the database
const URL = "http://localhost:8000/cars"
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data)
}
 const Cars = () => {

    const [cars, setCar] = useState()

    useEffect(() => {
    
      // used an empty array because it kept displaying the objects in the database
      // continuously
        fetchHandler().then((data) => setCar(data.cars))
    }, [])
    console.log(cars)
  return (
    <div>
        <ul>
            {cars &&
            cars.map((car, i) => (
              // displays the infromation from the cars.js file
              // stored in props car
                <div className="car"key={i}>
                 <Car car={car}/>
                </div>
            ))}
        </ul>
    </div>
  )
}

export default Cars
