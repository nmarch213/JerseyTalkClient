const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var University = new Schema({
  institution: String,
  logo: String,
  bio: String,
  division: String,
  conference: String,
  state: String,
  city: String,
  website: String,
  sports: [{
    name: String,
    ncaaId: Number,
    season: [{
      coach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coach"
      },
      year: String,
      roster: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
      }] //end roster
    }] // end season
  }], // end sports
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "UniversityReview"
  }]
});

module.exports = mongoose.model('University', University);
