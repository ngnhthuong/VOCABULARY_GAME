const router = require("express").Router();

const playerController = require("../controllers/playerControllers");

router.post("/register", playerController.register);
router.post("/login", playerController.login);
router.put("/initplayer/:id", playerController.updatePlayer);
router.put("/updateElo/:id", playerController.updateEloPlayer);
router.get("/getAllPlayer", playerController.getAllPlayer);
router.get("/getPlayer/:id", playerController.getPlayer);
router.get("/getRankPlayer", playerController.getRankPlayer);
router.delete("/deleteAllPlayer", playerController.deleteAllPlayer);
// router.get("/getPlayerName/:playername", playerController.getPlayerName);
module.exports = router;
