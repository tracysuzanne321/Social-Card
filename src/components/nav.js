import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.svg';

const Navbar = () => {
	return (
		<nav className="flex items-center py-8 body-font">
			<ul className="flex flex-grow items-center ml-20 mr-20">
				<img src={logo} alt="" />
				<li className="body-font ml-3 mt-1 text-gray-900 text-2xl font-medium">
					<NavLink exact to="/" className="hover:text-green-500">
						SocialCard.
					</NavLink>
				</li>
				<>
					<li className="ml-auto mr-12 w-16">
						<NavLink
							to="/login"
							className="bg-gray-100 hover:bg-gray-200 px-7 py-2.5 rounded-lg">
							Login
						</NavLink>
					</li>
					<li className=" mr-7">
						<NavLink
							to="/signup"
							className="bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-lg">
							Sign Up
						</NavLink>
					</li>
				</>
			</ul>
		</nav>
	);
};

export default Navbar;
