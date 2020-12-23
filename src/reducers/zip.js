import {Types} from '../actions/zip';
import {INITIAL_STATE} from '../actions/initialState'

export default function ZIPReducer(state = INITIAL_STATE, action){
  switch (action.type){
    case Types.CHANGE_ZIP:{
      return {
        zip: action.payload
      }
    }
    default:
      return state.zip;
  }
}
