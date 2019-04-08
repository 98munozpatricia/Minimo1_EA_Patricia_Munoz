'use strict'

const Bike = require('../models/bike')
const bikeCtrl = {}

bikeCtrl.postBike = async(req, res)=> {
    console.log(req.body)
    let bike = new Bike()
    bike.name = req.body.name
    bike.kms = req.body.kms
    bike.description = req.body.description
    bike.status= req.body.status
    console.log(bike)
    try {
        await bike.save()
        res.status(200).send({message: "Success"})
    } catch (err){
        res.status(500).send(err)
        console.log(err)
    }
   
}

//Get All bikes
bikeCtrl.getBike1 = async(req, res)=>{
    const bikes=await Bike.find()
    res.json(bikes)
}
//Deleta bikes

bikeCtrl.deleteBike = async (req,res) => {
    const bike = await Bike.findById(req.params.id);
    console.log(req.params.id);
    console.log(bike.state)

    let bikeUpdated = Bike.findOneAndReplace({_id: bike._id}, {state: true, new: false})
         
    res.status(200).send({message: "Eliminado"})
    console.log(bike.state)
}


module.exports = bikeCtrl