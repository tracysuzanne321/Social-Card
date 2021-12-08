import { SignUpForm } from '../components/signupform';
import Image from '../images/unsplash_VieM9BdZKFo.svg';

const SignUp = () => {
	return (
		<div className="flex flex-col md:flex-row mt-12 w-full">
			<div className="md:w-5/12">
				<div className="bg-gray-100 drop-shadow-2xl font-medium m-4 mx-8 p-8 lg:ml-20 pb-10 rounded-lg shadow-2xl">
					<h1 className="mb-4 text-xl font-medium">Sign Up.</h1>
					<SignUpForm />
				</div>
			</div>
			<div className="flex flex-col items-end justify-center md:mt-0 md:w-7/12 mt-8 pb-32 relative sm:pb-0">
				<div className="absolute left-0 lg:pl-8 mt-8 px-4 sm:pr-0 sm:text-right sm:w-4/6 top-0">
					<h1 className="font-bold leading-snug mb-10 text-4xl">
						You provide the socials and we’ll do the rest!
					</h1>
					<h2>
						Sign Up to create your own SocialCard and create a hub for
						everything you!.
					</h2>
				</div>
				<div>
					<img className="" src={Image} alt="" />
				</div>
			</div>
		</div>
	);
};

export default SignUp;
