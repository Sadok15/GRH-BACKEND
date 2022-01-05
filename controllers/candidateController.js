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
    const cv_cand = new cv()
    console.log("---------------- ", req.body)
    for(var i=1;i< req.body.length;i ++){
        dict  = req.body[i]
        if ( "email" in dict ){

            const candidate = new Candidate({
                mail: dict["email"],
                mdp: dict["mdp"],
                num_tel: dict["num_tel"],
            }) 
            await candidate.save()
        
            // add cv 
            
        
            cv_cand.id_cand = candidate._id
            cv_cand.github = dict["github"]
        
            await cv_cand.save()

        }
    }

    for(var i=1;i< req.body.length;i ++){
        dict  = req.body[i]
        if ( "competences" in dict ){
     
            // add competences

            for(var k=0; k< dict["competences"].length; k++ ){
                const comp = new competence()
                comp.id_cv = cv_cand._id
                comp.detail= dict["competences"][k]["comp"]
                await comp.save()
            }
            console.log("competences")

        }

        else if ( "experiences" in dict ){

            // add experience
            
            for(var j=0; j< dict["experiences"].length ; j++ ){

                exp_dict = dict["experiences"][j]
                const exp = new experience()
            
                exp.id_cv = cv_cand._id
                exp.duree = exp_dict["duree"]
                exp.detail= exp_dict["detail"]
                await exp.save()
            }
            console.log("experiences")

    }
    }
    // send result

    res.send(cv_cand)
    console.log("cv Ajouté")
}
