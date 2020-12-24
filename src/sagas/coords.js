import {takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/coords';
import * as api from '../api/coords';
import {Types} from '../actions/coords';


function* getCoords(action){
	try{
		const result = yield call(api.getCoords, action.zip);
		// console.log('successful saga execution')
		yield put({
			type: Types.GET_COORDS_SUCCESS,
			payload: result
		})
	}catch(e){
      console.log('error')
	}
}

function* watchGetCoordsRequest(){
	// console.log('watching getcoords saga call')
	//take the latest request action called and then call the getDow function
	//taking the latest because we want to adjust for when people update the date they put in
	yield takeLatest(actions.Types.GET_COORDS_REQUEST, getCoords);
}

const coordsSagas = [
	fork(watchGetCoordsRequest),
];

export default coordsSagas;
