import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlayerForm from '../Players/form';
import Auth from '../lib/Auth';

class TeamsIndex extends React.Component {
  state = {
    teamPlayers: [],
    player: {},
    isOpen: false
  }

  componentDidMount() {
    axios.get(`/api/teams/${this.props.match.params.id}`)
      .then(res => this.setState({teamPlayers: res.data.players}));
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen});
  }

  handleChange = ({ target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    const player = { ...this.state.player, [name]: value };
    this.setState({ errors, player }, () => console.log(this.state.player));
  }

  handleSubmit = ( e ) => {
    e.preventDefault();
    axios.post(`/api/teams/${this.props.match.params.id}/players`, this.state.player, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(this.setState({ isOpen: false, player: {} }));
  }

  delete = () => {
    axios.delete(`/api/teams/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/teams'));
  }

  render() {
    const teamPlayers = this.state.teamPlayers;
    return(
      <div className="container">

        <div  className="columns">
          <div className="column is-8 is-offset-2">
            <h1 className="is-size-1 has-text-centered">Players</h1>
            <nav className="panel">
              {teamPlayers.length === 0 &&
              <a className="panel-block is-centered">
                <div>
                  <p className="has-size-5 has-text-black">This team doesnt have any players please add a player</p>
                </div>
              </a>}
              {teamPlayers.map(player =>
                <a key={player.name} className="panel-block is-centered">
                  <Link
                    className="has-size-5 has-text-black"
                    to={`/teams/${this.props.match.params.id}/players/${player._id}`}>
                    <h1>{player.name}</h1>
                  </Link>
                </a>
              )}
              <div className="panel-block">
                <button className="button is-success is-fullwidth" onClick={this.handleToggle}>Add Player</button>
              </div>
              <div className="panel-block">
                <button className="button is-danger is-fullwidth" onClick={this.delete}>Delete Team</button>
              </div>
            </nav>
          </div>
        </div>


        {/* Start of the new team modal */}
        <div className={`modal ${this.state.isOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Add a Player</p>
              <button onClick={() => this.setState({ isOpen: false })} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <PlayerForm
                player={this.state.player}
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
