import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeUser } from '../actions/usersActions.js';
import UserListItem from '../components/UserListItem.js';

import '../styles/UserList.css';

class UserList extends Component {
	handleDelete(userId) {
		this.props.removeUser(userId);
	}

	render() {
		let renderedList = this.props.usersList.map((item, i)=> {
				return <UserListItem key={i} deleteItem={this.handleDelete.bind(this)} userInfo={item}/>
			}
		)
		return (
			<div>
				<h3 className="text-center">Selected Users</h3>
				<div className="result-list">
					{renderedList}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		usersList: state.users.list
	}
}

const mapDispatchToProps = dispatch => {
	return (
		bindActionCreators({removeUser}, dispatch)
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
