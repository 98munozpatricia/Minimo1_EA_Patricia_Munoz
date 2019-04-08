'use strict'

const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const BikeSchema = new Schema({
    name: String,
    kms: String,
    description: String,
})


module.exports = mongoose.model('Bike', BikeSchema)