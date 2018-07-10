import React from 'react';
import Chart from 'chart.js';

class StrikerMentalChart extends React.Component {

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
    const arrayData = [this.state.report.improvisation, this.state.report.takeInfo, this.state.report.errorReaction, this.state.report.determination, this.state.report.tenacity];

    const ctx = document.getElementById('strikerMental');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Improvisation', 'Take on Info', 'Reaction to Errors', 'Determination', 'Tenacity'],
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
        <canvas id="strikerMental"></canvas>
      </div>
    );
  }
}

export default StrikerMentalChart;
