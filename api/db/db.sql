CREATE DATABASE todo;

CREATE TABLE todolist(id int NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL, 
status varchar(50), 
date_created DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
date_deadline DATETIME,
PRIMARY KEY (id));