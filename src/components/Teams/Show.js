import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TeamsIndex extends React.Component {
  state = {
    teamPlayers: []
  }

  componentDidMount() {
    axios.get(`/api/teams/${this.props.match.params.id}`)
      .then(res => this.setState({teamPlayers: res.data.players}));
    // const teamPlayers = res.data.players.filter(function(el) {
  //   return el.reports !== (el.reports.length === 0);
  // });
  }


  delete = () => {
    axios.delete(`/api/teams/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/teams'));
  }

  render() {
    console.log(teamPlayers);
    const teamPlayers = this.state.teamPlayers;
    return(
      <div>
        <button className="button is-danger" onClick={this.delete}>Delete</button>
        {teamPlayers.map(player =>
          <Link key={player.name} to={`/teams/${this.props.match.params.id}/players/${player._id}`}>
            <h1>{player.name}</h1>
          </Link>
        )}
      </div>
    );
  }
}

export default TeamsIndex;
