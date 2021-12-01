const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const tokenFetch = async (setUser) => {
	try {
		const response = await fetch(`${apiUrl}user`, {
			method: 'GET',
			headers: { Authorization: `Bearer ${localStorage.getItem('MyToken')}` },
		});
		const data = await response.json();
		setUser(data.user);
	} catch (error) {
		console.log(error);
	}
};

export const createUser = async (username, email, password, setUser) => {
	try {
		const response = await fetch(`${apiUrl}/user`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			}),
		});
		const data = await response.json();
		setUser(data.user);
		localStorage.setItem('MyToken', data.token);
		return {
			username: data.newUser.username,
			email: data.newUser.email,
			id: data.newUser._id,
		};
	} catch (error) {
		throw error;
	}
};

export const deleteUser = async () => {
	try {
		await fetch(`${apiUrl}/delete`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('MyToken')}`,
			},
		});
		return {
			message: 'success',
		};
	} catch (error) {
		throw error;
	}
};

export const login = async (email, password) => {
	try {
		const response = await fetch(`${apiUrl}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		const data = await response.json();
		localStorage.setItem('MyToken', data.token);
		return {
			username: data.user.username,
			email: data.user.email,
			id: data.user._id,
		};
	} catch (error) {
		throw error;
	}
};

export const logOut = async () => {
	const response = await fetch(`${apiUrl}/token`, {
		method: 'GET',
	});
	const data = await response.json();
	localStorage.removeItem('MyToken', data.token);
};
