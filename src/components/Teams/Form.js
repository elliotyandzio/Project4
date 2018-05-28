import React from 'react';

const TeamsForm = ({ handleChange, handleSubmit, teams }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="Name" onChange={handleChange} value={teams.name || ''} />
      </div>
      <div className="field">
        <label htmlFor="league">League</label>
        <input id="league" name="league" className="input" placeholder="League" onChange={handleChange} value={teams.league || ''} />
      </div>
      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default TeamsForm;
