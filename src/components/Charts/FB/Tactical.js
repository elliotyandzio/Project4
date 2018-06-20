import React from 'react';
import Chart from 'chart.js';

class FullBackTacticalChart extends React.Component {

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
    const arrayData = [this.state.report.oneVsOneDefending, this.state.report.interceptions, this.state.report.tracking, this.state.report.covering, this.state.report.holdingTheLine, this.state.report.compactness];

    const ctx = document.getElementById('fullbackTactical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['1 Vs 1', 'Interceptions', 'Tracking', 'Covering', 'Holding The Line', 'Compactness'],
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
        <canvas id="fullbackTactical"></canvas>
      </div>
    );
  }
}

export default FullBackTacticalChart;
