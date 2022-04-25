
const Luxury = require('../models/Luxury')
const luxuries = require('./luxuries.json')

Luxury.deleteMany({})
    .then(() => {
        Luxury.insertMany(luxuries)
            .then(console.log)
            .catch(console.error)
    })