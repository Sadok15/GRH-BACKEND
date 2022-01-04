const mongoose = require("mongoose");



const Status = require("../models/status");


exports.add_status = async function(req, res){
    const status = new Status({
        libelle: req.body.status.libelle,
    }) 
    console.log("here")
    await status.save()
    res.send(status)
    console.log("status Ajouté")
}