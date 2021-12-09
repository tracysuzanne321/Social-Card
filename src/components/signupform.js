import { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { createUser } from '../utils/index';
import { useHistory } from 'react-router';

export const SignUpForm = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState(null);
	const { setUser } = useContext(AppContext);
	const history = useHistory();

	return (
		<form
			className="flex flex-col"
			onSubmit={async (e) => {
				e.preventDefault();
				try {
					const userData = await createUser(username, email, password, setUser);
					setUser(userData);
					history.push('/useradmin');
				} catch (e) {
					setMessage(e.message);
				}
			}}>
			<input
				id="email"
				autoFocus={true}
				autoComplete="on"
				className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
				placeholder="Email*"
				type="text"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				id="username"
				autoComplete="on"
				className="border mb-2 px-1 py-1.5 rounded outline-none"
				placeholder="Username*"
				type="text"
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				id="password"
				className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
				placeholder="Password*"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			{message && <div className="mb-2 text-red-600 text-sm">{message}</div>}
			<button
				type="submit"
				className="bg-green-500 hover:bg-green-600 p-3 rounded text-white">
				Sign Up
			</button>
		</form>
	);
};
