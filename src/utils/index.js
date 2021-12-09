import fBicon from '../images/Facebook_black.svg';
import iGicon from '../images/Instagram_black.svg';
import Ticon from '../images/Twitter_black.svg';
import Ghicon from '../images/Github_black.svg';
import Ldicon from '../images/LinkedIN_black.svg';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export const getSocialNetworkImage = (socialNetworkName) => {
	switch (socialNetworkName) {
		case 'facebook':
			return fBicon;
		case 'instagram':
			return iGicon;
		case 'twitter':
			return Ticon;
		case 'github':
			return Ghicon;
		case 'linkedin':
			return Ldicon;
		default:
			return '';
	}
};

export const tokenFetch = async () => {
	try {
		const token = localStorage.getItem('MyToken');
		if (token !== null) {
			const response = await fetch(`${apiUrl}/token`, {
				method: 'GET',
				headers: { Authorization: `Bearer ${token}` },
			});
			const data = await response.json();
			if (data.message === 'Check server logs') {
				throw new Error('Error fetching user data, token invalid');
			}
			return data.user;
		}
		return null;
	} catch (error) {
		localStorage.removeItem('MyToken');
		console.error(error);
	}
};

export const createUser = async (username, email, password) => {
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
	if (response.status === 500) {
		throw new Error(data.message);
	}
	localStorage.setItem('MyToken', data.token);
	return {
		username: data.newUser.username,
		email: data.newUser.email,
		id: data.newUser._id,
	};
};

export const updateUser = async (username, email, password) => {
	const response = await fetch(`${apiUrl}/update`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('MyToken')}`,
		},
		body: JSON.stringify({
			username: username,
			email: email,
			password: password,
		}),
	});

	const data = await response.json();
	if (response.status === 500) {
		throw new Error(data.message);
	}
	return {
		username: data.result.username,
		email: data.result.email,
		id: data.result._id,
	};
};
export const updateCard = async (cardDetails) => {
	await fetch(`${apiUrl}/updateCard`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${localStorage.getItem('MyToken')}`,
		},
		body: JSON.stringify(cardDetails),
	});
	return cardDetails;
};

export const getCard = async (username) => {
	try {
		const response = await fetch(`${apiUrl}/getCard`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: username }),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const deleteUser = async () => {
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
};

export const login = async (email, password) => {
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
	if (response.status === 500) {
		throw new Error(data.message);
	}
	if (data.token !== undefined) {
		localStorage.setItem('MyToken', data.token);
	}
	return data.user;
};

export const logOut = async () => {
	localStorage.removeItem('MyToken');
};
