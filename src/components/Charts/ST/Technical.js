import React from 'react';
import Chart from 'chart.js';

class StrikerTechnicalChart extends React.Component {

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
    const arrayData = [this.state.report.dribbling, this.state.report.receivingTechniques, this.state.report.finishing, this.state.report.rangeOfPassing, this.state.report.playInTightAreas, this.state.report.longShots];

    const ctx = document.getElementById('strikerTechnical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Dribbling', 'Receiving Techniques', 'Finishing', 'Range of Passing', 'Playing in Tight Areas', 'Long Shots'],
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
        <canvas id="strikerTechnical"></canvas>
      </div>
    );
  }
}

export default StrikerTechnicalChart;
