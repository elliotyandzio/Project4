import React from 'react';
import Chart from 'chart.js';

class StrikerTacticalChart extends React.Component {

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
    const arrayData = [this.state.report.linkPlay, this.state.report.penetration, this.state.report.movement, this.state.report.tracking, this.state.report.playingBetweenLines, this.state.report.playingOnShoulder, this.state.report.holdUp];

    const ctx = document.getElementById('strikerTactical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Link Play', 'Penetration', 'Movement', 'Tracking', 'Playing Between Lines', 'Playing On Shoulder', 'Hold Up Play'],
        datasets: [{
          borderColor: 'rgb(0,0,225)',
          backgroundColor: 'rgba(0,0,225, 0.6)',
          radius: 6,
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: 'rgb(0,0,225)',
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
        <canvas id="strikerTactical"></canvas>
      </div>
    );
  }
}

export default StrikerTacticalChart;
