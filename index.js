// require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const controller = require('./controllers/controller')
const ejsLayouts = require('express-ejs-layouts')
require('ejs')

const app = express()

app.use(express.static(__dirname + '/' + 'public'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/cars', controller)

app.get('/', (req, res) => {
    res.render('home')
})

app.set('port', process.env.PORT || 4005)

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}` )
})