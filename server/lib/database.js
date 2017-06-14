
const mongoose = require('mongoose');
const aws = require('aws-sdk');


const config = new aws.S3({
  prodDB: process.env.MongoLab,
});

module.exports = {

    populateDBSettings: function(app) {
      var options = {
          server: {
             socketOptions: { keepAlive: 1 }
          }
      };
      switch(app.get('env')){
          case 'development':
              const credentials = require('../credentials.js');
              mongoose.connect(credentials.mongo.development.connectionString, options);
              break;
          case 'production':
              mongoose.connect(config.prodDB, options);
              break;
          default:
              throw new Error('Unknown execution environment: ' + app.get('env'));
      }

    }
}
