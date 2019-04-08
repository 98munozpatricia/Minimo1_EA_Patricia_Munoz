'use strict'

const Station = require('../models/stations')


//Create station
function createStation(req, res){
    console.log(req.body)
    let station = new Station()
    station.name = req.body.name
    station.state= req.body.state
    station.description=req.body.description
    
    station.save((err, stationStored) => {
        if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({station: stationStored})
    })
}



//Get all stations
function getStations(req, res){
    Stations.find({}, (err, stations)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if(!stations) return res.status(404).send({message: `No existen productos`})
        
        res.status(200).send(stations)
    })
}



module.exports = {
    getStations,
     
}