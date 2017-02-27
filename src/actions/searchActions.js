import { SEARCH_REQUEST } from '../constants/searchConsts.js';

const VK = window.VK;

export const searchForUsers = (name) => {
	let params = {
		q: name,
		fields: "first_name, last_name, photo",
		sort: 0,
		count: 100
	}

	return dispatch => {
		VK.Api.call('users.search', params, r => {
			dispatch({
				type: SEARCH_REQUEST,
				payload: r.response
			})
		})
	}
}
