const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res, next) {
  User.create(req.body)
    .then(user => {

      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Thanks for registering ${user.username}!`,
        token,
        user
      });

    })
    .catch(next);
}

//Use the email that the user has typed into the form to find them in the database
//If not found or is the password doesn't match then return a 401 unauthorised error.
function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      //Create the webtoken and sends messsage, token and user back to the client (the payload)
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Welcome back ${user.username}!`,
        token,
        user
      });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
