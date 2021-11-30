import { SignUpForm } from '../components/signupform';
import Image from '../images/unsplash_VieM9BdZKFo.svg';

const SignUp = () => {
	return (
		<div className="flex flex-row ">
			<div className="bg-gray-100 drop-shadow-2xl shadow-2xl font-medium max-w-md ml-20 mt-16 mx-2 p-8 pb-10 rounded-lg w-full">
				<h1 className="mb-4 text-xl font-medium">Sign Up.</h1>
				<SignUpForm />
			</div>
			<div className="flex flex-col  ml-auto justify-center relative">
				<div className="absolute max-w-sm  text-right">
					<h1 className="font-bold leading-snug mb-10  text-4xl">
						Slow-carb next level shoindcgoitch ethical authentic.
					</h1>
					<h2>
						Poke slow-carb mixtape knausgaard, typewriter street art gentrify
						hammock starladder roathse. Craies vegan tousled etsy austin.
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
