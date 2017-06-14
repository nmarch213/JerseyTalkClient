const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Coach = new Schema({
  name: String,
  picture: String, //url, or if saved in database a link to it
  sport: String,
  bio: String,
  accolades: [],
  currentPosition: String, //Head-Coach, Assistant ect
  overallRecord: String, // not sure if needed, must show date of last updated
  lastSeasonRecord: String,
  pastPositions: [
    {
      school: String, //uwf
      position: String, //Assistant coach
    }
  ],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "CoachReview"
  }]

  // REVIEW: Make sure this is everything that is to be tracked for a caoch
});

module.exports = mongoose.model('Coach', Coach);
