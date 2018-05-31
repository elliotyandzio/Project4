import React from 'react';
import AutoComplete from '../common/AutoComplete';

const TeamsForm = ({ handleChange, handleSubmit, report, handlePositionSelect, handleStartLocationChange, handleEndLocationChange }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="opposition">Opposition</label>
        <input id="opposition" name="opposition" className="input" placeholder="Opposition" onChange={handleChange} value={report.opposition || ''} />
      </div>
      <div className="field">
        <label htmlFor="score">Score</label>
        <input id="score" name="score" className="input" placeholder="Score" onChange={handleChange} value={report.score || ''} />
      </div>
      <div className="field">
        <label htmlFor="ageGroup">Age Group</label>
        <input id="ageGroup" name="ageGroup" className="input" placeholder="Age Group" onChange={handleChange} value={report.ageGroup || ''} />
      </div>
      <div className="field">
        <label htmlFor="footed">Footed</label>
        <div className="control">
          <div className="select">
            <select className="input" id="footed" name="footed" onChange={handleChange} value={report.footed || ''}>
              <option>Please select</option>
              <option value="Right">Right</option>
              <option value="Left">Left</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label htmlFor="position">Position</label>
      </div>
      <div className="field pos">
        <div className="control" onChange={handlePositionSelect} value={report.position || ''}>
          <div className="columns">
            <div className="column has-text-centered">
              <label className="radio">
                <input type="radio" name="position" value="Goalkeeper" />
                <p className="has-text-weight-bold has-text-white">GK</p>
              </label>
            </div>
          </div>
          <div className="columns">
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
          <div className="columns">
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
          <div className="columns">
            <div className="column has-text-centered">
              <label className="radio">
                <input type="radio" name="position" value="Attacking Midfield"/>
                <p className="has-text-weight-bold has-text-white">AM</p>
              </label>
            </div>
          </div>
          <div className="columns">
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
          <div className="columns">
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
              <label htmlFor="playingOutFromBack">Playing out</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="playingOutFromBack" onChange={handleChange} value={parseInt(report.playingOutFromBack) || ''}/>
            </div>
            <div className="column is-1">
              {report.playingOutFromBack}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="backPass">Back Pass</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="backPass" onChange={handleChange} value={parseInt(report.backPass) || ''}/>
            </div>
            <div className="column is-1">
              {report.backPass}
            </div>
            <div className="column is-2">
              <label htmlFor="attackingDecisionMaking">Atk Decisions</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="attackingDecisionMaking" onChange={handleChange} value={parseInt(report.attackingDecisionMaking) || ''}/>
            </div>
            <div className="column is-1">
              {report.attackingDecisionMaking}
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
              <label htmlFor="shotStopping">Shot stopping</label>
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
              <label htmlFor="dealingWithCrosses">Dealing with crosses</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="dealingWithCrosses" onChange={handleChange} value={parseInt(report.dealingWithCrosses) || ''}/>
            </div>
            <div className="column is-1">
              {report.dealingWithCrosses}
            </div>
            <div className="column is-2">
              <label htmlFor="defensiveDecisionMaking">Def Decisions</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="defensiveDecisionMaking" onChange={handleChange} value={parseInt(report.defensiveDecisionMaking) || ''}/>
            </div>
            <div className="column is-1">
              {report.defensiveDecisionMaking}
            </div>
          </div>

          <div className="columns">
            <div className="column is-2">
              <label htmlFor="switchingPlay">Switching Play</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="switchingPlay" onChange={handleChange} value={parseInt(report.switchingPlay) || ''}/>
            </div>
            <div className="column is-1">
              {report.switchingPlay}
            </div>
            <div className="column is-2">
              <label htmlFor="playOutDecisions">Playing Out Decisions</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="playOutDecisions" onChange={handleChange} value={parseInt(report.playOutDecisions) || ''}/>
            </div>
            <div className="column is-1">
              {report.playOutDecisions}
            </div>
          </div>

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
              <label htmlFor="supportDefenders">Support Defenders</label>
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
              <label htmlFor="startingPositions">Starting Positions</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="startingPositions" onChange={handleChange} value={parseInt(report.startingPositions) || ''}/>
            </div>
            <div className="column is-1">
              {report.startingPositions}
            </div>
            <div className="column is-2">
              <label htmlFor="distancesBetweenGKandDEF">Distance Between Def</label>
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
              <label htmlFor="understandingDefenders">Understanding Defenders</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="understandingDefenders" onChange={handleChange} value={parseInt(report.understandingDefenders) || ''}/>
            </div>
            <div className="column is-1">
              {report.understandingDefenders}
            </div>
            <div className="column is-2">
              <label htmlFor="organisingSetPlays">Organising Set Plays</label>
            </div>
            <div className="column is-3">
              <input type="range" min="1" max="5" className="slider" name="organisingSetPlays" onChange={handleChange} value={parseInt(report.organisingSetPlays) || ''}/>
            </div>
            <div className="column is-1">
              {report.organisingSetPlays}
            </div>
          </div>

        </div>
        // END OF GOALKEEPER FORM
      }

      {/* FULL BACK FORM */}
      {report.position === 'Full Back' &&
      <div>

      </div>
      }
         
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
  );
};

export default TeamsForm;
