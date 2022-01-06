const express = require("express")
const router = express.Router()

const candidate_controller = require("./controllers/candidateController")

const opportunity_controller=require("./controllers/opportunityController")
const societe_controller = require("./controllers/societeController")
const contrat_controller = require("./controllers/contratController")
const status_controller = require ("./controllers/statusController")          


router.post("/get_cand", candidate_controller.get_candidate)


router.post("/add_cv", candidate_controller.add_cv_candidate)


router.get("/list_opportunity",opportunity_controller.list_opportunity)
router.get("/list_opportunity_cond/:id",opportunity_controller.list_opportunity_cond)
router.post("/add_opportunity",opportunity_controller.add_opportunity)
router.get("/get_opportunity/:id",opportunity_controller.get_opportunity)
router.post("/postuler",opportunity_controller.postuler)
router.post("/add_societe",societe_controller.add_societe)
router.post("/add_status",status_controller.add_status)
router.post("/add_contrat",contrat_controller.add_contrat)


module.exports = router
