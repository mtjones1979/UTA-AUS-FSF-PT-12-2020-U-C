DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(50) NULL,
  artist VARCHAR(50) NULL,
  genre VARCHAR(50), NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("johnny b goode", "chuck berry", "rocknroll");

INSERT INTO songs (title, artist, genre)
VALUES ("sicko mode", "travis scott", "rap");

INSERT INTO products (title, artist, genre)
VALUES ("rhiannon", "fleetwood mac", "oldies");

