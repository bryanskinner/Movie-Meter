const bcrypt = require("bcrypt");
const pool = require("../sql/connection");


const signup =  async (req, res) => {
  const { email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 8);

      pool.query('INSERT INTO ?? (??, ??) VALUES(?, ?)',
      ["users", "email", "pwd",
    email, hashedPassword],
    (err, results, fields) => {


      if(err) {
       return res.json({
          err, message: "sql err",
        });
      }


      res.json({
        results,
        message: "User Created!",
      });
    });
};
  

module.exports = {
    signup,
};


