import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../components/lib/Auth';

class Navbar extends React.Component {

  state = {
    navIsOpen: false
  }

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }

  componentWillUpdate() {
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }

  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }

  render() {
    return (
      <nav className="navbar is-success" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="" width="30" />
          </Link>
          <a role="button" className={`navbar-burger ${this.state.navIsOpen? 'is-active' : ''}`} onClick={this.handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {Auth.isAuthenticated() && <Link to="/teams" className="navbar-item">Teams</Link>}
            {/* {Auth.isAuthenticated() && <Link to="/expenses" className="navbar-item">Expenses</Link>} */}
            {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
            {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
