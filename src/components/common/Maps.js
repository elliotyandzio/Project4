/* global google */
import React from 'react';


class Map extends React.Component {

  constructor() {
    super();
    this.markers =[];
  }

  componentDidMount() {

    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();

    this.map = new google.maps.Map(this.mapDiv, {
      center: this.props.start,
      zoom: 14
    });

    directionsDisplay.setMap(this.map);

    directionsService.route({
      origin: this.props.start,
      destination: this.props.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status !== 'OK') return false;
      this.props.getDistance(response.routes[0].legs[0].distance.value);
      // console.log(response.routes[0].legs[0].distance.value);
      directionsDisplay.setDirections(response);
    });


    this.startMarker = new google.maps.Marker({
      position: this.props.start,
      map: this.map,
      label: '⚽️'
    });

    this.endMarker = new google.maps.Marker({
      position: this.props.end,
      map: this.map,
      label: '⚽️'
    });
  }

  componentWillUnmount() { /* Removing compnent from a page */
    this.startMarker.setMap(null);
    this.endMarker.setMap(null);
    this.startMarker = null;
    this.endMarker = null;
    this.map = null;
  }

  render() {
    const className = this.props.className ? this.props.className + ' map' : 'map';
    return (
      <div className={className} ref={el => this.mapDiv = el}/>
    );
  }
}

export default Map;
