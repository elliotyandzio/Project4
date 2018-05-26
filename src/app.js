import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import TeamsIndex from './components/teams/Index';
import Home from './components/Home';
import Navbar from './components/Navbar';

import 'bulma';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/teams" component={TeamsIndex} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
