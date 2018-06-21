const mongoose = require('mongoose');

function isGoalKeeper() {
  return this.position === 'Goalkeeper';
}

function isGKorCBorFB(){
  return ['Goalkeeper', 'Full Back', 'Centre Back'].includes(this.position);
}

function isGKOrCB() {
  return ['Goalkeeper', 'Centre Back'].includes(this.position);
}
function isOutfieldPlayer() {
  return this.position !== 'Goalkeeper';
}

function isDefender() {
  return ['Full Back', 'Centre Back'].includes(this.position);
}
//
function isCentreBack() {
  return this.position === 'Centre Back';
}

function isFullBack() {
  this.position === 'Full Back';
}
// //
// function isCentreMidfield() {
//   return this.position === 'Centre Midfield';
// }
// //
// function isNotAttackingPlayer() {
//   return ['Full Back', 'Centre Back', 'Centre Midfield'].includes(this.position);
// }
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
// //
// function heading() {
//   return ['Centre Back', 'Striker'].includes(this.position);
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
  date: {
    type: Date, required: true
  },
  height: {
    type: String, required: true
  },
  startLocation: {
    lat: { type: Number },
    lng: { type: Number }
  },
  endLocation: {
    lat: { type: Number },
    lng: { type: Number }
  },
  //GOALKEEPER FIELDS
  //TECHNICAL
  distribution: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  backPass: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  dealingWithCrosses: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  shotStopping: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  generalHandling: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  playingOutFromBack: {type: Number, min: 1, max: 5, required: isGKOrCB },
  //TACTICAL
  counterAttacking: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  supportDefenders: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  playOutDecisions: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  distancesBetweenGKandDEF: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  organisingSetPlays: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  startingPositions: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  //MENTAL
  bravery: {type: Number, min: 1, max: 5, required: isGKorCBorFB },
  communication: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  commandOfBox: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  errorProne: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  //Error reaction below
  //PHYSICAL
  presence: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  agility: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  speedOffLine: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  reach: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  reactions: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  //OVERALL
  technicalRating: {type: String, min: 1, max: 5, required: true },
  tacticalRating: { type: Number, min: 1, max: 5, required: true},
  physicalRating: { type: Number, min: 1, max: 5, required: true},
  mentalRating: { type: Number, min: 1, max: 5, required: true },

  // END OF GOALKEEPER

  // START OF FULLBACK
  // TECHNICAL
  receivingTechniques: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  crossing: {type: Number, min: 1, max: 5, required: isWide},
  dribbling: {type: Number, min: 1, max: 5, required: isAttackingPlayer },
  heading: {type: Number, min: 1, max: 5, required: isDefender},
  rangeOfPassing: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},

  //TACTICAL
  oneVsOneDefending: {type: Number, min: 1, max: 5, required: isWide},
  interceptions: {type: Number, min: 1, max: 5, required: isDefender },
  tracking: {type: Number, min: 1, max: 5, required: isAttackingPlayer},
  covering: {type: Number, min: 1, max: 5, required: isFullBack },
  holdingTheLine: {type: Number, min: 1, max: 5, required: isDefender},
  compactness: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },

  //PHYSICAL
  pace: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  recovery: {type: Number, min: 1, max: 5, isOutfieldPlayer},
  first5: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  endurance: {type: Number, min: 1, max: 5, required: isFullBack},
  boxTobox: {type: Number, min: 1, max: 5, required: isFullBack},
  strength: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},

  //MENTAL
  determination: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  takeInfo: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  //errorReaction below
  //bravery in GoalKeeper
  tenacity: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},

  //OVERALL
  //In goalkeeper section

  //CENTRE BACK FIELDS
  //Technical
  //Heading in fullback
  //Receiving Techniques in fullback
  //Range of passing in FullBack
  tackling: {type: Number, min: 1, max: 5, required: isCentreBack},
  //playingOutFromBack in Goalkeeper

  //TACTICAL
  headingSetPlays: {type: Number, min: 1, max: 5, isCentreBack },
  //interceptions is in fullback
  //holdingTheLine is in FullBack
  //compactness is in FullBack
  decisionMaking: {type: Number, min: 1, max: 5, isCentreBack},

  //Mental
  //errorReaction below
  //takeInfo in fullback
  //determination in fullback
  //tenacity in FullBack
  aggression: {type: Number, min: 1, max: 5, isCentreBack},
  //bravery in GK

  //PHYSICAL
  jumping: {type: Number, min: 1, max: 5, required: isCentreBack},
  //pace is in FullBack
  //first5 is in FullBack
  //strength is in FullBack
  mobility: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},

  //


  // turning: {type: Number, min: 1, max: 5, required: isAttackingPlayer },
  // runningWithBall: {type: Number, min: 1, max: 5, required: isWide},
  // finishing: {type: Number, min: 1, max: 5, required: isAttackingPlayer},

  // blocking: {type: Number, min: 1, max: 5, required: isNotAttackingPlayer },
  // passingSupport: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  // depthWidth: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  // mobilityMovement: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  // penetration: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  // improvisation: {type: Number, min: 1, max: 5, isOutfieldPlayer},
  // pressureSupport: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  // controlRestraint: {type: Number, min: 1, max: 5, required: isOutfieldPlayer },
  // headingAttackingSetPlays: {type: Number, min: 1, max: 5, required: isCentreBack},
  // clearances: {type: Number, min: 1 , max: 5, required: isCentreBack },
  // scoringTechniques: {type: Number, min: 1, max: 5, required: isFrontThree},
  // pressuring: {type: Number, min: 1, max: 5, required: isFrontThree},
  // forcingPlay: {type: Number, min: 1, max: 5, required: isFrontThree},
  // recoveryRun: {type: Number, min: 1, max: 5, required: isFrontThree},
  // linkPlay: {type: Number, min: 1, max: 5, required: isFrontThree},
  //
  // strengthTackle: {type: Number, min: 1, max: 5, required: isCentreMidfield},
  // secondBall: {type: Number, min: 1, max: 5, required: isCentreMidfield},
  // changeOfDirection: {type: Number, min: 1, max: 5, required: isFrontThree},
  //
  // workRate: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  errorReaction: {type: Number, min: 1, max: 5, required: true}

//   overallRating: { type: Number, min: 1, max: 5, required: true },
//   comments: { type: String }
});

const playerSchema = new mongoose.Schema({
  team: { type: mongoose.Schema.ObjectId, ref: 'Team'},
  reports: [reportSchema],
  name: {type: String, required: true}
});

module.exports = mongoose.model('Player', playerSchema);
