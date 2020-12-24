import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component} from 'react';
export class MapContainer extends Component {
render() {
  console.log(this.props.location)
  return (
    <Map google={this.props.google} center={this.props.location} zoom={20}>
      <Marker onClick={this.onMarkerClick}
            name={'Current location'} />
      <InfoWindow onClose={this.onInfoWindowClose}>
       <div>
        <h1>Test</h1>
       </div>
      </InfoWindow>
  </Map>
 );
 }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAquoUs4NfM4dxHs2V2Ja8jxmeYy1Dw9so'
})(MapContainer)
