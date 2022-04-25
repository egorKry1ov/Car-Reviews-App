
const Car = require('../models/Car')
const cars = require('./cars.json')

Car.deleteMany({})
    .then(() => {
        Car.insertMany(cars)
            .then(console.log)
            .catch(console.error)
    })