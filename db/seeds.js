const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
//const player = require('../models/player');
const team = require('../models/team');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();
  team.create([{
    name: 'Chelsea FC',
    league: 'Premier League',
    players: [{
      name: 'Eden Hazard'
    }]
  },{
    name: 'Arsenal FC',
    league: 'Premier League',
    players: [{
      name: 'Mesut Ozil'
    }]
  },{
    name: 'Manchest United',
    league: 'Premier League',
    players: [{
      name: 'Paul Pogba'
    }]
  },{
    name: 'Manchester City',
    league: 'Premier League',
    players: [{
      name: 'Kevin De Bruyne'
    }]
  }])
    .then(seeds => console.log((`${seeds.length} seeds created`)))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
