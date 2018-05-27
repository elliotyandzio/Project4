import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

class TeamsIndex extends React.Component {
  state = {
    player: {},
    reports: []
  }


  componentDidMount() {
    axios.get(`/api/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}`)
      .then(res => this.setState({player: res.data}));

    axios.get(`/api/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}`)
      .then(res => this.setState({reports: res.data.reports}));
  }



  render() {
    console.log(this.state.reports);
    return(
      <div>
        <h1>Reports Page</h1>
        {this.state.player.name}
        {this.state.reports.map(report =>
          <div key={report.id}>
            <h1>{report.opposition}</h1>
            <p>{report.score}</p>
            <p>{report.ageGroup}</p>
            <p>{report.footed}</p>
            <p>{report.position}</p>
          </div>
        )}

        <div className="tabs is-centered">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                <span>Pictures</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small"><i className="fas fa-film" aria-hidden="true"></i></span>
                <span>Videos</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small"><i className="far fa-file-alt" aria-hidden="true"></i></span>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </div>



      </div>
    );
  }
}

export default TeamsIndex;
