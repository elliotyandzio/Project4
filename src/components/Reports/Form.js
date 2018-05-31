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
        <hr />
        <h2 className="is-size-2">{report.position}</h2>
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
            <label htmlFor="runningWithBall">Running With The Ball</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="runningWithBall" onChange={handleChange} value={parseInt(report.runningWithBall) || ''}/>
          </div>
          <div className="column is-1">
            {report.runningWithBall}
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
            <label htmlFor="finishing">Finishing</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="finishing" onChange={handleChange} value={parseInt(report.finishing) || ''}/>
          </div>
          <div className="column is-1">
            {report.finishing}
          </div>
          <div className="column is-2">
            <label htmlFor="oneVsOneDefending">1 VS 1 Defending</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="oneVsOneDefending" onChange={handleChange} value={parseInt(report.oneVsOneDefending) || ''}/>
          </div>
          <div className="column is-1">
            {report.oneVsOneDefending}
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
            <label htmlFor="recoveryDelay">Recovery</label>
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
            <label htmlFor="workRate">Work Rate</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="workRate" onChange={handleChange} value={parseInt(report.workRate) || ''}/>
          </div>
          <div className="column is-1">
            {report.workRate}
          </div>
          <div className="column is-2">
            <label htmlFor="takeInfo">Taking Info On Board</label>
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
            <label htmlFor="errorReaction">Reaction To Errors</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="errorReaction" onChange={handleChange} value={parseInt(report.errorReaction) || ''}/>
          </div>
          <div className="column is-1">
            {report.errorReaction}
          </div>
        </div>
      </div>}

      {report.position === 'Centre Back' &&
      <div>
        <hr />
        <h2 className="is-size-2">{report.position}</h2>
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
            <label htmlFor="heading">Heading</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="heading" onChange={handleChange} value={parseInt(report.heading) || ''}/>
          </div>
          <div className="column is-1">
            {report.heading}
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
            <label htmlFor="mobilityMovement">Movement</label>
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
            <label htmlFor="improvisation">Improvistion</label>
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
            <label htmlFor="controlRestraint">Control</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="controlRestraint" onChange={handleChange} value={parseInt(report.controlRestraint) || ''}/>
          </div>
          <div className="column is-1">
            {report.controlRestraint}
          </div>
          <div className="column is-2">
            <label htmlFor="pace">Pace</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="pace" onChange={handleChange} value={parseInt(report.pace) || ''}/>
          </div>
          <div className="column is-1">
            {report.pace}
          </div>
        </div>

        <div className="columns">
          <div className="column is-2">
            <label htmlFor="strength">Strength</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="strength" onChange={handleChange} value={parseInt(report.strength) || ''}/>
          </div>
          <div className="column is-1">
            {report.strength}
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
            <label htmlFor="mobility">Mobility</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="mobility" onChange={handleChange} value={parseInt(report.mobility) || ''}/>
          </div>
          <div className="column is-1">
            {report.mobility}
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
            <label htmlFor="takeInfo">Take On Info</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="takeInfo" onChange={handleChange} value={parseInt(report.takeInfo) || ''}/>
          </div>
          <div className="column is-1">
            {report.takeInfo}
          </div>
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

        <div className="columns">
          <div className="column is-2">
            <label htmlFor="headingAttackingSetPlays">Heading Atk Set Pieces</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="headingAttackingSetPlays" onChange={handleChange} value={parseInt(report.headingAttackingSetPlays) || ''}/>
          </div>
          <div className="column is-1">
            {report.headingAttackingSetPlays}
          </div>
          <div className="column is-2">
            <label htmlFor="clearances">Clearances</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="clearances" onChange={handleChange} value={parseInt(report.clearances) || ''}/>
          </div>
          <div className="column is-1">
            {report.clearances}
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
            <label htmlFor="rangeOfPassing">Range Of Passing</label>
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
            <label htmlFor="headingGeneralSetPlays">Heading Set Pieces</label>
          </div>
          <div className="column is-3">
            <input type="range" min="1" max="5" className="slider" name="headingGeneralSetPlays" onChange={handleChange} value={parseInt(report.headingGeneralSetPlays) || ''}/>
          </div>
          <div className="column is-1">
            {report.headingGeneralSetPlays}
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
  );
};

export default TeamsForm;
