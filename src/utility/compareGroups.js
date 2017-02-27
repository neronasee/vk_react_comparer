// import intersectionby from 'lodash.intersectionby';

// const compareGroups = (arrayOfUsers) => {
// 	let groupsPull = [];

// 	for(let user of arrayOfUsers) {
// 		groupsPull.push(user.groups);
// 	}
// 	console.log(arrayOfUsers)
// 	return intersection(...groupsPull);
// }

// export default compareGroups;

import intersectionby from 'lodash.intersectionby';

const compareGroups = (arrayOfUsers) => {
	let groupsPull = [];

	for(let user of arrayOfUsers) {
		let userGroupsPull = [];

		for(let group of user.groups){
			userGroupsPull.push(group);
		}

		groupsPull.push(userGroupsPull)
	}

	return intersectionby(...groupsPull, "gid")
}

export default compareGroups;
