import React from 'react';
import AutoComplete from '../common/AutoComplete';

const TeamsForm = ({ handleChange, handleSubmit, report, handlePositionSelect, handleStartLocationChange, handleEndLocationChange }) => {

  const technicalOverall = () => {
    if(report.position === 'Goalkeeper') {
      if(typeof report.distribution !== 'undefined' && typeof report.backPass !== 'undefined' && typeof report.dealingWithCrosses !== 'undefined' && typeof report.shotStopping !== 'undefined' && typeof report.generalHandling !== 'undefined' && typeof report.playingOutFromBack !== 'undefined') {
        const values = (parseInt(report.distribution) + parseInt(report.backPass) + parseInt(report.dealingWithCrosses) + parseInt(report.shotStopping) + parseInt(report.generalHandling) + parseInt(report.playingOutFromBack));
        const overall = Math.round(values/6);
        return overall;
      }
    } if (report.position === 'Full Back') {
      if(typeof report.receivingTechniques !== 'undefined' && typeof report.crossing !== 'undefined' && typeof report.dribbling !== 'undefined' && typeof report.heading !== 'undefined' && typeof report.rangeOfPassing !== 'undefined') {
        const values = (parseInt(report.receivingTechniques) + parseInt(report.crossing) + parseInt(report.dribbling) + parseInt(report.heading) + parseInt(report.rangeOfPassing));
        const overall = Math.round(values/5);
        return overall;
      }
    } if (report.position === 'Centre Back') {
      if(typeof report.heading !== 'undefined' && typeof report.receivingTechniques !== 'undefined' && typeof report.rangeOfPassing !== 'undefined' && typeof report.tackling !== 'undefined' && typeof report.playingOutFromBack !== 'undefined') {
        const values = (parseInt(report.heading) + parseInt(report.receivingTechniques) + parseInt(report.rangeOfPassing) + parseInt(report.tackling) + parseInt(report.playingOutFromBack));
        const overall = Math.round(values/5);
        return overall;
      }
    }
  };

  const tacticalOverall = () => {
    if(report.position === 'Goalkeeper') {
      if(typeof report.counterAttacking !== 'undefined' && typeof report.supportDefenders !== 'undefined' && typeof report.playOutDecisions !== 'undefined' && typeof report.distancesBetweenGKandDEF !== 'undefined' && typeof report.organisingSetPlays !== 'undefined' && typeof report.startingPositions !== 'undefined') {
        const values = (parseInt(report.counterAttacking) + parseInt(report.supportDefenders) + parseInt(report.playOutDecisions) + parseInt(report.distancesBetweenGKandDEF) + parseInt(report.organisingSetPlays) + parseInt(report.startingPositions));
        const overall = Math.round(values/6);
        return overall;
      }
    } if (report.position === 'Full Back') {
      if(typeof report.oneVsOneDefending !== 'undefined' && typeof report.interceptions !== 'undefined' && typeof report.tracking !== 'undefined' && typeof report.covering !== 'undefined' && typeof report.holdingTheLine !== 'undefined' && typeof report.compactness !== 'undefined') {
        const values = (parseInt(report.oneVsOneDefending) + parseInt(report.interceptions) + parseInt(report.tracking) + parseInt(report.covering) + parseInt(report.holdingTheLine) + parseInt(report.compactness));
        const overall = Math.round(values/6);
        return overall;
      }
    } if (report.position === 'Centre Back') {
      if(typeof report.headingSetPlays !== 'undefined' && typeof report.interceptions !== 'undefined' && typeof report.holdingTheLine !== 'undefined' && typeof report.compactness !== 'undefined' && typeof report.decisionMaking) {
        const values = (parseInt(report.headingSetPlays) + parseInt(report.interceptions) + parseInt(report.holdingTheLine) + parseInt(report.compactness) + parseInt(report.decisionMaking));
        const overall = Math.round(values/5);
        return overall;
      }
    }
  };

  const mentalOverall = () => {
    if(report.position === 'Goalkeeper') {
      if(typeof report.bravery !== 'undefined' && typeof report.communication !== 'undefined' && typeof report.commandOfBox !== 'undefined' && typeof report.errorProne !== 'undefined' && typeof report.errorReaction !== 'undefined') {
        const values = (parseInt(report.bravery) + parseInt(report.communication) + parseInt(report.commandOfBox) + parseInt(report.errorProne) + parseInt(report.errorReaction));
        const overall = Math.round(values/5);
        return overall;
      }
    } if (report.position === 'Full Back') {
      if(typeof report.determination !== 'undefined' && typeof report.takeInfo !== 'undefined' && typeof report.errorReaction !== 'undefined' && typeof report.bravery !== 'undefined' && typeof report.tenacity !== 'undefined') {
        const values = (parseInt(report.bravery) + parseInt(report.takeInfo) + parseInt(report.errorReaction) + parseInt(report.bravery) + parseInt(report.tenacity));
        const overall = Math.round(values/5);
        return overall;
      }
    } if (report.position === 'Centre Back') {
      if(typeof report.errorReaction !== 'undefined' && typeof report.takeInfo !== 'undefined' && typeof report.determination !== 'undefined' && typeof report.tenacity !== 'undefined' && typeof report.aggression !== 'undefined' && typeof report.bravery !== 'undefined') {
        const values = (parseInt(report.errorReaction) + parseInt(report.takeInfo) + parseInt(report.determination) + parseInt(report.tenacity) + parseInt(report.aggression) + parseInt(report.bravery));
        const overall = Math.round(values/6);
        return overall;
      }
    }
  };

  const physicalOverall = () => {
    if(report.position === 'Goalkeeper') {
      if(typeof report.presence !== 'undefined' && typeof report.agility !== 'undefined' && typeof report.speedOffLine !== 'undefined' && typeof report.reach !== 'undefined' && typeof report.reactions !== 'undefined') {
        const values = (parseInt(report.presence) + parseInt(report.agility) + parseInt(report.speedOffLine) + parseInt(report.reach) + parseInt(report.reactions));
        const overall = Math.round(values/5);
        return overall;
      }
    } if (report.position === 'Full Back') {
      if(typeof report.pace !== 'undefined' && typeof report.recovery !== 'undefined' && typeof report.first5 !== 'undefined' && typeof report.endurance !== 'undefined' && typeof report.boxTobox !== 'undefined' && typeof report.strength !== 'undefined') {
        const values = (parseInt(report.pace) + parseInt(report.recovery) + parseInt(report.first5) + parseInt(report.endurance) + parseInt(report.boxTobox) + parseInt(report.strength));
        const overall = Math.round(values/6);
        return overall;
      }
    } if (report.position === 'Centre Back') {
      if(typeof report.jumping !== 'undefined' && typeof report.pace !== 'undefined' && typeof report.first5 !== 'undefined' && typeof report.strength !== 'undefined' && typeof report.mobility !== 'undefined') {
        const values = (parseInt(report.jumping) + parseInt(report.pace) + parseInt(report.first5) + parseInt(report.strength) + parseInt(report.mobility));
        const overall = Math.round(values/5);
        return overall;
      }
    }
  };

  return (
    <div className="container">
      <h1 className="is-size-1 has-text-centered">New Report</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="opposition">Opposition</label>
          <input id="opposition" name="opposition" className="input" placeholder="Opposition" onChange={handleChange} value={report.opposition || ''} />
        </div>
        <div className="field">
          <label htmlFor="score">Score</label>
          <input id="score" name="score" className="input" placeholder="Score" onChange={handleChange} value={report.score || ''} />
        </div>
        <div className="columns">
          <div className="field column is-6">
            <label htmlFor="ageGroup">Age Group</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select className="input" id="ageGroup" name="ageGroup" onChange={handleChange} value={report.ageGroup || ''}>
                  <option>Please select</option>
                  <option value="U10">U10</option>
                  <option value="U11">U11</option>
                  <option value="U12">U12</option>
                  <option value="U13">U13</option>
                  <option value="U14">U14</option>
                  <option value="U15">U15</option>
                  <option value="U16">U16</option>
                  <option value="U17">U17</option>
                  <option value="U18">U18</option>
                  <option value="U19">U19</option>
                  <option value="U20">U20</option>
                  <option value="U21">U21</option>
                  <option value="U23">U23</option>
                  <option value="First Team">First Team</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field column is-6">
            <label htmlFor="footed">Footed</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select className="input" id="footed" name="footed" onChange={handleChange} value={report.footed || ''}>
                  <option>Please select</option>
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="field column is-6">
            <label htmlFor="date">Date</label>
            <input id="date" name="date" className="input" type="date" onChange={handleChange} value={report.date || ''} />
          </div>
          <div className="field column is-6">
            <label htmlFor="height">Height</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select className="input" id="height" name="height" onChange={handleChange} value={report.height || ''}>
                  <option>Please select</option>
                  <option value="4ft">4ft</option>
                  <option value="4ft 1">4ft 1</option>
                  <option value="4ft 2">4ft 2</option>
                  <option value="4ft 3">4ft 3</option>
                  <option value="4ft 4">4ft 4</option>
                  <option value="4ft 5">4ft 5</option>
                  <option value="4ft 6">4ft 6</option>
                  <option value="4ft 7">4ft 7</option>
                  <option value="4ft 8">4ft 8</option>
                  <option value="4ft 9">4ft 9</option>
                  <option value="4ft 10">4ft 10</option>
                  <option value="4ft 11">4ft 11</option>
                  <option value="5ft">5ft</option>
                  <option value="5ft 1'">5ft 1</option>
                  <option value="5ft 2'">5ft 2</option>
                  <option value="5ft 3'">5ft 3</option>
                  <option value="5ft 4'">5ft 4</option>
                  <option value="5ft 5'">5ft 5</option>
                  <option value="5ft 6'">5ft 6</option>
                  <option value="5ft 7'">5ft 7</option>
                  <option value="5ft 8'">5ft 8</option>
                  <option value="5ft 9'">5ft 9</option>
                  <option value="5ft 10'">5ft 10</option>
                  <option value="5ft 11'">5ft 11</option>
                  <option value="6ft">6ft</option>
                  <option value="6ft 1'">6ft 1</option>
                  <option value="6ft 2'">6ft 2</option>
                  <option value="6ft 3'">6ft 3</option>
                  <option value="6ft 4'">6ft 4</option>
                  <option value="6ft 5'">6ft 5</option>
                  <option value="6ft 6'">6ft 6</option>
                  <option value="6ft 7'">6ft 7</option>
                  <option value="6ft 8'">6ft 8</option>
                  <option value="6ft 9'">6ft 9</option>
                  <option value="6ft 10'">6ft 10</option>
                  <option value="6ft 11'">6ft 11</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <label htmlFor="position">Position</label>
        </div>
        <div className="field pos">
          <div className="control" onChange={handlePositionSelect} value={report.position || ''}>
            <div className="columns is-mobile">
              <div className="column has-text-centered">
                <label className="radio">
                  <input type="radio" name="position" value="Goalkeeper" />
                  <p className="has-text-weight-bold has-text-white">GK</p>
                </label>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-2 is-offset-1">
                <label className="radio">
                  <input type="radio" name="position" value="Full Back"  />
                  <p className="has-text-weight-bold has-text-white">FB</p>
                </label>
              </div>
              <div className="column is-2 is-offset-1">
                <label className="radio">
                  <input type="radio" name="position" value="Centre Back" />
                  <p className="has-text-weight-bold has-text-white">CB</p>
                </label>
              </div>
              <div className="column is-2 is-offset-1">
                <label className="radio">
                  <input type="radio" name="position" value="Centre Back"/>
                  <p className="has-text-weight-bold has-text-white">CB</p>
                </label>
              </div>
              <div className="column is-2 is-offset-1">
                <label className="radio">
                  <input type="radio" name="position" value="Full Back" />
                  <p className="has-text-weight-bold has-text-white">FB</p>
                </label>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-2 is-offset-4">
                <label className="radio">
                  <input type="radio" name="position" value="Centre Midfield"/>
                  <p className="has-text-weight-bold has-text-white">CM</p>
                </label>
              </div>
              <div className="column is-2 is-offset-1">
                <label className="radio">
                  <input type="radio" name="position" value="Centre Midfield" />
                  <p className="has-text-weight-bold has-text-white">CM</p>
                </label>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column has-text-centered">
                <label className="radio">
                  <input type="radio" name="position" value="Attacking Midfield"/>
                  <p className="has-text-weight-bold has-text-white">AM</p>
                </label>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-2 is-offset-1">
                <label className="radio">
                  <input type="radio" name="position" value="Winger" />
                  <p className="has-text-weight-bold has-text-white">RW</p>
                </label>
              </div>
              <div className="column is-2 is-offset-7">
                <label className="radio">
                  <input type="radio" name="position" value="Winger"  />
                  <p className="has-text-weight-bold has-text-white">LW</p>
                </label>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column has-text-centered">
                <label className="radio">
                  <input type="radio" name="position" value="Striker"/>
                  <p className="has-text-weight-bold has-text-white">ST</p>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* GOALKEEPER FORM */}
        {report.position === 'Goalkeeper' &&
          <div>
            <hr />
            <h2 className="is-size-2">{report.position}</h2>
            <h4 className="is-size-4">Technical - <span>{technicalOverall()}</span></h4>
            <input type="number" className="is-invisible" name="technicalRating" onChange={handleChange} value={parseInt(report.technicalRating = technicalOverall()) || ''}/>
            <div className="columns">
              <div className="column is-2">
                <label htmlFor="distribution">Distribution</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="distribution" onChange={handleChange} value={parseInt(report.distribution) || ''}/>
              </div>
              <div className="column is-1">
                {report.distribution}
              </div>
              <div className="column is-2">
                <label htmlFor="backPass">Back Pass</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="backPass" onChange={handleChange} value={parseInt(report.backPass) || ''}/>
              </div>
              <div className="column is-1">
                {report.backPass}
              </div>
            </div>

            <div className="columns">
              <div className="column is-2">
                <label htmlFor="dealingWithCrosses">Dealing With Crosses</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="dealingWithCrosses" onChange={handleChange} value={parseInt(report.dealingWithCrosses) || ''}/>
              </div>
              <div className="column is-1">
                {report.dealingWithCrosses}
              </div>
              <div className="column is-2">
                <label htmlFor="shotStopping">Shot Stopping</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="shotStopping" onChange={handleChange} value={parseInt(report.shotStopping) || ''}/>
              </div>
              <div className="column is-1">
                {report.shotStopping}
              </div>
            </div>

            <div className="columns">
              <div className="column is-2">
                <label htmlFor="handling">Handling</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="generalHandling" onChange={handleChange} value={parseInt(report.generalHandling) || ''}/>
              </div>
              <div className="column is-1">
                {report.generalHandling}
              </div>
              <div className="column is-2">
                <label htmlFor="playingOutFromBack">Play Out From Back</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="playingOutFromBack" onChange={handleChange} value={parseInt(report.playingOutFromBack) || ''}/>
              </div>
              <div className="column is-1">
                {report.playingOutFromBack}
              </div>
            </div>

            <hr />
            <h4 className="is-size-4">Tactical - <span>{tacticalOverall()}</span></h4>
            <input type="number" className="is-invisible" name="tacticalRating" onChange={handleChange} value={parseInt(report.tacticalRating = tacticalOverall()) || ''}/>
            <div className="columns">
              <div className="column is-2">
                <label htmlFor="counterAttacking">Counter Attacking</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="counterAttacking" onChange={handleChange} value={parseInt(report.counterAttacking) || ''}/>
              </div>
              <div className="column is-1">
                {report.counterAttacking}
              </div>
              <div className="column is-2">
                <label htmlFor="supportDefenders">Supporting Defenders</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="supportDefenders" onChange={handleChange} value={parseInt(report.supportDefenders) || ''}/>
              </div>
              <div className="column is-1">
                {report.supportDefenders}
              </div>
            </div>

            <div className="columns">
              <div className="column is-2">
                <label htmlFor="playOutDecisions">Playing Out Decision</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="playOutDecisions" onChange={handleChange} value={parseInt(report.playOutDecisions) || ''}/>
              </div>
              <div className="column is-1">
                {report.playOutDecisions}
              </div>
              <div className="column is-2">
                <label htmlFor="distancesBetweenGKandDEF">Distance between Defence</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="distancesBetweenGKandDEF" onChange={handleChange} value={parseInt(report.distancesBetweenGKandDEF) || ''}/>
              </div>
              <div className="column is-1">
                {report.distancesBetweenGKandDEF}
              </div>
            </div>

            <div className="columns">
              <div className="column is-2">
                <label htmlFor="organisingSetPlays">Organising Set Plays</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="organisingSetPlays" onChange={handleChange} value={parseInt(report.organisingSetPlays) || ''}/>
              </div>
              <div className="column is-1">
                {report.organisingSetPlays}
              </div>
              <div className="column is-2">
                <label htmlFor="startingPositions">Starting Positions</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="startingPositions" onChange={handleChange} value={parseInt(report.startingPositions) || ''}/>
              </div>
              <div className="column is-1">
                {report.startingPositions}
              </div>
            </div>

            <hr />
            <h4 className="is-size-4">Mental - <span>{mentalOverall()}</span></h4>
            <input type="number" className="is-invisible" name="mentalRating" onChange={handleChange} value={parseInt(report.mentalRating = mentalOverall()) || ''}/>
            <div className="columns">
              <div className="column is-2">
                <label htmlFor="bravery">Bravery</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="bravery" onChange={handleChange} value={parseInt(report.bravery) || ''}/>
              </div>
              <div className="column is-1">
                {report.bravery}
              </div>
              <div className="column is-2">
                <label htmlFor="communication">Communication</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="communication" onChange={handleChange} value={parseInt(report.communication) || ''}/>
              </div>
              <div className="column is-1">
                {report.communication}
              </div>
            </div>

            <div className="columns">
              <div className="column is-2">
                <label htmlFor="commandOfBox">Command of Box</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="commandOfBox" onChange={handleChange} value={parseInt(report.commandOfBox) || ''}/>
              </div>
              <div className="column is-1">
                {report.commandOfBox}
              </div>
              <div className="column is-2">
                <label htmlFor="errorProne">Error Prone</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="errorProne" onChange={handleChange} value={parseInt(report.errorProne) || ''}/>
              </div>
              <div className="column is-1">
                {report.errorProne}
              </div>
            </div>

            <div className="columns">
              <div className="column is-2">
                <label htmlFor="errorReaction">Reaction To Errors</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="errorReaction" onChange={handleChange} value={parseInt(report.errorReaction) || ''}/>
              </div>
              <div className="column is-1">
                {report.errorReaction}
              </div>
            </div>

            <hr />
            <h4 className="is-size-4">Physical - <span>{physicalOverall()}</span></h4>
            <input type="number" className="is-invisible" name="physicalRating" onChange={handleChange} value={parseInt(report.physicalRating = physicalOverall()) || ''}/>
            <div className="columns">
              <div className="column is-2">
                <label htmlFor="presence">Presence</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="presence" onChange={handleChange} value={parseInt(report.presence) || ''}/>
              </div>
              <div className="column is-1">
                {report.presence}
              </div>
              <div className="column is-2">
                <label htmlFor="agility">Agility</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="agility" onChange={handleChange} value={parseInt(report.agility) || ''}/>
              </div>
              <div className="column is-1">
                {report.agility}
              </div>
            </div>

            <div className="columns">
              <div className="column is-2">
                <label htmlFor="speedOffLine">Speed Off The Line</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="speedOffLine" onChange={handleChange} value={parseInt(report.speedOffLine) || ''}/>
              </div>
              <div className="column is-1">
                {report.speedOffLine}
              </div>
              <div className="column is-2">
                <label htmlFor="reach">Reach</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="reach" onChange={handleChange} value={parseInt(report.reach) || ''}/>
              </div>
              <div className="column is-1">
                {report.reach}
              </div>
            </div>

            <div className="columns">
              <div className="column is-2">
                <label htmlFor="reactions">Reactions</label>
              </div>
              <div className="column is-3">
                <input type="range" min="1" max="5" className="slider" name="reactions" onChange={handleChange} value={parseInt(report.reactions) || ''}/>
              </div>
              <div className="column is-1">
                {report.reactions}
              </div>
            </div>

          </div>
          // END OF GOALKEEPER FORM
        }

        {/* FULL BACK FORM */}
        {report.position === 'Full Back' &&
        <div>
          <hr />
          <h2 className="is-size-2">{report.position}</h2>
          <h4 className="is-size-4">Technical - <span>{technicalOverall()}</span></h4>
          <input type="number" className="is-invisible" name="technicalRating" onChange={handleChange} value={parseInt(report.technicalRating = technicalOverall()) || ''}/>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="receivingTechniques">Receiving Techniques</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="receivingTechniques" onChange={handleChange} value={parseInt(report.receivingTechniques) || ''}/>
            </div>
            <div className="column is-1">
              {report.receivingTechniques}
            </div>
            <div className="column is-2">
              <label htmlFor="crossing">Crossing</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="crossing" onChange={handleChange} value={parseInt(report.crossing) || ''}/>
            </div>
            <div className="column is-1">
              {report.crossing}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="dribbling">Dribbling</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="dribbling" onChange={handleChange} value={parseInt(report.dribbling) || ''}/>
            </div>
            <div className="column is-1">
              {report.dribbling}
            </div>
            <div className="column is-2">
              <label htmlFor="heading">Heading</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="heading" onChange={handleChange} value={parseInt(report.heading) || ''}/>
            </div>
            <div className="column is-1">
              {report.heading}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="rangeOfPassing">Range of Passing</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="rangeOfPassing" onChange={handleChange} value={parseInt(report.rangeOfPassing) || ''}/>
            </div>
            <div className="column is-1">
              {report.rangeOfPassing}
            </div>
          </div>

          <hr />
          <h4 className="is-size-4">Tactical - <span>{tacticalOverall()}</span></h4>
          <input type="number" className="is-invisible" name="tacticalRating" onChange={handleChange} value={parseInt(report.tacticalRating = tacticalOverall()) || ''}/>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="oneVsOneDefending">1 Vs 1</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="oneVsOneDefending" onChange={handleChange} value={parseInt(report.oneVsOneDefending) || ''}/>
            </div>
            <div className="column is-1">
              {report.oneVsOneDefending}
            </div>
            <div className="column is-2">
              <label htmlFor="interceptions">Interceptions</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="interceptions" onChange={handleChange} value={parseInt(report.interceptions) || ''}/>
            </div>
            <div className="column is-1">
              {report.interceptions}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="tracking">Tracking</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="tracking" onChange={handleChange} value={parseInt(report.tracking) || ''}/>
            </div>
            <div className="column is-1">
              {report.tracking}
            </div>
            <div className="column is-2">
              <label htmlFor="covering">Covering</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="covering" onChange={handleChange} value={parseInt(report.covering) || ''}/>
            </div>
            <div className="column is-1">
              {report.covering}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="holdingTheLine">Holding The Line</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="holdingTheLine" onChange={handleChange} value={parseInt(report.holdingTheLine) || ''}/>
            </div>
            <div className="column is-1">
              {report.holdingTheLine}
            </div>
            <div className="column is-2">
              <label htmlFor="compactness">Compactness</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="compactness" onChange={handleChange} value={parseInt(report.compactness) || ''}/>
            </div>
            <div className="column is-1">
              {report.compactness}
            </div>
          </div>

          <hr />
          <h4 className="is-size-4">Mental - <span>{mentalOverall()}</span></h4>
          <input type="number" className="is-invisible" name="mentalRating" onChange={handleChange} value={parseInt(report.mentalRating = mentalOverall()) || ''}/>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="determination">Determination</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="determination" onChange={handleChange} value={parseInt(report.determination) || ''}/>
            </div>
            <div className="column is-1">
              {report.determination}
            </div>
            <div className="column is-2">
              <label htmlFor="takeInfo">Taking on Info</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="takeInfo" onChange={handleChange} value={parseInt(report.takeInfo) || ''}/>
            </div>
            <div className="column is-1">
              {report.takeInfo}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="errorReaction">Error Reaction</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="errorReaction" onChange={handleChange} value={parseInt(report.errorReaction) || ''}/>
            </div>
            <div className="column is-1">
              {report.errorReaction}
            </div>
            <div className="column is-2">
              <label htmlFor="bravery">Bravery</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="bravery" onChange={handleChange} value={parseInt(report.bravery) || ''}/>
            </div>
            <div className="column is-1">
              {report.bravery}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="tenacity">Tenactiy</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="tenacity" onChange={handleChange} value={parseInt(report.tenacity) || ''}/>
            </div>
            <div className="column is-1">
              {report.tenacity}
            </div>
          </div>

          <hr />
          <h4 className="is-size-4">Physical - <span>{physicalOverall()}</span></h4>
          <input type="number" className="is-invisible" name="physicalRating" onChange={handleChange} value={parseInt(report.physicalRating = physicalOverall()) || ''}/>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="pace">Pace</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="pace" onChange={handleChange} value={parseInt(report.pace) || ''}/>
            </div>
            <div className="column is-1">
              {report.pace}
            </div>
            <div className="column is-2">
              <label htmlFor="recovery">Recovery</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="recovery" onChange={handleChange} value={parseInt(report.recovery) || ''}/>
            </div>
            <div className="column is-1">
              {report.recovery}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="first5">First 5 Yards</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="first5" onChange={handleChange} value={parseInt(report.first5) || ''}/>
            </div>
            <div className="column is-1">
              {report.first5}
            </div>
            <div className="column is-2">
              <label htmlFor="endurance">Endurance</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="endurance" onChange={handleChange} value={parseInt(report.endurance) || ''}/>
            </div>
            <div className="column is-1">
              {report.endurance}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="boxTobox">Box to Box</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="boxTobox" onChange={handleChange} value={parseInt(report.boxTobox) || ''}/>
            </div>
            <div className="column is-1">
              {report.boxTobox}
            </div>
            <div className="column is-2">
              <label htmlFor="strength">Strength</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="strength" onChange={handleChange} value={parseInt(report.strength) || ''}/>
            </div>
            <div className="column is-1">
              {report.strength}
            </div>
          </div>

        </div>}

        {report.position === 'Centre Back' &&
        <div>
          <hr />
          <h2 className="is-size-2">{report.position}</h2>
          <h4 className="is-size-4">Technical - <span>{technicalOverall()}</span></h4>
          <input type="number" className="is-invisible" name="technicalRating" onChange={handleChange} value={parseInt(report.technicalRating = technicalOverall()) || ''}/>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="heading">Heading</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="heading" onChange={handleChange} value={parseInt(report.heading) || ''}/>
            </div>
            <div className="column is-1">
              {report.heading}
            </div>
            <div className="column is-2">
              <label htmlFor="receivingTechniques">Receiving Techniques</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="receivingTechniques" onChange={handleChange} value={parseInt(report.receivingTechniques) || ''}/>
            </div>
            <div className="column is-1">
              {report.receivingTechniques}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="rangeOfPassing">Range of Passing</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="rangeOfPassing" onChange={handleChange} value={parseInt(report.rangeOfPassing) || ''}/>
            </div>
            <div className="column is-1">
              {report.rangeOfPassing}
            </div>
            <div className="column is-2">
              <label htmlFor="tackling">Tackling</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="tackling" onChange={handleChange} value={parseInt(report.tackling) || ''}/>
            </div>
            <div className="column is-1">
              {report.tackling}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="playingOutFromBack">Playing Out From Back</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="playingOutFromBack" onChange={handleChange} value={parseInt(report.playingOutFromBack) || ''}/>
            </div>
            <div className="column is-1">
              {report.playingOutFromBack}
            </div>
          </div>

          <hr />
          <h4 className="is-size-4">Tactical - <span>{tacticalOverall()}</span></h4>
          <input type="number" className="is-invisible" name="tacticalRating" onChange={handleChange} value={parseInt(report.tacticalRating = tacticalOverall()) || ''}/>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="headingSetPlays">Heading Set Plays</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="headingSetPlays" onChange={handleChange} value={parseInt(report.headingSetPlays) || ''}/>
            </div>
            <div className="column is-1">
              {report.headingSetPlays}
            </div>
            <div className="column is-2">
              <label htmlFor="interceptions">Interceptions</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="interceptions" onChange={handleChange} value={parseInt(report.interceptions) || ''}/>
            </div>
            <div className="column is-1">
              {report.interceptions}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="holdingTheLine">Holding The Line</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="holdingTheLine" onChange={handleChange} value={parseInt(report.holdingTheLine) || ''}/>
            </div>
            <div className="column is-1">
              {report.holdingTheLine}
            </div>
            <div className="column is-2">
              <label htmlFor="compactness">Compactness</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="compactness" onChange={handleChange} value={parseInt(report.compactness) || ''}/>
            </div>
            <div className="column is-1">
              {report.compactness}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="decisionMaking">Decision Making</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="decisionMaking" onChange={handleChange} value={parseInt(report.decisionMaking) || ''}/>
            </div>
            <div className="column is-1">
              {report.decisionMaking}
            </div>
          </div>

          <hr />
          <h4 className="is-size-4">Mental - <span>{mentalOverall()}</span></h4>
          <input type="number" className="is-invisible" name="mentalRating" onChange={handleChange} value={parseInt(report.mentalRating = mentalOverall()) || ''}/>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="errorReaction">Error Reaction</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="errorReaction" onChange={handleChange} value={parseInt(report.errorReaction) || ''}/>
            </div>
            <div className="column is-1">
              {report.errorReaction}
            </div>
            <div className="column is-2">
              <label htmlFor="takeInfo">Taking on Info</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="takeInfo" onChange={handleChange} value={parseInt(report.takeInfo) || ''}/>
            </div>
            <div className="column is-1">
              {report.takeInfo}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="determination">Determination</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="determination" onChange={handleChange} value={parseInt(report.determination) || ''}/>
            </div>
            <div className="column is-1">
              {report.determination}
            </div>
            <div className="column is-2">
              <label htmlFor="tenacity">Tenacity</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="tenacity" onChange={handleChange} value={parseInt(report.tenacity) || ''}/>
            </div>
            <div className="column is-1">
              {report.tenacity}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="aggression">Aggression</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="aggression" onChange={handleChange} value={parseInt(report.aggression) || ''}/>
            </div>
            <div className="column is-1">
              {report.aggression}
            </div>
            <div className="column is-2">
              <label htmlFor="bravery">Bravery</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="bravery" onChange={handleChange} value={parseInt(report.bravery) || ''}/>
            </div>
            <div className="column is-1">
              {report.bravery}
            </div>
          </div>

          <hr />
          <h4 className="is-size-4">Physical - <span>{physicalOverall()}</span></h4>
          <input type="number" className="is-invisible" name="physicalRating" onChange={handleChange} value={parseInt(report.physicalRating = physicalOverall()) || ''}/>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="pace">Pace</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="pace" onChange={handleChange} value={parseInt(report.pace) || ''}/>
            </div>
            <div className="column is-1">
              {report.pace}
            </div>
            <div className="column is-2">
              <label htmlFor="jumping">Jumping</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="jumping" onChange={handleChange} value={parseInt(report.jumping) || ''}/>
            </div>
            <div className="column is-1">
              {report.jumping}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="first5">First 5 Yards</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="first5" onChange={handleChange} value={parseInt(report.first5) || ''}/>
            </div>
            <div className="column is-1">
              {report.first5}
            </div>
            <div className="column is-2">
              <label htmlFor="strength">Strength</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="strength" onChange={handleChange} value={parseInt(report.strength) || ''}/>
            </div>
            <div className="column is-1">
              {report.strength}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="mobility">Mobility</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="mobility" onChange={handleChange} value={parseInt(report.mobility) || ''}/>
            </div>
            <div className="column is-1">
              {report.mobility}
            </div>
          </div>

        </div>}

        {report.position === 'Centre Midfield' &&
        <div>
          <hr />
          <h2 className="is-size-2">{report.position}</h2>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="boxTobox">Box To box</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="boxTobox" onChange={handleChange} value={parseInt(report.boxTobox) || ''}/>
            </div>
            <div className="column is-1">
              {report.boxTobox}
            </div>
            <div className="column is-2">
              <label htmlFor="strengthTackle">Strength In Tackle</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="strengthTackle" onChange={handleChange} value={parseInt(report.strengthTackle) || ''}/>
            </div>
            <div className="column is-1">
              {report.strengthTackle}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="secondBall">Second Ball</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="secondBall" onChange={handleChange} value={parseInt(report.secondBall) || ''}/>
            </div>
            <div className="column is-1">
              {report.secondBall}
            </div>
            <div className="column is-2">
              <label htmlFor="rangeOfPassing">Range of Passing</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="rangeOfPassing" onChange={handleChange} value={parseInt(report.rangeOfPassing) || ''}/>
            </div>
            <div className="column is-1">
              {report.rangeOfPassing}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="interceptions">Interceptions</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="interceptions" onChange={handleChange} value={parseInt(report.interceptions) || ''}/>
            </div>
            <div className="column is-1">
              {report.interceptions}
            </div>
            <div className="column is-2">
              <label htmlFor="tackling">Tackling</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="tackling" onChange={handleChange} value={parseInt(report.tackling) || ''}/>
            </div>
            <div className="column is-1">
              {report.tackling}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="blocking">Blocking</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="blocking" onChange={handleChange} value={parseInt(report.blocking) || ''}/>
            </div>
            <div className="column is-1">
              {report.blocking}
            </div>
            <div className="column is-2">
              <label htmlFor="heading">Heading</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="heading" onChange={handleChange} value={parseInt(report.heading) || ''}/>
            </div>
            <div className="column is-1">
              {report.heading}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="turning">Turning</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="turning" onChange={handleChange} value={parseInt(report.turning) || ''}/>
            </div>
            <div className="column is-1">
              {report.turning}
            </div>
            <div className="column is-2">
              <label htmlFor="dribbling">Dribbling</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="dribbling" onChange={handleChange} value={parseInt(report.dribbling) || ''}/>
            </div>
            <div className="column is-1">
              {report.dribbling}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="finishing">Finishing</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="finishing" onChange={handleChange} value={parseInt(report.finishing) || ''}/>
            </div>
            <div className="column is-1">
              {report.finishing}
            </div>
            <div className="column is-2">
              <label htmlFor="tracking">Tracking</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="tracking" onChange={handleChange} value={parseInt(report.tracking) || ''}/>
            </div>
            <div className="column is-1">
              {report.tracking}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="receivingTechniques">Receiving Techniques</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="receivingTechniques" onChange={handleChange} value={parseInt(report.receivingTechniques) || ''}/>
            </div>
            <div className="column is-1">
              {report.receivingTechniques}
            </div>
            <div className="column is-2">
              <label htmlFor="passingSupport">Passing Support</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="passingSupport" onChange={handleChange} value={parseInt(report.passingSupport) || ''}/>
            </div>
            <div className="column is-1">
              {report.passingSupport}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="depthWidth">Depth Width</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="depthWidth" onChange={handleChange} value={parseInt(report.depthWidth) || ''}/>
            </div>
            <div className="column is-1">
              {report.depthWidth}
            </div>
            <div className="column is-2">
              <label htmlFor="mobilityMovement">Mobility Movement</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="mobilityMovement" onChange={handleChange} value={parseInt(report.mobilityMovement) || ''}/>
            </div>
            <div className="column is-1">
              {report.mobilityMovement}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="penetration">Penetration</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="penetration" onChange={handleChange} value={parseInt(report.penetration) || ''}/>
            </div>
            <div className="column is-1">
              {report.penetration}
            </div>
            <div className="column is-2">
              <label htmlFor="improvisation">Improvisation</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="improvisation" onChange={handleChange} value={parseInt(report.improvisation) || ''}/>
            </div>
            <div className="column is-1">
              {report.improvisation}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="recoveryDelay">Recovery Delay</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="recoveryDelay" onChange={handleChange} value={parseInt(report.recoveryDelay) || ''}/>
            </div>
            <div className="column is-1">
              {report.recoveryDelay}
            </div>
            <div className="column is-2">
              <label htmlFor="pressureSupport">Pressure Support</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="pressureSupport" onChange={handleChange} value={parseInt(report.pressureSupport) || ''}/>
            </div>
            <div className="column is-1">
              {report.pressureSupport}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="compactness">Compactness</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="compactness" onChange={handleChange} value={parseInt(report.compactness) || ''}/>
            </div>
            <div className="column is-1">
              {report.compactness}
            </div>
            <div className="column is-2">
              <label htmlFor="coverBalance">Cover Balance</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="coverBalance" onChange={handleChange} value={parseInt(report.coverBalance) || ''}/>
            </div>
            <div className="column is-1">
              {report.coverBalance}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="controlRestraint">Restraint</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="controlRestraint" onChange={handleChange} value={parseInt(report.controlRestraint) || ''}/>
            </div>
            <div className="column is-1">
              {report.controlRestraint}
            </div>
            <div className="column is-2">
              <label htmlFor="headingAttackingSetPlays">Heading Atk Set Play</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="headingAttackingSetPlays" onChange={handleChange} value={parseInt(report.headingAttackingSetPlays) || ''}/>
            </div>
            <div className="column is-1">
              {report.headingAttackingSetPlays}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="clearances">Clearances</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="clearances" onChange={handleChange} value={parseInt(report.clearances) || ''}/>
            </div>
            <div className="column is-1">
              {report.clearances}
            </div>
            <div className="column is-2">
              <label htmlFor="headingGeneralSetPlays">Heading General Set Play</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="headingGeneralSetPlays" onChange={handleChange} value={parseInt(report.headingGeneralSetPlays) || ''}/>
            </div>
            <div className="column is-1">
              {report.headingGeneralSetPlays}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="pace">Pace</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="pace" onChange={handleChange} value={parseInt(report.pace) || ''}/>
            </div>
            <div className="column is-1">
              {report.pace}
            </div>
            <div className="column is-2">
              <label htmlFor="strength">Strength</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="strength" onChange={handleChange} value={parseInt(report.strength) || ''}/>
            </div>
            <div className="column is-1">
              {report.strength}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="endurance">Endurance</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="endurance" onChange={handleChange} value={parseInt(report.endurance) || ''}/>
            </div>
            <div className="column is-1">
              {report.endurance}
            </div>
            <div className="column is-2">
              <label htmlFor="mobility">Mobility</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="mobility" onChange={handleChange} value={parseInt(report.mobility) || ''}/>
            </div>
            <div className="column is-1">
              {report.mobility}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="jumping">Jumping</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="jumping" onChange={handleChange} value={parseInt(report.jumping) || ''}/>
            </div>
            <div className="column is-1">
              {report.jumping}
            </div>
            <div className="column is-2">
              <label htmlFor="first5">First 5 Yards</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="first5" onChange={handleChange} value={parseInt(report.first5) || ''}/>
            </div>
            <div className="column is-1">
              {report.first5}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="workRate">Work Rate</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="workRate" onChange={handleChange} value={parseInt(report.workRate) || ''}/>
            </div>
            <div className="column is-1">
              {report.workRate}
            </div>
            <div className="column is-2">
              <label htmlFor="determination">Determination</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="determination" onChange={handleChange} value={parseInt(report.determination) || ''}/>
            </div>
            <div className="column is-1">
              {report.determination}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="takeInfo">Take on Info</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="takeInfo" onChange={handleChange} value={parseInt(report.takeInfo) || ''}/>
            </div>
            <div className="column is-1">
              {report.takeInfo}
            </div>
            <div className="column is-2">
              <label htmlFor="errorReaction">Reaction to Errors</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="errorReaction" onChange={handleChange} value={parseInt(report.errorReaction) || ''}/>
            </div>
            <div className="column is-1">
              {report.errorReaction}
            </div>
          </div>
        </div>}

        {report.position === 'Attacking Midfield' &&
        <div>
          <hr />
          <h2 className="is-size-2">{report.position}</h2>
          <div className="columns">
            <div className="column is-2">
              <label htmlFor="turning">Turning</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="turning" onChange={handleChange} value={parseInt(report.turning) || ''}/>
            </div>
            <div className="column is-1">
              {report.turning}
            </div>
            <div className="column is-2">
              <label htmlFor="dribbling">Dribbling</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="dribbling" onChange={handleChange} value={parseInt(report.dribbling) || ''}/>
            </div>
            <div className="column is-1">
              {report.dribbling}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="finishing">Finishing</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="finishing" onChange={handleChange} value={parseInt(report.finishing) || ''}/>
            </div>
            <div className="column is-1">
              {report.finishing}
            </div>
            <div className="column is-2">
              <label htmlFor="tracking">Tracking</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="tracking" onChange={handleChange} value={parseInt(report.tracking) || ''}/>
            </div>
            <div className="column is-1">
              {report.tracking}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="scoringTechniques">Scoring Techniques</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="scoringTechniques" onChange={handleChange} value={parseInt(report.scoringTechniques) || ''}/>
            </div>
            <div className="column is-1">
              {report.scoringTechniques}
            </div>
            <div className="column is-2">
              <label htmlFor="pressuring">Pressuring</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="pressuring" onChange={handleChange} value={parseInt(report.pressuring) || ''}/>
            </div>
            <div className="column is-1">
              {report.pressuring}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="forcingPlay">Forcing Play</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="forcingPlay" onChange={handleChange} value={parseInt(report.forcingPlay) || ''}/>
            </div>
            <div className="column is-1">
              {report.forcingPlay}
            </div>
            <div className="column is-2">
              <label htmlFor="recoveryRun">Recovery Runs</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="recoveryRun" onChange={handleChange} value={parseInt(report.recoveryRun) || ''}/>
            </div>
            <div className="column is-1">
              {report.recoveryRun}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="linkPlay">Link Play</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="linkPlay" onChange={handleChange} value={parseInt(report.linkPlay) || ''}/>
            </div>
            <div className="column is-1">
              {report.linkPlay}
            </div>
            <div className="column is-2">
              <label htmlFor="changeOfDirection">Change of Direction</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="changeOfDirection" onChange={handleChange} value={parseInt(report.changeOfDirection) || ''}/>
            </div>
            <div className="column is-1">
              {report.changeOfDirection}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="receivingTechniques">Receiving Techniques</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="receivingTechniques" onChange={handleChange} value={parseInt(report.receivingTechniques) || ''}/>
            </div>
            <div className="column is-1">
              {report.receivingTechniques}
            </div>
            <div className="column is-2">
              <label htmlFor="heading">Heading</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="heading" onChange={handleChange} value={parseInt(report.heading) || ''}/>
            </div>
            <div className="column is-1">
              {report.heading}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="passingSupport">Passing Support</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="passingSupport" onChange={handleChange} value={parseInt(report.passingSupport) || ''}/>
            </div>
            <div className="column is-1">
              {report.passingSupport}
            </div>
            <div className="column is-2">
              <label htmlFor="depthWidth">Depth Width</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="depthWidth" onChange={handleChange} value={parseInt(report.depthWidth) || ''}/>
            </div>
            <div className="column is-1">
              {report.depthWidth}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="mobilityMovement">Movement</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="mobilityMovement" onChange={handleChange} value={parseInt(report.mobilityMovement) || ''}/>
            </div>
            <div className="column is-1">
              {report.mobilityMovement}
            </div>
            <div className="column is-2">
              <label htmlFor="penetration">Penetration</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="penetration" onChange={handleChange} value={parseInt(report.penetration) || ''}/>
            </div>
            <div className="column is-1">
              {report.penetration}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="improvisation">Improvisation</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="improvisation" onChange={handleChange} value={parseInt(report.improvisation) || ''}/>
            </div>
            <div className="column is-1">
              {report.improvisation}
            </div>
            <div className="column is-2">
              <label htmlFor="recoveryDelay">Recovery Delay</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="recoveryDelay" onChange={handleChange} value={parseInt(report.recoveryDelay) || ''}/>
            </div>
            <div className="column is-1">
              {report.recoveryDelay}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="pressureSupport">Pressure Support</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="pressureSupport" onChange={handleChange} value={parseInt(report.pressureSupport) || ''}/>
            </div>
            <div className="column is-1">
              {report.pressureSupport}
            </div>
            <div className="column is-2">
              <label htmlFor="compactness">Compactness</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="compactness" onChange={handleChange} value={parseInt(report.compactness) || ''}/>
            </div>
            <div className="column is-1">
              {report.compactness}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="coverBalance">Cover Balance</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="coverBalance" onChange={handleChange} value={parseInt(report.coverBalance) || ''}/>
            </div>
            <div className="column is-1">
              {report.coverBalance}
            </div>
            <div className="column is-2">
              <label htmlFor="controlRestraint">Restraint</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="controlRestraint" onChange={handleChange} value={parseInt(report.controlRestraint) || ''}/>
            </div>
            <div className="column is-1">
              {report.controlRestraint}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="pace">Pace</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="pace" onChange={handleChange} value={parseInt(report.pace) || ''}/>
            </div>
            <div className="column is-1">
              {report.pace}
            </div>
            <div className="column is-2">
              <label htmlFor="strength">Strength</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="strength" onChange={handleChange} value={parseInt(report.strength) || ''}/>
            </div>
            <div className="column is-1">
              {report.strength}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="endurance">Endurance</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="endurance" onChange={handleChange} value={parseInt(report.endurance) || ''}/>
            </div>
            <div className="column is-1">
              {report.endurance}
            </div>
            <div className="column is-2">
              <label htmlFor="mobility">Mobility</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="mobility" onChange={handleChange} value={parseInt(report.mobility) || ''}/>
            </div>
            <div className="column is-1">
              {report.mobility}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="first5">First 5 Yards</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="first5" onChange={handleChange} value={parseInt(report.first5) || ''}/>
            </div>
            <div className="column is-1">
              {report.first5}
            </div>
            <div className="column is-2">
              <label htmlFor="workRate">Work Rate</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="workRate" onChange={handleChange} value={parseInt(report.workRate) || ''}/>
            </div>
            <div className="column is-1">
              {report.workRate}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="determination">Determination</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="determination" onChange={handleChange} value={parseInt(report.determination) || ''}/>
            </div>
            <div className="column is-1">
              {report.determination}
            </div>
            <div className="column is-2">
              <label htmlFor="takeInfo">Take on Info</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="takeInfo" onChange={handleChange} value={parseInt(report.takeInfo) || ''}/>
            </div>
            <div className="column is-1">
              {report.takeInfo}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="errorReaction">Error Reaction</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="errorReaction" onChange={handleChange} value={parseInt(report.errorReaction) || ''}/>
            </div>
            <div className="column is-1">
              {report.errorReaction}
            </div>
          </div>
        </div>}

        <hr />
        <h2 className="is-size-2">Expenses</h2>
        <div className="field">
          <label htmlFor="startLocation">Start Location</label>
          <AutoComplete id="startLocation" name="startLocation" className="input" placeholder="Start Location" handlePlaceChange={handleStartLocationChange}/>
        </div>
        <div className="field">
          <label htmlFor="endLocation">End Location</label>
          <AutoComplete id="endLocation" name="endLocation" className="input" placeholder="End Location" handlePlaceChange={handleEndLocationChange}/>
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    </div>
  );
};

export default TeamsForm;
