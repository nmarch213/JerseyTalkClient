// http://web1.ncaa.org/onlineDir/exec2/divisionListing?sortOrder=2&division=All
// This is the link that will list all institutions that are within the ncaa
// This is the main website link that should be used if trying to repopulate the
// university listings

const universityController = require('../controllers/university');
const winston = require('winston');
const request = require('request');
const cheerio = require('cheerio');

var season = {
  year: "2016-2017"
}
var sports = [
{ncaaId: 12424, name: "Football", season: [season]},
{ncaaId: 12440, name: "Men's Soccer", season: [season]},
{ncaaId: 12425, name: "Women's Soccer", season: [season]},
{ncaaId: 12426, name: "Women's Volleyball", season: [season]},
{ncaaId: 12480, name: "Men's Basketball", season: [season]},
{ncaaId: 12500, name: "Women's Basketball", season: [season]},
{ncaaId: 12560, name: "Baseball", season: [season]},
{ncaaId: 12580, name: "Softball", season: [season]},
{ncaaId: 12583, name: "Men's Tennis", season: [season]},
{ncaaId: 12584, name: "Women's Tennis", season: [season]},
]
var ncaaWebsite = "http://web1.ncaa.org/onlineDir/exec2/divisionListing?sortOrder=2&division=All";

module.exports = {


  getNCAASchools: function() {

    request(ncaaWebsite, function(error, response, body){
      if(error){
        winston.error("Could not request website: " + ncaaWebsite + ".");
        return;
      }
      if(response.statusCode === 200){
        var $ = cheerio.load(body);

        $('tr').each(function(i, elem){
          var universitySplit = [];

          universitySplit = $(this).text().split("\n");
          //1 = institutionName
          var institution = universitySplit[1].split("\r");
          //2 = Conference
          var conference = universitySplit[2].split("\r");
          //3 = division
          var division = universitySplit[3].split("\r");
          //4 = State
          var state = universitySplit[4].split("\r");
          //
          //
          institution[0] = institution[0].trim();
          conference[0] = conference[0].trim();
          division[0] = division[0].trim();
          state[0] = state[0].trim();
          // winston.info(universitySplit[0]);
          // winston.info(universitySplit[1]);
          // winston.info(universitySplit[2]);
          // winston.info(universitySplit[3]);
          // winston.info(universitySplit[4]);
          // winston.info(universitySplit[5]);
          // winston.info(universitySplit[6]);



          universityController.addNewUniversity(institution[0],
                                                conference[0],
                                                division[0],
                                                state[0],
                                                sports
                                              );
        });

      }
    })

  }


}
