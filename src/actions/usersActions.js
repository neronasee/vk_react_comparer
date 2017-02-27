import {
	ADD_USER,
	REMOVE_USER,
	UPDATE_COMMON_FRIENDS,
	UPDATE_COMMON_GROUPS
} from '../constants/usersConsts.js';

const VK = window.VK;

export const addUser = (info) => {
	const friendsParams = {
		user_id: info.uid,
		fields: "first_name, last_name, photo"
	}

	const groupsParams = {
		user_id: info.uid,
		extended: 1,
		fields: "name, photo_100"
	}

	return dispatch => {
		VK.Api.call('friends.get', friendsParams, r => {
			let extendedInfo = {...info, friends: r.response};

			VK.Api.call('groups.get', groupsParams, r => {
				extendedInfo = {...extendedInfo, groups: r.response}

				dispatch({
					type: ADD_USER,
					payload: extendedInfo
				})
				dispatch({
					type: UPDATE_COMMON_FRIENDS
				})
				dispatch({
					type: UPDATE_COMMON_GROUPS
				})
			})
		})
	}
}

export const removeUser = (userId) => {
	return dispatch => {
		dispatch({
			type: REMOVE_USER,
			payload: userId
		})
		dispatch({
			type: UPDATE_COMMON_FRIENDS
		})
		dispatch({
			type: UPDATE_COMMON_GROUPS
		})
	}
}


