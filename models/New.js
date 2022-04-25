const mongoose = require('../db/connection')

const NewSchema = new mongoose.Schema({
    heading: String,
    img: String,
    date: String,
    description: String

})

const New = mongoose.model("New", NewSchema)

module.exports = New