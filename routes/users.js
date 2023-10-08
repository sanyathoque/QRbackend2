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
//                 license: user['license'], cartype: user['cartype'], geolocation: user['geolocation'],
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
//                 name: user['name'], email: user['email'], phone: user['phone'], driver: user['driver'], rider: user['rider'],
//                 license: user['license'], cartype: user['cartype'], geolocation: user['geolocation'],
//                 messages: user['messages'], status: user['status'], facebook: user['facebook']
//             })
//         });
//         let drivers = filtered_allUsers.filter(driver => {
//             if (driver.driver == true && driver.status=="true") { return driver }
//         })
//         // console.log('drivers', drivers)
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
//                 name: user['name'], email: user['email'], phone: user['phone'], driver: user['driver'], rider: user['rider'],
//                 license: user['license'], cartype: user['cartype'], geolocation: user['geolocation'],
//                 messages: user['messages'], status: user['status'], facebook: user['facebook']
//             })
//         });
//         let riders = filtered_allUsers.filter(rider => {
//             if (rider.rider == true && rider.status=="true") { return rider }
//         })
//         // console.log('riders', riders)
//         // if (riders.length==0) { return res.json("no data") }
//         return res.json(riders)
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
// })

// router.get('/:id', async (req, res) => {
//     try {
//         let user = await User.findById(req.params.id)
//         if (user == null) { return res.status(404).json({ message: "Cannot find user" }) }
//         // console.log('riders', user)
//         res.json(user)
//     } catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
// })

// router.patch('/geolocation/:id', async (req, res) => {
//     // if (req.body.geolocation != null) { req.body.geolocation = [0,0] }
//     // console.log(req.body.geolocation)
//     try {
//         let user = await User.findById(req.params.id)
//         if (user == null) { return res.status(404).json({ message: "Cannot find user" }) }
//         // let newUser = await user.save()
//         if (req.body.geolocation) {
//             user.geolocation = req.body.geolocation
//         }
//         let updatedUser = await user.save()
//         // console.log('updatedUser', updatedUser)
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
//                 from: req.body.messages.from,
//                 to: req.body.messages.to,
//                 budget: req.body.messages.budget
//             }
//             user.messages = message
//         }
//         if (req.body.status=="false" && req.body.messages) {
//             // user.messages = [req.body.messages]
//             message = {
//                 sender: req.body.messages.sender,
//                 receiver: req.body.messages.receiver,
//                 from: req.body.messages.from,
//                 to: req.body.messages.to,
//                 budget: req.body.messages.budget
//             }
//             user.messages = []
//         }
        
//         if (req.body.status) { 
//             user.status =  req.body.status
//         }
//         // console.log('req_body',req.body)
//         let updatedUser = await user.save()
//         // console.log('updatedUser', updatedUser)
//         res.json(updatedUser)
//     } catch (err) {
//         return res.status(400).json({ message: err.message })
//     }
// })
// router.patch('/messages/:email1/:email2/:id', async (req, res) => {
//     console.log('rider-email1, driver-email2, id',req.params.email1,req.params.email2,req.params.id)
//     console.log('counter',req.body)
//     console.log('counter array',req.body.counter)
//     console.log('counter array1',req.body.counter[0])
//     console.log('counter array2',req.body.counter[1])
//     // if (req.body.geolocation != null) { req.body.geolocation = [0,0] }
//     try {
//         let email1 = req.params.email1
//         // let userRider = await User.findById(req.params.id)
//         let userRider = await User.findOne({email: email1})
//         console.log('userRider',userRider)
//         if (userRider == null) { return res.status(404).json({ message: "Cannot find user" }) }
//         // let newUser = await user.save()
//         if (req.body.counter.length>0) {
//             let newCounter = req.body.counter
//             userRider.messages.counter.push(newCounter)
//         }
//         let updatedUser = await userRider.save()
//         // console.log('updatedUser', updatedUser)
//         res.json(updatedUser)
//     } catch (err) {
//         return res.status(400).json({ message: err.message })
//     }
// })
// module.exports = router