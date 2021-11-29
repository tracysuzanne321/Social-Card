
import './App.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { AppContext } from './AppContext';
import React, { useState } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import UserAdmin from './pages/useradmin';
import UserProfile from './pages/userprofile';

function App() {
	const [user, setUser] = useState({
		username: '',
		email: '',
	});
	return (
		<AppContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
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
					<Route path="/userprofile">
						<UserProfile />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</AppContext.Provider>
	);
}



export default App;
