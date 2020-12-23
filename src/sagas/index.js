import DOWSagas from './dow';
import coordsSagas from './coords'
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
	yield all([
		...DOWSagas,
		...coordsSagas
	]);
}
