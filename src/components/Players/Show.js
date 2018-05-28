import React from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

class TeamsIndex extends React.Component {
  state = {
    player: {},
    reports: [],
    isOpen: false,
    id: ''
  }

  handleToggle = (e) => {
    this.setState({ isOpen: !this.state.isOpen, id: e.target.id});
  }

  componentWillUpdate() {
    this.state.isOpen && this.setState({ isOpen: false });
  }

  componentDidMount() {
    axios.get(`/api/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}`)
      .then(res => this.setState({player: res.data}));

    axios.get(`/api/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}`)
      .then(res => this.setState({reports: res.data.reports}));
  }


  render() {
    return(
      <div className="container">
        <h1 className="is-size-1 has-text-centered">{this.state.player.name}</h1>
        <h2 className="is-size-2">Reports:</h2>
        <div>
          {this.state.reports.map(report =>
            <div key={report._id}>
              <div className="tabs">
                <ul>
                  <li><a onClick={this.handleToggle} id={report._id}>Vs {report.opposition}</a></li>
                </ul>
              </div>
              {this.state.id === report._id && <div className={`${this.state.isOpen ? 'is-invisible' : ''}`}>
                <div className="columns">
                  <div className="column is-half-desktop">
                    <p className="is-size-5">Opposition: {report.opposition}</p>
                    <p className="is-size-5">Score :{report.score}</p>
                    <p className="is-size-5">Age Group: {report.ageGroup}</p>
                  </div>
                  <div className="column is-half-desktop">
                    <p className="is-size-5">Footed: {report.footed}</p>
                    <p className="is-size-5">Position: {report.position}</p>
                  </div>
                </div>
              </div>}
            </div>)}

          <div>
          </div>
        </div>
      </div>
    );
  }
}




export default TeamsIndex;
