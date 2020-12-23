import {Types} from '../actions/date';
import {INITIAL_STATE} from '../actions/initialState'

export default function dateReducer(state = INITIAL_STATE, action){
  switch (action.type){
    case Types.CHANGE_DATE:{
      return {
        date: action.payload
      }
    }
    default:
      return state.date;
  }
}
