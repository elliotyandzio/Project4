const router = require('express').Router();
const auth = require('../controllers/auth');
const teams = require('../controllers/teams');
const players = require('../controllers/players');
const expenses = require('../controllers/expenses');
const secureRoute = require('../lib/secureRoute');

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

router.route('/expenses')
  .get(expenses.index);

router.post('/teams/:id/players/:playerId/reports', secureRoute, players.createReport);
router.delete('/teams/:id/players/:playerId/reports/:reportId', secureRoute, players.deleteReport);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
