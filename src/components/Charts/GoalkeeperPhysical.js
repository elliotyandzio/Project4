import React from 'react';
import Chart from 'chart.js';

class GoalkeeperPhysicalChart extends React.Component {

  state = {
    report: {}
  }

  componentDidMount = () => {
    this.props.reports.forEach(report => {
      if(this.props.id === report._id) {
        this.setState({ report: report });
      }
    });
  }

  componentDidUpdate = () => {
    const arrayData = [this.state.report.presence, this.state.report.agility, this.state.report.speedOffLine, this.state.report.reach, this.state.report.reactions];
    console.log(arrayData);

    const ctx = document.getElementById('goalkeeperPhysical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Presence', 'Agility', 'Speed Off The Line', 'Reach', 'Reactions'],
        datasets: [{
          borderColor: 'rgb(0,225,0)',
          backgroundColor: 'rgba(0,255,0, 0.6)',
          radius: 6,
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: 'rgb(0,225,0)',
          pointBackgroundColor: 'transparent',
          data: arrayData
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
      <div>
        <canvas id="goalkeeperPhysical"></canvas>
      </div>
    );
  }
}

export default GoalkeeperPhysicalChart;
