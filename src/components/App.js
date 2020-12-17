import React from 'react'
import axios from 'axios'
import {Form, Button, Input} from 'reactstrap';
// import {Input} from 'reactstrap';
import {connect} from 'react-redux';
import {getDOWRequest} from '../actions/dow'
import {changeDate} from '../actions/date'
import {bindActionCreators} from 'redux'
import moment from 'moment'
axios.defaults.baseURL = 'https://www.quandl.com/api/v3/datasets'

class App extends React.Component {

  handleSubmit = () => {
    this.props.getDOWRequest(this.props.date);
  }
  handleDateInput = (e) =>{
    this.props.changeDate(e.target.value)
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
          <Input type = "date" onChange={this.handleDateInput} max={moment().format("YYYY-MM-DD")}/>
          <Button onClick = {this.handleSubmit}>Submit</Button>
        </Form>
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
    date: state.dateReducer

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getDOWRequest: getDOWRequest,
    changeDate: changeDate
  }, dispatch)
}
//
// export default connect(({data}) => ({data}),{
//   getDOWRequest
// })(App);



export default connect(mapStateToProps,mapDispatchToProps)(App)
