var cv = require("../models/candidat")



exports.get_candidate =  async function(req,res){

    try{
        
        const cands =  await Candidate.findOne(
                {}
                // { mail: req.body.mail },
                // { mdp: req.body.mdp }
            
        ).exec()

        res.send(cands)
    }catch{
        res.status(404)
        res.send("object introuvable")
    }    
}


exports.save_candidate = async function(req, res){

    const cand = new Candidate({
        
        id_cand: req.body.id_cand,
        mail: req.body.mail,
        mdp: req.body.mdp,
        num_tel: req.body.tel,
    })

    await cand.save()
    res.send(cand)
    console.log("Candidat Ajouté")
}


exports.add_cv_candidate = async function(req, res){

    const cv_cand = new cv()
    cv_cand.id_cv = 1,
    cv_cand.id_cand = Candidate.findOne({id:1}) ,
    cv_cand.githhub = "github/sadok15",
    await cv_cand.save()
    res.send(cv_cand)
    console.log("cv Ajouté")
}