const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CoachReview = new Schema({
  wouldYouPlayForAgain: Boolean,
  styleOfOffense: String,
  styleOfDefence: String,
  recruiting: Number,
  relationshipWithPlayers: Number,
  knowledgeOfSport: Number,
  playerDevelopment: Number,
  programTradition: Number,
  comments: String


  // REVIEW: Make sure this is everything that is to be tracked for a caoch
});

module.exports = mongoose.model('CoachReview', CoachReview);
