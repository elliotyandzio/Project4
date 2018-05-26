import React from 'react';
import axios from 'axios';

class TeamsIndex extends React.Component {
  state = {
    teams: []
  }


  componentDidMount() {
    axios.get('/api/teams')
      .then(res => console.log({teams: res.data}));
  }


  render() {
    return (
      <div>
        <h1>Teams Index</h1>
      </div>
    );
  }
}

export default TeamsIndex;
