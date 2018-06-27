import React from 'react';
import Chart from 'chart.js';

class CentreMidTechnicalChart extends React.Component {

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
    const arrayData = [this.state.report.rangeOfPassing, this.state.report.receivingTechniques, this.state.report.tackling, this.state.report.longShots, this.state.report.finishing];

    const ctx = document.getElementById('centreMidTechnical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Range of Passing', 'Receiving Techniques', 'Tackling', 'Long Shots', 'Finishing'],
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
        <canvas id="centreMidTechnical"></canvas>
      </div>
    );
  }
}

export default CentreMidTechnicalChart;
