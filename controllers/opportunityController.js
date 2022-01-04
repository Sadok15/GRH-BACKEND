const mongoose = require("mongoose");
const opportunity = require("../models/opportunity");

// declare models


const { Opportunity } = require('../models/opportunity');

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
        min_renumeration : req.body.opportunity.min_renumeration,  // add cv 
  
})
}
