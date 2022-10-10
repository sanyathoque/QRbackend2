// const router = require('express').Router()
// const User = require('../model/User')
// const verify = require('./verifyToken')

// router.get('/allUsers', async (req, res) => {
//     try {
//         let allUsers = await User.find()
//         let filtered_allUsers = []
//         allUsers.forEach(user => {
//             filtered_allUsers.push({
//                 name: user['name'], email: user['email'], driver: user['driver'], rider: user['rider'],
//                 license: user['license'], cartype: user['cartype'], geolocation: user['geolocation']
//             })
//         });
//         return res.json(filtered_allUsers)
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
// })

// router.get('/drivers', async (req, res) => {
//     try {
//         let allUsers = await User.find()
//         let filtered_allUsers = []
//         allUsers.forEach(user => {
//             filtered_allUsers.push({
//                 name: user['name'], email: user['email'], driver: user['driver'], rider: user['rider'],
//                 license: user['license'], cartype: user['cartype'], geolocation: user['geolocation']
//             })
//         });
//         let drivers = filtered_allUsers.filter(driver => {
//             if (driver.driver == true) { return driver }
//         })
//         console.log('drivers', drivers)
//         return res.json(drivers)
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
// })

// router.get('/riders', async (req, res) => {
//     try {
//         let allUsers = await User.find()
//         let filtered_allUsers = []
//         allUsers.forEach(user => {
//             filtered_allUsers.push({
//                 name: user['name'], email: user['email'], driver: user['driver'], rider: user['rider'],
//                 license: user['license'], cartype: user['cartype'], geolocation: user['geolocation']
//             })
//         });
//         let riders = filtered_allUsers.filter(rider => {
//             if (rider.rider == true) { return rider }
//         })
//         console.log('riders', riders)
//         return res.json(riders)
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         let user = await User.findById(req.params.id)
//         if (user == null) { return res.status(404).json({ message: "Cannot find user" }) }
//         console.log('riders', user)
//         res.json(user)
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
// })

// router.patch('/:id', async (req, res) => {
//     // if (req.body.geolocation != null) { req.body.geolocation = [0,0] }
//     console.log(req.body.geolocation)
//     try {
//         let user = await User.findById(req.params.id)
//         if (user == null) { return res.status(404).json({ message: "Cannot find user" }) }
//         // let newUser = await user.save()
//         if (req.body.geolocation) {
//             user.geolocation = req.body.geolocation
//         }
//         let updatedUser = await user.save()
//         console.log('updatedUser', updatedUser)
//         res.json(updatedUser)
//     } catch (err) {
//         return res.status(400).json({ message: err.message })
//     }
// })

// router.patch('/messages/:id', async (req, res) => {
//     // if (req.body.geolocation != null) { req.body.geolocation = [0,0] }
//     try {
//         let user = await User.findById(req.params.id)
//         if (user == null) { return res.status(404).json({ message: "Cannot find user" }) }
//         // let newUser = await user.save()
//         if (req.body.status=="true" && req.body.messages) {
//             // user.messages = [req.body.messages]
//             message = {
//                 sender: req.body.messages.sender,
//                 receiver: req.body.messages.receiver,
//                 message: req.body.messages.message
//             }
//             user.messages.push(message)
//         }
//         if (req.body.status=="false" && req.body.messages) {
//             // user.messages = [req.body.messages]
//             message = {
//                 sender: req.body.messages.sender,
//                 receiver: req.body.messages.receiver,
//                 message: req.body.messages.message
//             }
//             user.messages = []
//         }
        
//         if (req.body.status) { 
//             user.status =  req.body.status
//         }
//         console.log('req_body',req.body)
//         let updatedUser = await user.save()
//         console.log('updatedUser', updatedUser)
//         res.json(updatedUser)
//     } catch (err) {
//         return res.status(400).json({ message: err.message })
//     }
// })

// module.exports = router