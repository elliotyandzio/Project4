import React from 'react';
import Chart from 'chart.js';

class CentreMidTacticalChart extends React.Component {

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
    const arrayData = [this.state.report.tracking, this.state.report.positioning, this.state.report.recovery, this.state.report.decisionMaking, this.state.report.readingOfGame];

    const ctx = document.getElementById('centreMidTactical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Tracking', 'Positioning', 'Recovery', 'Decision Making', 'Reading Of Game'],
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
        <canvas id="centreMidTactical"></canvas>
      </div>
    );
  }
}

export default CentreMidTacticalChart;
