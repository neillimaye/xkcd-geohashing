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
	console.log('watching getCoords saga call')
	yield takeLatest(actions.Types.GET_COORDS_REQUEST, getCoords);
}

const CoordsSagas = [
	fork(watchGetCoordsRequest),
];

export default CoordsSagas;
