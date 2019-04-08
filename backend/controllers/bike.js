'use strict'

const Bike = require('../models/bike')


//Create user
function createBike(req, res){
    console.log(req.body)
    let bike = new Bike()
    bike.name = req.body.name
    bike.kms = req.body.kms
    bike.description = req.body.description
   

    bike.save((err, userStored) => {
        if(err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

        res.status(200).send({user: userStored})
    })
}




//Get one user by username
function getBike1 (req, res){
    let name = req.params.name
    console.log(name)

    Bike.findOne({name: name}, (err, bike) =>{
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if(!user) return res.status(404).send({message: `No existe el ususario`})

        res.status(200).send(user)
    })
}



module.exports = {
  getBike1
   
}