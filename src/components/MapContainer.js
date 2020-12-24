import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component} from 'react';
import md5 from 'md5'
import {Button} from 'reactstrap'

export class MapContainer extends Component {


  componentDidMount(){
    this.meetupCoords = this.props.coords;
  }
  getGeohash = () =>{
    // the math behind finding the geohashing coordinates
    console.log(this.props)
    let lat = String(parseInt(this.props.coords.lat));
    let lng = String(parseInt(this.props.coords.lng));
    let stringToHash = String(this.props.date) + '-' + String(this.props.data) ;
    let hashResult = md5(stringToHash)
    let pt1 = hashResult.slice(0,hashResult.length/2)
    let pt2 = hashResult.slice(hashResult.length/2)
    let todec1 = parseInt(pt1,16)
    let todec2 = parseInt(pt2,16)
    const meetupCoordinates = {
      lat: lat+'.'+todec1,
      lng: lng+'.'+todec2
    }
    console.log(meetupCoordinates)
    this.meetupCoords = meetupCoordinates;
  }
  componentDidUpdate(){
    this.getGeohash()
  }
render() {
  console.log(this.props)
  return (
    <div>
      <Button onClick ={this.getGeohash}>Get Coordinates</Button>
      <Map google={this.props.google} center={this.meetupCoords} zoom={15}>
        <Marker
         title={'This is your meetup location.'}
         position={this.meetupCoords} />
      </Map>
    </div>
 );
 }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAquoUs4NfM4dxHs2V2Ja8jxmeYy1Dw9so'
})(MapContainer)
