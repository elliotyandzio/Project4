import React from 'react';
import TeamForm from './Form';
import axios from 'axios';
import Auth from '../lib/Auth';

class TeamsNew extends React.Component {
   state= {
     errors: {}
   };

  handleChange = ({ target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value});
  }

  handleSubmit = ( e ) => {
    console.log('here!');
    e.preventDefault();
    axios.post('/api/teams', this.state, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(console.log('DATA======>',this.props.isOpen));
  }

  render()  {
    return <TeamForm
      teams={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />;
  }
}

export default TeamsNew;
