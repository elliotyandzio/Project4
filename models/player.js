const mongoose = require('mongoose');

function isGoalKeeper() {
  return this.position === 'Goalkeeper';
}

function isGKorCBorFBorCM(){
  return ['Goalkeeper', 'Full Back', 'Centre Back', 'Centre Midfield'].includes(this.position);
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

function isCentre() {
  return ['Centre Back', 'Centre Midfield'].includes(this.position);
}

function isFullBack() {
  this.position === 'Full Back';
}

function isFBorCM() {
  return ['Full Back', 'Centre Midfield'].includes(this.position);
}
// //
function isCentreMidfield() {
  return this.position === 'Centre Midfield';
}

function needsMovement() {
  return ['Centre Back', 'Attacking Midfield'].includes(this.position);
}

function isWide() {
  return ['Full Back', 'Winger'].includes(this.position);
}

function isCrosser() {
  return ['Full Back', 'Winger', 'Attacking Midfield'].includes(this.position);
}
//
function isAttackingPlayer() {
  return ['Full Back' ,'Centre Midfield' ,'Winger' ,'Striker' ,'Attacking Midfield'].includes(this.position);
}

function isForward() {
  return ['Centre Midfield' ,'Winger' ,'Striker' ,'Attacking Midfield'].includes(this.position);
}
//
function isFrontThree() {
  return ['Winger' ,'Striker' ,'Attacking Midfield'].includes(this.position);
}

function isAttackingMid () {
  return this.position === 'Attacking Midfield';
}

function isStriker() {
  return this.position === 'Striker';
}


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
  bravery: {type: Number, min: 1, max: 5, required: isGKorCBorFBorCM },
  communication: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  commandOfBox: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  errorProne: {type: Number, min: 1, max: 5, required: isGoalKeeper },
  errorReaction: {type: Number, min: 1, max: 5, required: true},
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
  crossing: {type: Number, min: 1, max: 5, required: isCrosser},
  dribbling: {type: Number, min: 1, max: 5, required: isFullBack },
  heading: {type: Number, min: 1, max: 5, required: isDefender},
  rangeOfPassing: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},

  //TACTICAL
  oneVsOneDefending: {type: Number, min: 1, max: 5, required: isFullBack},
  interceptions: {type: Number, min: 1, max: 5, required: isDefender },
  tracking: {type: Number, min: 1, max: 5, required: isAttackingPlayer},
  covering: {type: Number, min: 1, max: 5, required: isFullBack },
  holdingTheLine: {type: Number, min: 1, max: 5, required: isDefender},
  compactness: {type: Number, min: 1, max: 5, required: isDefender },

  //PHYSICAL
  pace: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  recovery: {type: Number, min: 1, max: 5, isOutfieldPlayer},
  first5: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  endurance: {type: Number, min: 1, max: 5, required: isFBorCM},
  boxTobox: {type: Number, min: 1, max: 5, required: isFBorCM},
  strength: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},

  //MENTAL
  determination: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  takeInfo: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},
  tenacity: {type: Number, min: 1, max: 5, required: isOutfieldPlayer},

  //OVERALL
  //In goalkeeper section

  //CENTRE BACK FIELDS
  //Technical
  tackling: {type: Number, min: 1, max: 5, required: isCentre},

  //TACTICAL
  headingSetPlays: {type: Number, min: 1, max: 5, isCentreBack },
  decisionMaking: {type: Number, min: 1, max: 5, isCentre},

  //Mental
  aggression: {type: Number, min: 1, max: 5, isCentreBack},

  //PHYSICAL
  jumping: {type: Number, min: 1, max: 5, required: isCentreBack},
  mobility: {type: Number, min: 1, max: 5, required: needsMovement},

  //CENTRE MIDFIELD
  //Technical
  longShots: {type: Number, min: 1, max: 5, required: isForward},
  finishing: {type: Number, min: 1, max: 5, required: isForward},

  //TACTICAL
  positioning: {type: Number, min: 1, max: 5, required: isCentreMidfield},
  readingOfGame: {type: Number, min: 1, max: 5, required: isCentreMidfield},

  //MENTAL
  //All fields in previous categories

  //PHYSICAL
  //All fields in previous categories

  //ATTACKING MIDFIELD
  //TECHNICAL
  playInTightAreas: {type: Number, min: 1, max: 5, required: isFrontThree},

  //TACTICAL
   linkPlay: {type: Number, min: 1, max: 5, required: isFrontThree},
   penetration: {type: Number, min: 1, max: 5, required: isFrontThree },
   movement: {type: Number, min: 1, max: 5, required: isFrontThree },
   playingBetweenLines: {type: Number, min: 1, max: 5, required: isFrontThree },

   //MENTAL
  improvisation: {type: Number, min: 1, max: 5, isFrontThree},

  //PHYSICAL
  changeOfDirection: {type: Number, min: 1, max: 5, isFrontThree},



  //Striker
  //TECHNICAL
  //All fields in previous categories

  //TACTICAL
  holdUp: {type: Number, min: 1, max: 5, isStriker},
  playingOnShoulder: {type: Number, min: 1, max: 5, isStriker},

  //MENTAL
  //All fields in previous categories

  //PHYSICAL
  //All fields in previous categories

  //Winger
  //TECHNICAL
  //All fields in previous categories

  //TACTICAL
  //All fields in previous categories

  //METNTAL
  //All fields in previous categories

  //PHYSICAL
  //All fields in previous categories

  comments: {type: String }

});

const playerSchema = new mongoose.Schema({
  team: { type: mongoose.Schema.ObjectId, ref: 'Team'},
  reports: [reportSchema],
  name: {type: String, required: true}
});

module.exports = mongoose.model('Player', playerSchema);
