import React from 'react'
import axios from 'axios'
import { FormGroup, Form, Button } from 'reactstrap';
// import {Input} from 'reactstrap';
import {connect} from 'react-redux';
import {getDOWRequest} from '../actions/dow'
import {bindActionCreators} from 'redux'
axios.defaults.baseURL = 'https://www.quandl.com/api/v3/datasets'

class App extends React.Component {

  handleSubmit = () => {
    console.log('Clicked Button')
    this.props.getDOWRequest();
  }

  render(){
    // <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    // <Input type="date" name="Date" placeholder="YYYY-MM-DD" />
    // </FormGroup>
    console.log('gotta have my props')
    console.log(this.props)
    return (
      <div className="App">
        <div>
        <Form inline>
              <Button onClick = {this.handleSubmit}>Submit</Button>
        </Form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('mapping state to props')
  return {
    items: state//.dow[0].items
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getDOWRequest: getDOWRequest
  }, dispatch)
}
//
// export default connect(({data}) => ({data}),{
//   getDOWRequest
// })(App);



export default connect(mapStateToProps,mapDispatchToProps)(App)
