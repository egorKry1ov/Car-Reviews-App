const express = require('express')
const Car = require('../models/Car')

const router = express.Router()

router.get('/', (req, res) => {
    Car.find({})
    .then((cars) => res.render('car_index', { data: cars }))
})


router.post("/", (req, res) => {
    Car.create(req.body)
        .then(() => res.redirect('/cars'))
        console.log()
});


router.delete("/:id", (req, res) => {
    Car.findOneAndRemove({ _id: req.params.id }).then((items) =>
        res.redirect('/cars')
    );
});

router.put("/:id", (req, res) => {
    Car.findOneAndUpdate({ _id: req.params.id }, req.body).then(
        (items) => res.redirect('/cars')
    );
});

router.get('/new', (req, res) => {
    res.render('car_new')
})

router.get('/:id', (req, res) => {
    Car.findById(req.params.id)
    .then(cars => {
        res.render('car_description', { data: cars })
    })
})

router.get('/edit/:id', (req, res) => {
    Car.findById(req.params.id)
    .then(items => {
        res.render('car_edit', items)
    })
})


module.exports = router