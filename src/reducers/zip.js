import {Types} from '../actions/zip';
import {INITIAL_STATE} from '../actions/initialState'

export default function ZIPReducer(state = INITIAL_STATE, action){
  switch (action.type){
    case Types.CHANGE_ZIP:{
      return {
        zip: action.payload
      }
    }
    case Types.GET_ZIP_REQUEST:{
      // console.log('successful ZIPReducer call')
      // console.log(action)
      return {
        coords:action.payload
      }
    }
    default:
      return state;
  }
}
