const bcrypt = require("bcrypt");
const pool = require("../sql/connection");


const signup =  async (req, res) => {
  const { email, password, first_name, last_name } = req.body;

      const hashedPassword = await bcrypt.hash(password, 8);

      pool.query('INSERT INTO ?? (??, ??, ??, ??) VALUES(?, ?, ?, ?)',
      ["users", "email", "password", "first_name", "last_name",
    email, hashedPassword, first_name, last_name],
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