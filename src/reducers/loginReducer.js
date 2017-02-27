import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL
} from '../constants/loginConstants.js';

const initialState = {
	fetching: false,
	success: false,
	error: ''
}

const loginReducer = (state=initialState, action) => {
	switch(action.type){
		case LOGIN_REQUEST:
			return {...state, fetching: true}
		case LOGIN_SUCCESS:
			return {...state, fetching: false, success: true, error: ''}
		case LOGIN_FAIL:
			return {...state, success: false, error: action.payload}
		default:
			return state
	}
}

export default loginReducer;
