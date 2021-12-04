import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UrlContainer } from '../components/UrlContainer';
import UserCard from '../components/usercard';
import { getCard } from '../utils';

const UserProfile = () => {
	const history = useHistory();
	const username = history.location.pathname.split('/')[2];
	const [cardDetails, setCardDetails] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const cardDetails = await getCard(username);
			if (cardDetails !== null) {
				setCardDetails(cardDetails);
			}
		}
		fetchData();
	}, [username]);

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
