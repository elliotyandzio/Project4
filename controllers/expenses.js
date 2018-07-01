const Player = require('../models/player');

function indexRoute(req, res, next){
  req.body.team = req.params.id;
  Player
    .find()
    // .populate('players')
    .exec()
    .then(player => {
      if(!player) return res.sendStatus(404);
      res.json(player);
    })
    .catch(next);
}

module.exports = {
  index: indexRoute
}
