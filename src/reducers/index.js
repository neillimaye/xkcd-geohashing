import {combineReducers} from 'redux';
import dowReducer from './dow';
import dateReducer from './date'

export default combineReducers({
	dowReducer: dowReducer,
	dateReducer: dateReducer,
});
