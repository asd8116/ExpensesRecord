const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/records', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main'
  })
)

app.set('view engine', 'handlebars')

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(methodOverride('_method'))
app.use(flash())

app.use(
  session({
    secret: 'your secret key', // secret: 定義一組自己的私鑰（字串)
    resave: 'false',
    saveUninitialized: 'false'
  })
)

app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/', require('./routes/home'))
app.use('/records', require('./routes/records'))
app.use('/users', require('./routes/users'))

app.listen(3000, () => {
  console.log('App is running localhost:3000 !')
})
