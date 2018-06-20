import React from 'react';

class ExpensesIndex extends React.Component {
  state = {
  }

  componentDidMount() {
    // axios.get(`/api/teams/${this.props.match.params.id}`)
    //   .then(res => this.setState({teamPlayers: res.data.players}));
  }


  render() {
    return(
      <h1> Expenses </h1>
    );
  }

}

export default ExpensesIndex;
