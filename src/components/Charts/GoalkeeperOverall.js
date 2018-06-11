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
    const arrayData = [this.state.report.technicalRating, this.state.report.tacticalRating, this.state.report.mentalRating, this.state.report.physicalRating];


    const ctx = document.getElementById('goalkeeperOverall');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Technical', 'Tactical', 'Mental', 'Physical'],
        datasets: [{
          borderColor: 'rgb(51,0,102)',
          backgroundColor: 'rgba(51,0,102,0.6)',
          radius: 6,
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: 'rgb(51,0,102)',
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
        <canvas id="goalkeeperOverall"></canvas>
      </div>
    );
  }
}

export default GoalkeeperMentalChart;
