const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  team: { type: mongoose.Schema.ObjectId, ref: 'Team'},
  reports: [reportSchema],
  name: {type: String, required: true}
});

const reportSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.ObjectId, ref: 'User'
  },
  opoosition: {
    type: String, required: true
  },
  score: {
    type: String
  },
  ageGroup: {
    type: String, required: true
  },
  footed: {
    type: String, required: true
  },
  position: {
    type: String,
    enum: [
      'Goalkeeper', 'Full Back', 'Centre Back', 'Centre Midfield', 'Attacking Midfield', 'Winger', 'Striker'
    ],
    required: true
  },
  distribution: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  playingOutFromBack: {type: Number, min: 1, max: 5, required: function () {
    return (this.position === 'Goalkeeper');
  }},
  backPass: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  attackingDecisionMaking: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  generalHandling: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  shotStopping: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  dealingWithCrosses: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  defensiveDecisionMaking: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  technicalRating: {
    type: Number, min: 1, max: 5, required: true
  },
  switchingPlay: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  playOutDecisions: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  counterAttacking: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  supportDefenders: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  startingPositions: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  distancesBetweenGKandDEF: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Goalkeeper');
  }},
  understandingDefenders: {type: Number, min: 1, max: 5, required: function () {
    return (this.position === 'Goalkeeper');
  }},
  organisingSetPlays: {type: Number, min: 1, max: 5, required: function () {
    return (this.position === 'Goalkeeper');
  }},
  recivingTechniques: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  rangeOfPassing: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield');
  }},
  turning: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Midfield' || 'Striker' || 'Attacking Midfield');
  }},
  dribbling: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  runningWithBall: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger');
  }},
  crossing: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Midfield' || 'Winger');
  }},
  finishing: {type: Number, min: 1, max: 5, required: function () {
    return (this.position === 'Full Back' || 'Centre Midfield');
  }},
  oneVsOneDefending: {type: Number, min: 1, max: 5, required: function () {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield');
  }},
  interceptions: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield');
  }},
  tackling: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Midfield');
  }},
  blocking: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield');
  }},
  heading: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  passingSupport: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  depthWidth: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  mobilityMovement: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  penetration: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  improvisation: {type: Number, min: 1, max: 5, required: function () {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  recoveryDelay: {type: Number, min: 1, max: 5, required: function () {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  pressureSupport: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  compactness: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  coverBalance: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  controlRestraint: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Full Back' || 'Centre Back' || 'Centre Midfield' || 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  headingAttackingSetPlays: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Centre Back');
  }},
  clearances: {type: Number, min: 1 , max: 5, required: function() {
    return (this.position === 'Centre Back');
  }},
  headingGeneralSetPlays: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Centre Back');
  }},
  supportingPositionsWide: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Winger');
  }},
  scoringTechniques: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  pressuring: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  forcingPlay: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  recoveryRun: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Winger' || 'Striker' || 'Attacking Midfield');
  }},
  tracking: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Winger');
  }},
  linkPlay: {type: Number, min: 1, max: 5, required: function() {
    return (this.position === 'Striker' || 'Attacking Midfield');
  }},
  tacticalRating: {
    type: Number, min: 1, max: 5, required: true
  },
  physcialRating: {
    type: Number, min: 1, max: 5, required: true
  },
  mentalRating: {
    type: Number, min: 1, max: 5, required: true
  },
  overallRating: {
    type: Number, min: 1, max: 5, required: true
  },
  comments: {
    type: String
  }
});

module.exports = mongoose.model('Player', playerSchema);
