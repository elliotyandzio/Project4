import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Auth from '../lib/Auth';
import Map from '../common/Maps';

class ExpensesIndex extends React.Component {
  state = {
    reports: []
  }

  componentDidMount() {
    axios.get('/api/expenses')
      .then(res => this.setState({reports: res.data}));
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
        <div className="has-text-centered">
          <h1 className="is-size-1">Expenses</h1>
        </div>
          {this.state.reports.map(r =>
          <div key={r._id}>
            {r.reports.map(reports => Auth.getPayLoad().sub === reports.createdBy &&
              <div key={reports._id}>
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">
                    VS {reports.opposition} - {moment(reports.date).format('dddd Do MMMM YYYY')}
                  </p>
                  <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div className="card-content">
                  <div className="content">
                    <div className="columns">
                      <div className="column is-half-desktop">
                        <p className="is-size-6"><span className="has-text-weight-bold">Distance:</span> {this.metresToMiles(this.state.distance)} miles</p>
                      </div>
                      <div className="column is-half-desktop">
                        <p className="is-size-6"><span className="has-text-weight-bold">Total expenses:</span> £{(this.expensesFromMiles(this.state.distance))}</p>
                      </div>
                    </div>
                    <Map
                      start={reports.startLocation}
                      end={reports.endLocation}
                      getDistance={this.getDistance}
                    />
                  </div>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item">Save</a>
                  <a href="#" className="card-footer-item">Edit</a>
                  <a href="#" className="card-footer-item">Delete</a>
                </footer>
              </div>
              <br />
            </div>
            )}
          </div>
          )}



      </div>

      )
    }
}

export default ExpensesIndex;
