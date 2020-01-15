const express = require('express')
const path = require('path')
const logger = require('morgan')
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')

// load the env consts
require('dotenv').config()

require('./config/passport')
// create the Express app
const app = express()

// connect to the MongoDB with mongoose
require('./config/database')

// require our routes
const indexRoutes = require('./routes/index')
const studentsRoutes = require('./routes/students')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
  session({
    secret: 'SEI-DT-69!',
    resave: false,
    saveUninitialized: true,
  })
)
app.use(passport.initialize())
app.use(passport.session())

// mount all routes with appropriate base paths
app.use('/', indexRoutes)
app.use('/', studentsRoutes)

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!')
})

module.exports = app
