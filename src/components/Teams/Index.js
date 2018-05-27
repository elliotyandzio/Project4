import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TeamsIndex extends React.Component {
  state = {
    teams: []
  }


  componentDidMount() {
    axios.get('/api/teams')
      .then(res => this.setState({teams: res.data}));
  }


  render() {
    return (
      <div>
        <h1 className="is-size-1 has-text-centered">Teams Index</h1>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-responsive">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>League</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.teams.map(teams =>
              <tr key={teams.id}>
                <td>{teams.name}</td>
                <td>{teams.league}</td>
                <td className="has-text-centered">
                  <Link to={`/teams/${teams._id}/players`}>
                    <button className="button is-primary">View</button>
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TeamsIndex;
