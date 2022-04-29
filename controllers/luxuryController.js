const express = require('express')
const Luxury = require('../models/Luxury')

const router = express.Router()

router.get('/', (req, res) => {
    Luxury.find({})
    .then((luxuries) => res.render('luxury_index', { data: luxuries }))
})

router.post("/", (req, res) => {
    Luxury.create(req.body)
        .then(() => res.redirect('/luxuries'))
});

router.delete("/:id", (req, res) => {
    Luxury.findOneAndRemove({ _id: req.params.id }).then((items) =>
        res.redirect('/luxuries')
    );
});

router.put("/:id", (req, res) => {
    Luxury.findOneAndUpdate({ _id: req.params.id }, req.body).then(
        (items) => res.redirect('/luxuries')
    );
});

router.get('/new', (req, res) => {
    res.render('luxury_new')
})

router.get('/:id', (req, res) => {
    Luxury.findById(req.params.id)
    .then(luxuries => {
        res.render('luxury_description', { data: luxuries })
    })
})

router.get('/edit/:id', (req, res) => {
    Luxury.findById(req.params.id)
    .then(items => {
        res.render('luxury_edit', items)
    })
})


module.exports = router