import {combineReducers} from 'redux';
import dowReducer from './dow';
import dateReducer from './date';
import ZIPReducer from './zip';

export default combineReducers({
	dowReducer: dowReducer,
	dateReducer: dateReducer,
	ZIPReducer: ZIPReducer,
});
