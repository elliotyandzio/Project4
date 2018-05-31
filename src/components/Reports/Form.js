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
      {report.position === 'Goalkeeper' &&
      <div className="field">
        <label htmlFor="distribution">Distribution</label>
        <input type="range" min="1" max="5" className="input" name="distribution" onChange={handleChange} value={parseInt(report.distribution) || ''}/>
        <p>{report.distribution}</p>
      </div>
      }
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
