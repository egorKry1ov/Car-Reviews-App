
const Truck = require('../models/Truck')
const trucks = require('./trucks.json')

Truck.deleteMany({})
    .then(() => {
        Truck.insertMany(trucks)
            .then(console.log)
            .catch(console.error)
    })