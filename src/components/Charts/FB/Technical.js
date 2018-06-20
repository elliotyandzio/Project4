import React from 'react';
import Chart from 'chart.js';

class FullBackTechnicalChart extends React.Component {

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
    const arrayData = [this.state.report.receivingTechniques, this.state.report.crossing, this.state.report.dribbling, this.state.report.heading, this.state.report.rangeOfPassing];

    const ctx = document.getElementById('fullbackTechnical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Receiving Techniques', 'Crossing', 'Dribbling', 'Heading', 'Range of Passing'],
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
        <canvas id="fullbackTechnical"></canvas>
      </div>
    );
  }
}

export default FullBackTechnicalChart;
