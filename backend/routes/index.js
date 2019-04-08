'use strict'

const express = require('express')
const bikeCtrl = require('../controllers/bike')
const stationCtrl = require('../controllersstation')
const api = express.Router()

//Get Functions

api.get('/stations', stationCtrl.getStations);
api.get('/stations/:id', stationCtrl.getStationsData);
api.get('/stations/bikes/:id', stationCtrl.getAvailableBikes);
api.get('/bikes', bikeCtrl.getBikes);

//Post Functions
api.post('/stations', stationCtrl.postStation)
api.post('/bikes', bikeCtrl.postBike)
//Put Functtions
api.put('/stations', stationCtrl.addBike);
api.put('/stations/bikes/:id', bikeCtrl.deleteBike);
module.exports = api
