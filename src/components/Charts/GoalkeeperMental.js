import React from 'react';
import Chart from 'chart.js';

class GoalkeeperMentalChart extends React.Component {

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
    const arrayData = [this.state.report.bravery, this.state.report.communication, this.state.report.commandOfBox, this.state.report.errorProne, this.state.report.errorReaction];
    console.log(arrayData);

    const ctx = document.getElementById('goalkeeperMental');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Bravery', 'Communication', 'Command Of Box', 'Error Prone', 'Error Handling'],
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
        <canvas id="goalkeeperMental"></canvas>
      </div>
    );
  }
}

export default GoalkeeperMentalChart;
