
const mongoose = require('mongoose');


module.exports = {

    populateDBSettings: function (app) {
      var options = {
          server: {
             socketOptions: { keepAlive: 1 }
          }
      };
      switch (app.get('env')) {
        case 'development':
          const credentials = require('../credentials.js');
          mongoose.connect(credentials.mongo.development.connectionString, options);
          break;
        case 'production':
          mongoose.connect(process.env.MongoLab, options);
          break;
        default:
          throw new Error('Unknown execution environment: ' + app.get('env'));
      }

    }
}
