import {Types} from '../actions/dow';
import {INITIAL_STATE} from '../actions/initialState'

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
      return state.data;
  }
}
