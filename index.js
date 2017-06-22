const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static(__dirname));

// Routes
// const indexRoutes = require('./server/routes/routes.js');

// database configuration
// const dbSettings = require('./server/lib/database.js');
//
// dbSettings.populateDBSettings(app);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);


// const ncaaMemberAdd = require('./server/dataCrawler/ncaaMemberAdd');
// const UniversityController = require('./server/controllers/university');
// const NCAARosterController = require('./server/dataCrawler/getNCAARoster');
//
// const uwf = "5938e256902b3714acd252a7";
// NCAARosterController.getTeamRosterForSpecificSport(11740, 12480, uwf);

// UniversityController.findUni(uwf, 12480, "2016-2017");


// ncaaMemberAdd.getNCAASchools();
// index routes
// app.use(indexRoutes);

app.get("/", function(req, res){
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(app.get('port'), function () {
  console.log('JerseyTalk Server Live at:  ' +
    app.get('port') + '; press Ctrl-C to terminate.');
});
