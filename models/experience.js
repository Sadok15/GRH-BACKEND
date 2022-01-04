const mongoose = require("mongoose")

const exp_schema = mongoose.Schema({

    id_cv : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CV'
    },
    duree: {
        type: String,
    },
    detail:{
        type:String,
    }
})

module.exports = mongoose.model("Experience", exp_schema)