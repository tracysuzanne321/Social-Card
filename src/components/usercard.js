import fBicon from '../images/facebook.png';
import iGicon from '../images/instagram.png';
import Ticon from '../images/twitter.png';
import Ghicon from '../images/github.png';
import Ldicon from '../images/linkedin.png';
import copy from '../images/Copy.svg';

import User from '../images/User.jpg';
import { icons } from 'react-icons';
// npm install react-icons --save //
const UserCard = () => {
	return (
		<>
			<div className="flex items-center justify-center mb-8 mt-4 text-3xl text-center">
				username/<div className="text-green-500">userURL</div>
				<div>
					<a href="" title="Copy your card to clipboard">
						<img
							className="ml-2 h-7 w-7 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..."
							src={copy}
						/>
					</a>
				</div>
			</div>
			<div className="flex flex-col items-center lg:flex-row mx-10 sm:mx-24 mt-14 justify-around">
				<div className="border border-gray-100 flex flex-col lg:ml-10 max-w-2xl mb mb-10 md:flex-row rounded-2xl shadow-2xl">
					<img
						className="max-h-96 md:rounded-l-2xl mt-16 object-none object-top rounded-t-2xl w-full"
						src={User}
						alt=""
					/>
					<div className="flex-col flex-wrap px-4">
						<p className="mb-1 text-4xl mt-6">Danny Baily</p>
						<p className="mb-1 text-base">Software Engineer</p>
						<p className="mb-4 text-body">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							purus purus, maximus vitae dolor et, sodales bibendum mauris.
							Donec tempor, lorem vitae vestibulum auctor, lectus velit
							ultricies metus, vel ultrices massa sapien eget ipsum.
						</p>
						<div className="flex flex-row mb-10 h-12 w-12">
							<img
								className="mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..."
								src={fBicon}
								alt=""
							/>
							<img
								className="mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..."
								src={Ticon}
								alt=""
							/>
							<img
								className="mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..."
								src={iGicon}
								alt=""
							/>
							<img
								className="mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..."
								src={Ghicon}
								alt=""
							/>
							<img
								className="mr-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..."
								src={Ldicon}
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserCard;
