import { SignUpForm } from '../components/signupform';

const SignUp = () => {
	return (
		<div className="flex ">
			<div className="bg-gray-100 font-medium max-w-md ml-20 mt-16 mx-2 p-8 pb-10 rounded-lg w-full">
				<h1 className="mb-4 text-xl">Sign Up</h1>
				<SignUpForm />
			</div>
		</div>
	);
};

export default SignUp;
