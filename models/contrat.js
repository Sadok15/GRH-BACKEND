
const mongoose = require('mongoose');
const ContratModel = mongoose.Schema({
    libelle: {
        type:String
    },
  })

module.exports = Contrat= mongoose.model('Contrat', ContratModel);
