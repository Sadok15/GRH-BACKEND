
const mongoose = require('mongoose');
const opportunityModel = mongoose.Schema({
    title: { 
        type: String, 
    },
    description: {
        type: String
    },
    societe_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Societe"

    },
    max_renumeration: {
        type: Number
    },
    min_renumeration: {
        type: Number
    },
    data_limit:{
        type : Date
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





const opportunity_condModel = mongoose.Schema({
    id_opportunity: { 
        type:mongoose.Schema.Types.ObjectId,
        ref: "Opportunity"
    },
    id_condidat: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Condidat"
    },
  })
  
  module.exports = Opportunity= mongoose.model('Opportunity', opportunityModel);
  module.exports = Opportunity_condidat= mongoose.model('Opportunity_condidat', opportunity_condModel);

  