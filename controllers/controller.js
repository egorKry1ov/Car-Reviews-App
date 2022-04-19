const express = require('express')
const Car = require('../models/Car')

const router = express.Router()

router.get('/', (req, res) => {
    Car.find({})
    .then((cars) => res.render('index', { data: cars }))
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
        (items) => res.redirect('/')
    );
});

router.get('/new', (req, res) => {
    res.render('new')
})

router.get('/:id', (req, res) => {
    Car.findById(req.params.id)
    .then(cars => {
        res.render('description', { data: cars })
    })
})

router.get('/rating/:id', (req, res) => {
    Car.findById(req.params.id)
    .then(cars => {
        res.render('rating', { data: cars })
    })
})


module.exports = router