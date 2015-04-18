DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  UserID int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  Message varchar(255),
  UserName varchar(30),
  RoomName varchar(30),
  CreatedAt TIMESTAMP
);



/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  UserID int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  UserName varchar(30),
  CreatedAt TIMESTAMP
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

