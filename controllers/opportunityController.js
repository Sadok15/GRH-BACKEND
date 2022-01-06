const mongoose = require("mongoose");
var Opportunity = require("../models/opportunity");

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

exports.list_opportunity_cond =  async function(req,res){
    console.log('here')
    list=[]
    try{
        const cands =  await Candidate.find(
            { mail: req.body.mail },
            { mdp: req.body.mdp }
             ).exec()
        const opp_cond =  await OpportunityCond.find({ id_condidat:cands._id})
        {
         
         }
        let fLen = opp_cond.length
        for (let i = 0; i < fLen; i++) {
            const societe = await Societe.findOne({ _id:list_opp[i].societe_id})
            list_opp[i].description=societe.nom
            }
        res.send(list)
   }catch{       
        res.status(404)
        res.send("object introuvable")
    }    
}
exports.add_opportunity = async function(req, res){
    
    const status = new Status({
        libelle: req.body.status.libelle,
    }) 
    console.log("here")
    await status.save()
    const contrat = new Contrat({
        libelle: req.body.contrat.libelle,
    }) 
    await contrat.save()
    const opportunity = new Opportunity({
    title: req.body.opportunity.title,
    description:req.body.opportunity.description ,
    max_renumeration : req.body.opportunity.max_renumeration,        
    min_renumeration : req.body.opportunity.min_renumeration, 
    adresse_soc  : req.body.opportunity.Adresse_soc ,
         })
    opportunity.contrat_id = contrat._id
    opportunity.status_id=status._id

    await opportunity.save()
    res.send(opportunity)
    console.log("Done")
}
exports.postuler = async function(req, res){
    
    const opp_cond = new OpportunityCond()
    const opportunity = await Opportunity.findOne({ _id:req.body.id_opportunity})
    const condidat = await Candidate.findOne({ mail:req.body.mail, mdp:req.body.mdp})
    opp_cond.id_condidat = condidat._id 
    opp_cond.id_opportunity = opportunity._id 
    await opp_cond.save()
    res.send(opp_cond)
    console.log("Done")
}
exports.get_opportunity =  async function(req,res){
   
    try{
        const opportunity =  await  Opportunity.findOne({ _id:req.params.id})
       
        res.send(opportunity)
        
    }catch{
        res.status(404)
        res.send("object introuvable")
    }    
}
