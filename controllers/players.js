const Player = require('../models/player');

function indexRoute(req, res, next) {
  req.body.team = req.params.id;
  Player
    .find()
    .exec()
    .then(players => res.json(players))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.team = req.params.id;
  Player
    .create(req.body)
    .then(player => res.status(201).json(player))
    .catch(next);
}

function showRoute(req, res, next){
  req.body.team = req.params.id;
  Player
    .findById(req.params.playerId)
    // .populate('players')
    .exec()
    .then(player => {
      if(!player) return res.sendStatus(404);
      res.json(player);
    })
    .catch(next);
}

function updateRoute(req, res, next){
  req.body.team = req.params.id;
  Player
    .findById(req.params.playerId)
    .exec()
    .then(player => {
      if (!player) return res.sendStatus(404);
      return Object.assign(player, req.body);
    })
    .then(player => player.save())
    .then(player => res.json(player))
    .catch(next);
}

function deleteRoute(req, res, next){
  req.body.team = req.params.id;
  Player
    .findById(req.params.playerId)
    .exec()
    .then(player =>  {
      if(!player) return res.sendStatus(404);
      return player.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

function playerReportCreate(req, res, next) {
  req.body.team = req.params.id;
  req.body.createdBy = req.currentUser;
  console.log(req.body);
  Player
    .findById(req.params.playerId)
    .exec()
    .then(player => {
      player.reports.push(req.body);
      return player.save();
    })
    .then(player => res.json(player))
    .catch(next);
}

// function playerReportDelete(req, res, next) {
//   Player
//     .findById(req.params.id)
//     .then(player => {
//       const report = player.reports.id(req.params.reportId);
//       // The throw new Error() takes you into the next catch block.
//       if(!comment.createdBy._id.equals(req.currentUser._id)) throw new Error('Unauthorized');
//       comment.remove();
//       return burger.save();
//     })
//     .then(burger => res.json(burger))
//     .catch(next);
// }

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  createReport: playerReportCreate
};
