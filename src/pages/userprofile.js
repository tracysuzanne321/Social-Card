import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { UrlContainer } from '../components/UrlContainer';
import UserCard from '../components/usercard';
import { getCard } from '../utils';
import { AppContext } from '../AppContext';
import { Link } from 'react-router-dom';

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
	const { user } = useContext(AppContext);
	const UserProfileButton = () => {
		if (user?.username === '') {
			return (
				<Link
					to="/signup"
					className="block bg-green-500 hover:bg-green-600 max-w-max mt-7 px-12 py-3 rounded-md text-white">
					Make Your Own SocialCard.
				</Link>
			);
		} else if (user?.username === username) {
			return (
				<Link
					to="/useradmin"
					className="block bg-green-500 hover:bg-green-600 max-w-max mt-7 px-12 py-3 rounded-md text-white">
					Edit Card
				</Link>
			);
		}
		return null;
	};
	return (
		<>
			{user?.username !== '' && (
				<div className="text-center text-4xl mb-2">
					Welcome to your SocialCard!
				</div>
			)}
			<div className="flex flex-col items-center">
				<UrlContainer username={username} />
				{cardDetails ? (
					<UserCard {...cardDetails} />
				) : (
					"Looks like this user hasn't set up their card yet!"
				)}
			</div>
			<div className="flex justify-center items-center mb-4">
				<UserProfileButton />
			</div>
		</>
	);
};

export default UserProfile;
