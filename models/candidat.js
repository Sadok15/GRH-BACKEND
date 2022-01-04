const mongoose = require("mongoose")

const Candidat_schema = mongoose.Schema({

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

const cv_schema = mongoose.Schema({

    id_cand : {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Candidat"
    },
    github : {
        type: String,
    },

})


module.exports = cv = mongoose.model("CV", cv_schema)
module.exports = Candidate = mongoose.model("Candidat", Candidat_schema)