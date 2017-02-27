import React from 'react';

import { Image } from 'react-bootstrap';

const UserFinderResultItem = ({info, userSelect}) => {
	const {photo, first_name, last_name} = info;
	return (
		<div className="finder__item text-center" onClick={() => userSelect(info)}>
			<Image src={photo} circle />
			<h4 className="finder__name">
				{first_name}
				{" "}
				{last_name}
			</h4>
		</div>
	)
}

export default UserFinderResultItem;
