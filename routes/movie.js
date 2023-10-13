// const express = require("express");
// const router = express.Router();
// const vinylController = require("../controllers/vinyl");

// router.get("/vinyl", vinylController.list);

// module.exports = router;


const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie");

router.get("/movies", movieController.list);

module.exports = router;

