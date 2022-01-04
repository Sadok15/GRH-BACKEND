const mongoose = require("mongoose");



const Contrat = require("../models/contrat");


exports.add_contrat = async function(req, res){
    const contrat = new Contrat({
        libelle: req.body.contrat.libelle,
    }) 
    await contrat.save()
    res.send(contrat)
    console.log("contrat Ajouté")
}