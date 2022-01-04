const mongoose = require("mongoose");



const Societe = require("../models/societe");


exports.add_societe = async function(req, res){
    
    const societe = new Societe({
        nom: req.body.societe.nom,
        description: req.body.societe.description,
        adresse: req.body.societe.adresse,
        postal_code : req.body.societe.postal_code ,
    }) 
    await societe.save()

  
    

    res.send(societe)
    console.log("Societe Ajouté")
}
