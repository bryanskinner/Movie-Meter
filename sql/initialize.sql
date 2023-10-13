-- DROP TABLE IF EXISTs users;

--   CREATE TABLE users (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   email VARCHAR(255) UNIQUE NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   first_name VARCHAR(255)
-- );


-- CREATE TABLE vinyl (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   album VARCHAR(255) NOT NULL,
--   artist VARCHAR(255) NOT NULL,
--   release_year INT,
--   genre VARCHAR(255)
-- );


DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS music;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255)
);


CREATE TABLE movies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  release_date DATE,
  genre VARCHAR(255),
  overview TEXT
);


CREATE TABLE movie_ratings (
  id INT PRIMARY KEY AUTO_INCREMENT,
  movie_id INT,
  user_id INT,
  rating INT,
  FOREIGN KEY (movie_id) REFERENCES movies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);
