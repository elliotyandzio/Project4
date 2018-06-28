import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Map from '../common/Maps';
import Auth from '../lib/Auth';
import { Link } from 'react-router-dom';
import GoalkeeperTechnicalChart from '../Charts/GK/Technical';
import GoalkeeperTacticalChart from '../Charts/GK/Tactical';
import GoalkeeperMentalChart from '../Charts/GK/Mental';
import GoalkeeperPhysicalChart from '../Charts/GK/Physical';
import GoalkeeperOverallChart from '../Charts/Overall/GK';
import FullBackTechnicalChart from '../Charts/FB/Technical';
import FullBackTacticalChart from '../Charts/FB/Tactical';
import FullBackMentalChart from '../Charts/FB/Mental';
import FullBackPhysicalChart from '../Charts/FB/Physical';
import CentreBackTechnicalChart from '../Charts/CB/Technical';
import CentreBackTacticalChart from '../Charts/CB/Tactical';
import CentreBackMentalChart from '../Charts/CB/Mental';
import CentreBackPhysicalChart from '../Charts/CB/Physical';
import CentreMidTechnicalChart from '../Charts/CM/Technical';
import CentreMidTacticalChart from '../Charts/CM/Tactical';
import CentreMidMentalChart from '../Charts/CM/Mental';
import CentreMidPhysicalChart from '../Charts/CM/Physical';
import AttackingMidTechnicalChart from '../Charts/AM/Technical';
import AttackingMidTacticalChart from '../Charts/AM/Tactical';
import AttackingMidMentalChart from '../Charts/AM/Mental';
import AttackingMidPhysicalChart from '../Charts/AM/Physical';

class TeamsIndex extends React.Component {
  state = {
    player: {}, //object for return player data
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
      .then(res => this.setState({ reports: res.data.reports}));
  }

  componentWillUpdate() {
    this.state.isOpen && this.setState({ isOpen: false });
    this.state.modalIsOpen && this.setState({ modalIsOpen: false });

  }

  componentDidMount() {
    axios.get(`/api/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}`)
      .then(res => this.setState({player: res.data }));

    this.setState({
      teamId: this.props.match.params.id,
      playerId: this.props.match.params.playerId
    });
  }

    getDistance = (distanceVal) => {
      this.setState({ distance: distanceVal });
    }

    metresToMiles = (num) => {
      const miles = parseFloat(((num/1000)*0.621371)).toFixed(2);
      return miles;
    }

    expensesFromMiles = (num) => {
      const expenses = parseFloat((((num/1000)*0.621371)*0.45)).toFixed(2);
      return expenses;
    }



    render() {
      return(
        <div className="container">
          <h1 className="is-size-1 has-text-centered">{this.state.player.name}</h1>
          <div className="columns is-mobile">
            <div className="column is-half-desktop is-half-tablet is-half-mobile">
              <h2 className="is-size-2">Reports:</h2>
            </div>

            {/* Start of Add report button */}
            <div className="column is-half-desktop is-half-tablet is-half-mobile">
              <Link to={`/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}/reports`}>
                <button className="button is-success is-pulled-right">Add Report</button>
              </Link>
            </div>
            {/* End of Add report button */}

          </div>

          <div className="columns">
            <div className="column is-full-desktop is-full-tablet is-full-mobile">
              <div className="tabs is-toggle">
                <ul>
                  {this.state.player.reports && this.state.player.reports.map(report =>
                    <li key={report._id}><a id={report._id} onClick={this.handleToggle}>Vs {report.opposition}</a></li>)}
                </ul>
              </div>
            </div>
          </div>

          {this.state.player.reports && this.state.player.reports.map(report => this.state.id === report._id && <div>
            <div className="columns is-mobile">
              <div className="column is-half-desktop is-half-tablet is-half-mobile">
                <h4 key={report._id} className="is-size-3">Game Info</h4>
              </div>

              {console.log(Auth.getPayLoad())}
              {/* Checks to see if the report is created by the same user than the one logged in and either shows the delete button or not */}
              {Auth.getPayLoad().sub === report.createdBy &&
              <div className="column is-half-desktop is-half-tablet is-half-mobile">
                <button className="button is-danger is-pulled-right"
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
                <p className="is-size-6"><span className="has-text-weight-bold">Date:</span> {moment(report.date).format('dddd Do MMMM YYYY')}</p>
              </div>
              <div className="column is-half-desktop">
                <p className="is-size-6"><span className="has-text-weight-bold">Age Group:</span> {report.ageGroup}</p>
                <p className="is-size-6"><span className="has-text-weight-bold">Footed:</span> {report.footed}</p>
                <p className="is-size-6"><span className="has-text-weight-bold">Height:</span> {report.height}</p>
                <p className="is-size-6"><span className="has-text-weight-bold">Written By:</span> {console.log(report)}</p>
              </div>
            </div>
            <hr />
            {report.position === 'Goalkeeper' &&

            <div className="Goalkeeper-Results">
              <h4 className="is-size-3">Goalkeeper Report</h4>
              <GoalkeeperOverallChart
                id={this.state.id}
                reports={this.state.player.reports}
              />
              <div className="columns">
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Technical</h4>
                  <GoalkeeperTechnicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Tactical</h4>
                  <GoalkeeperTacticalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Mental</h4>
                  <GoalkeeperMentalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Physical</h4>
                  <GoalkeeperPhysicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>
              <hr />
            </div>}

            {report.position === 'Full Back' &&
            <div className="FullBack-Results">
              <h4 className="is-size-4">Full Back Report</h4>
              <div className="columns">
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Technical</h4>
                  <FullBackTechnicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Tactical</h4>
                  <FullBackTacticalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Mental</h4>
                  <FullBackMentalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Physical</h4>
                  <FullBackPhysicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>
              <hr />
            </div>}

            {report.position === 'Centre Back' &&
            <div className="CentreBack-Results">
              <h4 className="is-size-4">Centre Back Report</h4>
              <div className="columns">
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Technical</h4>
                  <CentreBackTechnicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Tactical</h4>
                  <CentreBackTacticalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Mental</h4>
                  <CentreBackMentalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Physical</h4>
                  <CentreBackPhysicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>
              <hr />
            </div>}

            {report.position === 'Centre Midfield' &&
            <div className="CentreMidfield-Results">
              <h4 className="is-size-3">Goalkeeper Report</h4>
              <div className="columns">
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Technical</h4>
                  <CentreMidTechnicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Tactical</h4>
                  <CentreMidTacticalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Mental</h4>
                  <CentreMidMentalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Physical</h4>
                  <CentreMidPhysicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>
              <hr />
            </div>}

            {report.position === 'Attacking Midfield' &&
            <div className="AttackingMidfield-Results">
              <h4 className="is-size-3">Goalkeeper Report</h4>
              <div className="columns">
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Technical</h4>
                  <AttackingMidTechnicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Tactical</h4>
                  <AttackingMidTacticalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>

              <div className="columns">
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Mental</h4>
                  <AttackingMidMentalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop is-half-tablet is-full-mobile">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Physical</h4>
                  <AttackingMidPhysicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
              </div>
              <hr />
            </div>}

            {Auth.getPayLoad().sub === report.createdBy &&
            <div className="id">
              <h4 className="is-size-3">Expenses</h4>
              <div className="columns">
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Distance:</span> {this.metresToMiles(this.state.distance)} miles</p>
                </div>
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Total expenses:</span> £{(this.expensesFromMiles(this.state.distance))}</p>
                </div>
              </div>
              <Map
                start={report.startLocation}
                end={report.endLocation}
                getDistance={this.getDistance}
              />
            </div>}
          </div>)}
          <hr />

        </div>

      );
    }
}




export default TeamsIndex;
