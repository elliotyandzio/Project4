import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TeamsNew from './New';

class TeamsIndex extends React.Component {
  state = {
    teams: [],
    isOpen: false
  }

  componentDidMount() {
    axios.get('/api/teams')
      .then(res => this.setState({teams: res.data}));
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen});
  }

  componentWillUpdate() {
    this.state.isOpen && this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
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

        {/* Start of the new team modal */}
        <div className={`modal ${this.state.isOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Add a team</p>
              <button onClick={this.handleToggle} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <TeamsNew handleToggle={this.handleToggle}/>
            </section>
          </div>
        </div>
        {/* End of the new team modal */}

      </div>
    );
  }
}

export default TeamsIndex;
