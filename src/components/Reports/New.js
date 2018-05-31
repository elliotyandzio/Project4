import React from 'react';
import ReportForm from './Form';
import axios from 'axios';
import Auth from '../lib/Auth';

class TeamsNew extends React.Component {
   state= {
     errors: {}
   };

  handlePositionSelect = (e) => {
    this.setState({position: e.target.value});
  }

  handleChange = ({ target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value}, () => console.log(this.state));
  }

  handleStartLocationChange = ({ geometry: {location}}) => {
    this.setState({ startLocation: location.toJSON() });
  }

  handleEndLocationChange = ({ geometry: {location}}) => {
    this.setState({ endLocation: location.toJSON() });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/teams/${this.props.teamId}/players/${this.props.playerId}/reports`, this.state, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    });
  }

  render()  {
    return <ReportForm
      report={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handlePositionSelect={this.handlePositionSelect}
      handleStartLocationChange={this.handleStartLocationChange}
      handleEndLocationChange={this.handleEndLocationChange}
    />;
  }
}

export default TeamsNew;
