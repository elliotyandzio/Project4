import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import TeamsIndex from './components/teams/Index';
import PlayersIndex from './components/players/Index';
import PlayersShow from './components/players/Show';
import Home from './components/Home';
import Navbar from './components/Navbar';

import 'bulma';

class App extends React.Component {

  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/teams/:id/players/:playerId" component={PlayersShow} />
              <Route path="/teams/:id" component={PlayersIndex} />
              <Route path="/teams" component={TeamsIndex} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
