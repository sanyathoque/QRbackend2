const router = require('express').Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation')
router.post('/register', async (req, res) => {
    //lets validate data before we a user
    // const { error } = registerValidation(req.body)
    // if (error) return res.status(400).send(error.details[0].message)

    //Checking if the user already exists
    const emailExist = await User.findOne({ email: req.body.email })
    if (emailExist) return res.status(400).send('email already exist')
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    //Create a new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        facebook: req.body.facebook,
        phone: req.body.phone,
        driver: req.body.driver,
        rider: req.body.rider,
        license: req.body.license,
        cartype: req.body.cartype,
        geolocation: req.body.geolocation
    })
    try {
        const savedUser = await user.save()
        console.log('saveUser',savedUser)
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
router.post('/login', async (req, res) => {
    //lets validate data before we a user
    // const { error } = loginValidation(req.body)
    // if (error) return res.status(400).send(error.details[0].message)

    //Checking if the user already exists
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).json('Email or Password is wrong')
    //If password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if (!validPass) return res.status(400).json('Invalid Password')

    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    // res.header('auth-token',token).json(token)
    res.json({
        _id: user._id,
        name: user['name'],
        email: user['email'],
        phone: user['phone'],
        facebook: user['facebook'],
        driver: user['driver'],
        rider: user['rider'],
        license: user['license'],
        cartype: user['cartype'],
        geolocation: user['geolocation'],
        status: user['status']
    })
    console.log('login',user['phone'])
    // res.send('Logging In...')
})

module.exports = router