import fBicon from '../images/facebook.png';
import iGicon from '../images/instagram.png';
import Ticon from '../images/twitter.png';
import Ghicon from '../images/github.png';
import Ldicon from '../images/linkedin.png';

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
		const response = await fetch(`${apiUrl}/token`, {
			method: 'GET',
			headers: { Authorization: `Bearer ${localStorage.getItem('MyToken')}` },
		});
		const data = await response.json();
		return data.user;
	} catch (error) {
		console.error(error);
	}
};

export const createUser = async (username, email, password) => {
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

export const updateUser = async (username, email, password) => {
	try {
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
		return {
			username: data.result.username,
			email: data.result.email,
			id: data.result._id,
		};
	} catch (error) {
		throw error;
	}
};
export const updateCard = async (cardDetails) => {
	try {
		await fetch(`${apiUrl}/updateCard`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('MyToken')}`,
			},
			body: JSON.stringify(cardDetails),
		});
		return cardDetails;
	} catch (error) {
		throw error;
	}
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
	localStorage.removeItem('MyToken');
};
