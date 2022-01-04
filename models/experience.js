const mongoose = require("mongoose")

const exp = mongoose.Schema({
    id_exp : {
        type: Number,
        required: true,
    },
    id_cv : {
        type: mongoose.Schema.Types.ObjectId, ref: 'CV'
    },
    duree: {
        type: String,
    },
    detail:{
        type:Text,
    }
})

module.exports = mongoose.model("Experience", exp)