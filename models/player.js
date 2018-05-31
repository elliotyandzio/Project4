const mongoose = require('mongoose');

function isGoalKeeper() {
  return this.position === 'Goalkeeper';
}
function isOutfieldPlayer() {
  return this.position !== 'Goalkeeper';
}
//
function isCentreBack() {
  return this.position === 'Centre Back';
}
//
// function isCentreMidfield() {
//   return this.position === 'Centre Midfield';
// }
//
function isNotAttackingPlayer() {
  return ['Full Back', 'Center Back', 'Centre Midfield'].includes(this.position);
}
//
function isWide() {
  return ['Full Back', 'Winger'].includes(this.position);
}
//
function isAttackingPlayer() {
  return ['Full Back' ,'Centre Midfield' ,'Winger' ,'Striker' ,'Attacking Midfield'].includes(this.position);
}
//
// function isFrontThree() {
//   return ['Winger' ,'Striker' ,'Attacking Midfield'].includes(this.position);
// }
//
// function heading() {
//   return ['Centre Back', 'Striker'];
// }


const reportSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  opposition: {
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
    enum: ['Goalkeeper', 'Full Back', 'Centre Back', 'Centre Midfield', 'Attacking Midfield', 'Winger', 'Striker'],
    required: true
  },
  startLocation: {
    lat: { type: Number },
    lng: { type: Number }
  },
  endLocation: {
    lat: { type: Number },
    lng: { type: Number }
  },
  distribution: {type: String, min: 1, max: 5, required: isGoalKeeper },
  playingOutFromBack: {type: String, min: 1, max: 5, required: isGoalKeeper },
  backPass: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  attackingDecisionMaking: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  generalHandling: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  shotStopping: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  dealingWithCrosses: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  defensiveDecisionMaking: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  switchingPlay: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  playOutDecisions: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  counterAttacking: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  supportDefenders: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  startingPositions: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  distancesBetweenGKandDEF: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  understandingDefenders: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  organisingSetPlays: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  receivingTechniques: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  rangeOfPassing: {type: Number, min: 1, max: 5, required: isNotAttackingPlayer },
  turning: {type: Number, min: 1, max: 5, required: isAttackingPlayer },
  dribbling: {type: Number, min: 1, max: 5, required: isAttackingPlayer },
  runningWithBall: {type: Number, min: 1, max: 5, required: isWide},
  crossing: {type: Number, min: 1, max: 5, required: isWide},
  finishing: {type: Number, min: 1, max: 5, required: isAttackingPlayer},
  oneVsOneDefending: {type: Number, min: 1, max: 5, required: isWide},
  interceptions: {type: Number, min: 1, max: 5, required: isNotAttackingPlayer },
  tackling: {type: Number, min: 1, max: 5, required: isNotAttackingPlayer},
  blocking: {type: Number, min: 1, max: 5, required: isNotAttackingPlayer },
  heading: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  passingSupport: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  depthWidth: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  mobilityMovement: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  penetration: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  improvisation: {type: Number, min: 1, max: 5, isOutfieldPlayer},
  recoveryDelay: {type: Number, min: 1, max: 5, isOutfieldPlayer},
  pressureSupport: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  compactness: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  coverBalance: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  controlRestraint: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  headingAttackingSetPlays: {type: Number, min: 1, max: 5, required: isCentreBack},
  clearances: {type: Number, min: 1 , max: 5, required: isCentreBack },
  headingGeneralSetPlays: {type: Number, min: 1, max: 5, isCentreBack },
//   scoringTechniques: {type: Number, min: 1, max: 5, required: isFrontThree},
//   pressuring: {type: Number, min: 1, max: 5, required: isFrontThree},
//   forcingPlay: {type: Number, min: 1, max: 5, required: isFrontThree},
//   recoveryRun: {type: Number, min: 1, max: 5, required: isFrontThree},
//   tracking: {type: Number, min: 1, max: 5, required: isAttackingPlayer},
//   linkPlay: {type: Number, min: 1, max: 5, required: isFrontThree},
//   presence: {type: Number, min: 1, max: 5, required: isGoalKeeper },
//   agility: {type: Number, min: 1, max: 5, required: isGoalKeeper },
//   speedOffLine: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  pace: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  strength: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  endurance: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  mobility: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  jumping: {type: Number, min: 1, max: 5, required: heading},
//   boxTobox: {type: Number, min: 1, max: 5, required: isCentreMidfield},
//   strengthTackle: {type: Number, min: 1, max: 5, required: isCentreMidfield},
//   secondBall: {type: Number, min: 1, max: 5, required: isCentreMidfield},
  first5: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
//   chnageOfDirection: {type: Number, min: 1, max: 5, required: isFrontThree},
//   bravery: {type: Number, min: 1, max: 5, required: isGoalKeeper },
//   communication: {type: Number, min: 1, max: 5, required: isGoalKeeper },
//   commandOfBox: {type: Number, min: 1, max: 5, required: isGoalKeeper },
//   errorProne: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  workRate: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  determination: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  takeInfo: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  errorReaction: {type: Number, min: 1, max: 5, required: isOutfieldPlayer}
//   technicalRating: {type: Number, min: 1, max: 5, required: true },
//   tacticalRating: { type: Number, min: 1, max: 5, required: true},
//   physcialRating: { type: Number, min: 1, max: 5, required: true},
//   mentalRating: { type: Number, min: 1, max: 5, required: true },
//   overallRating: { type: Number, min: 1, max: 5, required: true },
//   comments: { type: String }
});

const playerSchema = new mongoose.Schema({
  team: { type: mongoose.Schema.ObjectId, ref: 'Team'},
  reports: [reportSchema],
  name: {type: String, required: true}
});

module.exports = mongoose.model('Player', playerSchema);
