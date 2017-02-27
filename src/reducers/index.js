import { combineReducers } from 'redux';
import usersReducer from './usersReducer.js';
import searchReducer from './searchReducer.js';
import loginReducer from './loginReducer.js';

const rootReducer = combineReducers({
	users: usersReducer,
	searchResult: searchReducer,
	login: loginReducer
});

export default rootReducer;
