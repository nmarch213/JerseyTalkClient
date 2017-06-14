const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var Player = new Schema({
    name: String,
    jerseyNumber: String,
    hasLeftReview: Boolean,
  });

  module.exports = mongoose.model('Player', Player);
