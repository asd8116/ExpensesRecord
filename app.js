const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const app = express()
const mongoose = require('mongoose')

// 判別開發環境
if (process.env.NODE_ENV !== 'production') {
  // 如果不是 production 模式
  require('dotenv').config() // 使用 dotenv 讀取 .env 檔案
}

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

require('./config/passport')(passport)

app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated() // 辨識是否已經登入
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

// routes
app.use('/', require('./routes/home'))
app.use('/records', require('./routes/records'))
app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auths'))

app.listen(3000, () => {
  console.log('App is running localhost:3000 !')
})
