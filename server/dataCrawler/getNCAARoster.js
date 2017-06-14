const winston = require('winston');
const request = require('request');
const cheerio = require('cheerio');


const universityController = require('../controllers/university');
const University = require('../models/university');
const Player = require('../models/player');

var ncaaBaseStatsUrl = 'http://stats.ncaa.org/';

var ncaaFootballId = 12424;
var ncaaMSoccerId = 12440;
var ncaaWSoccerId = 12425;
var ncaaWVballId = 12426;
var ncaaMBballId = 12480;
var ncaaWBballId = 12500;
var ncaaBballId = 12560;
var ncaaSballId = 12580;
var ncaaMTenId = 12583;
var ncaaWTenId = 12584;

// NOTE: Use these to create the sport array location in the function below

module.exports = {

  /**
   * This function will return a team's Roster and potentially store it in the
   * database.
   * @param  {[Number]} ncaaTeamId [NCAA provides a team specific ID]
   * @param  {[Number]} sportId    [NCAA provides a sport specific ID]
   * @return {[type]}            [description]
   */
  getTeamRosterForSpecificSport: function(ncaaTeamId, sportId, universityId) {

    customTeamRosterUrl = ncaaBaseStatsUrl + "team/" + ncaaTeamId + "/roster/" + sportId;

    request(customTeamRosterUrl, function(error, response, body){
      if(error) {
        winston.error("Could not request website " + customTeamRosterUrl);
        return;
      }
      if(response.statusCode === 200){
        var $ = cheerio.load(body);
        var teamRoster = [];
        $('tr').each(function(i, elem){
          var playerSplit = [];

          playerSplit = $(this).text().split("\n");
          //1 = jerseyNumber
          var jerseyNumber = playerSplit[1].trim();
          //2 = Name
          var name = playerSplit[2].trim();

          var newPlayer = {
            name: name,
            jerseyNumber: jerseyNumber,
            hasLeftReview: false
          }

          Player.create(newPlayer, function(err, playerAdded){
            if (err){
              winston.error("Error while creating a new player " + err);
              return;
            }

            var query = {"_id": universityId};

            // NOTE: Important!!! To add to a new change
            // sports.4.season.0.roster
            // sports.4 = Basketball
            // season.1 = 2016-2017
            // To change this, take in the sport and use string concat to create
            // the right place to push
             University.findOneAndUpdate(query,{$push: { "sports.4.season.0.roster": playerAdded._id } }, function(err, foundUni){
               if(err){
                 winston.error(err);
                 return;
               }

               winston.info(foundUni.institution + " has been updated");

             });

          })

        })
      }
    })

  }

}
