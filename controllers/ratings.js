const pool = require("../sql/connection");

const list = (req, res) => {
    pool.query('SELECT * FROM movie_ratings', (err, ratings, fields) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        res.json({ ratings });
    });

    
};

const ratingByUserid = (req, res) => {
    const userID = req.user.id
    pool.query('SELECT * FROM movie_ratings WHERE user_id = ?', userID, (err, ratings) => {
        if (err) {
            return res.status(500).json({ message: err.message})
            
        }
        res.json({ ratings });
            
    })
}

module.exports = {
    list,
    ratingByUserid,
};
