import React from 'react';
import Chart from 'chart.js';

class GK extends React.Component {

  state = {
    tech: [],
    tact: [],
    ment: [],
    phys: []
  }

  componentDidMount = () => {
    const arrayTech = this.props.reports.map(report => parseInt(report.technicalRating));
    this.setState({tech: arrayTech});

    const arrayTact = this.props.reports.map(report => parseInt(report.tacticalRating));
    this.setState({tact: arrayTact});

    const arrayMent = this.props.reports.map(report => parseInt(report.mentalRating));
    this.setState({ment: arrayMent});

    const arrayPhys = this.props.reports.map(report => parseInt(report.physicalRating));
    this.setState({phys: arrayPhys});

  }

  componentDidUpdate = () => {
    function getSum(total, num) {
      return total + num;
    }

    const technicalAdd = this.state.tech.reduce(getSum);
    const technical = Math.round(technicalAdd/this.state.tech.length);

    const tacticalAdd = this.state.tact.reduce(getSum);
    const tactical = Math.round(tacticalAdd/this.state.tact.length);

    const mentalAdd = this.state.ment.reduce(getSum);
    const mental = Math.round(mentalAdd/this.state.ment.length);

    const physicalAdd = this.state.phys.reduce(getSum);
    const physical = Math.round(physicalAdd/this.state.phys.length);

    const graphData = [technical, tactical, mental, physical];




    const ctx = document.getElementById('goalkeeper');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Technical', 'Tactical', 'Physical', 'Mental'],
        datasets: [{
          borderColor: 'rgb(255,0,0)',
          backgroundColor: 'rgba(255,0,0, 0.6)',
          radius: 6,
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: 'rgb(255,0,0)',
          pointBackgroundColor: 'transparent',
          data: graphData
        }]
      },
      options: {
        legend: {
          display: false
        },
        scale: {
          gridLines: {
            color: 'black',
            lineWidth: 1
          },
          pointLabels: {
            fontSize: 14,
            fontColor: 'black'
          },
          angleLines: {
            display: false
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 5,
            stepSize: 1,
            fontColor: 'black',
            fontSize: 14
          }
        }
      }
    });
  }


  render() {
    return(
      <div className="has-text-centered">
        <canvas id="goalkeeper"></canvas>
      </div>
    );
  }
}

export default GK;
