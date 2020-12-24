import {combineReducers} from 'redux';
import dowReducer from './dow';
import dateReducer from './date';
import coordsReducer from './coords'
import ZIPReducer from './zip';
import meetupReducer from './meetup'
export default combineReducers({
	dowReducer: dowReducer,
	dateReducer: dateReducer,
	ZIPReducer: ZIPReducer,
	coordsReducer: coordsReducer,
	meetupReducer: meetupReducer,
});
