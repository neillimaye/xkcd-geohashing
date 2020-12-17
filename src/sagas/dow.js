import {takeLatest, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/dow';
import * as api from '../api/dow';
import {Types} from '../actions/dow';


function* getDOW(){
	try{
		const result = yield call(api.getDOW);
		// console.log('successful saga execution')
		yield put({
			type: Types.GET_DOW_SUCCESS,
			payload: result
		})
	}catch(e){
      console.log('error')
	}
}

function* watchGetDOWRequest(){
	// console.log('watching getdow saga call')
	//take the latest request action called and then call the getDow function
	//taking the latest because we want to adjust for when people update the date they put in
	yield takeLatest(actions.Types.GET_DOW_REQUEST, getDOW);
}

const DOWSagas = [
	fork(watchGetDOWRequest),
];

export default DOWSagas;
