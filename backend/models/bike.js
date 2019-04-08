'use strict'

const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const BikeSchema = new Schema({
    name: String,
    kms: String,
    description: String,
    matches: [{
        type: Schema.Types.ObjectId,
        ref: 'Match'
    }],
    ratings: [
        {
            numberOfStars: Number,
            created: { 
                type: Date,
                default: Date.now
            }
        }
    ]
})


module.exports = mongoose.model('Bike', BikeSchema)