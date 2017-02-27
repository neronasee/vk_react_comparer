import React from 'react';
import { Image } from 'react-bootstrap';

const CommonFriendsItem = ({info}) => {
	const {photo, first_name, last_name, uid} = info;
	return (
		<div className="сommon-friends__item text-center">
			<a href={`https://vk.com/id${uid}`} target="_blank">
				<Image src={photo} />

				<div>
					<p>{first_name}</p>
					<p>{last_name}</p>
				</div>
			</a>
		</div>
	)
}

export default CommonFriendsItem;
