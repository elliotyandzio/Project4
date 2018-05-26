const Team = require('../models/team');

function indexRoute(req, res, next) {
  Team
    .find()
    .exec()
    .then(teams => res.json(teams))
    .catch(next);
}

function createRoute(req, res, next) {
  Team
    .create(req.body)
    .then(team => res.status(201).json(team))
    .catch(next);
}

function showRoute(req, res, next){
  Team
    .findById(req.params.id)
    .populate('players')
    .exec()
    .then(team => {
      if(!team) return res.sendStatus(404);
      res.json(team);
    })
    .catch(next);
}

function updateRoute(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      if (!team) return res.sendStatus(404);
      return Object.assign(team, req.body);
    })
    .then(team => team.save())
    .then(team => res.json(team))
    .catch(next);
}

function deleteRoute(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team =>  {
      if(!team) return res.sendStatus(404);
      return team.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
