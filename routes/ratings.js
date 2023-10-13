const express = require("express");
const router = express.Router();
const movieRatingsController = require("../controllers/ratings");
const auth = require("../auth")

router.get("/ratings", movieRatingsController.list);



router.get("/ratingsByID", auth.authenticateJWT, movieRatingsController.ratingByUserid);



module.exports = router;

