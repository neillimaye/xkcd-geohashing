import React from 'react'
import {Form, Button, Input} from 'reactstrap';
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
    // console.log(e.target.value)
    this.props.changeZIP(e.target.value);
  }
  ZIPtoCoordinates = (e) =>{
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
  componentDidMount(){

  }
  renderMapContainer(){
    return(
      <MapContainer coords={this.props.coords} data = {this.props.data} date = {this.props.date}></MapContainer>

    )
  }
  render(){
    return (
      <div className="App">
        <div>
        <Form>
          <Input type="date" onChange={this.handleDateInput} max={moment().format("YYYY-MM-DD")} defaultValue = {''} value = {this.props.date}/>
          <Button color="primary" onClick = {this.handleSubmit}>Submit</Button>
          <p color="secondary" onClick = {this.doToday}> Or just use today's date.</p>
        </Form>
          <p> The most recent DOW opening for that day is {this.props.data} </p>
          <Form>
            <Input onChange={this.handleZIPInput} maxLength="9" defaultValue = {''} value={this.props.zip} />
              <Button color="primary" onClick = {this.ZIPtoCoordinates}>Submit</Button>
          </Form>
        <Form>
          <Button color="primary" onClick = {this.getBrowserCoordinates}>Get location from browser</Button>
        </Form>
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
