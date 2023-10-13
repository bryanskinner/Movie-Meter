require("dotenv").config();
const express = require("express");
const { movies }  = require("./mockdata");
const app = express();
const {authenticateJWT} = require("./auth");
const cors = require("cors")

const usersRouter = require("./routes/users");
const signupRouter = require("./routes/signup");
const signinRouter = require("./routes/signin");
const movieRouter = require("./routes/movie");
const ratingsRouter = require("./routes/ratings")







const PORT = process.env.PORT || 4000; 



app.use(express.json());

app.use(cors());    

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  // !!THiS IS FOR DEV - We replace this once we have our production URL in place.
  res.setHeader("Access-Control-Allow-Origin", "https://movies-front-end-nine.vercel.app");
  
  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   "https://melodious-churros-bab5cd.netlify.app"
  // );

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "POST");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});







app.use("/", usersRouter);
app.use("/", signupRouter);
app.use("/", signinRouter);
app.use("/", movieRouter);
app.use("/", ratingsRouter);







app.get("/", (req,res) => {
  res.json({
    message: "Welcome to the API",
  });
});


app.get("/movies", authenticateJWT, (req, res) => {
res.json(movies);
});



app.get("/movies/:id", (req, res) => {
  const {id} = req.params
  const foundMovie = movies.find(movie => movie.id === +id);

  res.json(foundMovie);
  });

 

    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });

    