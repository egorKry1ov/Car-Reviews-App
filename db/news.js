
const New = require('../models/New')
const news = require('./news.json')

New.deleteMany({})
    .then(() => {
        New.insertMany(news)
            .then(console.log)
            .catch(console.error)
    })