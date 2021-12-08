import UserAdminForm from '../components/useradminform';

const UserAdmin = () => {
	return (
		<>
			<div className="text-center text-2xl lg:text-4xl mb-4">
				Edit your SocialCard.
			</div>

			<UserAdminForm />
		</>
	);
};

export default UserAdmin;
