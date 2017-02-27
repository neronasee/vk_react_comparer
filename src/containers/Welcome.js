import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleLogin } from '../actions/loginActions.js';

class Welcome extends Component {
	render() {
		return (
			<div className="text-center">
				<h1>
					Test app for finding common things in VK
				</h1>
				<Button onClick={this.props.handleLogin} bsStyle="success">Login</Button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loginState: state.login
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({handleLogin}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
