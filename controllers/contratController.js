const mongoose = require("mongoose");



const Contrat = require("../models/contrat");


exports.add_contrat = async function(req, res){
    const contrat = new Contrat({
        libelle: req.body.contrat.libelle,
    }) 
    await contrat.save()
    res.send(contrat)
    console.log("contrat Ajouté")
}

exports.list_contrat =  async function(req,res){

    try{
        var array = ["CDI", "CDD", "STAGE", "ALTERNANCE", "FREELANCE"];

        const list_contrat = await Contrat.find({})

        if (list_contrat.length == 0){

            for(var i=0;i<array.length;i++){
                const contrat = new Contrat({
                    libelle: array[i]
                }) 
                await contrat.save()
            }
            
            return res.json({ 
                success: true, 
                message: "Valide",
                list_contrat: await Contrat.find({})
                
              });
        }else{
            return res.json({ 
                success: true, 
                message: "Valide",
                list_contrat: list_contrat
                
              });
        }



   }catch(error){       
    return res.json({ 
        success: false, 
        message: "Erreur : " + error.message
      });
    }    
}