const mongoose = require("mongoose")


const Candidat = mongoose.Schema({

    id_cand : {type: Number},

    mail : {
        type: String,
    },
    mdp: {
        type: String,
    },
    num_tel:{
        type:String,
    }
})

const cv_candidate = mongoose.Schema({

    id_cv :{type: Number},

    id_cand :
        {type: mongoose.Schema.Types.ObjectId, ref: 'Candidate'}
    ,
    
    github : {
        type: String,
    },

})


module.exports = cv = mongoose.model("CV", cv_candidate)
module.exports = Candidate = mongoose.model("Candidat", Candidat)