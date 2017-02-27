import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash.debounce';
import { Row, Col } from 'react-bootstrap';

import { searchForUsers } from '../actions/searchActions.js';

import UserFinderResult from './UserFinderResult.js';

class UserFinder extends Component {
	constructor(props){
		super(props);
		this.state = {
			inputValue: ''
		};

		this.debouncedSearch = debounce(this.props.searchForUsers, 200);
	}


	handleInputChange(e) {
		this.setState({inputValue: e.target.value});

		this.debouncedSearch(e.target.value);
	}

	render() {
		const {searchResult} = this.props;

		let renderResult = searchResult.length ?
			<UserFinderResult usersList={searchResult} /> :
			<h3 className="text-center">Enter the correct name in the search field</h3>;



		return (
			<Row>
				<Col md={6} mdOffset={3}>
					<input
						type="text"
						className="form-control"
						placeholder="Search for..."
						value={this.state.inputValue}
						onChange={this.handleInputChange.bind(this)}/>
						{renderResult}
				</Col>
			</Row>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return (
		bindActionCreators({searchForUsers}, dispatch)
	)
}

const mapStateToProps = state => {
	return {
		searchResult: state.searchResult
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFinder);
