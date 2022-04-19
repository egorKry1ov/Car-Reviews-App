const mongoose = require('../db/connection')

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    img: String,
    year: Number,
    description: String,
    rating: Number,
    pros: Array,
    cons: Array,

})

const Car = mongoose.model("Car", CarSchema)

module.exports = Car