import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TeamForm from './Form';
import Auth from '../lib/Auth';

class TeamsIndex extends React.Component {
  state = {
    teams: [],
    team: {},
    isOpen: false
  }

  componentDidMount() {
    axios.get('/api/teams')
      .then(res => this.setState({teams: res.data}));
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen});
  }

  handleChange = ({ target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    const team = { ...this.state.team, [name]: value };
    this.setState({ errors, team }, () => console.log(this.state));
  }

  handleSubmit = ( e ) => {
    console.log('here!');
    e.preventDefault();
    axios.post('/api/teams', this.state.team, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(res => {
        const teams = this.state.teams.concat(res.data);
        console.log('hello');
        this.setState({ teams, isOpen: false, team: {} });
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="is-size-1 has-text-centered">Teams Index</h1>
        <button className="button is-success" onClick={this.handleToggle}>Add Team</button>
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
              <tr key={teams._id}>
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

        {/* Start of the new team modal */}
        <div className={`modal ${this.state.isOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Add a team</p>
              <button onClick={() => this.setState({ isOpen: false })} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <TeamForm
                team={this.state.team}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </section>
          </div>
        </div>
        {/* End of the new team modal */}

      </div>
    );
  }
}

export default TeamsIndex;
