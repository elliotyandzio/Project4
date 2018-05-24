import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>WDI 33</h1>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
