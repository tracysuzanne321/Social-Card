import { NavLink } from 'react-router-dom';
import logo from '../images/Logo.svg';
import burger from '../images/Burger.svg';
import close from '../images/Close.svg';
import { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { useHistory } from 'react-router';
import { logOut } from '../utils';

const MobileNav = () => {
	const [open, setOpen] = useState(false);
	const { user } = useContext(AppContext);
	const { setUser, setCard } = useContext(AppContext);
	const history = useHistory();

	return (
		<>
			<div
				onClick={() => {
					setOpen(false);
				}}
				className={`bg-black z-50 duration-500 transition-opacity fixed top-0 left-0 w-screen h-screen sm:hidden ${
					open ? 'bg-opacity-50' : 'pointer-events-none bg-opacity-0'
				}`}></div>
			{user?.username === '' ? (
				<div
					className={`bg-white z-50 sm:hidden duration-500 fixed flex flex-col font-medium h-screen right-0 text-2xl text-center top-0 transform transition-transform ${
						open ? '' : 'translate-x-full'
					} w-2/3`}>
					<button
						onClick={() => {
							setOpen(false);
						}}
						className="h-8 ml-5 mt-5 w-8">
						<img alt="Close" src={close} />
					</button>

					<NavLink
						onClick={() => {
							setOpen(false);
						}}
						to="/login"
						className="py-4">
						Login
					</NavLink>

					<NavLink
						onClick={() => {
							setOpen(false);
						}}
						to="/signup"
						className="py-4">
						Sign Up
					</NavLink>
				</div>
			) : (
				<div
					className={`bg-white z-50 sm:hidden duration-500 fixed flex flex-col font-medium h-screen right-0 text-2xl text-center top-0 transform transition-transform ${
						open ? '' : 'translate-x-full'
					} w-2/3`}>
					<button
						onClick={() => {
							setOpen(false);
						}}
						className="h-8 ml-5 mt-5 w-8">
						<img alt="Close" src={close} />
					</button>

					<NavLink
						onClick={() => {
							setOpen(false);
						}}
						to="/account"
						className="py-4">
						Account
					</NavLink>

					<a
						href="#logout"
						onClick={async () => {
							setOpen(false);
							await logOut();
							setUser({
								username: '',
								email: '',
							});
							setCard({
								fullName: '',
								jobTitle: '',
								bio: '',
								socialLinks: [],
								profileImageUrl: '',
							});
							history.push('/');
						}}
						className="py-4">
						Logout
					</a>
				</div>
			)}

			<button
				onClick={() => {
					setOpen(true);
				}}
				className="ml-auto w-8 h-8 sm:hidden">
				<img alt="Menu" src={burger} />
			</button>
		</>
	);
};

const Navbar = () => {
	const { setUser, user, setCard } = useContext(AppContext);
	const history = useHistory();
	return (
		<nav className="flex items-center py-8 body-font">
			<ul className="flex flex-grow items-center px-10 sm:px-20">
				<img alt="Logo" src={logo} />
				<li className="body-font ml-3 mt-1 text-gray-900 text-2xl font-medium">
					<NavLink exact to="/" className="hover:text-green-500">
						SocialCard.
					</NavLink>
				</li>
				{user?.username !== '' && (
					<li className="ml-4 mt-1  ">
						<NavLink
							to={`/u/${user.username}`}
							className=" hover:bg-green-500 hover:text-white  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ... lg:px-7 py-2 rounded-lg border-green-500 border-2">
							My Card
						</NavLink>
					</li>
				)}
				<MobileNav />
				{user?.username === '' ? (
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
				) : (
					<div className="ml-auto hidden sm:flex">
						<li className="ml-auto mr-12 w-16">
							<NavLink
								to="/account"
								className="bg-gray-100 hover:bg-gray-200 px-7 py-2.5 rounded-lg">
								Account
							</NavLink>
						</li>
						<li className=" mr-7 ml-4">
							<a
								href="#logout"
								onClick={async () => {
									await logOut();
									setUser({
										username: '',
										email: '',
									});
									setCard({
										fullName: '',
										jobTitle: '',
										bio: '',
										socialLinks: [],
										profileImageUrl: '',
									});
									history.push('/');
								}}
								className="bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-lg">
								Log Out
							</a>
						</li>
					</div>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
