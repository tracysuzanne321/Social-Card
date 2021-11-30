import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.svg';
import burger from '../images/Burger.svg';
import close from '../images/Close.svg';
import { useState } from 'react';

const MobileNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div
				className={`bg-black duration-500 transition-opacity fixed top-0 left-0 w-screen h-screen sm:hidden ${
					open ? 'bg-opacity-50' : 'pointer-events-none bg-opacity-0'
				}`}></div>
			<div
				className={`bg-white sm:hidden duration-500 fixed flex flex-col font-medium h-screen right-0 text-2xl text-center top-0 transform transition-transform ${
					open ? '' : 'translate-x-full'
				} w-2/3`}>
				<button
					onClick={() => {
						setOpen(false);
					}}
					className="h-8 ml-5 mt-5 w-8">
					<img src={close} />
				</button>

				<NavLink to="/login" className="py-4">
					Login
				</NavLink>

				<NavLink to="/signup" className="py-4">
					Sign Up
				</NavLink>
			</div>

			<button
				onClick={() => {
					setOpen(true);
				}}
				className="ml-auto w-8 h-8 sm:hidden">
				<img src={burger} />
			</button>
		</>
	);
};

const Navbar = () => {
	return (
		<nav className="flex items-center py-8 body-font">
			<ul className="flex flex-grow items-center px-10 sm:px-20">
				<img src={logo} alt="" />
				<li className="body-font ml-3 mt-1 text-gray-900 text-2xl font-medium">
					<NavLink exact to="/" className="hover:text-green-500">
						SocialCard.
					</NavLink>
				</li>
				<MobileNav />
				<div className="ml-auto hidden sm:flex">
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
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
