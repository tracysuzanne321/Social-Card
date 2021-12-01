import mainimg from '../images/danny.png';
import fBicon from '../images/Facebook_black.svg';
import iGicon from '../images/Instagram_black.svg';
import Ticon from '../images/Twitter_black.svg';
import Ghicon from '../images/Github_black.svg';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<div className="flex flex-col items-center lg:flex-row mx-10 sm:mx-24 mt-8 justify-around">
				<div className="flex-col lg:max-w-xs mb-6 text-left md:text-center lg:text-left">
					<p className="font-extrabold leading-snug mb-6 text-5xl text-green-500">
						Everything in one place.
					</p>
					<p>
						Poke slow-carb mixtape knausgaard, typewriter street art gentrify
						hammock starladder roathse. Craies vegan tousled etsy austin.
					</p>
					<Link
						to="/signup"
						className="block bg-green-500 hover:bg-green-600 max-w-max mt-7 px-12 py-3 rounded-md text-white">
						Sign Up
					</Link>
				</div>

				<div className="flex md:flex-row flex-col lg:ml-10 max-w-2xl mb-10 rounded-2xl shadow-2xl">
					<img
						className="max-h-96 md:rounded-l-2xl object-cover object-top rounded-t-2xl"
						src={mainimg}
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
						<div className="flex flex-row mb-4">
							<img className="mr-2" src={fBicon} alt="" />
							<img className="mr-2" src={iGicon} alt="" />
							<img className="mr-2" src={Ticon} alt="" />
							<img className="mr-2" src={Ghicon} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Home;
