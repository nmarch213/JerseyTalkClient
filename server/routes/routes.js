const router = require('express').Router();
const winston = require('winston');
const path = require('path');

//Models
const University = require('../models/university');

//controllers
const UniversityController = require('../controllers/university');

router.get("/getUniversityCoreInfo", function(req, res){
  winston.info("Core Info hit");
  UniversityController.getUniversityCoreInfo(function(err, universities){
    res.send(universities);
  });
})

router.get("/getSchool/:id", function(req, res){
  University.findById(req.params.id)
    .populate("sports.season.roster")
    .exec(function(err, foundUniversity){
    winston.info(foundUniversity.institution + " has been retrieved");
    // winston.info(foundUniversity.sports[4].season[0].roster[0].name);
    res.send(foundUniversity);
  })
})

router.post("/schools/:id/review", function(req, res){
  res.send({"message" : "got it"});
  // res.sendStatus(200);
})

router.get("/", function(req, res){
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

module.exports = router;
