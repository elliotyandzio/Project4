import React from 'react';
import axios from 'axios';
//import ReportsNew from '../Reports/New';
import Map from '../common/Maps';
import Auth from '../lib/Auth';
import { Link } from 'react-router-dom';
import GoalkeeperTechnicalChart from '../Charts/GoalkeeperTechnical';
import GoalkeeperTacticalChart from '../Charts/GoalkeeperTactical';
import GoalkeeperMentalChart from '../Charts/GoalkeeperMental';
import GoalkeeperPhysicalChart from '../Charts/GoalkeeperPhysical';
import GoalkeeperOverallChart from '../Charts/GoalkeeperOverall';

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
      .then(res => this.setState({player: res.data }));

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
              <Link to={`/teams/${this.props.match.params.id}/players/${this.props.match.params.playerId}/reports`}>
                <button className="button is-success is-pulled-right">Add Report</button>
              </Link>
              {/* <button className="button is-success is-pulled-right" onClick={this.handleModalToggle}>
                Add Report</button> */}
            </div>
          </div>
          <div className="tabs">
            <ul>
              {this.state.player.reports && this.state.player.reports.map(report =>
                <li key={report._id}><a id={report._id} onClick={this.handleToggle}>Vs {report.opposition}</a></li>)}
            </ul>
          </div>

          {!this.state.id && <p>Please select a report</p>}
          {this.state.player.reports && this.state.player.reports.map(report => this.state.id === report._id && <div>
            <div className="columns">
              <div className="column is-half-desktop">
                <h4 key={report._id} className="is-size-3">Game Info</h4>
              </div>
              {Auth.getPayLoad().sub === report.createdBy &&
              <div className="column is-half-desktop">
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
              </div>
              <div className="column is-half-desktop">
                <p className="is-size-6"><span className="has-text-weight-bold">Age Group:</span> {report.ageGroup}</p>
                <p className="is-size-6"><span className="has-text-weight-bold">Footed:</span> {report.footed}</p>
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
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Technical</h4>
                  <GoalkeeperTechnicalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                  <br />
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Mental</h4>
                  <GoalkeeperMentalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                </div>
                <div className="column is-half-desktop">
                  <h4 className="is-size-4 has-text-centered has-text-weight-semibold">Tactical</h4>
                  <GoalkeeperTacticalChart
                    id={this.state.id}
                    reports={this.state.player.reports}
                  />
                  <br />
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
                  <p className="is-size-6"><span className="has-text-weight-bold">Receiving Techniques:</span> {report.receivingTechniques}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Turning:</span> {report.turning}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Running With The Ball:</span> {report.runningWithBall}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Finishing:</span> {report.finishing}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Interceptions:</span> {report.interceptions}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Blocking:</span> {report.blocking}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Passing Support:</span> {report.passingSupport}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Movement:</span> {report.mobilityMovement}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Improvisation:</span> {report.improvisation}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pressure Support:</span> {report.pressureSupport}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Covering:</span> {report.coverBalance}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pace:</span> {report.pace}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Endurance:</span> {report.endurance}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">First 5 Yards:</span> {report.first5}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Determination:</span> {report.determination}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Reaction To Error:</span> {report.errorReaction}/5</p>

                </div>
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Range Of Passing:</span> {report.rangeOfPassing}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Dribbling:</span> {report.dribbling}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Crossing:</span> {report.crossing}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">1 Vs 1:</span> {report.oneVsOneDefending}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Tackling:</span> {report.tackling}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Heading:</span> {report.heading}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Depth Width:</span> {report.depthWidth}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Penetration:</span> {report.penetration}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Recovery Delay:</span> {report.recoveryDelay}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Compactness:</span> {report.compactness}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Restraint:</span> {report.controlRestraint}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Strength:</span> {report.strength}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Mobility:</span> {report.mobility}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Work Rate:</span> {report.workRate}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Taking on Information:</span> {report.takeInfo}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Tracking:</span> {report.tracking}/5</p>

                </div>
              </div>
              <hr />
            </div>}

            {report.position === 'Centre Back' &&
            <div className="CentreBack-Results">
              <h4 className="is-size-4">Centre Back Report</h4>
              <div className="columns">
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Receiving Techniques:</span> {report.receivingTechniques}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Passing Support:</span> {report.passingSupport}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Movement:</span> {report.mobilityMovement}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Improvisation:</span> {report.improvisation}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pressure Support:</span> {report.pressureSupport}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Cover Balance:</span> {report.coverBalance}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pace:</span> {report.pace}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Endurance:</span> {report.endurance}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">First 5 Yards:</span> {report.first5}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Determination:</span> {report.determination}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Error Reaction:</span> {report.errorReaction}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Clearances:</span> {report.clearances}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Jumping:</span> {report.jumping}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Interceptions:</span> {report.interceptions}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Blocking:</span> {report.blocking}/5</p>
                </div>
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Heading:</span> {report.heading}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Depth Width:</span> {report.depthWidth}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Penetration:</span> {report.penetration}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Recovery Delay:</span> {report.recoveryDelay}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Compactness:</span> {report.compactness}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Compactness:</span> {report.controlRestraint}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Strength:</span> {report.strength}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Mobility:</span> {report.mobility}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Work Rate:</span> {report.workRate}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Taking on Info:</span> {report.takeInfo}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Heading Attacking Set Plays:</span> {report.headingAttackingSetPlays}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Heading General Set Plays:</span> {report.headingGeneralSetPlays}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Range of Passing:</span> {report.rangeOfPassing}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Tackling:</span> {report.tackling}/5</p>
                </div>
              </div>
              <hr />
            </div>}

            {report.position === 'Centre Midfield' &&
            <div className="CentreMidfield-Results">
              <h4 className="is-size-4">Centre Midfield Report</h4>
              <div className="columns">
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Box To Box:</span> {report.boxTobox}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Send Ball:</span> {report.secondBall}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Interceptions:</span> {report.interceptions}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Blocks:</span> {report.blocking}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Dribbling:</span> {report.dribbling}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Tracking:</span> {report.tracking}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Heading:</span> {report.heading}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Depth Width:</span> {report.depthWidth}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Penetration:</span> {report.penetration}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Recovery Delay:</span> {report.recoveryDelay}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Compactness:</span> {report.compactness}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Control Restraint:</span> {report.controlRestraint}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Clearances:</span> {report.clearances}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pace:</span> {report.pace}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Endurance:</span> {report.endurance}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Jumping:</span> {report.jumping}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Work Rate:</span> {report.workRate}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Take on Info:</span> {report.takeInfo}/5</p>
                </div>
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Strength In Tackle:</span> {report.strengthTackle}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Range of Passing:</span> {report.rangeOfPassing}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Tackling:</span> {report.tackling}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Turning:</span> {report.turning}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Finishing:</span> {report.finishing}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Receiving Techniques:</span> {report.receivingTechniques}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Passing Support:</span> {report.passingSupport}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Mobility Movement:</span> {report.mobilityMovement}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Improvisation:</span> {report.improvisation}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pressure Support:</span> {report.pressureSupport}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Cover Balance:</span> {report.coverBalance}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Heading Atk Set Plays:</span> {report.headingAttackingSetPlays}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Heading General Set Plays:</span> {report.headingGeneralSetPlays}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Strength:</span> {report.strength}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Mobility:</span> {report.mobility}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">First 5 Yards:</span> {report.first5}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Determination:</span> {report.determination}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Error Reaction:</span> {report.errorReaction}/5</p>
                </div>
              </div>
              <hr />
            </div>}

            {report.position === 'Attacking Midfield' &&
            <div className="AttackingMidfield-Results">
              <h4 className="is-size-4">Attacking Midfield Report</h4>
              <div className="columns">
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Turning:</span> {report.turning}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Finishing:</span> {report.finishing}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Scoring Techniques:</span> {report.scoringTechniques}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Forcing Play:</span> {report.forcingPlay}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Link Play:</span> {report.linkPlay}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Receiving Techniques:</span> {report.receivingTechniques}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Passing Support:</span> {report.passingSupport}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Mobility Movement:</span> {report.mobilityMovement}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Improvisation:</span> {report.improvisation}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pressure Support:</span> {report.pressureSupport}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Cover Balance:</span> {report.coverBalance}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pace:</span> {report.pace}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Endurance:</span> {report.endurance}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">First 5 Yards:</span> {report.first5}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Determination:</span> {report.determination}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Error Reaction:</span> {report.errorReaction}/5</p>
                </div>
                <div className="column is-half-desktop">
                  <p className="is-size-6"><span className="has-text-weight-bold">Dribbling:</span> {report.dribbling}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Tracking:</span> {report.tracking}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Pressuring:</span> {report.pressuring}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Recovery Runs:</span> {report.recoveryRun}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Change of Direction:</span> {report.changeOfDirection}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Heading:</span> {report.heading}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Depth Width:</span> {report.depthWidth}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Penetration:</span> {report.penetration}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Recovery Delay:</span> {report.recoveryDelay}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Compactness:</span> {report.compactness}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Control Restraint:</span> {report.controlRestraint}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Strength:</span> {report.strength}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Mobility:</span> {report.mobility}/5</p>
                  <p className="is-size-6"><span className="has-text-weight-bold">Take on Info:</span> {report.takeInfo}/5</p>
                </div>
              </div>
              <hr />
            </div>
            }

            {Auth.getPayLoad().sub === report.createdBy &&
            <div className="id">
              <h4 className="is-size-3">Expenses</h4>
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
          {/* <div className={`modal ${this.state.modalIsOpen ? 'is-active' : ''}`}>
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
          </div> */}
          {/* End of the new team modal */}


        </div>

      );
    }
}




export default TeamsIndex;
