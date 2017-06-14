const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UniversityReview = new Schema({
  facility: {
    mainArena: Number,
    homeCrowd: Number,
    weightRoom: Number,
    lockerRoom: Number,
    athleticTrainingRoom: Number,
    comments: String
  },
  education: {
    classDifficulty: Number,
    academicRepuation: Number,
    tutorsAndHelp: Number,
    comments: String
  },
  location: {
    weather: Number,
    nightLife: Number,
    fanSupport: Number,
    cityActivities: Number,
    comments: String
  }
});

module.exports = mongoose.model('UniversityReview', UniversityReview);
