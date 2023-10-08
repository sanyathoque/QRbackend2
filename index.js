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

// Connect to DB
// mongoose.connect("mongodb+srv://Sanyat:Sanyat1234@cluster0.r6sod.mongodb.net/social?retryWrites=true&w=majority", { useNewUrlParser: true })
// .then(() => console.log('Connected to dB'))
// .catch((err) => console.log(err))
// Connect to DB
mongoose.connect("mongodb+srv://dBUser:dBUser@atlascluster.dp8oxjp.mongodb.net/social?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(() => console.log('Connected to dB'))
.catch((err) => console.log(err))


//Middeware
app.use(express.json())
app.use(cookieParser());
app.use(cors());
//Route Middlewares
app.use('/api/auth',authRoute)
// app.use('/api/clients',usersRoute)


app.listen(5000, () => console.log('Server Up and Running'))

