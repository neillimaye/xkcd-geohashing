import {combineReducers} from 'redux';
import dowReducer from './dow';

export default combineReducers({
	dowData: dowReducer,
});
