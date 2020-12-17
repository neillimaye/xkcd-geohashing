import {Types} from '../actions/dow';
import moment from 'moment'
const INITIAL_STATE = [
  {
    data: ['dummy data'],
  }
]

export default function dowReducer(state =  INITIAL_STATE, action){
  switch (action.type){
    case Types.GET_DOW_SUCCESS:{
      // console.log('successful dowReducer call')
      // console.log(action.payload)
      return {
        data:action.payload
      }
    }
    default:
      return state;
  }
}
