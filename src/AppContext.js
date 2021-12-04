import { createContext } from 'react';

export const AppContext = createContext({
	setUser: () => {},
	user: {
		username: '',
		email: '',
	},
	setCard: () => {},
	card: {
		fullName: '',
		jobTitle: '',
		bio: '',
		socialLinks: [],
		profileImageUrl: '',
	},
});
