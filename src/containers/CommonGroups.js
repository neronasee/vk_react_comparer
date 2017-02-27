import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommonGroupsItem from '../components/CommonGroupsItem.js';

import '../styles/CommonGroups.css';

class CommonGroups extends Component {
	render() {
		let renderResult = this.props.groups.map((group, i) => {
				if(i !== 0) {
					return <CommonGroupsItem key={i} info={group}/>
				} else {
					return null
				}
			}
		)

		return (
			<div>
				<h3 className="text-center">Common Groups</h3>
				<div className="common-groups">
					{renderResult}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	groups: state.users.commonGroups
})


export default connect(mapStateToProps)(CommonGroups);
