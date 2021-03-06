import React from 'react'
import {Form, Button, Input, Card, CardTitle, CardSubtitle, CardBody, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import {getDOWRequest} from '../actions/dow'
import {getCoordsRequest} from '../actions/coords'
import {getZIPRequest} from '../actions/zip'
import {changeDate} from '../actions/date'
import {changeZIP} from '../actions/zip'
import {bindActionCreators} from 'redux'
import moment from 'moment'
import MapContainer from './MapContainer'

class App extends React.Component {

  getDOWOpening = () => {
    this.props.getDOWRequest(this.props.date);
  }
  handleDateInput = (e) =>{
    this.props.changeDate(e.target.value);
  }
  doToday = () =>  {
    this.props.changeDate(moment().format('YYYY-MM-DD'));
  }
  handleZIPInput = (e) => {
    // console.log(e.target.value)
    this.props.changeZIP(e.target.value);
  }
  ZIPtoCoordinates = () =>{
    // console.log('ZIPtoCoordinates')
    // console.log(this.props.zip)
    this.props.getCoordsRequest(this.props.zip)
  }
  coordstoZIP = (coords) =>{
    // console.log('coordstoZip')
    // console.log(coords)
    this.props.getZIPRequest(coords)
  }
  getBrowserCoordinates = async () =>{
    // console.log('getting browser coordinates')
    await navigator.geolocation.getCurrentPosition(this.showBrowserCoordinates);
  }
  showBrowserCoordinates = async (position) =>{
    let lat = await position.coords.latitude
    let lng = await position.coords.longitude
    let browserCoords = {lat: lat, lng:lng}
    this.coordstoZIP(browserCoords)
  }
  renderMapContainer(){
    return(
      <Row>
          <MapContainer coords={this.props.coords} data = {this.props.data} date = {this.props.date}></MapContainer>
      </Row>
    )
  }
  getMeetupCoordinates = async () =>{
    await this.getDOWOpening();
    await this.ZIPtoCoordinates();
  }
  render(){
    return (
      <div className="App">
        <div>
          <Row>
            <Col sm="4" md="4" lg="4">
            </Col>
            <Col sm="4" md="4" lg="4">
              <Card>
                <CardTitle> XKCD Geohashing</CardTitle>
                <CardSubtitle>xkcd.com/426</CardSubtitle>
                <CardBody>
                  <Form>
                    <Input type="date" onChange={this.handleDateInput} max={moment().format("YYYY-MM-DD")} defaultValue = {''} value = {this.props.date}/>
                    <Button color = "primary" onClick = {this.getDOWOpening}> Get DOW Data </Button>
                    <u color="secondary" onClick = {this.doToday}> Or just use today's date.</u>
                  </Form>
                    <p> The most recent DOW opening for that day is {this.props.data} </p>
                  <Form>
                    <Input onChange={this.handleZIPInput} maxLength="9" defaultValue = {''} value={this.props.zip} defaultValue = "Enter your ZIP" />
                      <Button color = "primary" onClick = {this.ZIPtoCoordinates}> Set Location </Button>
                  </Form>
                    <p> Your meetup coordinates are {this.props.coords.lat} °N, {this.props.coords.lng}°E</p>

                  <Form>
                    <Button color="primary" onClick = {this.getMeetupCoordinates}>Compute Meetup Coordinates</Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4" md="4" lg="4">
            </Col>
          </Row>
            {this.renderMapContainer()}
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
    getCoordsRequest: getCoordsRequest,
    getZIPRequest: getZIPRequest
  }, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
