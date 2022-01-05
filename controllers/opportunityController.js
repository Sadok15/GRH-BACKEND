// declare models


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


