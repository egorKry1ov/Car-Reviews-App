const express = require('express')
const Truck = require('../models/Truck')

const router = express.Router()

router.get('/', (req, res) => {
    Truck.find({})
    .then((trucks) => res.render('truck_index', { data: trucks }))
})

router.post("/", (req, res) => {
    Truck.create(req.body)
        .then(() => res.redirect('/trucks'))
        console.log()
});

router.delete("/:id", (req, res) => {
    Truck.findOneAndRemove({ _id: req.params.id }).then((items) =>
        res.redirect('/trucks')
    );
});

router.put("/:id", (req, res) => {
    Truck.findOneAndUpdate({ _id: req.params.id }, req.body).then(
        (items) => res.redirect('/trucks')
    );
});

router.get('/new', (req, res) => {
    res.render('truck_new')
})

router.get('/:id', (req, res) => {
    Truck.findById(req.params.id)
    .then(trucks => {
        res.render('truck_description', { data: trucks })
    })
})

router.get('/edit/:id', (req, res) => {
    Truck.findById(req.params.id)
    .then(items => {
        res.render('truck_edit', items)
    })
})


module.exports = router