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
        return res.json({ 
            success: true, 
            message: "Valide",
            list_opp: list_opp
            
        });


   }catch(error){       
        return res.json({ 
            success: false, 
            message: "Erreur : " + error.message
        });
    }    
}

exports.list_opportunity_cond =  async function(req,res){
    console.log(req.params.id)
    try{
        const cands = await Candidate.findOne({ _id:req.params.id})

        const list_opp= await OpportunityCond.find({id_condidat:cands._id}).populate('id_opportunity').exec()
        return res.json({ 
            success: true, 
            message: "Valide",
            list_opp: list_opp
            
        });

   }catch(error){       
        return res.json({ 
            success: false, 
            message: "Erreur : " + error.message
        });
    }    
}
exports.add_opportunity = async function(req, res){
    try {
        
        // get status and contrat objects
        let status = await Status.findById(req.body.status).exec()

        let contrat = await Contrat.findById(req.body.contrat).exec()

        const opportunity = new Opportunity({
        title: req.body.title,
        description:req.body.description ,
        max_renumeration : req.body.max_renumeration,        
        min_renumeration : req.body.min_renumeration, 
        adresse_soc  : req.body.Adresse_soc ,
        contrat_id : contrat._id,
        status_id: status._id
            })


        await opportunity.save()
        return res.json({ 
            success: true, 
            message: "Opportunitée crée avec succès",
            opp: opportunity
            
        });


    } catch (error) {
        return res.json({ 
            success: false, 
            message: "Erreur : " + error.message
          });
    }
    
}

exports.postuler = async function(req, res){
    try {
        const opp_cond = new OpportunityCond()
        const opportunity = await Opportunity.findOne({ _id:req.body.id_opportunity})
        const condidat = await Candidate.findOne({ _id:req.body.id_cand})

        opp_cond.id_condidat = condidat._id 
        opp_cond.id_opportunity = opportunity._id 
        await opp_cond.save()

        return res.json({ 
            success: true, 
            message: "Candidature affecté avec succès",
            candidature: opp_cond
            
        });

    } catch (error) {
        return res.json({ 
            success: false, 
            message: "Erreur : " + error.message
        });
    }
    
}
exports.get_opportunity =  async function(req,res){
   
    try{
        const opportunity =  await  Opportunity.findOne({ _id:req.params.id})

        let status = await Status.findById(opportunity.status_id).exec()
        let contrat = await Contrat.findById(opportunity.contrat_id).exec()

        opportunity.status_id = status
        opportunity.contrat_id = contrat

        return res.json({ 
            success: true, 
            message: "Valide",
            opp:opportunity
        });
        
    }catch(error){
        return res.json({ 
            success: false, 
            message: "Erreur : " + error.message
        });
    }    
}


exports.update_opp =  async function(req,res){
   
    try{
        const opportunity =  await  Opportunity.findById(req.body._id)

        opportunity.title = req.body.title
        opportunity.description = req.body.description
        opportunity.adresse_soc = req.body.Adresse_soc
        opportunity.max_renumeration = req.body.max_renumeration
        opportunity.min_renumeration = req.body.min_renumeration
        opportunity.status_id = req.body.status
        opportunity.contrat_id = req.body.contrat
          opportunity.save()
       
        return res.json({ 
            success: true, 
            message: "modification faite avec succès",
            opp:opportunity
        });
        
    }catch(error){
        return res.json({ 
            success: false, 
            message: "Erreur : " + error.message
        });
    }    
}