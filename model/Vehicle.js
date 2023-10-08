const randomstring = require("randomstring")
const rrag = require('real-random-address');
const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    lastname: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    DOB: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    male: {
        type: Boolean,
        default: false,
        required: true,
    },
    female: {
        type: Boolean,
        default: false,
        required: true,
    },
    car: {
        type: Boolean,
        default: false,
        required: true,
    },
    bike: {
        type: Boolean,
        default: false,
        required: true,
    },
    auto: {
        type: Boolean,
        default: false,
        required: true,
    },
    driver: {
        type: Boolean,
        default: false,
        required: true,
    },
    vehicle_detail: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    appearance: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    RC: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    vehicle_insurance: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    tax_permit: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    vehicle_fitness: {
        type: String,
        required: false,
        min: 6,
        max: 255
    },
    profile_picture: {
        data: Buffer,
        contentType: String,
    },
    appearance_frontside: {
        data: Buffer,
        contentType: String,
    },
    appearance_backside: {
        data: Buffer,
        contentType: String,
    },
    vehicle_insurance: {
        data: Buffer,
        contentType: String,
    },
    vehicle_fitness: {
        data: Buffer,
        contentType: String,
    },
    registration_certificate: {
        data: Buffer,
        contentType: String,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Vehicle', vehicleSchema)