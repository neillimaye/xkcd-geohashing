import {takeEvery, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/dow';
import * as api from '../api/dow';
import {Types} from '../actions/dow';


function* getDOW(){
	try{
		const result = yield call(api.getDOW);
		console.log('successful saga execution')
		yield put({
			type: Types.GET_DOW_SUCCESS,
			payload: result
		})
	}catch(e){
      console.log('error')
	}
}

function* watchGetDOWRequest(){
	console.log('watching getdow saga call')
	yield takeEvery(actions.Types.GET_DOW_REQUEST, getDOW);
}

const DOWSagas = [
	fork(watchGetDOWRequest),
];

export default DOWSagas;
