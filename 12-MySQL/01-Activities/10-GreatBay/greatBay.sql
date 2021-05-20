DROP DATABASE IF EXISTS greatbayDB;

CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE item (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NULL,
  price DECIMAL(10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO item (item, price)
VALUES ("vacuum", 50.25), ("shirt", 25);
