'use strict'

const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const StationSchema = new Schema({
    name: String,
    state: Boolean,
    description: String,
    bikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bikes',
        unique: false
    }],
   
   
})



module.exports = mongoose.model('Station', StationSchema)