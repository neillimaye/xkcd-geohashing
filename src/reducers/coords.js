import {INITIAL_STATE} from '../actions/initialState'
import {Types} from '../actions/coords';

export default function coordsReducer(state =  INITIAL_STATE, action){
  switch (action.type){
    case Types.GET_COORDS_SUCCESS:{
      console.log('successful coordsReducer call')
      console.log(action.payload)
      return {
        coords:action.payload
      }
    }
    default:
      return state.coords;
  }
}
