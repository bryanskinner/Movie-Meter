require("dotenv").config();
const express = require("express");
const { movies }  = require("./mockdata");
const app = express();
const authenticateJWT = require("./auth");

const usersRouter = require("./routes/users");
const signupRouter = require("./routes/signup");
const signinRouter = require("./routes/signin");
const vinylRouter = require("./routes/vinyl");







const PORT = process.env.PORT || 4000; 



app.use(express.json());
app.use("/", usersRouter);
app.use("/", signupRouter);
app.use("/", signinRouter);
app.use("/", vinylRouter);







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

    