import DOWSagas from './dow';
import coordsSagas from './coords'
import ZIPSagas from './zip'
import {all} from 'redux-saga/effects';

export default function* rootSaga(){
	yield all([
		...DOWSagas,
		...coordsSagas,
		...ZIPSagas,
	]);
}
