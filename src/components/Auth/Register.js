import React from 'react';
import axios from 'axios';
import Auth from '../lib/Auth';
import Flash from '../lib/Flash';

class AuthRegister extends React.Component {
  state = {};

  handleChange = ({ target: {name, value}}) => {
    this.setState({ [name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/register', this.state)
      .then(res => Auth.setToken(res.data.token))
      .then(() => this.props.history.push('/teams'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.replace('/');
      });
  }

  render() {
    return (
      <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-size-1">Register</h1>
            <div className="columns is-mobile">
              <div className="column is-half is-offset-one-quarter">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <input
                      className="input is-success is-medium"
                      name="username"
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field">
                    <input
                      className="input is-success is-medium"
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      className="input is-success is-medium"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      className="input is-success is-medium"
                      name="passwordConfirmation"
                      placeholder="Password confirmation"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button className="button is-warning is-fullwidth is-medium">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthRegister;
