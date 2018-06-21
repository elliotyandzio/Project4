import React from 'react';

const TeamsForm = ({ handleChange, handleSubmit, team }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="Name" onChange={handleChange} value={team.name || ''} />
      </div>
      <div className="field">
        <label htmlFor="league">League</label>
        <input id="league" name="league" className="input" placeholder="League" onChange={handleChange} value={team.league || ''} />
      </div>
      <button className="button is-success">Submit</button>
    </form>
  );
};

export default TeamsForm;
