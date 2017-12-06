DROP DATABASE if exists burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id INT AUTO_INCREMENT,
burger_name VARCHAR(30),
devoured BOOLEAN,
date_eaten TIMESTAMP,
primary key (id)
);

