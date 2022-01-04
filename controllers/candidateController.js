const mongoose = require("mongoose")

// declare models

var Candidate = require("../models/candidat")
var cv = require("mongoose").model('CV')



exports.get_candidate =  async function(req,res){

    try{
        
        const cands =  await Candidate.find(
                { mail: req.body.mail },
                { mdp: req.body.mdp }
            // {}
        ).exec()

        res.send(cands)
    }catch{
        res.status(404)
        res.send("object introuvable")
    }    
}



exports.add_cv_candidate = async function(req, res){
    
    const candidate = new Candidate({
        mail: req.body.candidate.mail,
        mdp: req.body.candidate.mdp,
        num_tel: req.body.candidate.num_tel,
    }) 
    await candidate.save()

    console.log("Candidat Ajouté")

    const cv_cand = new cv()

    cv_cand.id_cand = candidate._id
    cv_cand.github = req.body.github

    await cv_cand.save()
    res.send(cv_cand)
    console.log("cv Ajouté")
}
