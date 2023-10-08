const randomstring = require("randomstring")
const rrag = require('real-random-address');
const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    vehicle_detail: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    driver_Liscence: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    driver_Liscence_number: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    aadhar_card: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    bank_details: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    liscence_number: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    account_number: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    reenter_account_number: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    ifsc_code: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    driving_liscense: {
        data: Buffer,
        contentType: String,
    },
    aadhar_card: {
        data: Buffer,
        contentType: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Driver', driverSchema)