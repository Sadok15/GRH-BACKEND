const express = require("express")
const router = express.Router()

const candidate_controller = require("./controllers/candidateController")
const opportunity_controller=require("./controllers/opportunityController")


router.post("/get_cand", candidate_controller.get_candidate)


router.post("/add_cv", candidate_controller.add_cv_candidate)

router.get("list_opportunity",opportunity_controller.list_opportunity)

module.exports = router
