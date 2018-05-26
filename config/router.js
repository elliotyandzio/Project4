const router = require('express').Router();
const auth = require('../controllers/auth');
const teams = require('../controllers/teams');
const players = require('../controllers/players');

router.route('/teams')
  .get(teams.index)
  .post(teams.create);

router.route('/teams/:id')
  .get(teams.show)
  .put(teams.update)
  .delete(teams.delete);

router.route('/teams/:id/players')
  .get(players.index)
  .post(players.create);

router.route('/teams/:id/players/:playerId')
  .get(players.show)
  .put(players.update)
  .delete(players.delete);

router.post('/teams/:id/players/:playerId/reports', players.createReport);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
