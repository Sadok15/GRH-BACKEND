const mongoose = require("mongoose");
const Opportunity = require("../models/opportunity");
// declare models



const Societe = require("../models/societe");
const Status = require("../models/status");
const Contrat = require("../models/contrat")


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
    const opportunity = new Opportunity({
        title: req.body.opportunity.title,
        description:req.body.opportunity.description ,
        max_renumeration : req.body.opportunity.max_renumeration,
        min_renumeration : req.body.opportunity.min_renumeration, 
  
})
    const soc=req.body.opportunity.societe_id
    const societe = await Societe.findOne({ _id:soc})
    console.log(societe)
    const status = await Status.findOne({ _id:req.body.opportunity.status_id})
    const contrat = await Contrat.findOne({ _id:req.body.opportunity.contrat_id})
    opportunity.societe_id = societe._id 
    opportunity.contrat_id = contrat._id
    opportunity.status_id=status._id

    await opportunity.save()
    res.send(opportunity)
    console.log("Done")
}
