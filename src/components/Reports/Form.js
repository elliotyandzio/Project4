import React from 'react';
import AutoComplete from '../common/AutoComplete';

const TeamsForm = ({ handleChange, handleSubmit, report, handlePositionSelect, handlePlaceChange }) => {

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
        <input id="footed" name="footed" className="input" placeholder="Footed" onChange={handleChange} value={report.footed || ''} />
      </div>
      <div className="field">
        <label htmlFor="position">Position</label>
      </div>
      <div className="field pos">
        <div className="control" onChange={handlePositionSelect}>
          <div className="columns">
            <div className="column has-text-centered">
              <label className="radio">
                <input type="radio" name="position" value="Goalkeeper"/>
                <p className="has-text-weight-bold has-text-white">GK</p>
              </label>
            </div>
          </div>
          <div className="columns">
            <div className="column is-2 is-offset-1">
              <label className="radio">
                <input type="radio" name="position" value="Full Back"/>
                <p className="has-text-weight-bold has-text-white">FB</p>
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
                <input type="radio" name="position" value="Centre Back"/>
                <p className="has-text-weight-bold has-text-white">CB</p>
              </label>
            </div>
            <div className="column is-2 is-offset-1">
              <label className="radio">
                <input type="radio" name="position" value="Full Back"/>
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
                <input type="radio" name="position" value="Centre Midfield"/>
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
                <input type="radio" name="position" value="Winger"/>
                <p className="has-text-weight-bold has-text-white">RW</p>
              </label>
            </div>
            <div className="column is-2 is-offset-7">
              <label className="radio">
                <input type="radio" name="position" value="Winger"/>
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
      <div className="field">
        <label htmlFor="startingLocation">Starting Location</label>
        <AutoComplete id="startingLocation" name="startingLocation" className="input" placeholder="Start Location" handlePlaceChange={handlePlaceChange} />
      </div>
      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default TeamsForm;
