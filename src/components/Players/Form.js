import React from 'react';

const PlayerForm = ({ handleChange, handleSubmit, player }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="Name" onChange={handleChange} value={player.name || ''} />
      </div>
      <button className="button is-primary">Submit</button>
    </form>
  );
};

export default PlayerForm;
