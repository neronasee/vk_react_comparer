import intersectionby from 'lodash.intersectionby';

const compareFriends = (arrayOfUsers) => {
	let friendsPull = [];

	for(let user of arrayOfUsers) {
		let userFriendsPull = [];

		for(let friend of user.friends){
			userFriendsPull.push(friend);
		}

		friendsPull.push(userFriendsPull)
	}
	return intersectionby(...friendsPull, "user_id");
}

export default compareFriends;
