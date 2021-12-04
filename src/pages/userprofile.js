import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../AppContext';
import { UrlContainer } from '../components/UrlContainer';
import UserCard from '../components/usercard';
import mainimg from '../images/danny.png';
import { getCard } from '../utils';

const UserProfile = () => {
	const history = useHistory();
	const username = history.location.pathname.split('/')[2];
	const [cardDetails, setCardDetails] = useState(null);
	useEffect(async () => {
		console.log(username);
		const cardDetails = await getCard(username);
		console.log(cardDetails);
		if (cardDetails !== null) {
			setCardDetails(cardDetails);
		}
	}, []);

	return (
		<div className="flex flex-col items-center">
			<UrlContainer username={username} />
			{cardDetails ? (
				<UserCard {...cardDetails} />
			) : (
				"Looks like this user hasn't set up their card yet!"
			)}
		</div>
	);
};

export default UserProfile;
