const express = require("express");
const router = express.Router();
const vinylController = require("../controllers/vinyl");

router.get("/vinyl", vinylController.list);

module.exports = router;