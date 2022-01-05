const mongoose = require("mongoose");
var Opportunity = require("../models/opportunity");
// declare models
var Candidate = require("../models/candidat")

var OpportunityCond = require("../models/opportunity_cond");
const Societe = require("../models/societe");
const Status = require("../models/status");
const Contrat = require("../models/contrat")

var Opportunity  = require("../models/opportunity")


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
    
    const opportunity = new Opportunity({
        title: req.body.opportunity.title,
        description:req.body.opportunity.description ,
        max_renumeration : req.body.opportunity.max_renumeration,
        min_renumeration : req.body.opportunity.min_renumeration, 
        })
    console.log(opportunity)
    const soc=req.body.opportunity.societe_id
    const societe = await Societe.findOne({ _id:soc})
    const status = await Status.findOne({ _id:req.body.opportunity.status_id})
    const contrat = await Contrat.findOne({ _id:req.body.opportunity.contrat_id})
    opportunity.societe_id = societe._id 
    opportunity.contrat_id = contrat._id
    opportunity.status_id=status._id

    await opportunity.save()
    res.send(opportunity)
    console.log("Done")
}
exports.postuler = async function(req, res){
    const opp_cond = new OpportunityCond()
    const opportunity = await Opportunity.findOne({ _id:req.body.opportunity.id_opportunity})
    const condidat = await Candidate.findOne({ _id:req.body.opportunity.id_condidat})
    opp_cond.id_condidat = condidat._id 
    opp_cond.id_opportunity = opportunity._id 
    await opp_cond.save()
    res.send(opp_cond)
    console.log("Done")
}