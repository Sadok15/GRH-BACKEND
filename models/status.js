
const mongoose = require('mongoose');
const StatusModel = mongoose.Schema({
    libelle: {
        type:String
    },
  })
module.exports = Status= mongoose.model('Status', StatusModel);