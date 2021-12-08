import mainimg from '../images/danny.png';
import { Link } from 'react-router-dom';
import UserCard from '../components/usercard';
import { AppContext } from '../AppContext';
import { useContext } from 'react';

const Home = () => {
	const { user } = useContext(AppContext);
	return (
		<>
			<div className="flex flex-col  lg:flex-row mx-10 mt-6 lg:mt-20 sm:mx-24 justify-around ">
				<div className="flex-col lg:max-w-xs mb-6 text-left md:text-center lg:text-left">
					<p className="font-extrabold leading-snug mb-6 text-5xl text-green-500 ">
						Everything in one place.
					</p>
					<p className="mb-12">
						One person, one link. SocialCard provides links to everything so
						that you don't have to.
					</p>
					{user?.username === '' ? (
						<Link
							to="/signup"
							className="block bg-green-500 hover:bg-green-600 max-w-max  px-12 py-3 rounded-md text-white md:mt-4">
							Sign Up
						</Link>
					) : (
						<Link
							to="/useradmin"
							className="block bg-green-500 hover:bg-green-600 max-w-max  px-12 py-3 rounded-md text-white  md:mt-4">
							Edit SocialCard
						</Link>
					)}
				</div>

				<UserCard
					animated={true}
					profileImageUrl={mainimg}
					fullName="Danny Baily"
					jobTitle="Software Engineer"
					bio={`Engineer with over 10+ years experience working within the finance domain. Proficient in design, analysis, development and testing of User Interface frameworks. 
					Experience of implemented scalable applications.`}
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
