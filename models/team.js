const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {type: String, required: true},
  league: {type: String, required: true}
});

teamSchema.virtual('players', {
  localField: '_id',
  foreignField: 'team',
  ref: 'Player'
});

teamSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Team', teamSchema);
