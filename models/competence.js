const mongoose = require("mongoose")

const comp_schema = mongoose.Schema({

    id_cv : {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'CV'
    },
    detail:{
        type:String,
    }
})

module.exports = mongoose.model("Competence", comp_schema)