const mongoose = require('mongoose');
const University = require('../models/university');
const winston = require('winston');

module.exports = {

  addNewUniversity: function(institution, conference, division, state, sports){

    var newUniversity = {
      institution: institution,
      conference: conference,
      division: division,
      state: state,
      sports
    }
    University.create(newUniversity, function(err, addedUniversity){
      if(err){
        winston.error("Adding a new university has failed: " + err);
        return;
      }

      winston.info(addedUniversity.institution + " has been successfully added!");

    });
  },

  getAllUniversities: function(){
    University.find(function(err, universities){
      if(err){
        winston.error("Get all universities did not happen: " + err);
        return;
      }
      for (var i = 0; i < 5; i++) {
        winston.info(universities[i].institution);
      }
    })
  },

  getUniversityCoreInfo: function(callback){
    var coreInformation = [];

    University.find(function(err, universities){
      if(err){
        winston.error("Get all universities did not happen: " + err);
        return callback(err);
      }
      for (var i = 0; i < universities.length; i++) {
        var info = {
          institution: universities[i].institution,
          id: universities[i]._id,
          division: universities[i].division,
          state: universities[i].state
        }
        coreInformation.push(info);
      }
      callback(null, coreInformation);
    })
  },

  findUni: function(universityId, sportId, newSeasonYear) {
    var query = {"_id": universityId};
    University.findById(query, function(err, foundUni){
      winston.info(foundUni.sports[4].season[0].year)
    })
  }
}
