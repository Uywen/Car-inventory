import { Button } from '@mui/material'
import React from 'react'
import "./Car.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

 const Car = (props) => {
  // when the user clicks update button this helps navigate to the delete page
  const history = useNavigate()

    const {_id, model , make , registration, owner , previousowner, image} = props.car

    // had an issue with the cars details being removed from the list
    // if you refresh the page the user will be removed
    const deleteHandler = async() => {
      await axios.delete(`http://localhost:8000/cars/${_id}`)
      .then(res => res.data)
      .then(() => history('/'))
      .then(() =>history('/cars'))
    }
  return (
    // the form with information about a car
    <div className='card'>
        <img className="size"src={image} alt={make} />
        <h3>Make: {make}</h3>
        <h2>Model: {model}</h2>
        <p>Registration Number: {registration}</p>
        <p>Owner: {owner}</p>
        <p>Previous Owner: {previousowner}</p>
        {/* Link to where the user can update information about a car */}
        <Button LinkComponent={Link} to={`/cars/${_id}`}>Update</Button>
        <Button onClick={deleteHandler}>Delete</Button>
    </div>
  )
}


export default Car