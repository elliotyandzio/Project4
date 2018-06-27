import React from 'react';
import Chart from 'chart.js';

class CentreMidMentalChart extends React.Component {

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
    const arrayData = [this.state.report.determination, this.state.report.errorReaction, this.state.report.takeInfo, this.state.report.tenacity, this.state.report.bravery];

    const ctx = document.getElementById('centreMidMental');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Determination', 'Reaction To Errors', 'Take on Info', 'Tenacity', 'Bravery'],
        datasets: [{
          borderColor: 'rgb(255,0,0)',
          backgroundColor: 'rgba(255,0,0, 0.6)',
          radius: 6,
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: 'rgb(255,0,0)',
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
        <canvas id="centreMidMental"></canvas>
      </div>
    );
  }
}

export default CentreMidMentalChart;
