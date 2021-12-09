import { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { login } from '../utils/index';
import { useHistory } from 'react-router';

export const LogInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [validationError, setValidationError] = useState(null);
	const { setUser, setCard } = useContext(AppContext);
	const history = useHistory();

	return (
		<form
			className="flex flex-col"
			onSubmit={async (e) => {
				e.preventDefault();
				try {
					const userData = await login(email, password);
					const {
						username: signedInUsername,
						email: signedInEmail,
						password: signedInPassword,
						_id,
						__v,
						...cardDetails
					} = userData;
					console.log(cardDetails);
					setUser({
						username: signedInUsername,
						email: signedInEmail,
					});
					setCard(cardDetails);
					history.push(`/u/${userData.username}`);
				} catch (e) {
					setValidationError(e.message);
				}
			}}>
			<input
				id="email"
				autoFocus={true}
				autoComplete="off"
				className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
				placeholder="Email*"
				type="text"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				id="password"
				className="border border-solid mb-2 px-1 py-1.5 rounded outline-none"
				placeholder="Password*"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			{validationError && (
				<div className="mb-2 text-red-600 text-sm">{validationError}</div>
			)}
			<button
				type="submit"
				className="bg-green-500 hover:bg-green-600 p-3 rounded text-white">
				Login
			</button>
			<div className="font-light mb-1 mt-3 text-center text-gray-400">
				Not a member?
				<a className="underline ml-2" href="./signup">
					Sign up now
				</a>
			</div>
			<div className="font-light text-center text-gray-400">
				<a className="underline" href="./password">
					Forgotten Password
				</a>
			</div>
		</form>
	);
};
