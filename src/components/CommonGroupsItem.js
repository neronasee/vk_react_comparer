import React from 'react';
import { Image } from 'react-bootstrap';

const CommonGroupsItem = ({info}) => {
	const { screen_name, name, photo} = info;
	return (
		<div className="сommon-groups__item text-center">
			<a href={`https://vk.com/${screen_name}`} target="_blank">
				<Image src={photo} />

				<div>
					<p>{name}</p>
				</div>
			</a>
		</div>
	)
}

export default CommonGroupsItem;
