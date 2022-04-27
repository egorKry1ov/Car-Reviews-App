const express = require('express')
const New = require('../models/New')

const router = express.Router()

router.get('/', (req, res) => {
    New.find({})
    .then((news) => res.render('new_index', { data: news }))
})


router.post("/", (req, res) => {
    New.create(req.body)
        .then(() => res.redirect('/news'))
        console.log()
});

router.post("/", (req, res) => {
    New.find(req.body)
        .then((news) => res.render('new_index', { data: news}))
        console.log()
});

router.delete("/:id", (req, res) => {
    New.findOneAndRemove({ _id: req.params.id }).then((items) =>
        res.redirect('/news')
    );
});

router.put("/:id", (req, res) => {
    New.findOneAndUpdate({ _id: req.params.id }, req.body).then(
        (items) => res.redirect('/news')
    );
});

router.get('/new', (req, res) => {
    res.render('new_new')
})

router.get('/:id', (req, res) => {
    New.findById(req.params.id)
    .then(news => {
        res.render('new_description', { data: news })
    })
})

router.get('/edit/:id', (req, res) => {
    New.findById(req.params.id)
    .then(items => {
        res.render('new_edit', items)
    })
})



module.exports = router