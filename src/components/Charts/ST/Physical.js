import React from 'react';
import Chart from 'chart.js';

class StrikerPhysicalChart extends React.Component {

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
    const arrayData = [this.state.report.mobility, this.state.report.first5, this.state.report.pace, this.state.report.changeOfDirection, this.state.report.strength];

    const ctx = document.getElementById('strikerPhysical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Mobility', 'First 5 Yards', 'Pace', 'Change of Direction', 'Strength'],
        datasets: [{
          borderColor: 'rgb(0,225,0)',
          backgroundColor: 'rgba(0,255,0, 0.6)',
          radius: 6,
          pointRadius: 6,
          pointBorderWidth: 3,
          pointBorderColor: 'rgb(0,225,0)',
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
        <canvas id="strikerPhysical"></canvas>
      </div>
    );
  }
}

export default StrikerPhysicalChart;
