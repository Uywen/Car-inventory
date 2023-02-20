const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/car-routes")
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')


// all the middleware used
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

// the url param to view the cars
app.use('/cars', router)

// my mongodb database information
// if the database is connected to properly it would display "database connected successfully"
mongoose.connect("your URI")
.then(() => console.log("Database connected successfully"))
    .then(() => {
        // the url port number to access the information of the database on the webpage
        app.listen(8000)
    }).catch((err) => console.log(err))
