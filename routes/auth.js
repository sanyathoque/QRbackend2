const router = require('express').Router()
const Vehicle = require('../model/Vehicle')
const Driver = require('../model/Driver')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const fs = require("fs");
const multer = require("multer");
const { registerValidation, loginValidation } = require('../validation')


var dir = "uploads";   // PATH TO UPLOAD FILE
if (!fs.existsSync(dir)) {  // CREATE DIRECTORY IF NOT FOUND
    fs.mkdirSync(dir, { recursive: true });
}
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: fileStorageEngine }).array("files", 6)

router.post('/vehicle_register', async (req, res) => {
    //lets validate data before we a user
    // const { error } = registerValidation(req.body)
    // if (error) return res.status(400).send(error.details[0].message)

    //Checking if the user already exists
    // const emailExist = await User.findOne({ email: req.body.email })
    // if (emailExist) return res.status(400).send('email already exist')
    //Hash password
    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(req.body.password, salt)
    //Create a new User
    upload(req, res, function (err) {
        console.log('request files', req.files[0].originalname, req.files[1].originalname, req.files[2].originalname, req.files[3].originalname,
            req.files[4].originalname, req.files[5].originalname)
        console.log('request Body =>', req.body.name)
        const vehicle = new Vehicle({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            DOB: req.body.DOB,
            male: req.body.male,
            female: req.body.female,
            car: req.body.car,
            bike: req.body.bike,
            auto: req.body.auto,
            driver: req.body.driver,
            vehicle_detail: req.body.vehicle_detail,
            appearance: req.body.appearance,
            RC: req.body.RC,
            vehicle_insurance: req.body.vehicle_insurance,
            tax_permit: req.body.tax_permit,
            vehicle_fitness: req.body.vehicle_fitness,
            profile_picture: {
                data: fs.readFileSync("uploads/" + req.files[0].originalname),
                contentType: "image/png",
            },
            appearance_frontside: {
                data: fs.readFileSync("uploads/" + req.files[1].originalname),
                contentType: "image/png",
            },
            appearance_backside: {
                data: fs.readFileSync("uploads/" + req.files[2].originalname),
                contentType: "image/png",
            },
            vehicle_insurance: {
                data: fs.readFileSync("uploads/" + req.files[3].originalname),
                contentType: "image/png",
            },
            vehicle_fitness: {
                data: fs.readFileSync("uploads/" + req.files[4].originalname),
                contentType: "image/png",
            },
            registration_certificate: {
                data: fs.readFileSync("uploads/" + req.files[5].originalname),
                contentType: "image/png",
            },
        })
        vehicle.save().then((res) => {
            console.log('vehicle', vehicle)
        }).catch((err) => {
            res.status(400).json({ message: err.message })
        })
        res.status(201).json(vehicle)
    })
})

router.post('/driver_register', async (req, res) => {
    upload(req, res, function (err) {
        console.log('request files', req.files)
        console.log('request Body =>', req.body)
        const driver = new Driver({
            vehicle_detail: req.body.vehicle_detail,
            driver_Liscence: req.body.driver_Liscence,
            driver_Liscence_number: req.body.driver_Liscence_number,
            aadhar_card: req.body.aadhar_card,
            bank_details: req.body.bank_details,
            liscence_number: req.body.liscence_number,
            account_number: req.body.account_number,
            reenter_account_number: req.body.reenter_account_number,
            ifsc_code: req.body.ifsc_code,
            driving_liscense: {
                data: fs.readFileSync("uploads/" + req.files[0].originalname),
                contentType: "image/png",
            },
            aadhar_card: {
                data: fs.readFileSync("uploads/" + req.files[1].originalname),
                contentType: "image/png",
            },
        })
        driver.save().then((res) => {
            console.log('driver', driver)
        }).catch((err) => {
            res.status(400).json({ message: err.message })
        })
        res.status(201).json(driver)
    })
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
    console.log('login', user['phone'])
    // res.send('Logging In...')
})

module.exports = router