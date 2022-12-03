const mongoose = require("mongoose");



const Status = require("../models/status");


exports.add_status = async function(req, res){
    const status = new Status({
        libelle: req.body.status.libelle,
    }) 
    console.log("here")
    await status.save()
    res.send(status)
    console.log("status Ajouté")
}

exports.list_status =  async function(req,res){

    try{
        var array = ["En Cours", "Cloturer", "Disqualifier", "Qualifier"];

        const list_status = await Status.find({})

        if (list_status.length == 0){

            for(var i=0;i<array.length;i++){
                const statut = new Status({
                    libelle: array[i]
                }) 
                await statut.save()
            }
            
            return res.json({ 
                success: true, 
                message: "Valide",
                list_status: await Status.find({})
                
              });
        }else{
            return res.json({ 
                success: true, 
                message: "Valide",
                list_status: list_status
                
              });
        }



   }catch(error){       
    return res.json({ 
        success: false, 
        message: "Erreur : " + error.message
      });
    }    
}