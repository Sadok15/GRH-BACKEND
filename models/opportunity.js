
const mongoose = require('mongoose');
const opportunityModel = mongoose.Schema({
    title: { 
        type: String, 
    },
    description: {
        type: String
    },
    adresse_soc:{
       type:String
    },
    max_renumeration:{
        type: String
    },
    min_renumeration:{
        type: String
    },
    status_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Status"
    }
    ,
    contrat_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Contrat"
        
    }
  })





  module.exports = Opportunity= mongoose.model('Opportunity', opportunityModel);


  