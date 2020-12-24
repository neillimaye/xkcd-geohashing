import React from 'react'
import {Form, Button, Input, Card, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';
import {connect} from 'react-redux';
import {getDOWRequest} from '../actions/dow'
import {getCoordsRequest} from '../actions/coords'
import {changeDate} from '../actions/date'
import {changeZIP} from '../actions/zip'
import {bindActionCreators} from 'redux'
import moment from 'moment'
import md5 from 'md5'
import GoogleMapReact from 'google-map-react';
import MapContainer from './MapContainer'

class App extends React.Component {

  handleSubmit = () => {
    this.props.getDOWRequest(this.props.date);
  }
  handleDateInput = (e) =>{
    this.props.changeDate(e.target.value);
  }
  doToday = () =>  {
    this.props.changeDate(moment().format('YYYY-MM-DD'));
  }
  handleZIPInput = (e) => {
    console.log(e.target.value)
    this.props.changeZIP(e.target.value);
  }
  ZIPtoCoordinates = (e) =>{
    console.log('ZIPtoCoordinates')
    console.log(this.props.zip)
    this.props.getCoordsRequest(this.props.zip)
  }
  getGeohash = () =>{
    //the math behind finding the geohashing coordinates
    let lat = String(parseInt(this.props.coords.lat));
    let lng = String(parseInt(this.props.coords.lng));
    let stringToHash = String(this.props.date) + '-' + String(this.props.data) ;
    let hashResult = md5(stringToHash)
    console.log(hashResult)  //working
    let pt1 = hashResult.slice(0,hashResult.length/2)
    let pt2 = hashResult.slice(hashResult.length/2)
    console.log(pt1)
    console.log(pt2)
    let todec1 = parseInt(pt1,16)
    let todec2 = parseInt(pt2,16)
    const meetupCoordinates = {
      lat: lat+'.'+todec1,
      lng: lng+'.'+todec2
    }
    console.log(meetupCoordinates)

  }
  componentDidMount(){
    console.log(this.props.coords)
  }
  render(){
    return (
      <div className="App">
        <div>
        <Form inline>
          <Input type="date" onChange={this.handleDateInput} max={moment().format("YYYY-MM-DD")} value = {this.props.date}/>
          <Button color="primary" onClick = {this.handleSubmit}>Submit</Button>
          <p color="secondary" onClick = {this.doToday}> Or just use today's date.</p>
        </Form>
        <p> The most recent DOW opening for that day is {this.props.data} </p>
        <Form inline>
          <Input onChange={this.handleZIPInput} maxLength="9" value={this.props.zip} />
          <Button color="primary" onClick = {this.ZIPtoCoordinates}>Submit</Button>
        </Form>
        <Card>
          <CardBody>
           <CardTitle tag="h5">FESTIVUS</CardTitle>
            <CardSubtitle> </ CardSubtitle>
            <CardText></CardText>
          </CardBody>
        </Card>
        <Form inline>
          <Button color="primary" onClick = {this.getGeohash}> Get the location</Button>
        </Form>

        <MapContainer location={this.props.coords} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    data: state.dowReducer.data,
    date: state.dateReducer.date,
    zip: state.ZIPReducer.zip,
    coords: state.coordsReducer.coords,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getDOWRequest: getDOWRequest,
    changeDate: changeDate,
    changeZIP: changeZIP,
    getCoordsRequest: getCoordsRequest
  }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
