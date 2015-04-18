var models = require('../models');
var bluebird = require('bluebird');
var request = require("request"); // You might need to npm install the request module!
var db = require('../db');

var utils = require('../utils');



module.exports = {
  messages: {
    get: function (req, res) {

      console.log("get message");

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      utils.collectData(req, function(jsonFile){

        //write to database
        db.query("INSERT INTO messsages SET ?", jsonFile, function(err, result){
          if(!err) {
            console.log("Successfuly inserted into messsages from POST");
            utils.sendResponse(res, {objectId: result.insertId}, 201);
          } else {

          }
        });

      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      console.log("USER POST");


      utils.collectData(req, function(jsonFile){

        //write to database
        db.query("INSERT INTO users SET ?", jsonFile, function(err, result){
          if(!err) {
            console.log("Successfuly inserted into users from POST");
            utils.sendResponse(res, {objectId: result.insertId}, 201);
          } else {

          }
        });

      });




    }
  }
};

