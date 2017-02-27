import {
	ADD_USER,
	REMOVE_USER,
	UPDATE_COMMON_FRIENDS,
	UPDATE_COMMON_GROUPS
} from '../constants/usersConsts.js';

import compareFriends from '../utility/compareFriends.js';
import compareGroups from '../utility/compareGroups.js';

const initialState = {
	list: [],
	commonFriends: [],
	commonGroups: []
}

const usersReducer = (state=initialState, action) => {
	switch(action.type){
		case ADD_USER:
			return {...state, list: [...state.list, action.payload]}

		case REMOVE_USER:
			let newList = state.list.filter((user) => {
				return user.uid !== action.payload;
			})
			return {...state, list: newList};

		case UPDATE_COMMON_FRIENDS:
			if(state.list.length !== 1 && state.list.length !== 0) {
				let newFriendsList = compareFriends(state.list);
				return {...state, commonFriends: newFriendsList}
			} else {
				return {...state, commonFriends: []}
			}

		case UPDATE_COMMON_GROUPS:
			if(state.list.length !== 1 && state.list.length !== 0) {
				let newGroupList = compareGroups(state.list);
				return {...state, commonGroups: newGroupList}
			} else {
				return {...state, commonGroups: []}
			}

		default:
			return state;
	}
}

export default usersReducer;
