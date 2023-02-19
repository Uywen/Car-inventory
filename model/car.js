const mongoose = require('mongoose');

const Schema = mongoose.Schema;


// the mongoose schema containing all the information with the fields 
// that i want in my database
const carSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    registration: {
        type: Number,
        required: true
    },
    owner: {
         type:String,
         required:true
    },
    previousowner: {
       type: String,
       required: true
    },
    image : {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("car",carSchema)