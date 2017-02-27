import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addUser } from '../actions/usersActions.js';
import UserFinderResultItem from '../components/UserFinderResultItem.js';

import '../styles/UserFinderResult.css';

class UserFinderResult extends Component {
	handleUserSelect(info) {
		this.props.addUser(info);
	}

	render() {
	let renderedUsersList = this.props.usersList.map(item => {
		return (
			<UserFinderResultItem
				key={item.uid}
				info={item}
				userSelect={this.handleUserSelect.bind(this)}
			/>
		)
	})

	return (
			<div className="finder">
				{renderedUsersList}
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return (
		bindActionCreators({addUser}, dispatch)
	);
}



export default connect(null, mapDispatchToProps)(UserFinderResult);
