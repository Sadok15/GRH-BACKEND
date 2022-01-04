const mongoose = require('mongoose');

const SocieteModel = mongoose.Schema({
    nom: { 
        type: String, 
    },
    description: {
        type: String
    },
    adresse:{
        type: String
    },
    postal_code :{
        type: String
    },
   
  })
  module.exports = Societe= mongoose.model('Societe', SocieteModel);
