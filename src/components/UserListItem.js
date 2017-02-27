import React from 'react';
import { Image, Button } from 'react-bootstrap';

const UserListItem = ({userInfo, deleteItem}) => {
	const {first_name, last_name, photo, uid} = userInfo;

	return (
		<div className="result-list__item text-center">
			<a href={`https://vk.com/id${uid}`} target="_blank">
				<Image src={photo} />

				<div>
					<p>{first_name}</p>
					<p>{last_name}</p>
				</div>
			</a>
			<Button bsStyle="danger" onClick={() => deleteItem(uid)}>Delete</Button>
		</div>
	)
}

export default UserListItem;
