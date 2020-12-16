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
    this.props.getDOW();
  }

  render(){
    // <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
    // <Input type="date" name="Date" placeholder="YYYY-MM-DD" />
    // </FormGroup>
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
  return{
    items:state.items
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getDOW: getDOWRequest
  }, dispatch)
}

export default connect(({data}) => ({data}),{
  getDOWRequest
})(App);



// export default connect(mapStateToProps,mapDispatchToProps)(App)
