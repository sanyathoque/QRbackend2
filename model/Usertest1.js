// const randomstring = require("randomstring")
// const rrag = require('real-random-address');
// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         min: 6,
//         max: 255
//     },
//     email: {
//         type: String,
//         required: true,
//         min: 6,
//         max: 255
//     }, 
//     password: {
//         type: String,
//         required: true,
//         min: 6,
//         max: 1024,
//     },
//     phone: {
//         type: Number,
//     },
//     driver: {
//         type: Boolean,
//         default: false,
//         required: true,
//     },
//     rider: {
//         type: Boolean,
//         default: true,
//         required: true,
//     }, 
//     license: {
//         type: String,
//         default: randomstring.generate(13),
//     },
//     cartype: {
//         type: String,
//         default: "Toyota Sedan",
//     },
//     geolocation: {
//         type: [Number],
//         default: [23.822058, 90.418037]
//     },
//     status: {
//         type: String,
//         default: "false",
//     },
//     messages:   [{
//         sender: {
//             type: String,
//         },
//         receiver: {
//             type: String,
//         },
//         message: {
//             type: String,
//         },
//         sent:{
//             type: Date,
//             default: Date.now
//         },
//     }],
//     date: {
//         type: Date,
//         default: Date.now,
//     }
// })

// module.exports = mongoose.model('Users', userSchema)