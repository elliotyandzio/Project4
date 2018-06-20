import React from 'react';
import Chart from 'chart.js';

class GoalkeeperTechnicalChart extends React.Component {

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
    const arrayData = [this.state.report.distribution, this.state.report.backPass, this.state.report.dealingWithCrosses, this.state.report.shotStopping, this.state.report.generalHandling, this.state.report.playingOutFromBack];

    const ctx = document.getElementById('goalkeeperTechnical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Distribution', 'Back Pass', 'Dealing With Crosses', 'Shot Stopping', 'Handling', 'Playing Out'],
        datasets: [{
          borderColor: 'rgb(255,140,0)',
          backgroundColor: 'rgba(255,140,0, 0.6)',
          radius: 6,
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: 'rgb(255,140,0)',
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
        <canvas id="goalkeeperTechnical"></canvas>
      </div>
    );
  }
}

export default GoalkeeperTechnicalChart;
