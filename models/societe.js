const mongoose = require('mongoose');

const SocieteModel = mongoose.Schema({
    nom: { 
        type: String, 
    },
    description: {
        type: String
    },
    Adresse:{
        type: String
    },
    Postal_code :{
        type: Number
    },
   
  })
  module.exports = Societe= mongoose.model('Societe', SocieteModel);
