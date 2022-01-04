const express = require("express")
const router = express.Router()

var candidate_controller = require("./controllers/candidateController")


router.post("/add_cand", candidate_controller.save_candidate)


router.post("/get_cand", candidate_controller.get_candidate)


router.post("/add_cv", candidate_controller.add_cv_candidate)


module.exports = router
