import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Box } from '@mui/material'
import {FormLabel} from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// gets the car by the id
 const CarDetail = () => {
    const [inputs, setInputs] = useState()

    // using params to display the id of the car chosen to update
    const id = useParams().id;

    // when the user clicks update button this helps navigate to the edit page
    const history =  useNavigate()
    console.log(id)

    // used axios to gain access to the api
    // used to fetch the api with the car details based on the id of the car
    // in the database
    useEffect(() => {
        const fetchHandler = async () =>{
        await axios
        .get(`http://localhost:8000/cars/${id}`)
        .then(res => res.data).then(data => setInputs(data.cars))
        }
        fetchHandler()
    }, [id])
    
    // displays all the input information that the user needs to input
    // with their respective fields in  an object
    const sendRequest = async() =>{
    await axios.put(`http://localhost:8000/cars/${id}`, {
      model:String(inputs.model),
      make:String(inputs.make),
      registration:Number(inputs.registration),
      owner:String(inputs.owner),
      previousowner:String(inputs.previousowner),
      image:String(inputs.image)
    }).then(res => res.data)
    }
    // displays the information to edit a cars details
    // add transports you to the cars webpage once the car is added
    const handleSubmit = (e) => {
        e.preventDefault()
        sendRequest().then(() =>history('/cars'))
    }
    // allows the user to input values in the text box 
    // displaying their previous values aswell
    const handleChange = (e) => {
        setInputs((prevState) =>({
            ... prevState,
            [e.target.name]: e.target.value
            
          }))
    }
    console.log(inputs)

    // the form that the user needs to fill in with its styles to update a cars details
  return (
    <div>
   {inputs && (
   <form onSubmit={handleSubmit}>
    <Box  display = "flex"
    flexDirection= "column"
    justifyContent= {"center"}
    maxWidth={700}
    alignContent= {"center"}
    alignSelf= "center"
    marginLeft= {"auto"}
    marginRight= "auto"
    marginTop={7}>
   <FormLabel>Model</FormLabel>
   <TextField value={inputs.model} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="model" />
   <FormLabel>Make</FormLabel>
   <TextField value={inputs.make} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="make" />
   <FormLabel>Registration</FormLabel>
   <TextField value={inputs.registration} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="registration" />
   <FormLabel>Owner</FormLabel>
   <TextField value={inputs.owner} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="owner" />
   <FormLabel>Previous Owner</FormLabel>
   <TextField value={inputs.previousowner} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="previousowner" />
   <FormLabel>Image</FormLabel>
   <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />
   <Button variant="contained"  type="submit">Add Car</Button>
   </Box>
   </form>
   )}
    </div>
  )
}

export default CarDetail