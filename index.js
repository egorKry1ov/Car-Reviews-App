
const express = require('express')
const methodOverride = require('method-override')
const carController = require('./controllers/carController')
const truckController = require('./controllers/truckController')
const luxuryController = require('./controllers/luxuryController')
const newController = require('./controllers/newController')
const ejsLayouts = require('express-ejs-layouts')
const Car = require('./models/Car')
const Truck = require('./models/Truck')
const Luxury = require('./models/Luxury')
require('ejs')

const app = express()

app.use(express.static(__dirname + '/' + 'public'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/cars', carController)
app.use('/trucks', truckController)
app.use('/luxuries', luxuryController)
app.use('/news', newController)

// app.get('/home', (req, res) => {
//     res.render('home')
// })

app.get('/home', async (req, res) => {
try {
    const cars =  await Car.find({})

    return res.render('home', {data: cars})
} catch (error) {
    console.log(error)
}
})

// app.get('/home', (req, res) => {
//     Truck.find({})
//     .then((trucks) => res.render('home', { data: trucks }))
// })
// app.get('/home', (req, res) => {
//     Luxury.find({})
//     .then((luxuries) => res.render('home', { data: luxuries }))
// })

app.set('port', process.env.PORT || 4005)

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}` )
})