import { useState, useContext } from 'react';
import { updateUser, deleteUser, logOut } from '../utils';
import { AppContext } from '../AppContext';
import { useHistory } from 'react-router';

const AccountSettings = () => {
	const { setUser, setCard } = useContext(AppContext);

	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [valid, setValid] = useState(true);
	const [message, setMessage] = useState(null);

	const history = useHistory();
	return (
		<>
			<form
				className="flex flex-col bg-gray-100 p-20 shadow-2xl rounded-lg"
				onSubmit={async (e) => {
					e.preventDefault();
					try {
						const userData = await updateUser(username, email, password);
						setUser(userData);
						setMessage('Updated user details.');
						setUsername('');
						setPassword('');
						setEmail('');
					} catch (e) {
						setValid(false);
					}
				}}>
				<input
					id="email"
					autoFocus={true}
					autoComplete="on"
					className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
					placeholder="Update Email"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					id="username"
					autoFocus={true}
					autoComplete="on"
					className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
					placeholder="Update Username"
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					id="password"
					className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
					placeholder="Update Password"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{!valid && (
					<div className="mb-2 text-red-600 text-sm">
						Invalid username, email or password!
					</div>
				)}
				{message && <div className="mb-2  text-sm">{message}</div>}
				<button
					type="submit"
					className="bg-green-500 hover:bg-green-600 p-1.5 rounded text-white mt-4 w-full py-3">
					Update Details
				</button>
			</form>
			<div className="flex m-auto max-w-sm">
				<button
					className="bg-green-500 hover:bg-green-600 p-1.5 rounded text-white  w-full mt-20 py-3 "
					onClick={async () => {
						const result = await deleteUser();
						if (result.message === 'success') {
							await logOut();
							setUser({
								username: '',
								email: '',
							});
							setCard({
								fullName: '',
								jobTitle: '',
								bio: '',
								socialLinks: [],
								profileImageUrl: '',
							});
							history.push('/');
						}
					}}>
					Delete User
				</button>
			</div>
		</>
	);
};

export default AccountSettings;
