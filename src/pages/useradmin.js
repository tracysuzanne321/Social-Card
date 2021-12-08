import UserAdminForm from '../components/useradminform';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const UserAdmin = () => {
	const { user } = useContext(AppContext);
	return (
		<>
			<div className="text-center text-4xl mb-4">Edit Profile.</div>
			{user?.username !== '' && (
				<div className="text-2xl text-green-500 text-center mb-3">
					Edit your SocialCard.
				</div>
			)}
			<UserAdminForm />
		</>
	);
};

export default UserAdmin;
