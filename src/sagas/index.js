import DOWSagas from './dow';
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
	yield all([
		...DOWSagas
	]);
}
