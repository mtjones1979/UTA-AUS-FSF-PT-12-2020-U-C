DROP DATABASE IF EXISTS popQUiz_db;

CREATE DATABASE popQuiz_db;

USE popQuiz_db;

CREATE TABLE popQuiz_db (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(20) NOT NULL,
  age INTEGER(100),
  town VARCHAR(50),
  PRIMARY KEY (id)
);


INSERT INTO popQuiz_db (name, age, town)
VALUES ("Mike", 41, "Austin");

INSERT INTO popQuiz_db (name, age, town)
VALUES ("Steve", 40, "Cedar Park");

INSERT INTO popQuiz_db (name, age, town)
VALUES ("Natacha", 40, "Austin");
