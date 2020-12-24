import {Types} from '../actions/meetup';
import {INITIAL_STATE} from '../actions/initialState'



export default function meetupReducer(state = INITIAL_STATE, action){
  switch (action.type){
    case Types.CHANGE_MEETUP:{
      return {
        meetup: action.payload
      }
    }
    default:
      return state;
  }
}
