import { browserHistory } from 'react-router';

import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL
} from '../constants/loginConstants.js';

const VK = window.VK;

export const handleLogin = () => {
	return dispatch => {
		dispatch({
			type: LOGIN_REQUEST
		})

		VK.Auth.login(r => {
			if(r.session) {
				dispatch({
					type: LOGIN_SUCCESS
				})

				browserHistory.push('/comparing')
			} else {
				dispatch({
					type: LOGIN_FAIL,
					payload: new Error('Auth error')
				})
			}
		})
	}
}
