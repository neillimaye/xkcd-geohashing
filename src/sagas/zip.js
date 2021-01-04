import {takeLatest, takeEvery, call, put, fork} from 'redux-saga/effects';
import * as actions from '../actions/zip';
import * as api from '../api/zip';
import {Types} from '../actions/zip';


function* getZIP(action){
	try{
		// console.log('getzip saga')
		// console.log(action)
		const result = yield call(api.getZIP, action.coords);
		// console.log('successful saga execution')
		// console.log(result)
		yield put({
			type: Types.CHANGE_ZIP,
			payload: result
		})
	}catch(e){
      console.log('error')
	}
}

function* watchGetZIPRequest(){
	// console.log('watching getzip saga call')
	//take the latest request action called and then call the getzip function
	//taking the latest because we want to adjust for when people update the date they put in
	yield takeEvery(actions.Types.GET_ZIP_REQUEST, getZIP);
}

const ZIPSagas = [
	fork(watchGetZIPRequest),
];

export default ZIPSagas;
