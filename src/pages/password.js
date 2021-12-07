import { Link } from 'react-router-dom';

const Password = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-16">
			<div className="text-5xl text-green-500 mb-10">Coming Soon!</div>
			<div className="text-2xl mb-10">
				Sorry! The SocialCard team did not have time to finish this feature,
				we're working on it!
			</div>
			<Link
				to="/home"
				className="block bg-green-500 hover:bg-green-600 max-w-max mt-7 px-12 py-3 rounded-md text-white md:mt-4">
				Home
			</Link>
		</div>
	);
};

export default Password;
