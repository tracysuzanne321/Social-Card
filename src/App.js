import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContext } from './AppContext';
import { tokenFetch } from './utils';
import React, { useState, useEffect } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import UserAdmin from './pages/useradmin';
import UserProfile from './pages/userprofile';
import Navbar from './components/nav';
import Footer from './components/footer';
import Account from './pages/account';

function App() {
	const [user, setUser] = useState({
		username: '',
		email: '',
	});
	const [card, setCard] = useState({
		fullName: '',
		jobTitle: '',
		bio: '',
		socialLinks: [],
		profileImageUrl: '',
	});

	useEffect(() => {
		async function fetchData() {
			const data = await tokenFetch();
			if (data !== null) {
				console.log(data);
				const { username, email, password, _id, __v, ...cardDetails } = data;
				setUser({
					username: username,
					email: email,
				});
				setCard(cardDetails);
			}
		}
		fetchData();
	}, []);

	return (
		<AppContext.Provider value={{ user, setUser, card, setCard }}>
			<BrowserRouter>
				<Navbar />
				<div className="flex flex-col flex-1">
					<Switch>
						<Route path="/useradmin">
							<UserAdmin />
						</Route>
						<Route path="/signup">
							<SignUp />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/u">
							<UserProfile />
						</Route>
						<Route path="/account">
							<Account />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
				<Footer />
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
