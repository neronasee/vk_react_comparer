import { SEARCH_REQUEST } from '../constants/searchConsts.js';

const searchReducer = (state=[], action) => {
	switch(action.type){
		case SEARCH_REQUEST:
			return [...action.payload.slice(1)];
		default:
			return state;
	}
}

export default searchReducer;
