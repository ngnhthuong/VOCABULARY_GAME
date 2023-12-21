const router = require("express").Router();

const vocabularyController = require("../controllers/vocabularyControllers");

router.post("/createVocabulary", vocabularyController.addvocabulary);
router.get("/getVocabulary", vocabularyController.getvocabulary);

module.exports = router;
