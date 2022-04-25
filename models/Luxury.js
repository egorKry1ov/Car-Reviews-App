const mongoose = require('../db/connection')

const LuxurySchema = new mongoose.Schema({
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
    url3: String

})

const Luxury = mongoose.model("Luxury", LuxurySchema)

module.exports = Luxury