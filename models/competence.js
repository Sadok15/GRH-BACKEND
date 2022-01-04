const mongoose = require("mongoose")

const comp = mongoose.Schema({
    id_comp : {
        type: Number,
        required: true,
    },
    id_cv : {
        type: mongoose.Schema.Types.ObjectId, ref: 'CV'
    },
    detail:{
        type:String,
    }
})

// module.exports = mongoose.model("Competence", comp)