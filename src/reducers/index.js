import {combineReducers} from 'redux';
import dowReducer from './dow';

export default combineReducers({
	dowReducer: dowReducer
});
