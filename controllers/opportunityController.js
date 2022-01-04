const mongoose = require("mongoose");
const opportunity = require("../models/opportunity");
// declare models


const { Opportunity } = require('../models/opportunity');
const Societe = require("../models/societe");
const Status = require("../models/status");


exports.list_opportunity =  async function(req,res){
    try{
        
        const list_opp =  await Opportunity.find({}).exec()
        res.send(list_opp)
    }catch{
        res.status(404)
        res.send("object introuvable")
    }    
}
exports.add_opportunity = async function(req, res){
    
    // add candidate
    const opportunity = new opportunity({
        title: req.body.opportunity.title,
        description:req.body.opportunity.description ,
        max_renumeration : req.body.opportunity.max_renumeration,
        min_renumeration : req.body.opportunity.min_renumeration, 
  
})
    const societe = await Societe.findByID(req.societe_id)
    const status = await Status.findByID(req.status_id)
    const contrat = await Contrat.findByID(req.contrat_id)
    opportunity.societe_id = societe._id 
    opportunity.contrat_id = contrat._id
    opportunity.status_id=status._id

    await opportunity.save()
    res.send(opportunity)
    console.log("Done")
}
