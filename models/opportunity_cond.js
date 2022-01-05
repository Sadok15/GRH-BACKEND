
const mongoose = require('mongoose');
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
module.exports = OpportunityCond= mongoose.model('Opportunity_condidat', opportunity_condModel);

  