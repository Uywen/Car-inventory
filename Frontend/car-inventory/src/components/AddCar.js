import React, { useState } from 'react'
import {FormLabel, TextField, Box} from "@mui/material"
import "./Car/Car.css"
import {Button} from '@mui/material'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const Addcar = () => {
  const history = useNavigate();

  // allows the input fields  to have an empty textfield
  const [inputs, setInputs] = useState({
    model: "",
    make: "",
    registration: "",
    owner: "",
    previousowner: "",
    image: ""

  })
  // allows the user to gain access to the input field
  // so they can add information and record previous 
  // information entered
  const handleChange = (e) =>{
    setInputs((prevState) =>({
      ... prevState,
      [e.target.name]: e.target.value
      
    }))
  }

   // displays all the input information that the user needs to input
    // with their respective fields in  an object
  const sendRequest = async () =>{
   await  axios.post("http://localhost:8000/cars", {
      model:String(inputs.model),
      make:String(inputs.make),
      registration:Number(inputs.registration),
      owner:String(inputs.owner),
      previousowner:String(inputs.previousowner),
      // get an image address an copy it into the folder to display the image
      image:String(inputs.image)
    }).then(res => res.data)
  }
  // navigates the user to the cars page once the car has been added
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs)
    sendRequest().then(() => history('/cars'))
  }
  // the form for when the  user wants to add a car to the list
  return (
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
  )
}

export default Addcar