import React from 'react';
import axios from 'axios';
import ReportsNew from '../Reports/New';
import Map from '../common/Maps';
import Auth from '../lib/Auth';
//import { Link } from 'react-router-dom';

class TeamsIndex extends React.Component {
  state = {
    player: {}, //temporary for the player name --> need to pass through with props
    //reports: [], //returns the array of maps from the database
    isOpen: false, //isOpen for the tabs
    id: '',       //id for the tabs
    modalIsOpen: false, //isOpen for the modal
    teamId: '',  //stores the team id from the url
    playerId: '' //stores the player id from the url
  }


  handleToggle = (e) => {
    this.setState({ id: e.target.id});
  }

  handleModalToggle = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen});
  }

  handleReportDelete = report => {
    axios.delete(`/api/teams/${this.state.teamId}/players/${this.state.playerId}/reports/${report._id}`, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(console.log('teamId--->', this.state.teamId, 'playerId--->', this.state.playerId, 'reportId-->', report._id))
      .then(res => this.setState({ reports: res.data.reports}));
  }

  componentWillUpdate() {
    this.state.isOpen && this.setState({ isOpen: false });
    this.state.modalIsOpen && this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    // axios.get(`/api/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}`)
    //   .then(res => this.setState({player: res.data}));

    axios.get(`/api/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}`)
      .then(res => this.setState({reports: res.data.reports}));

    this.setState({
      teamId: this.props.match.params.id,
      playerId: this.props.match.params.playerId
    });
  }

    getDistance = (distanceVal) => {
      this.setState({ distance: distanceVal });
    }

    render() {
      return(
        <div className="container">
          <h1 className="is-size-1 has-text-centered">{this.state.player.name}</h1>
          <div className="columns">
            <div className="column is-half">
              <h2 className="is-size-2">Reports:</h2>
            </div>
            <div className="column is-half">
              <button className="button is-success is-pulled-right" onClick={this.handleModalToggle}>Add Report</button>
            </div>
          </div>
          <div className="tabs">
            <ul>
              {this.state.reports && this.state.reports.map(report =>
                <li key={report._id}><a id={report._id} onClick={this.handleToggle}>Vs {report.opposition}</a></li>)}
            </ul>
          </div>

          {!this.state.id && <p>Please select a report</p>}
          {this.state.reports && this.state.reports.map(report => this.state.id === report._id && <div>
            <div className="columns">
              <div className="column is-half-desktop">
                <h4 key={report._id} className="is-size-4">Game Info</h4>
              </div>
              {Auth.getPayLoad().sub === report.createdBy &&
              <div className="column is-half-desktop">
                <button className="button is-danger"
                  onClick={() => this.handleReportDelete(report)}>
                  Delete Report
                </button>
              </div>}
            </div>
            <div className="columns">
              <div className="column is-half-desktop">
                <p className="is-size-6"><span className="has-text-weight-bold">Opposition:</span> {report.opposition}</p>
                <p className="is-size-6"><span className="has-text-weight-bold">Score:</span> {report.score}</p>
                <p className="is-size-6"><span className="has-text-weight-bold">Position:</span> {report.position}</p>
              </div>
              <div className="column is-half-desktop">
                <p className="is-size-6"><span className="has-text-weight-bold">Age Group:</span> {report.ageGroup}</p>
                <p className="is-size-6"><span className="has-text-weight-bold">Footed:</span> {report.footed}</p>
              </div>
            </div>
            <hr />
            {Auth.getPayLoad().sub === report.createdBy &&
            <div className="id">
              <h4 className="is-size-4">Expenses</h4>
              <div className="columns">
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Distance:</span> {(parseFloat(this.state.distance)/1000).toFixed(2)}km</p>
                </div>
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Total expenses:</span> £{((parseFloat(this.state.distance)/1000)*0.45).toFixed(2)}</p>
                </div>
              </div>
              <Map
                start={report.startLocation}
                end={report.endLocation}
                getDistance={this.getDistance}
              />
            </div>}
          </div>)}


          {/* Start of the new team modal */}
          <div className={`modal ${this.state.modalIsOpen ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">Add a Report</p>
                <button onClick={() => this.setState({ isOpen: false })} className="delete" aria-label="close"></button>
              </header>
              <section className="modal-card-body">
                <ReportsNew
                  teamId={this.state.teamId}
                  playerId={this.state.playerId}
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
