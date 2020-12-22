import React from 'react'
import axios from 'axios'
import {Form, Button, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {getDOWRequest} from '../actions/dow'
import {changeDate} from '../actions/date'
import {changeZIP} from '../actions/zip'
import {bindActionCreators} from 'redux'
import moment from 'moment'
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
    this.props.changeZIP(e.target.value);
  }

  componentDidMount(){

  }
  render(){
    // <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    // <Input type="date" name="Date" placeholder="YYYY-MM-DD" />
    // </FormGroup>
    // console.log('gotta have my props')
    // console.log(this.props)
    return (
      <div className="App">
        <div>
        <Form inline>
          <Input onChange={this.handleDateInput} max={moment().format("YYYY-MM-DD")} placeholder = {this.props.date.date}/>
          <Button color="secondary" onClick = {this.doToday}> Or just use today's date. </Button>
          <Input onChange={this.handleZIPInput} maxLength="9" placeholder= "ZIP code"> </Input>
          <Button color="primary" onClick = {this.handleSubmit}>Submit</Button>
        </Form>
        <p> The most recent DOW opening for that day is {this.props.data.data} </p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log('mapping state to props')
  // console.log(state)
  return {
    data: state.dowReducer,
    date: state.dateReducer,
    zip: state.ZIPReducer,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getDOWRequest: getDOWRequest,
    changeDate: changeDate,
    changeZIP: changeZIP,
  }, dispatch)
}
//
// export default connect(({data}) => ({data}),{
//   getDOWRequest
// })(App);



export default connect(mapStateToProps,mapDispatchToProps)(App)
