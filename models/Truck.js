const mongoose = require('../db/connection')

const TruckSchema = new mongoose.Schema({
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
    url1: String,
    url2: String,
    url3: String,
    msrp: String

})

const Truck = mongoose.model("Truck", TruckSchema)

module.exports = Truck