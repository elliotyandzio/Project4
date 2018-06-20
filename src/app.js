import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import TeamsIndex from './components/Teams/Index';
import TeamsShow from './components/Teams/Show';
import PlayersShow from './components/Players/Show';
import ReportsNew from './components/Reports/New';
import ExpensesIndex from './components/Expenses/Index';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AuthRegister from './components/Auth/Register';
import AuthLogin from './components/Auth/Login';
import SecureRoute from './components/common/SecureRoute';
import FlashMessages from './components/common/FlashMessages';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <FlashMessages />
          <Switch>
            <SecureRoute path="/teams/:id/players/:playerId/reports" component={ReportsNew} />
            <SecureRoute path="/teams/:id/players/:playerId" component={PlayersShow} />
            <SecureRoute path="/teams/:id" component={TeamsShow} />
            <SecureRoute path="/expenses" component={ExpensesIndex} />
            <SecureRoute path="/teams" component={TeamsIndex} />
            <Route path="/register" component={AuthRegister} />
            <Route exact path="/login" component={AuthLogin} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
