import mainimg from '../images/danny.png';
import { Link } from 'react-router-dom';
import UserCard from '../components/usercard';

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

				<UserCard
					profileImageUrl={mainimg}
					fullName="Danny Baily"
					jobTitle="Software Engineer"
					bio={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus
					purus, maximus vitae dolor et, sodales bibendum mauris. Donec tempor,
					lorem vitae vestibulum auctor, lectus velit ultricies metus, vel
					ultrices massa sapien eget ipsum.`}
					socialLinks={[
						{
							socialNetwork: 'facebook',
							url: '#',
						},
						{
							socialNetwork: 'instagram',
							url: '#',
						},
						{
							socialNetwork: 'twitter',
							url: '#',
						},
						{
							socialNetwork: 'github',
							url: '#',
						},
						{
							socialNetwork: 'linkedin',
							url: '#',
						},
					]}
				/>
			</div>
		</>
	);
};
export default Home;
