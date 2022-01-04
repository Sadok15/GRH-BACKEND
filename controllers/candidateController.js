const mongoose = require("mongoose")

// declare models

var Candidate = require("../models/candidat")
require("../models/competence")
require("../models/experience")

var cv = require("mongoose").model('CV')
var competence = require("mongoose").model("Competence")
var experience = require("mongoose").model("Experience")



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
    
    // add candidate
    const candidate = new Candidate({
        mail: req.body.candidate.mail,
        mdp: req.body.candidate.mdp,
        num_tel: req.body.candidate.num_tel,
    }) 
    await candidate.save()

    // add cv 
    const cv_cand = new cv()

    cv_cand.id_cand = candidate._id
    cv_cand.github = req.body.github

    await cv_cand.save()

    // add competences

    for(var i=1; i<= req.body.competences.length; i++ ){
        const comp = new competence()
        comp.id_cv = cv_cand._id
        comp.detail= req.body.competences[i]
        await comp.save()
    }
    console.log("competences")

    // add experience

    for(var i=1; i<= req.body.experiences.length ; i++ ){

        exp_dict = req.body.experiences[i]
        const exp = new experience()
       
        exp.id_cv = cv_cand._id
        exp.duree = exp_dict["duree"]
        exp.detail= exp_dict["detail"]
        await exp.save()
    }
    console.log("experiences")

    // send result

    res.send(cv_cand)
    console.log("cv Ajouté")
}
