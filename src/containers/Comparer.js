import React, { Component } from 'react';

import UserList from './UserList.js';
import UserFinder from '../containers/UserFinder.js';
import CommonGroups from '../containers/CommonGroups.js';
import CommonFriends from '../containers/CommonFriends.js';

import '../styles/Comparer.css';

class Comparer extends Component {
	render() {
		return (
			<div className="comparer">
				<UserFinder />
				<UserList />
				<CommonFriends />
				<CommonGroups />
			</div>
		)
	}
}

export default Comparer;
