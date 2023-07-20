const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("../sql/connection");


const signin = (req, res) => {
    const { email, password } = req.body;
   


    pool.query(
      'SELECT * FROM users WHERE email = ?',
     [email],
      async (err, user, fields) => {

        if(err) {
          return res.json({
             err, message: "sql err",
           });
         }


   const hashedPassword = await bcrypt.compare(password, user[0].password);

    
    if (hashedPassword) {
      console.log(user);
    const token = jwt.sign({
      id: user[0].id, 
      email: user[0].password,
    }, process.env.DB_JWT_SECRET);

    
    res.json({
      token,
    });

    } else {
      res.json({
        message: "Email or Username is incorrect!",
      });
    }
});

    };



    



module.exports = {
    signin,
};