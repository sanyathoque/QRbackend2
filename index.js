const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
var cors = require('cors');
const cookieParser = require("cookie-parser")
//Import Routes
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
dotenv.config()

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
() => { console.log('connected to dB') })

//Middeware
app.use(express.json())
app.use(cookieParser());
app.use(cors());
//Route Middlewares
app.use('/api/auth',authRoute)
app.use('/api/clients',usersRoute)
app.use('/api/clients',usersRoute)

app.listen(5000, () => console.log('Server Up and Running'))

