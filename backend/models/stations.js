'use strict'

const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const StationSchema = new Schema({
    name: String,
    state: Boolean,
    description: String,
    bikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Bikes'
    }],
   
   
})



module.exports = mongoose.model('Station', StationSchema)