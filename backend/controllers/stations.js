'use strict'
const Bike = require('../models/bike')
const Station = require('../models/stations')
const stationCtrl ={}

//Create station
stationCtrl.postStation = async (req, res) =>{
    const station = new Station({
        name: req.body.name,
        state: req.body.state,
        description: req.body.description
    })
    console.log(req.body)
    try {
        await station.save();
        res.status(200).send({message: "Success"}, )
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
  
}



//Get all stations
stationCtrl.getStations = async(req, res)=>{
    const station = await Station.find()
    res.json(station)
}

//Add a bike to a station
stationCtrl.addBike = async(req,res)=>{
    const stationId = req.body.stationId
    const bikeId = req.body.bikeId
    let stationUpdate= await Station.findOneAndUpdate({_id: stationId}, {$addToSet:{bike: bikeId}});
    res.status(200).send({message: "bike added"})
}

//Show station
stationCtrl.getStationsData = async (req,res) => {
    console.log(req.params.id);
    const station = await Station.findById(req.params.id);
    res.json(station);
}

//Show available bikes
stationCtrl.getAvailableBikes = async (req, res)=> {
    try{
        const _id = req.params.stationId;
        let station = await Station.findById(_id).populate('bikes');
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
}


module.exports = stationCtrl