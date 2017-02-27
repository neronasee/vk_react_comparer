import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommonFriendsItem from '../components/CommonFriendsItem.js';

import '../styles/CommonFriends.css';

class CommonFriends extends Component {
	render() {
		let renderResult = this.props.friends.map((friend, i) => {
				return <CommonFriendsItem key={i} info={friend}/>
			}
		)

		return (
			<div>
				<h3 className="text-center">Common Friends</h3>
				<div className="common-friends">
					{renderResult}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	friends: state.users.commonFriends
})


export default connect(mapStateToProps)(CommonFriends);
