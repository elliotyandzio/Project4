import React from 'react';
import Chart from 'chart.js';

class FullBackPhysicalChart extends React.Component {

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
    const arrayData = [this.state.report.pace, this.state.report.recovery, this.state.report.first5, this.state.report.endurance, this.state.report.boxTobox, this.state.report.strength];

    const ctx = document.getElementById('fullbackPhysical');
    const myRadarChart = new Chart(ctx, { // eslint-disable-line
      type: 'radar',
      data: {
        labels: ['Pace', 'Recovery', 'First 5 Yards', 'Endurance', 'Box To Box', 'Strength'],
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
        <canvas id="fullbackPhysical"></canvas>
      </div>
    );
  }
}

export default FullBackPhysicalChart;
