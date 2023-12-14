const router = require("express").Router();

const  rankingController  = require("../controllers/rankingControllers");

router.post("/createRanking", rankingController.createRanking);
router.get("/getRanking", rankingController.getRanking);
router.get("/getRanking/:id", rankingController.getRankingById);
router.put("/updateRanking/:id", rankingController.updateRanking);
router.delete("/deleteRanking/:id", rankingController.deleteRanking);
module.exports = router;
