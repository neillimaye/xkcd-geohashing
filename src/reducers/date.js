import {Types} from '../actions/date';
import moment from 'moment';
const INITIAL_STATE = {
    date: moment("12/21/2012").format("YYYY-MM-DD"),
}


export default function dateReducer(state = INITIAL_STATE, action){
  switch (action.type){
    case Types.CHANGE_DATE:{
      return {
        date: action.payload
      }
    }
    default:
      return state;
  }
}